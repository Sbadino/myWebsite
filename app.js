const express = require('express');
const path = require('path');
const app = express();

app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function(req, res){
    res.render('home');
});

app.use(express.static(path.resolve(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});