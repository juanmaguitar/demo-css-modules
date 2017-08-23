const path = require('path')

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
       }
    ]
  }
}
