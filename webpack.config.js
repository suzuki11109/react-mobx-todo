var path = require('path');
var webpack = require('webpack');
var ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/index.tsx'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.ts', '.tsx']
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loaders: ['react-hot', 'awesome-typescript-loader'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};

module.exports = config;
