const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [new HtmlWebpackPlugin()],
	module: {
    rules: [
			{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}