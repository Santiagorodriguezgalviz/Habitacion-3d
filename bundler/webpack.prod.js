const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(
    commonConfiguration,
    {
        mode: 'production',
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
)