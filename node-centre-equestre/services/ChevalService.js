const conn = require('./database');

const fetchCheval = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM cheval WHERE CH_Type = ?`;
        let query = conn.query(sql, ['Cheval'], (err, result, fields) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const fetchPoney = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM cheval WHERE CH_Type = ?`;
        let query = conn.query(sql, ['Poney'], (err, result, fields) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

const fetchAllChevaux = () => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM cheval ORDER BY CH_Type`;
        let query = conn.query(sql, (err, result, fields) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
}

const fetchChevalByID = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM cheval WHERE CH_ID = ?;`;
        let query = conn.query(sql,[id], (err, result, field) =>{
            if (err) return reject(err);
            resolve(result);
        });
    })
}

const addCheval = (cheval) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO cheval(CH_Nom, CH_Type, CH_Photo) VALUES (?, ?, ?);`;
  
      let query = conn.query(sql, [cheval.nomCheval, cheval.typeCheval, cheval.photoCheval], (err, result) => {
        if (err) {
          console.error('Error inserting cheval:', err);
          return reject(err);
        }
  
        console.log('Insert Result:', result);
        resolve(result);
      });
    });
  };

  const deleteCheval = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM cheval WHERE CH_ID = ?;`;
        let query = conn.query(sql,[id], (err, result, field) =>{
            if (err) return reject(err);
            resolve(result);
        });
    })
  }

  const updateCheval = (cheval) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE cheval SET CH_Nom = ? WHERE CH_ID = ?;`;
        let query = conn.query(sql, [cheval.modifiedName, cheval.id], (err, result, field) => {
            if (err) {
                console.error('Error updating cheval:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    fetchCheval,
    fetchPoney,
    fetchAllChevaux,
    fetchChevalByID,
    addCheval,
    deleteCheval,
    updateCheval
}