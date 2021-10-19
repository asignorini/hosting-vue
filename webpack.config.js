const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            title: 'Hostingar'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
        ]
    },
}
