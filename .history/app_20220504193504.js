const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const morgan = require('morgan')
const app = express()

app.use(
  express.urlencoded({
    extended: true,
  }),
)

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log('Connected to DB')
  })
  .catch((err) => {
    console.log(err)
  })

const routes = require('./Routes/api')

app.use(morgan('dev'))
app.use('/', routes)

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
