//reguire('password.js');
//reguire('password_example.js');
const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'user1',
  password: 'A65DG2188GFH43',
  //password: sqlpassword1,
  database: 'sensor'
});
module.exports = connection;