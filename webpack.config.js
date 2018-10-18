const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  console.log('env:', env);
  const isProd = env === 'production';  // set up in package.json.
  const CSSExtract = new ExtractTextPlugin('bundle.css');

  return {
    entry: [
      './src/app.js',
      './src/scss/app.scss'
    ],
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          }),
          test: /\.s?css$/,
        }
      ],
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProd ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      port: 8888,
    },
  };
}
