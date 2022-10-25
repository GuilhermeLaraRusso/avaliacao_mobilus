const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456789',
  database: 'mobilus',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
