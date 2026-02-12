const express = require('express');

const app = express();

app.get("/", (req, res)=>{
    res.send("this is home page");
})

app.get("/about", (req, res)=>{
    res.send("this is about page");
})

app.get("/contact", (req, res)=>{
    res.send("this is not a home page, this is a contact page")
})

app.listen(3000);