const express = require('express')
const route = express.Router()
const { register, error } = require('../controllers/auth')

route.route('/register').post(register)
route.route('/errorTest').get(error)

module.exports = route
