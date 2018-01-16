var express = require('express');
var app = express();

//Order of routes matter, put star route last

// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
    res.send("MEOW!");
});
//Route variables
app.get("/r/:subredditName", function(req, res) {
    res.send("WELCOME TO A SUBREDDIT!");
})
//get request to a url not defined
app.get("*", function(req, res){
    res.send("YOU ARE A STAR!!!");
});
//Tell Express to listen for requests (start server)
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!");
});
