const express = require("express");
const app = express();
const port = 8080;

//middleware
app.use(express.json());


//homepage routing
// app.methods("routing path", "handler/ controler") // get post put delete
app.get("/", (req,res)=>{
    res.status(200).send('<h1>hello</h1>');
})
app.get("/api/v2/auth/generateMobileOTP", (req,res)=>{
    res.status(200).send({"contact no":"mobile number"});
})
//server port
app.listen(port,()=>{
    console.log("server is running")
})

// https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP