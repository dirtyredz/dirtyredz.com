var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx']
  },
  entry: "./src/client.js",
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }
    ]
  },
  output: {
    path: path.join(__dirname, "static"),
    filename: "js/react.min.js"
  },
  plugins: [

  ]
};
