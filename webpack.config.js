module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(svg)$/,
        use: [
          {
            loader: 'raw-loader',
          }
        ]
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'editorjs-background.bundle.js',
    library: 'BackgroundTune',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
};
