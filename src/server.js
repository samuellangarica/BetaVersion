import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import User from './models/User.js';
import path from 'path';
import fetch from 'node-fetch';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Mongo
mongoose.connect('mongodb+srv://0249352:Gaoyfos0a.@cluster0.ytc9noj.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.static(path.join(__dirname, 'build')));

// Google login
app.post('/google-login', async (req, res) => {
  try {
    const userData = req.body;
    const existingUser = await User.findOne({ googleId: userData.sub });

    if (!existingUser) {
      const newUser = new User({
        googleId: userData.sub,
        email: userData.email,
        name: userData.name,
        imageUrl: userData.picture,
      });

      await newUser.save();
    }

    res.status(200).json({ message: 'User data saved successfully' });
  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/api/your-city', async (req, res) => {
  const apiKey = '4582102f-35ae-4624-a96d-f28464c3b427';
  const url = `http://api.airvisual.com/v2/nearest_city?key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'fail') {
      res.status(500).json({ error: 'Error fetching data' });
      return;
    }

    res.status(200).json(data.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});