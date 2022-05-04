const mongoose = require('mongoose')

const Person = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    senha: {
      type: String,
      required: 'Senha is required',
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

Person.virtual('Post', {
  ref: 'Post',
  localField: 'personId',
  foreignField: '_id',
})

module.exports = mongoose.model('Person', Person)
