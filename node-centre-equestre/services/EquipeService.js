const conn = require('./database');

const fetchEquipe = () => {
    return new Promise((resolve, reject) => {
        const sql = `select *
        from Equipe`;
        let query = conn.query(sql, (err, result, field) =>{
            if (err) return reject(err);
            resolve(result);
        });
    })
}

const fetchEquipeByID = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Equipe WHERE EQ_ID = ?;`;
        let query = conn.query(sql,[id], (err, result, field) =>{
            if (err) return reject(err);
            resolve(result);
        });
    })
}

const addEquipe = (equipe) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO equipe(EQ_Nom, EQ_Prenom, EQ_Photo, EQ_Poste_Principal, EQ_Poste_Secondaire) VALUES (?, ?, ?, ?, ?);`;
  
      let query = conn.query(sql, [equipe.nom_pedag, equipe.prenom_pedag, equipe.photo, equipe.poste1, equipe.poste2], (err, result) => {
        if (err) {
          console.error('Error inserting equipe:', err);
          return reject(err);
        }
  
        console.log('Insert Result:', result);
        resolve(result);
      });
    });
  };

  const deleteEquipe = (id) => {
    return new Promise((resolve, reject) => {
        const sql = `DELETE FROM equipe WHERE EQ_ID = ?;`;
        let query = conn.query(sql,[id], (err, result, field) =>{
            if (err) return reject(err);
            resolve(result);
        });
    })
  }

  const updateEquipe = (equipe) => {
    return new Promise((resolve, reject) => {
        const sql = `UPDATE equipe 
                     SET 
                         EQ_Nom = ?, 
                         EQ_Prenom = ?, 
                         EQ_Photo = ?, 
                         EQ_Poste_Principal = ?, 
                         EQ_Poste_Secondaire = ? 
                     WHERE EQ_ID = ?;`;

        let query = conn.query(sql, [equipe.nom_pedag, equipe.prenom_pedag, equipe.photo, equipe.poste1, equipe.poste2, equipe.id], (err, result, field) => {
            if (err) {
                console.error('Error updating equipe:', err);
                return reject(err);
            }
            resolve(result);
        });
    });
};

module.exports = {
    fetchEquipe,
    fetchEquipeByID,
    addEquipe,
    deleteEquipe,
    updateEquipe
}