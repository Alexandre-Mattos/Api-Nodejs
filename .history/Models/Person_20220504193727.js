const mongoose = require('mongoose')

const Person = mongoose.Schema(
  {
    name: String,
    email: String,
    senha: String,
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  { timestamps: true },
)

Person.virtual('Post', {
  ref: 'Post',
  localField: 'personId',
  foreignField: '_id',
})

module.exports = mongoose.model('Person', Person)
