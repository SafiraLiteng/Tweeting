var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.get('/', function (req, res, next) {

  db.query(`SELECT * FROM tweets ORDER BY length(message)`)
.then(tweets => {

    tweets =

    res.render('dashboard', { tweets })
})
.catch(err => { res.send(err); });
  });


router.post('/', function (req, res, next) {

    const params = req.body;

    db.query(`
    INSERT INTO tweets (message, username)
    VALUES ($<message>, $<username>)
    `, params)
    .then(() => {
      res.redirect('/dashboard');
    });

});

module.exports = router;
