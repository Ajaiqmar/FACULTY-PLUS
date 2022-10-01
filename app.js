const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");


const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(express.static("static"));
app.use("/category",express.static("static"));
app.use("/category/engineering",express.static("static"));

app.get("/",function(req,res){
  res.render("index");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/category/engineering/:stream",function(req,res){
  if(req.params.stream === "all")
  {
    res.render("engineering");
  }
  
  res.render("index");
});

app.get("/category/polytechnic",function(req,res){
  res.render("polytechnic");
});

app.get("/post",function(req,res){
  res.render("post");
});


app.listen(PORT,function(req,res){
  console.log("[RUNNING] SERVER IS UP AND RUNNING");
});
