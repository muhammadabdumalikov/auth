const router = require('express').Router()
const UsersGetController = require('../controllers/UsersGetController')
const UserSignUpController = require('../controllers/UserSignUpPostController')


router.get('/', UsersGetController)
router.post('/signup', UserSignUpController)

module.exports = {
  router, 
  path: '/users'
}