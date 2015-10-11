var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var env = process.env.WEBPACK_ENV;
var WebpackDevServer = require('webpack-dev-server');

var appName = 'app';
var host = '0.0.0.0';
var port = '9000';

var plugins = [], outputFile;

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = appName + '.min.js';
} else {
  plugins.push(new webpack.HotModuleReplacementPlugin());
  outputFile = appName + '.js';
}

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:9000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    publicPath: '/example/'
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loaders: ['react-hot', 'babel'],
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /(node_modules|lib)/
      }
    ]
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  }

};

if (env === 'dev') {
  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    debug: true
  }).listen(port, host, function (err, result) {
    if (err) {
      console.log(err);
    }
  });
  console.log('-------------------------');
  console.log('Local web server runs at http://' + host + ':' + port);
  console.log('-------------------------');
}

module.exports = config;
