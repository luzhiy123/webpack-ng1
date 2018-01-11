const webpack = require('webpack'),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),

    node_modules = path.resolve(__dirname, 'node_modules');
    // pathToAngular = path.resolve(node_modules, 'angular/index.js'),
    // pathToAngularUiRouter = path.resolve(node_modules, 'angular-ui-router/release/angular-ui-router.js');

module.exports = {
    entry: {
        // vendors: [
        //     'angular',
        //     'angular-ui-router'
        // ],
        app: './src/app/app.js'
    },
    resolve: {
        alias: {
            // 'angular': pathToAngular,
            // 'angular-ui-router': pathToAngularUiRouter
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'src/app/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jquery: 'jquery',
            // angular: 'angular'
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
            // test: /\.js$/,
            // exclude: /(node_modules|bower_components)/,
            // use: {
            //     loader: 'babel-loader',
            //     options: {
            //         presets: ['@babel/preset-env'],
            //         plugins: ['@babel/transform-runtime']
            //     }
            // }
        }]
    }
};