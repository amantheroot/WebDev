var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpack = require('clean-webpack-plugin');
var extracttextplugin =  new ExtractTextPlugin({
	filename: "style.css"
});

module.exports = {
	entry: "./src/js/app.js",
	output: {
		path: __dirname+"/dist",
		filename: 'script.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['es2017']
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
			}
		]
	},
	plugins: [
		extracttextplugin,
		new HtmlPlugin({
			template: 'src/index.html'
		}),
		new CleanWebpack(['dist'])
	],
	mode: 'production'
};