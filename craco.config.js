const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Safely find the rules array
      const rulesArray = webpackConfig.module.rules.find(
        rule => Array.isArray(rule.oneOf)
      );

      if (!rulesArray) {
        // If we can't find the rules, add our rules to the end of the array
        webpackConfig.module.rules.push({
          oneOf: [
            {
              test: /\.(mp3|wav)$/,
              type: 'asset/resource',
              generator: {
                filename: 'static/media/[name].[hash][ext]'
              }
            },
            {
              test: /\.(png|jpg|jpeg|gif|webp)$/,
              type: 'asset/resource',
              generator: {
                filename: 'static/media/[name].[hash][ext]'
              }
            }
          ]
        });
      } else {
        // Add our rules to the beginning of the oneOf array
        rulesArray.oneOf.unshift(
          {
            test: /\.(mp3|wav)$/,
            type: 'asset/resource',
            generator: {
              filename: 'static/media/[name].[hash][ext]'
            }
          },
          {
            test: /\.(png|jpg|jpeg|gif|webp)$/,
            type: 'asset/resource',
            generator: {
              filename: 'static/media/[name].[hash][ext]'
            }
          }
        );
      }

      return webpackConfig;
    }
  }
};
