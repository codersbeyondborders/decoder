const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Remove default CRA rules for these file types
      webpackConfig.module.rules[1].oneOf = webpackConfig.module.rules[1].oneOf.filter(
        rule => !rule.test || 
        (!String(rule.test).includes('.mp3') && 
         !String(rule.test).includes('.webp') && 
         !String(rule.test).includes('.png'))
      );

      // Add custom rules for media files
      webpackConfig.module.rules.push(
        {
          test: /\.(mp3)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
                publicPath: '/',
              },
            },
          ],
        },
        {
          test: /\.(webp|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
                publicPath: '/',
              },
            },
          ],
        }
      );

      return webpackConfig;
    },
  },
};
