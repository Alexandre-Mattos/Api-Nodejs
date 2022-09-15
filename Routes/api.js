const express = require('express')
const { createPostValidator } = require('../validators/index.js')
const { createPersonValidator } = require('../validators/PersonsValidator.js')
const PostController = require('../Controllers/PostController.js')
const PersonController = require('../Controllers/PersonsController.js.js')

const namespace = require('express-namespace')
console.log(namespace())
const router = express.Router()

// ================== POSTS ==================
router
  .route('/posts')
  .get(PostController.index)
  .post(createPostValidator, PostController.store)

router
  .route('/posts/:postId')
  .get(PostController.show)
  .patch(PostController.update)
  .delete(PostController.delete)

// ================== PERSONS ==================
router.get('/person', PersonController.index)
router.get('/person/:personId', PersonController.show)
router.post('/person', PersonController.store)
router.patch('/person/:personId', PersonController.update)
router.delete('/person/:personId', PersonController.delete)

module.exports = router
