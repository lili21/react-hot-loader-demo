const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: '[name]-[contenthash].js',
    chunkFilename: '[name]-[contenthash].chunk.js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: chunk => (
            chunk.resource &&
            /\.js$/.test(chunk.resource) &&
            /node_modules/.test(chunk.resource)
          ),
          chunks: 'initial',
          name: 'vendors',
        },
      }
    },
    runtimeChunk: { name: 'runtime' }
  }
})
