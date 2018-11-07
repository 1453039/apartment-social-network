var express = require('express');
var router = express.Router();
var apartments = require('../models/Apartment');
var users = require('../models/User');

router.get('/get-apartment/:id_apartment', function(req, res) {
  var id = req.params.id_apartment;
  apartments.findById(id, function(err, apartment) {
    if (err)
      console.log("err", err);
    res.json(apartment);  
  });
});

router.get('/get-list-apartment/:email_user', function (req, res){
  var email = req.params.email_user;
  users.find({email: email}, function(err, users) {
    if (err)
      res.send(err);
    res.json(users);  
  });
});

router.get('/get-id-apartment/:id_user', function(req, res){
  var id = req.params.id_user;
  users.findById(id, function(err, user){
    if (err)
      res.send(err);
    res.json(user.apartment);
  });
});
