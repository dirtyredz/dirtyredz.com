var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx']
  },
  context: path.join(__dirname, "src"),
  entry: "./client.js",
  module: {
    loaders: [
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attrs', 'transform-class-properties'],
            }
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
