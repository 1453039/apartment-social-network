const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isTest = process.env.NODE_ENV === 'test';

module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  output: {
    path       : path.join(__dirname, 'public'),
    filename   : 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test    : /\.jsx?$/,
        loader  : 'babel-loader',
        exclude : /node_modules/,
        include : path.join(__dirname, 'src')
      },
      {
        test    : [/\.sass$/, /\.scss$/],
        loaders  : ['style-loader', 'css-loader', 'sass-loader'],
        include : path.join(__dirname, 'public')
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.pug$/,
        include: path.join(__dirname, 'public'),
        loaders: [ 'pug-loader' ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test    : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader  : 'file-loader'
			},
			{
				test: /\.mp4$/,
				loader: 'file-loader',
			}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'public/index.pug',
      inject: true
    })
  ],
  node: {
    fs: "empty"
  }
};