var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3334;

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config.js');
  var compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
}

var indexPath = path.join(__dirname, 'index.html');
var publicPath = express.static(path.join(__dirname, 'public'));

app.use('/public', publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath); });

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
