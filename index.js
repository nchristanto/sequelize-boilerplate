require('dotenv').config() // read the .env file

const PORT = process.env.PORT // process port
const express = require('express') 
const app = express() // call express module
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })) // for body parser to know json file

// express router
const accounts = require('./api/accounts')

app.use('/accounts', accounts)

app.listen(PORT, () => console.log(`App running on port ${PORT}`))