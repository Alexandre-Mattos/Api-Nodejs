const Person = require('../models/Person')

exports.index = (req, res) => {
  Person.find({}, (err, persons) => {
    if (err) {
      res.send(err)
    }
    res.json(persons)
  })
}

exports.store = (req, res) => {
  const person = new Person(req.body)
  Person.find({}, (err, persons) => {
    if (err) {
      res.send(err)
    }
    res.json(persons)
  })
}
