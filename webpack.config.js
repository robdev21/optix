'use strict';
var ESLintPlugin = require('eslint-webpack-plugin');

var path = require('path');

module.exports = (env, argv) => ({
    entry: {
        auth: [
            path.resolve(__dirname, '/optix/src/index.js'),
        ]
    },
    output: {
        path: path.resolve(__dirname, './public/build/'),
        filename: 'optix.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: {
                    loader: 'url-loader',
                },
            },
            {
                test: /\.js$|jsx/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new ESLintPlugin()
    ]
});
