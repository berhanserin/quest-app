const CustomError = require('../middlewares/error/CustomError')
const User = require('../models/User')
const asyncHandler = require('express-async-handler')

const register = asyncHandler(async (req, res) => {
    const user = await User.create(req.body).then((created) => {
        res.send({ success: true, data: created })
    })
})
const error = (req, res, next) => {
    return next(new CustomError('Custom Error', 400))
}
module.exports = { register, error }
