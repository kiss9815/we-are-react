var express = require('express');
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

var morgan = require('morgan');
var bodyparser = require('body-parser');

var app = express();
const port = 3000;

const devPort = 3001;
 
 
if(process.env.NODE_ENV == 'development') {
    console.log('Server is running on development mode');
 
    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-server is listening on port', devPort);
    });
}


app.use(morgan('dev')); //앞에 있어야 작동함.
app.use(bodyparser.json());
app.use('/', express.static('public'));


var user = require('./routes/user');
app.use('/user', user);


app.get('/', function(req, res){
    res.send('hello world')
});



app.listen(port, function(){
    console.log('app is listening on 3000 port')
});

