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

Person.virtual('posts', {
  ref: 'Post',
  localField: 'personId',
  foreignField: '_id',
})

module.exports = mongoose.model('Person', Person)
