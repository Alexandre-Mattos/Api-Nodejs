const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

app.listen(dotenv.PORT, () => {
  console.log('Server is running on port 3000')
})
