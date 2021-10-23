const express = require('express')
const app = express()
const dotenv = require('dotenv')
const indexRoute = require('./routers/index')
const { connectDatabase } = require('./helpers/index')

//* Environment Variables
dotenv.config({ path: './config/env/config.env' })
const { PORT, DATABASE_URL, DB_NAME } = process.env
//* MiddleWare
app.use(express.json())


connectDatabase(DATABASE_URL, DB_NAME)
app.use('/api', indexRoute)
app.listen(PORT, (req, res) => {
    console.log(`Server uçuyor 🚀 ${PORT} : ${process.env.NODE_ENV}`)
})
