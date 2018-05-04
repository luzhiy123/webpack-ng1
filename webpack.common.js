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
            chunks: ['ng-vendor', 'commons', 'main'],
            template: 'src/app/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['react-vendor', 'commons', 'react'],
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
        splitChunks: {
            cacheGroups: {
                ngVendor: {
                    test: (module, chunks) => {
                        const names = chunks
                            .map(c => c.name)
                            .concat(module.nameForCondition ? [module.nameForCondition()] : [])
                            .filter(Boolean);
                        let res = [false, false, true];
                        for (const name of names) {
                            if (name.indexOf('node_modules') > -1) res[0] = true;
                            if (name == 'main') res[1] = true;
                            if (name == 'react') res[2] = false;
                        }
                        return res[0] && res[1] && res[2];
                    },
                    name: 'ng-vendor',
                    chunks: 'all'
                },
                reactVendor: {
                    test: (module, chunks) => {
                        const names = chunks
                            .map(c => c.name)
                            .concat(module.nameForCondition ? [module.nameForCondition()] : [])
                            .filter(Boolean);

                        let res = [false, true, false];
                        for (const name of names) {
                            if (name.indexOf('node_modules') > -1) res[0] = true;
                            if (name == 'main') res[1] = false;
                            if (name == 'react') res[2] = true;
                        }
                        return res[0] && res[1] && res[2];
                    },
                    name: 'react-vendor',
                    chunks: 'initial'
                },
                commons: {
                    test: (module, chunks) => {
                        const names = chunks
                            .map(c => c.name)
                            .concat(module.nameForCondition ? [module.nameForCondition()] : [])
                            .filter(Boolean);

                        let res = [false, false, false];
                        for (const name of names) {
                            if (name.indexOf('node_modules') > -1) res[0] = true;
                            if (name == 'main') res[1] = true;
                            if (name == 'react') res[2] = true;
                        }
                        return res[0] && res[1] && res[2];
                    },
                    chunks: 'initial',
                    name: 'commons'
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
                    plugins: [
                        [
                            'import',
                            {
                                'libraryName': 'antd',
                                'libraryDirectory': 'es',
                                'style': 'css'
                            }
                        ]
                    ],
                    presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }]
        }]
    }
};