var path = require('path');

var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.(png|jpg|gif|bmp)$/, use: 'url-loader' },
            { test: /\.(ttf|woff|woff2|eot|svg)$/, use: ['url-loader'] },
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.vue$/, use: ['vue-loader'] }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
}