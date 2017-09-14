const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

let register = (req, res) => {
  const password = req.body.password
  bcrypt.genSalt(10, (errSalt, salt) => {
    bcrypt.hash(password, salt, (errHash, hash) => {
      req.body.password = hash;
      User.create({
        username: req.body.username,
        password: req.body.password
      })
      .then(data => {
        res.status(200).json({message: 'Register success!'})
        console.log('New User: ', data);
      })
      .catch(err => {
        res.status(400).send(err)
      })
    })
  })
}

module.exports = {
  register
};
