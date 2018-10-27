const path = require('path');
const SRC_DIR = path.join(__dirname, './client/src');
const DIST_DIR = path.join(__dirname, './client/dist');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    rules: [{
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }]
      }
    ],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './client/dist'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
};