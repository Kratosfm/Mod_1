var express = require ('express');
var app = express();
var PORT = 8080;
const path = require('path');

//Route para la pagina index

index = require ('./router');
app.use('/', index);

app.get('/', function (req, res){
  res.status(404).send("Error 404");
});


app.listen(PORT, function() {
  console.log('Server running on port: ', PORT);
});
