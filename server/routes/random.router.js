const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// returns a random chuck norris joke
router.get('/', (req, res) => {
  const sqlText = `SELECT * FROM favorites ORDER BY id ASC;`;
  pool.query(sqlText)
    .then((result) => {
      console.log('Got images back from the db', result);
      res.send(result.rows);
      //res.sendStatus(200);
    })
    .catch((error) => {
     console.log(`GET error ${sqlText}`, error);
      res.sendStatus(500);
    })
})

module.exports = router;
