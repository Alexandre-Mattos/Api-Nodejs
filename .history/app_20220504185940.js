const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express()

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log('Connected to DB')
  })
  .catch((err) => {
    console.log(err)
  })

const routes = require('./routes/api')
app.get('/', routes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
