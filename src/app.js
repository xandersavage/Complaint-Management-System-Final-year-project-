const Path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser')
const app = express() //UNPACK EXPRESS

require('./db/mongoose') //CONNECT TO DB
const userRouter = require('./router/user')
const complaintRouter = require('./router/complaint')
const viewRouter = require('./router/view')

app.set('view engine', 'pug') //SPECIFY VIEW ENGINE
app.set('views', Path.join(__dirname, 'views')) //SET PATH FOR VIEWS

app.use(express.json()) //PARSE INCOMING JSON DATA TO JS OBJECTS
app.use(cookieParser()) //READ COOKIES FROM CLIENT
app.use(express.static(Path.join(__dirname, 'public'))) //SET PUBLIC PATH


app.use(viewRouter)
app.use(userRouter)
app.use(complaintRouter)

module.exports = app