var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index')
});

router.get('/info', function (req, res) {
  res.render('index')
});

router.get('/timeline', function (req, res) {
  res.render('index')
});

router.get('/newfeeds', function (req, res) {
  res.render('index')
});

router.get('/change-password', function (req, res) {
  res.render('index')
});

router.get('/messages', function (req, res) {
  res.render('index')
});

router.get('/admin-noti', function (req, res) {
  res.render('index')
});

router.get('/member-noti', function (req, res) {
  res.render('index')
});

router.get('/reports', function (req, res) {
  res.render('index')
});

module.exports = router;
