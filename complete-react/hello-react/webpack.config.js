module.exports = {
  entry: './public/app.jsx', // Where to start processing code
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Greeter: 'public/components/Greeter.jsx',
      GreeterMessage: 'public/components/GreeterMessage.jsx',
      GreeterForm: 'public/components/GreeterForm.jsx',
      Footer: 'public/components/Footer.jsx',
    },
    extensions: ['', '.js', '.jsx'] // Which file extensions to use
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
