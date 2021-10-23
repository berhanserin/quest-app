const express = require('express')
const route = express.Router()
const { getAllQuestions } = require('../controllers/question')

route.get('/', getAllQuestions)

module.exports = route
