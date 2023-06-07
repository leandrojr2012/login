const Knex = require('knex')

const db = new Knex({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      port : 3306,
      user : 'root',
      password : 'leandro123$',
      database : 'agenda'
    }
  });

module.exports = db
