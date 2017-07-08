var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
      index: './js/index.js',
      app: './js/app.js',
      test: './js/test.js',
      style: './css/style.css',
      test: './css/test.css',
      vendor: ['lodash', 'jquery']
     },
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: '[name].bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             },
             {
               test: /\.css$/,
               loader: "style-loader!css-loader"
             },
             {
               test: /\.(png|svg|jpg|gif)$/, 
               loader: "file-loader"
             }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map',
     plugins: [
       new webpack.optimize.UglifyJsPlugin()
     ]
 };
