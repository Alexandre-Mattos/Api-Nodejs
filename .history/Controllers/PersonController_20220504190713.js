const Person = require('../models/Person')

exports.index = (req, res) => {
  Person.find({}, (err, persons) => {
    if (err) {
      res.send(err)
    }
    res.json(persons)
  })
}
