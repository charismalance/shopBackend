const express = require("express")
const app = express()
const io = require('socket.io')(app)


io.on('connection',cl=>{
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
})