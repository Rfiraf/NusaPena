const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	entry: {
		app: path.resolve(__dirname, "src/scripts/index.js"),
	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "src/templates/index.html"),
		}),
	],
};