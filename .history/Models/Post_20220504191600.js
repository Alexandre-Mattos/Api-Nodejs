const mongoose = require('mongoose')

const Post = mongoose.Schema(
  {
    tittle: String,
    content: String,
    personId: Number,
  },
  { timestamps: true },
)

module.exports = mongoose.model('Post', Post)
