const Person = require('../Models/Person')
const Post = require('../Models/Post')

exports.index = (req, res) => {
  const posts = Post.find()
    .select('_id title body publisher createdAt updatedAt')
    .then((posts) => {
      res.json({ posts })
    })
    .catch((err) => console.log(err))
}
exports.show = (req, res) => {
  const posts = Post.findOne({ _id: req.params.postId })
    .select('_id title body publisher createdAt updatedAt')
    .then((posts) => {
      if (!posts) {
        return res.status(404).json({
          message: 'Post not found',
        })
      }
      res.json({})
    })
    .catch((err) => console.log(err))
}

exports.store = async (req, res) => {
  const post = new Post(req.body)

  await post.save((err, data) => {
    if (err) {
      res.status(400).json({
        error: err,
      })
    }
    if (!data) {
      res.status(400).json({
        message: 'Post not saved',
      })
    }
  })

  if (!post) {
    return res.status(400).json({
      message: 'Post not saved',
    })
  }

  const person = await Person.findOne({ _id: post.publisher })
  console.log(person)
  person.publishedPosts.push(post)

  await person.save()
  res.json({
    message: 'Post saved successfully',
    post: post,
  })
}

exports.update = (req, res) => {
  Post.findByIdAndUpdate({ _id: req.params.personId }, req.body, {
    new: true,
  })
    .then((post) => {
      if (!post) {
        return res.status(404).json({
          message: 'Post not found',
        })
      }
      res.json({
        message: 'Post updated successfully',
        post,
      })
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      })
    })
}

exports.delete = (req, res) => {
  Post.findByIdAndDelete({ _id: req.params.personId }, { new: true })
    .then((post) => {
      if (!post) {
        return res.status(404).json({
          message: 'Post not found',
        })
      }
      res.json({
        message: 'Post deleted successfully',
        person,
      })
    })
    .catch((err) => {
      res.status(400).json({
        error: err,
      })
    })
}
