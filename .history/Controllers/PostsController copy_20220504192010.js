const Person = require('../models/Person')
const Post = require('../models/Post')

exports.index = (req, res) => {
  Person.find({}, (err, persons) => {
    if (err) {
      res.send(err)
    }
    res.json(persons)
  })
}

exports.store = async (req, res) => {
  const post = new Post(req.body)

  post = await person.save((err, post) => {
    if (err) {
      res.send(err)
    }
  })

  const person = Person.findById(person.personId)
  person.posts.push(post)
  person.save()
}
