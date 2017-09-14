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

let login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if(!username || !password){
    res.send('Please input username and password!')
  } else {
    User.findOne({username: username})
    .then(user => {
      console.log('Data User: ');
      console.log(user);
      bcrypt.compare(password, user.password)
      .then(bcryptResult => {
        if(bcryptResult){
          const token = jwt.sign({username: user.username, id: user._id}, process.env.SECRET_KEY, { expiresIn: '1d'});
          res.json({message: 'Login success', username: username, token: token, id: user._id})
        } else {
          res.send('Wrong Password')
        }
      })
    })
    .catch(err => {
      res.send('Username not found')
    })
  }
}

module.exports = {
  register,
  login
};
