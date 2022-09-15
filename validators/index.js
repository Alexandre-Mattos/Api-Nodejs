exports.createPostValidator = (req, res, next) => {
  // TITTLE
  req.check('title', 'Title is required').notEmpty()
  req.check('title', 'Title must be between 5 to 150 characters').isLength({
    min: 5,
    max: 150,
  })

  // BODY
  req.check('body', 'body is required').notEmpty()
  req.check('body', 'body must be between 5 to 5000 characters').isLength({
    min: 5,
    max: 5000,
  })

  // check erros
  const errors = req.validationErrors()
  if (errors) {
    const firstError = errors.map((error) => error.msg)[0]
    return res.status(400).json({ error: firstError })
  }

  next()
}
