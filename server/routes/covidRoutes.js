const express = require('express');
const covidDB = require('../db/covidDB');

const router = express.Router();

router.post('/data', async (req, res) => {
  const data = req.body;
  try {
    const [result] = await covidDB.insertData(data);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
