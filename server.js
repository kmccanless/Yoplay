var express = require('express');
var fs = require('fs');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 3000);
//app.use(express.static(path.join(__dirname, '/dist/public')));
app.use(express.static(path.join(__dirname, '/control/public')));
app.get('/', function(req, res) {
/*    fs.readFile(__dirname + '/dist/index.html', 'utf8', function(err, text){
        res.send(text);
    });*/
    fs.readFile(__dirname + '/control/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});
var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});