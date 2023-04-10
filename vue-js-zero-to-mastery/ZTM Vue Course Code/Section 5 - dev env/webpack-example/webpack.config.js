const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = {
  entry: './index.js',          // for webpack, entry point has to be a js file
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // adds support for js (already supported, but can add later versions)
        test: /\.js$/,                // tell babel to only process .js files
        exclude: /(node_modules)/,    // assume everything in node_modules is already processed by the author, don't spend time on them here
        use: 'babel-loader'           // what package to use to process the files
      },
      {
        // 
        test: /\.scss$/,
        use: [    // set to an array to have it apply by multiple loaders
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ],
  watch: true
}
