module.exports = (env, argv) => {
  const { mode } = argv;

  return {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              query: {
                presets: ['@babel/preset-env'],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader?removeSVGTagAttrs=false',
        },
      ],
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: mode === 'production' ? 'bundle.js' : `${mode}.bundle.js`,
      library: 'AlertCursive',
      libraryTarget: 'umd',
      libraryExport: 'default',
    },
  };
};
