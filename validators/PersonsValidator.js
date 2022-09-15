exports.createPersonValidator = (req, res, next) => {
  // PERSON
  req.check('nome', 'Name is required').notEmpty()
  req.check('email', 'email must be between 5 to 150 characters').isEmail()
  req.check('senha', 'password must be 5 characters or more').isLength({
    min: 5,
  })

  // check erros
  const errors = req.validationErrors()
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0]
    return res.status(400).json({ error: firstError })
  }

  next()
}
