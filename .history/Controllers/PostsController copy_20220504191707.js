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
  const person = new Person(req.body)

  await person.save((err, person) => {
    if (err) {
      res.send(err)
    }
    res.json(person)
  })
}
