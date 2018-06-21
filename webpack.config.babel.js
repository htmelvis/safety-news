import webpack from 'webpack';
import path from 'path';

const config = {
  context: __dirname,
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: './client/js/app',
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js','.jsx','.json','.styl']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      { 
        enforce: 'pre', 
        test: /\.js?$/, 
        loader: 'eslint-loader', 
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['react', 'es2016', 'env']
          }
        }]
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        include: path.resolve('client/stylus'),
        use: ['style-loader','css-loader', 'stylus-loader']
      }
    ]
  }
};

export default config;