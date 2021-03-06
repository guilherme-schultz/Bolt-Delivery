const knex = require('knex')({
    client: 'pg',
    connection: {
      host : process.env.DATABASE_HOST,
      user : process.env.DATABASE_USERNAME,
      password : process.env.DATABASE_PASSWORD,
      database : process.env.DATABASE
    }
  });

  module.exports = knex