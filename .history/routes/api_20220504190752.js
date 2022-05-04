const express = require('express')
const router = express.Router()

const PersonController = require('../controllers/PersonController')

router.route('/').get(PersonController.index)

module.exports = router
