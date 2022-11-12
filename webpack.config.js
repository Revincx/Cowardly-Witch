const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.MODE

module.exports = {
  mode,
  entry: {
    app: './src/scripts/app.js',
  },
  output: {
    path: `${ __dirname }/public/scripts`,
    filename: 'app.min.js',
    assetModuleFilename: '../assets/[name]-[hash][ext]'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'import-glob-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["@babel/react","@babel/env"]
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        type: 'asset/resource'
      }
      // {
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 51200,
      //         name: '../images/other/[name].[ext]'
      //       }
      //     }
      //   ]
      // }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '../stylesheets/style.css'
    })
  ],
  devServer: {
    historyApiFallback: true,
    // contentBase: `${ __dirname }/public`,
    static: {
      directory: `${ __dirname }/public`
    },
    port: 3000,
    open: true
  }
}
