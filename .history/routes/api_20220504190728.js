const express = require('express')
const router = express.Router()

router.route('/').get(PersonController.index)

module.exports = router
