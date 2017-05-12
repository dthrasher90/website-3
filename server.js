var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res){
  console.log("hello world");
    res.sendFile('index.html');
});

app.listen(process.env.PORT  ||  5000, function(){
  console.log("Listening on port 3000");
});
