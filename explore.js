

//express - framework

require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})

const db = mongoose.connection

db.on('error', (err) => console.error(err))

db.once('open', () => console.log(`Open db`))
// const http = require('http')
// const server = http.createServer()

//middleware BEFORE EVYRTHING ELSE
app.use(express.json())


//default
const followersRoute = require('./routers/followers.js')

//base path
app.use('/followers', followersRoute)



app.listen(2300, ()=> {
    console.log(`Listening to a port 2300`);
})


