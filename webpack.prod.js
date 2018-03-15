const webpack = require('webpack'),
    merge = require('webpack-merge'),
    common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    output: {
        publicPath: ''
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    optimization: {
        minimize: true
    }
});