const axios = require('axios');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('test');
  axios.get(`https://api.themoviedb.org/3/person/51576/movie_credits?api_key=${process.env.TMDB_API_KEY}`)
    .then( (response) => {
      console.log('respnse', response);
      res.send(response)        
    })
    .catch( (error) => {
      console.log('error with GET request to TMDB', error)
    })
})

module.exports = router;