var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
    //res.send("<h1>Welcome to the home page</h1>");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    //res.send("You fell in love with " + thing);
    res.render("love", {thingVar : thing});
});

app.get("/posts", function(req, res) {
   var posts = [
       {title: "post 1", author: "Suzy"},
       {title: "post 2", author: "Suz"},
       {title: "post 3", author: "Suy"}
       ]; 
       res.render("posts", {posts:posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening"); 
});