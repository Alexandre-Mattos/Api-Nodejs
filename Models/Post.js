const mongoose = require('mongoose')

const Post = mongoose.Schema(
  {
    tittle: String,
    content: String,
    person: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Person',
      required: true,
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('Post', Post)
