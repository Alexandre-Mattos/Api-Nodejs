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
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  { timestamps: true },
)

Person.virtual('post', {
  ref: 'Post',
  localField: 'personId',
  foreignField: '_id',
})

module.exports = mongoose.model('Person', Person)