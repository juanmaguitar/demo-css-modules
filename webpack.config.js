const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const entryApp = path.join(__dirname, 'src')
const outputPath = path.join(__dirname, 'build')

module.exports = {
  entry: entryApp,
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: entryApp
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
