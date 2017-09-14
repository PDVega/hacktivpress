const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema ({
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  }
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User;
