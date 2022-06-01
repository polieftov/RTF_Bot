
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = process.env.PORT || 8000

const router = require('./router/router')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use('/', router)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
