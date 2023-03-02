const mysql = require('mysql');

class SysMessagerie {
  constructor() {
    this.connexion = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'patternobserverusers'
    });
    
    this.users = [];
    
    this.connexion.connect((err) => {
      if (err) throw err;
      console.log('Connecté à la base de données MySQL');
    });
  }

  ajouterUser(user) {
    this.users.push(user);
    this.connexion.query(`INSERT INTO users (name, firstname) VALUES ('${user.name}', '${user.firstname}')`, (err, result) => {
      if (err) throw err;
      console.log(`Utilisateur ${user.nom} ajouté à la base de données`);
    });
  }

  supprimerUser(user) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      this.connexion.query(`DELETE FROM utilisateurs WHERE id=${user.id}`, (err, result) => {
        if (err) throw err;
        console.log(`Utilisateur ${user.nom} supprimé de la base de données`);
      });
    }
  }

  notifierusers(message) {
    for (const user of this.users) {
      user.recevoirMessage(message);
    }
  }

  envoyerMessage(message) {
    console.log(`Le message envoyé est: ${message}`);
    this.notifierusers(message);
  }
}

// User
class User {
  constructor(id, name, firstname) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
  }

  recevoirMessage(message) {
    console.log(`User ${this.id} a reçu le message : ${message}`);
  }
}

// Utilisation du pattern Observer pour un système de messagerie instantanée
const sysMessagerie = new SysMessagerie();

const user1 = new User(1, 'EMANUELLA', 'Elsira');
const user2 = new User(2, 'KOKOU', 'Innocent');
const user3 = new User(3, 'KOSSIWAVI', 'Abigail');

sysMessagerie.ajouterUser(user1);
sysMessagerie.ajouterUser(user2);
sysMessagerie.ajouterUser(user3);

sysMessagerie.envoyerMessage("Bienvenue dans mon système de messagerie instantannée !");