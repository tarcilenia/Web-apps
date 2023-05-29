const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: String,
  id: String
})

module.exports = mongoose.model('Student', schema)
