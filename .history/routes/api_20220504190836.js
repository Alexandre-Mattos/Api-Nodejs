const express = require('express')
const router = express.Router()

const PersonController = require('../controllers/PersonController')

router.route('/').get(PersonController.index)

router
  .route('/persons')
  .get(PersonController.index)
  .post(PersonController.store)

module.exports = router
