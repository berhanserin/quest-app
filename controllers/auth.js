const CustomError = require('../middlewares/error/CustomError')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')
const { sendJwtToClient } = require('../helpers')

const register = asyncHandler(async (req, res) => {
    const user = await User.create(req.body).then((created) => {
        sendJwtToClient(created, res)
    })
})

const tokentest = asyncHandler(async (req, res) => {
    res.json({ success: true })
})

module.exports = { register, tokentest }
