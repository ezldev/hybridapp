const ngToolsWebpack = require('@ngtools/webpack');
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: './src/bootstrap.ts',
  output: {
    filename: 'dist/build.js'
  },
  devtool: 'source-map',
  plugins: [
    new ngToolsWebpack.AotPlugin({
      tsConfigPath: './tsconfig.json'
    }),
		new webpack.LoaderOptionsPlugin({
			minimize: false,
			debug: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: true, 
      output: {
        comments: true
      }, 
      mangle: {
        screw_ie8: true
      }, 
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      },
      sourceMap: true
		})
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.ts$/, loader: '@ngtools/webpack' }
    ]
  }
};