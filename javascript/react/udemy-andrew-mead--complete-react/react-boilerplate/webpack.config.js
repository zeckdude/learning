module.exports = {
  entry: './app/app.jsx', // Where to start processing code
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {

    },
    extensions: ['', '.js', '.jsx'] // Which file extensions to use
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
