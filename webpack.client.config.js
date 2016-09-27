module.exports = {
  entry: [
    './src/client/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'public/bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.json$/, loader: 'json-loader'},
    ],
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
