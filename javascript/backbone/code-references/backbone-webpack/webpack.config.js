module.exports = {
  entry: './js/app.js', // Where to start processing code
  output: {
    path: __dirname,
    filename: './js/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Song: 'models/Song.js',
      SongView: 'views/SongView.js'
    },
    extensions: ['', '.js'] // Which file extensions to use
  }
};
