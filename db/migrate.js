const db = require('./index');

db.query(`
  CREATE TABLE tweets (
    id SERIAL,
    message VARCHAR(255),
    username VARCHAR(50)
  )
`).then(() => {
    console.log('Created table tweets!');
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit();
  });
