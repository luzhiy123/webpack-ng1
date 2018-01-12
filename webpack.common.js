const webpack = require('webpack'),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/app.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/app/index.html'
        })
    ],
    output: {
        filename: '[name].js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src']
                }
            }
        }, {
            test: /\.scss$/,
            use: [{
                loader: 'style-loader' // 将 JS 字符串生成为 style 节点
            }, {
                loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
            }, {
                loader: 'sass-loader' // 将 Sass 编译成 CSS
            }]
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader' // 将 JS 字符串生成为 style 节点
            }, {
                loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
            }]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.(eot|woff|ttf|woff2)$/,
            use: {
                loader: 'file-loader'
            }
        }, {
            test: /\.svg$/,
            use: {
                loader: 'svg-inline-loader'
            }
        }]
    }
};