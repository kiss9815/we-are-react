'use strict';

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');


var morgan = require('morgan');
var bodyparser = require('body-parser');

var app = express();
var port = 3000;

var devPort = 3001;

if (process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');

    var config = require('../webpack.dev.config');
    var compiler = (0, _webpack2.default)(config);
    var devServer = new _webpackDevServer2.default(compiler, config.devServer);
    devServer.listen(devPort, function () {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}

app.use(morgan('dev')); //앞에 있어야 작동함.
app.use(bodyparser.json());
app.use('/', express.static('public'));

var user = require('./routes/user');
app.use('/user', user);

app.get('/', function (req, res) {
    res.send('hello world');
});

app.listen(port, function () {
    console.log('app is listening on 3000 port');
});