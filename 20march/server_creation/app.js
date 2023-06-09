const express = require("express");
const app = express();
const port = 8080;
const {ashta} =require("./router/routing")



//middleware
app.use(express.json());
app.use(ashta)
app.use(express.static(__dirname+'/public')) //for loading css files



//homepage routing
// app.methods("routing path", "handler/ controler") // get post put delete

app.get("/", (req,res)=>{
    res.sendFile(__dirname +'/public/form.html')
    // res.status(200).send('<h1>hello</h1>');
})
app.get("/api/v2/auth/generateMobileOTP", (req,res)=>{
    
    res.status(200).send({"contact no":"mobile number"});
})

app.get('/redirect', (req,res)=>{
    res.status(307).redirect('/api/v2/auth/generateMobileOTP')
})



//server port
app.listen(port,()=>{
    console.log(__dirname)
    console.log(__filename)
    console.log("server is running")
})

//https://cdn-api.co-vin.in/api/v2/auth/generateMobileOTP