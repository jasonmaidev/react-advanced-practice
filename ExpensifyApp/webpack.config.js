const path = require('path');

module.exports = {
  entry: './src/playground/redux101.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  //teach webpack to run babel loader with rules :https://webpack.js.org/configuration/module/#modulerules
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};

//loader
