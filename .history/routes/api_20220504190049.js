const express = require('express')
const router = express.Router()

router.route('/').get(HomeController.index)

module.exports = router
