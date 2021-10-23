const User = require('../models/User')

const register = async (req, res, next) => {
    await User.create(req.body).then((created) => {
        res.send({ success: true, data: created })
    })
}

module.exports = { register }
