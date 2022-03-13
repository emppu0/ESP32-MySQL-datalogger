reguire('password.js');
//reguire('password_example.js');
const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'user1',
  password: sqlpassword,
  //password: sqlpassword1,
  database: 'sensor'
});
module.exports = connection;