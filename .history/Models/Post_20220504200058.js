const mongoose = require('mongoose')

const Post = mongoose.Schema(
  {
    tittle: String,
    content: String,
    personId: String,
  },
  { timestamps: true },
)

module.exports = mongoose.model('Post', Post)
