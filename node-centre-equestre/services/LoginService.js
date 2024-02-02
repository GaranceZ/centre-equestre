const conn = require("./database");

const getUserByEmail = (user) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM user WHERE USER_MAIL = ?;`;
        
        conn.query(sql, [user], (error, results) => {
            if (error) {
                console.error('Error fetching user by email:', error);
                reject(error);
            } else {   
                resolve(results[0] ? results[0] : null);
            }
        });
    });
};

module.exports = {
    getUserByEmail,
};