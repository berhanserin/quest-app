const express = require('express')
const route = express.Router()
const auth = require('./auth')
const question = require('./question')

route.use('/auth', auth)
route.use('/question', question)


module.exports = route
