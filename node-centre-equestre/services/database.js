require('dotenv').config();
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err){
        console.log(err.stack)
        return
    }
    // console.log(connection.state)
    console.log(connection.threadId)
})

module.exports = connection