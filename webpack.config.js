module.exports = {
  entry: './src/index.js',
  rules: [
    { 'react/jsx-filename-extension': [0] },
    {
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      ],
    },
    {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    },
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
