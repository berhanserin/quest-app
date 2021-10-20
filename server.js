const express = require('express')
const app = express()
const dotenv = require('dotenv')
const auth = require('./routers/auth')
const question = require('./routers/question')

//* Environment Variables
dotenv.config({ path: './config/env/config.env' })

const PORT = process.env.PORT

app.use('/api/auth', auth)
app.use('/api/question', question)

app.listen(PORT, () => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`)
})
