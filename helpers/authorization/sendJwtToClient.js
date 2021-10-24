const sendJwtToClient = (users, res) => {
    const token = users.generateJWTToken()
    const { JWT_COOKIE, NODE_ENV } = process.env
    return res
        .status(200)
        .cookie('access_token', token, {
            httpOnly: true,
            expires: new Date(Date.now() + parseInt(JWT_COOKIE) * 1000),
            secure: NODE_ENV === 'development' ? false : true,
        })
        .json({
            success: true,
            access_token: token,
            data: { name: users.name, email: users.email },
        })
}

module.exports = sendJwtToClient
