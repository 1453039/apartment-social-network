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
    user.password = "";
    user.name = "";
    user.birthday = "";
    user.sex = "";
    user.avatar = req.body.avatar;
    user.cover = req.body.cover;
    user.flat = req.body.isAdmin ? "" : req.body.flat;
    user.status = false;
    user.isAdmin = req.body.isAdmin;
    user.save(function (err) {
      if (err)
        res.send(err);
      res.send('User successfully added!');
    });
  })

router.route('/send')
  .post(function (req, res) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secureConnection: false,
      port: 587,
      requiresAuth: true,
      domains: ["gmail.com", "googlemail.com"],
      auth: {
        user: creds.USER, // generated ethereal user
        pass: creds.PASS // generated ethereal password
      }
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take our messages');
      }
    });

    let text = "Your apartment domain is localhost:3000/@" + req.body.id

    let mailOptions = {
      from: creds.USER, // sender address
      to: req.body.email,
      subject: "Welcome to AP Social", // Subject line
      text: text
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

router.route('/update_password')
  .post(function (req, res) {
    const id = req.body.id
    users.findById(id, function(err, user){
      if(err)
        res.send(err);
      const password = user.encryptPassword(req.body.password);
      users.update({ _id: id }, {password: password}, function (err, result) {
        if (err)
          res.send(err);
        res.send('User password successfully updated!');
      });
    })
  });

router.route('/update-info')
  .put(function (req, res) {
    let name = req.body.name
    let birthday = req.body.birthday
    let sex = req.body.sex
    users.updateOne({ _id: req.body.id }, {$set: {name: name, birthday: birthday, sex: sex}}, function (err, result) {
      if (err)
        res.send(err);
      req.session.user.name = name
      req.session.user.birthday = birthday
      req.session.user.sex = sex
      res.json('User info successfully updated!');
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

router.get('/get-user', function (req, res) {
  let id = req.query.id;
  users.findById(id, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
});

router.get('/get-resident-of-apartment', function (req, res) {
  var id = req.query.id;
  users.find({ apartment: id }, function (err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
});

router.post('/save_to_session', function (req, res) {
  const id = req.body.id;
  users.findById(id, function (err, user) {
    if (err)
      res.send(err);
    req.session.user = user;
    res.send("Save user to session successfully!")
  });
});

router.get('/get_user_from_session', function (req, res) {
  res.json(req.session.user);
});

module.exports = router;
