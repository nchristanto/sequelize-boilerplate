const router = require('express').Router()
const controller = require('./controller')
const helpers = require('../helpers')

// Get All Data use helpers.js
router.get ('/', helpers.isAuthenticated, controller.get);

router.post('/', controller.post)
router.delete('/:id', controller.delete)
router.post('/:id', controller.login)

module.exports = router