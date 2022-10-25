const conn = require('../connect');

const insertData = (data) => conn.execute(
  `INSERT INTO data
    (latitude, longitude, highest_confirmed, highest_deaths, created_at) VALUES (?, ?, ?, ?, ?)`,
    [data.latitude, data.longitude, data.highestConfirmed, data.highestDeaths, data.date],
);

module.exports = {
  insertData,
};