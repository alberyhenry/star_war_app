var express = require('express');
var app = express();
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap
app.use('/css', express.static(__dirname + '/node_modules/font-awesome/css')); // redirect CSS font-awesome
app.use('/fonts', express.static(__dirname + '/node_modules/font-awesome/fonts')); // redirect fonts font-awesome
app.set('view engine', 'ejs');
//Route
var routes = require('./routes');
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
// Home Page
app.get('/', routes.home);
// movies single
app.get('/star_war_episode/:episod_number?', routes.star_war_episode);
// not found
app.get('*', routes.notfound);
app.listen(process.env.PORT || 8888);

