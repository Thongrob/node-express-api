const mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "customer_db"
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Connected to the MySql');
});

module.exports = conn;