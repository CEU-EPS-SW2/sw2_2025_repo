const express = require('express');
const router = express.Router();
const database = require('../database');
const ajv = require("../schemas");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { user: req.session.user});
});

router.post('/', function(req, res, next) {
  const pelicula = req.body;
  const validate = ajv.getSchema("pelicula");
  //console.log(validate);
  if (validate(pelicula)){
    res.status(200);
  } else {
    console.log(validate.errors);
    res.status(400);
  }
  res.send(validate.errors);
});

module.exports = router;
