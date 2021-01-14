module.exports = {
  entry: './src/index.js',
  rules: [
    { 'react/jsx-filename-extension': [0] },
    {
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        },
      ],
    },
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
