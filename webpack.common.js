const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ngAntd = require('ng-antd');

const webpackConfig = {
    entry: {
        main: './src/app/app.js',
        ng2: './src/app/app2.js',
        react: './src/app/react.jsx',
        react2: './src/app/react2.jsx'
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['ng-vendor', 'commons',  'main'],
            template: 'src/app/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['ng-vendor', 'commons',  'ng2'],
            template: 'src/app/index.html',
            filename: 'index2.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['react-vendor', 'commons', 'react'],
            template: 'src/app/react.html',
            filename: 'react.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['react-vendor', 'commons', 'react2'],
            template: 'src/app/react.html',
            filename: 'react2.html'
        })
    ]
};

ngAntd(webpackConfig);
module.exports = webpackConfig;