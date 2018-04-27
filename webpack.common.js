const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/app/app.js',
        react: './src/app/react.jsx'
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['vendor', 'main'],
            template: 'src/app/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['vendor', 'react'],
            template: 'src/app/react.html',
            filename: 'react.html'
        }),
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('css/[name].[hash].css').replace('css/js', 'css');
            },
            allChunks: true
        })
    ],
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        runtimeChunk: {
            name: 'vendor'
        },
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'initial',
                    minSize: 1
                }
            }
        }
    },
    module: {
        rules: [{
            test: /\.(html)$/,
            use: {
                loader: 'html-loader',
                options: {
                    attrs: [':data-src'],
                    minimize: true
                }
            }
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader'],
                publicPath: '../'
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader',
                publicPath: '../'
            })
        }, {
            test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: 'assets/[name].[ext]'
                }
            }
        }, {
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader'
            ]
        }, {
            test: /\.xml$/,
            use: [
                'xml-loader'
            ]
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'ng-annotate-loader',
                options: {
                    ngAnnotate: 'ng-annotate-patched',
                }
            }, {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }]
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }]
        }]
    }
};