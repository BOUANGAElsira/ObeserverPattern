class User {
    id;
    name;
    firstname;
  
    constructor(id, name, firstname) {
      this.id = id;
      this.name = name;
      this.firstname = firstname;
    }
  
    recevoirMessage(message) {
      console.log(`User ${this.id} a reçu le message : ${message}`);
    }
  }
  
module.exports = User;
  