const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

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

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

// Serve your React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
