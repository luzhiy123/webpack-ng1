const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js'),
    apiService = 'http://localhost:8008';

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        publicPath: '/home/',
        historyApiFallback: {
            index: '/home/'
        },
        hot: true,
        proxy: {
            '/api': apiService,
            '/config.js': apiService,
            '/static': apiService,
            '/media/contents': apiService,
            '/favicon.ico': apiService
        }
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('dev')
        })
    ],
    optimization: {
        minimize: false
    }
});