const express = require('express')
const router = express.Router()
const auth = require('./auth')
const user = require('./user')
const product = require('./product/index')
const {authorize} = require('../middleware/jwtauth')


router.use('/auth',auth)
router.use('/user',authorize(["admin"]),user)
router.use('/product',product)//,authorize(["admin","user"])

module.exports = router 