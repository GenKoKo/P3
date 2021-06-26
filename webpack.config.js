const path = require("path");
module.exports = {
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "build"),
        publicPath: '/'
    },
    mode: "development",
    module:{
        rules:[
            {
                test: /\.scss$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              }

        ]
    },
    devServer: {
        contentBase: "./build",
        historyApiFallback: true
    }
};