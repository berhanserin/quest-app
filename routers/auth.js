const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.send('Auth İndex')
})

route.get('/register', (req, rres) => {})

module.exports = route
