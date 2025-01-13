const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const imageRule = webpackConfig.module.rules[1].oneOf.find(
        rule => rule.test && String(rule.test).includes('png')
      );

      if (imageRule) {
        // Modify the image rule to include webp
        imageRule.test = /\.(png|jpg|jpeg|gif|webp)$/;
      }

      // Add rule for audio files
      webpackConfig.module.rules[1].oneOf.unshift({
        test: /\.(mp3|wav)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]'
        }
      });

      return webpackConfig;
    }
  }
};
