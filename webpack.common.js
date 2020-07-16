const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./public/javascripts/index.js",
    plugins: [
        new HtmlWebpackPlugin({
            template: "!!raw-loader!" + path.join(__dirname, "./views/index.ejs"),
            filename: "index.ejs"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.ejs$/,
                use: ["html-loader"]
            }
        ]
    }

}; 