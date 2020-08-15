//jshint esversion:6
const express = require("express");
const app = express();

app.use(express.static("public"));

// all get requests
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get("/index.html",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
app.get("/gallery.html",function(req,res){
  res.sendFile(__dirname+"/gallery.html");
});
app.get("/about.html",function(req,res){
  res.sendFile(__dirname+"/about.html");
});
app.get("/blog.html",function(req,res){
  res.sendFile(__dirname+"/blog.html");
});
app.get("/contact.html",function(req,res){
  res.sendFile(__dirname+"/contact.html");
});
app.get("/pricing.html",function(req,res){
  res.sendFile(__dirname+"/pricing.html");
});













//TODO

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
