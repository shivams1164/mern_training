const express = require('express')
const ImageRouter = require('./routes/imageRouter')
const cors = require("cors")
const app = express()

app.use(express.json());
app.use(cors({ origin: true }))

app.use('/api/v1/images', ImageRouter)

module.exports = app