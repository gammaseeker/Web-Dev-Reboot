var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
    //res.send("<h1>Welcome to the home page</h1>");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    //res.send("You fell in love with " + thing);
    res.render("love.ejs", {thingVar : thing});
});

app.get("/posts", function(req, res) {
   var posts = [
       {title: "post 1", author: "Suzy"},
       {title: "post 2", author: "Suz"},
       {title: "post 3", author: "Suy"}
       ]; 
       res.render("posts.ejs", {posts:posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening"); 
});
