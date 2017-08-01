var webpack = require('webpack');
var path = require('path');

module.exports = {
  resolve: {
    root: path.resolve(__dirname),
    extensions: ['', '.js', '.jsx']
  },
  stats: {
    children: false
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
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        }
    ]
  },
  output: {
    path: path.join(__dirname, "static"),
    filename: "js/react.min.js"
  },
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ]
};
