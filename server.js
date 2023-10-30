const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/your-city', async (req, res) => {
  const apiKey = '4582102f-35ae-4624-a96d-f28464c3b427';
  const url = `http://api.airvisual.com/v2/nearest_city?key=${apiKey}`; // GET data for nearest city using IP afdress

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Correct!---------------");
    if (data.status == 'fail'){
      //handle too many requests 
    }
    console.log(data);
    res.render('your-city', { weatherData: data });
  } catch (error) {
    res.send('Error retrieveing data!');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
