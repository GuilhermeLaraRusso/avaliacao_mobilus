const express = require('express');
const axios = require('axios');
const app = require('./app');
const port = 3001;
const router = express.Router();
const covidRoutes = require('./routes/covidRoutes');
const connection = require('./connect');

const today = new Date();
const date = today.toISOString().slice(0, 10);

app.get('/api', async (req, res) => {
  const response = await axios.get(`https://api.covid19api.com/country/brazil?from=2022-04-01T00:00:00Z&to=${date}`);
  res.send(response.data);
  return response.data;
});

app.post('/data', covidRoutes);

app.listen(port, async () => {
  console.log(`Example app listening at http://localhost:${port}`);

  const [ result ] = await connection.execute('SELECT 1');
  if (result) {
    console.log('Connected to the MySQL server.');
  }
});

module.exports = router;