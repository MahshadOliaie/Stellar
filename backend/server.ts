import express = require("express"); 

import cors = require("cors");

const app=express()
import bodyParser = require('body-parser');
import cookieParser = require("cookie-parser");
import { createConnection } from 'typeorm'
// import userApi from './routers/userApi'
// import authorization from "./utils/authorization"
import dotenv= require("dotenv")

import dataSource from "./utils/dbConfiguration";
import apiRouter from "./routes/api/api";



dotenv.config({ path: __dirname+'/.env' });





// const reply = "";
// var Client = new WebSocket('ws://192.168.1.2:25565');
// Client.onopen = function () {
//     console.log('Connected!');
//     Client.send('Ping'); // Send the message 'Ping' to the server
//     };


// console.log() 
app.use(cookieParser())

// app.set('views','views/')
// app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json())

app.use(express.static('public'))
app.use(express.static('dist'))
app.use(cors())
dataSource
.initialize()
.then(async() => {
    await dataSource.synchronize();
    console.log("Data Source has been initialized!")
})
.catch((err) => {
    console.error("Error during Data Source initialization:", err)
})




app.use('/api',apiRouter)

// get post put delete
app.get('/',(req,res)=>{
    
    // res.json({dadassd:"dadadas"})
    res.sendFile(__dirname+'/dist/index.html')
    
})





app.listen(process.env.PORT||8000,()=>{
    console.log(`TypeScript with Express
    http://localhost:8000/`);
})
// app.listen(8000,'192.168.1.102')
const mainDir=__dirname
export {mainDir}