const express = require('express')
const app = express()
const dotenv = require('dotenv')
const indexRoute = require('./routers/index')

//* Environment Variables
dotenv.config({ path: './config/env/config.env' })

const PORT = process.env.PORT

app.use('/api', indexRoute)

app.listen(PORT, () => {
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`)
})
