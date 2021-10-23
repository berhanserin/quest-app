const express = require('express')
const route = express.Router()
const { register } = require('../controllers/auth')

route.route('/register').post(register)

module.exports = route
