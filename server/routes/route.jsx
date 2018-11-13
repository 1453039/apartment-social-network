var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index')
});

router.get('/@:id', function (req, res) {
  res.render('index')
});

// router.get('/@id/info', function (req, res) {
//   res.render('index')
// });

// router.get('/@:id/timeline', function (req, res) {
//   res.render('index')
// });

// router.get('/@:id/change-password', function (req, res) {
//   res.render('index')
// });

// router.get('/@:id/messages', function (req, res) {
//   res.render('index')
// });

// router.get('/@:id/admin-noti', function (req, res) {
//   res.render('index')
// });

// router.get('/@:id/member-noti', function (req, res) {
//   res.render('index')
// });

// router.get('/@:id/reports', function (req, res) {
//   res.render('index')
// });

module.exports = router;
