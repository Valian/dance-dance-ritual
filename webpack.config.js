var path = require('path');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    }]
  }
};
