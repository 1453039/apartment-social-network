var express = require('express');
var router = express.Router();
var apartments = require('../models/Apartment');
var users = require('../models/User');

router.get('/get-apartment', function(req, res) {
  var id = req.query.id_apartment;
  apartments.findById(id, function(err, apartment) {
    if (err)
      console.log("err", err);
    res.json(apartment);  
  });
});

router.get('/get-list-apartment', function (req, res){
  var email = req.query.email;
  users.find({email: {$eq: email}}, function(err, users) {
    if (err)
      res.send(err);
    res.json(users);  
  });
});

router.get('/get-apartment', function(req, res){
  var id = req.query.id_user;
  users.findById(id, function(err, user){
    if (err)
      res.send(err);
    res.json(user.apartment);
  });
});

module.exports = router;
