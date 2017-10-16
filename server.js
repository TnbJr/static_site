var express = require('express');
var app = express();
var path = require('path')


app.set('views', path.join(__dirname, 'views'))
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'static')));

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
   console.log("Got a GET request for the homepage");
   res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})