const { connectDatabase } = require('./database')
const sendJwtToClient = require('./authorization/sendJwtToClient')

module.exports = { connectDatabase, sendJwtToClient }
