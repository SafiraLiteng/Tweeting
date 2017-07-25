const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  database: 'tweetsdb'
});

module.exports = db;
