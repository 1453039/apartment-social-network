var express = require('express');
var router = express.Router();
var users = require('../models/User');
var nodemailer = require('nodemailer');
const creds = require('../config/config');

router.get('/', function (req, res) {
  res.render('index')
});

router.route('/insert')
  .post(function (req, res) {
    var user = new users();
    user.email = req.body.email;
    user.apartment = req.body.id;
    user.password = req.body.password ? req.body.password : "";
    user.name = req.body.name ? req.body.name : "";
    user.birthday = req.body.birthday ? req.body.birthday : "";
    user.sex = req.body.sex ? req.body.sex : "";
    user.room = req.body.room ? req.body.room : "";
    user.isAdmin = req.body.isAdmin ? req.body.isAdmin : false;
    user.save(function (err) {
      if (err)
        res.send(err);
      res.send('User successfully added!');
    });
  })

router.route('/send')
  .post(function (req, res) {
    console.log('send', req.body);
    
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 407,
      secure: false,
      requireTLS: true,
      auth: {
        user: creds.USER, // generated ethereal user
        pass: creds.PASS // generated ethereal password
      }
    });
    let mailOptions = {
        from: creds.USER, // sender address
        to: req.body.email,
        subject: "Welcome to AP Social", // Subject line
        text: 
        ` html: <p> Your apartment domain is localhost:3000 </p>` // html body
      };
      transporter.sendMail(mailOptions, (err, data) => {
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

router.route('/update_password/:id')
  .post(function (req, res) {
    const password = req.body.password;
    users.update({ _id: req.params.id }, password, function (err, result) {
      if (err)
        res.send(err);
      res.send('User password successfully updated!');
    });
  });

router.route('/update_info/:id')
  .post(function (req, res) {
    const doc = {
      name: req.body.name,
      birthday: req.body.birthday,
      sex: req.body.sex
    };
    console.log(doc);
    users.update({ _id: req.params.id }, doc, function (err, result) {
      if (err)
        res.send(err);
      res.send('User info successfully updated!');
    });
  });

router.get('/delete', function (req, res) {
  var id = req.query.id;
  users.find({ _id: id }).remove().exec(function (err, result) {
    if (err)
      res.send(err)
    res.send('User successfully deleted!');
  })
});

router.get('/getAll', function (req, res) {
  users.find({}, function (err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
});

router.get('/get-resident-of-apartment/:id', function (req, res) {
  var id = req.params.id;
  users.find({ apartment: id }, function (err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
});
module.exports = router;
