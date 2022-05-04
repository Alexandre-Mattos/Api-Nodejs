const mongoose = require('mongoose')

const Post = mongoose.Schema(
  {
    tittle: String,
    content: String,
  },
  { timestamps: true },
)

Post.virtual('posts', {
  ref: 'Post',
  localField: 'personId',
  foreignField: '_id',
})

module.exports = mongoose.model('Post', Post)
