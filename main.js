const SysMessagerie = require('./sysMessagerie');
const User = require('./user');

const sysMessagerie = new SysMessagerie();

const user1 = new User(1, 'EMANUELLA', 'Elsira');
const user2 = new User(2, 'KOKOU', 'Innocent');
const user3 = new User(3, 'KOSSIWAVI', 'Abigail');

sysMessagerie.ajouterUser(user1);
sysMessagerie.ajouterUser(user2);
sysMessagerie.ajouterUser(user3);

sysMessagerie.envoyerMessage("Bienvenue dans mon système de messagerie instantanée !");
//sysMessagerie.notifierUsers("Une modification a été observée !!")

//sysMessagerie.supprimerUser(user3);

//sysMessagerie.notifierUsers("L'utilisateur 3 a été supprimé !")
