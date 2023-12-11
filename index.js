const express = require("express")

const app = express() ; 
const server = require('http').createServer(app);
const io = require('socket.io')(server)
const router = require('./router')
const bodyParser = require("body-parser")
require("dotenv").config()
let port = process.env.port
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

io.on('connection',cl=>{
    console.log(446545)
    cl.on('event', data => {console.log(564456)});
    cl.on('disconnect', () => {console.log(5456440) });
})


server.listen(port,()=>{
    console.log(`this app run on ${port}`)
})