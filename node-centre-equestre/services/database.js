const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'centre_equestre'
})

connection.connect((err) => {
    if (err){
        console.log(err.stack)
        return
    }
    // console.log(connection.state)
    console.log(connection.threadId)
})

module.exports = connection