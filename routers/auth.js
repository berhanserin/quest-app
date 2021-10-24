const express = require('express')
const route = express.Router()
const { register, tokentest } = require('../controllers/auth')

route.route('/register').post(register)
route.route('/tokentest').get(tokentest)

module.exports = route
