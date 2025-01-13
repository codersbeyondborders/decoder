const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const rules = webpackConfig.module.rules[1].oneOf;
      
      // Add rules for audio files
      rules.unshift({
        test: /\.(mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      });

      // Add rules for images if needed
      rules.unshift({
        test: /\.(webp|png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ],
      });

      return webpackConfig;
    },
  },
};
