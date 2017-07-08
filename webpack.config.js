var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
      app: './js/app.js',
      test: './js/test.js'
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
             { test: /\.css$/,
               loader: "style-loader!css-loader"
             },
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
