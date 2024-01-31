const conn = require('./database');

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        const sql = `select *
        from User`;
        let query = conn.query(sql, (err, result, field) =>{
            if (err) return reject(err);
            resolve(result);
        });
    })
}

const fetchUserByID = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM User WHERE USER_ID = ?;`;
        let query = conn.query(sql,[id], (err, result, field) =>{
            if (err) return reject(err);
            resolve(result);
        });
    })
}

const addUser = (user) => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO user(USER_Nom, USER_Prenom, USER_Mail, USER_Telephone, USER_Password, USER_Galop, USER_CoursRestants) 
        VALUES (?, ?, ?, ?, SHA2(?, 256), ?,?);`;
    
        let query = conn.query(sql, [user.nomUser, user.prenomUser, user.mailUser, user.phoneUser, user.phoneUser, user.galopUser, user.coursUser], (err, result) => {
          if (err) {
            console.error('Error inserting user:', err);
            return reject(err);
          }
    
          console.log('Insert Result:', result);
          resolve(result);
        });
      });
}

const deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM user WHERE USER_ID = ?;`;
        let query = conn.query(sql,[id], (err, result, field) =>{
            if (err) return reject(err);
            resolve(result);
        });
    })
  }

  const updateUser = (user) => {
    return new Promise((resolve, reject) => {
      const sql = `UPDATE user SET USER_Nom = ?, USER_Prenom = ?, USER_Mail = ?, USER_Telephone = ?, USER_Password = SHA2(?, 256), USER_Galop = ?, USER_CoursRestants = ? WHERE USER_ID = ?;`;
       console.log('update with : ' , user.nomUser, user.prenomUser, user.mailUser, user.phoneUser, user.mdpUser, user.galopUser, user.coursUser, user.id );
      let query = conn.query(sql, [user.nomUser, user.prenomUser, user.mailUser, user.phoneUser, user.mdpUser, user.galopUser, user.coursUser, user.id], (err, result, field) => {
          if (err) {
              console.error('Error updating cheval:', err);
              return reject(err);
          }
          resolve(result);
      });
    });
};

module.exports = {
    fetchUser,
    fetchUserByID,
    addUser,
    deleteUser,
    updateUser
}