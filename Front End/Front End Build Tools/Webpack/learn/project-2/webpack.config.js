var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpack = require('clean-webpack-plugin');
var extracttextplugin =  new ExtractTextPlugin({
	filename: "main.css"
});

module.exports = {
	entry: "./src/js/app.js",
	output: {
		path: __dirname+"/dist",
		filename: 'bundle.js',
		// publicPath: "/dist"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2015']
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: extracttextplugin.extract({
					use: ['css-loader','sass-loader']
				})
			},
			{
				test: /\.html$/,
				use: ['html-loader']
			},
			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							filename: '[name].[ext]',
							outputPath: 'img/',
							publicPath: 'img/'
						}
					}
				]
			},
			// {
			// 	test: /\.html$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				filename: '[name].[ext]'
			// 			}
			// 		}
			// 	],
			// 	exclude: __dirname+"/src/index.html"
			// }
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		extracttextplugin,
		new HtmlPlugin({
			filename: 'index.html',
			template: 'src/index.html'
		}),
		new HtmlPlugin({
			filename: 'more.html',
			template: 'src/more.html'
		}),
		new CleanWebpack(['dist'])
	]
};