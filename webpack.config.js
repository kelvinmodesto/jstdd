const webpack = require('webpack')

module.exports = {
	entry: {
		filename: './src/app.js'
	},
	output: {
		filename: './build.js'
	},
	module: {
		rules: [{
			test: /\.js?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['env', 'es2015']
					]
				}
			}
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			},
			output: {
				comments: false
			}
		})
	]
}
