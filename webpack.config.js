module.exports = {
  entry: "./app/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel",
      query:
        {
          presets:['es2015', 'react']
        }
      }
    ]
  }
};
