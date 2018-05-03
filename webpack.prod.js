const webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    merge = require('webpack-merge'),
    common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    output: {
        publicPath: ''
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('proction')
        })
    ],
    optimization: {
        minimize: true
    }
});