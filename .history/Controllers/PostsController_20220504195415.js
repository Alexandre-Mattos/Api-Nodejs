const Person = require('../models/Person')
const Post = require('../models/Post')

exports.index = (req, res) => {
  Post.find({}, (err, post) => {
    if (err) {
      res.send(err)
    }
    res.json(post)
  })
}

exports.store = async (req, res) => {
  const post = new Post(req.body)

  await post.save((err, post) => {
    if (err) {
      res.send(err)
    }
  })

  const person = Person.findById(post.personId)
  console.log(person)
  person.posts.push(post)
  await person.save((err, person) => {
    if (err) {
      res.send(err)
    }
    res.json({ message: 'Post created!', post: person })
  })
}
