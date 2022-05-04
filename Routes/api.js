const express = require('express')
const router = express.Router()

const PersonController = require('../Controllers/PeopleController')
const PostsController = require('../Controllers/PostsController')

router.route('/').get(PersonController.index)

router
  .route('/persons')
  .get(PersonController.index)
  .post(PersonController.store)

router.route('/posts').get(PostsController.index).post(PostsController.store)

module.exports = router
