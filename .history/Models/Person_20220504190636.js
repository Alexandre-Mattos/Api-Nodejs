const mongoose = require('mongoose')

const Person = mongoose.Schema(
  {
    name: String,
    email: String,
    senha: {
      type: String,
      required: true,
      min: 4,
      max: 8,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Person', Person)
