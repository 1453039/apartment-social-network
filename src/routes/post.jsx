var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/Post.jsx');

/* GET ALL POST */
router.get('/', function(req, res, next) {
  Post.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE POST BY ID */
router.get('/:id', function(req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE POST */
router.post('/insert', function(req, res, next) {
  Post.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE POST */
router.put('/:id', function(req, res, next) {
  Post.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE POST */
router.delete('/:id', function(req, res, next) {
  Post.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
