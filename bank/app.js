var express = require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
        res.render("home");
});

app.listen(8000, () => console.log('Listening on port 8000!'))
