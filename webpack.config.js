const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
	context: path.resolve(__dirname, 'src'),
	entry: './index.ts',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		assetModuleFilename: 'assets/[name][ext][query]',
	},
	resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"],
    // Add support for TypeScripts fully qualified ESM imports.
    extensionAlias: {
     ".js": [".js", ".ts"],
     ".cjs": [".cjs", ".cts"],
     ".mjs": [".mjs", ".mts"]
    }
  },
	plugins: [
		new HtmlWebpackPlugin({
				template: path.resolve(__dirname, './src/index.html'),
				filename: 'index.html',
		})
	],
	module: {
    rules: [
			{
				test: /\.css$/i,
        use: ["style-loader", "css-loader", "sass-loader",],
      },
			{ test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }
    ],
  },
}