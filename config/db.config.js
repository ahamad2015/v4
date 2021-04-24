'user strict';

const mysql = require('mysql');

const dbConn = mysql.createConnection({
  host     : 'arjo.c91ee5q4fadg.eu-central-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'Nordics2021',
  database : 'arjo'
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;