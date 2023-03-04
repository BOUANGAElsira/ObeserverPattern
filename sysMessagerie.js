const mysql = require('mysql');

class SysMessagerie {
  connexion;
  users = [];

  constructor() {
    this.connexion = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'patternobserver'
    });

    this.connexion.connect((err) => {
      if (err) throw err;
      console.log('Connecté à la base de données MySQL');
    });
  }

  ajouterUser(user) {
    this.users.push(user);
    this.connexion.query(`INSERT INTO users (name, firstname) VALUES ('${user.name}', '${user.firstname}')`, (err, result) => {
      if (err) throw err;
      console.log(`Utilisateur ${user.name} ajouté à la base de données`);
    });
  }

  supprimerUser(user) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      this.connexion.query(`DELETE FROM utilisateurs WHERE id=${user.id}`, (err, result) => {
        if (err) throw err;
        console.log(`Utilisateur ${user.name} supprimé de la base de données`);
      });
    }
  }

  notifierUsers(message) {
    for (const user of this.users) {
      user.recevoirMessage(message);
    }
  }

  envoyerMessage(message) {
    console.log(`Le message envoyé est: ${message}`);
    this.notifierUsers(message);
  }
}

module.exports = SysMessagerie;
