const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require("./webpack.dev");

module.exports = merge(common, {
    mode: "development",
    entry: "./public/javascripts/index.js",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            template: "!!raw-loader!" + path.join(__dirname, "./views/index.ejs"),
            filename: "index.ejs"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }

}); 