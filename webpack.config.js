const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
    app: ['./src/index.js', './src/sass/index.scss'],
  },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].js',
		publicPath: '/'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use:
        {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env'],
          }
        }
      },
			{ test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            	loader: 'css-loader'
	          },
	          {
	            loader:
	              'sass-loader'
          }]
        })
      }
    ]
	},
  devtool: 'inline-source-map',
	plugins: [
        new ExtractTextPlugin({
            filename: 'css/styles.css',
        }),
        new CleanWebpackPlugin(
          ['dist']
        ),
    ]
}
