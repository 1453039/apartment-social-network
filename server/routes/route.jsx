var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('../config/config');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var email = req.body.email
  var message = "Your apartment domain is localhost:3000"

  var mail = {
    from: auth.user,
    to: email,  //Change to email address that you want to receive messages on
    subject: 'Welcome to AP Social',
    text: message
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})


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
