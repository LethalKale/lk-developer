
   
const withFonts = require('next-fonts');
const withImages = require('next-images');
const mainPath = '/';
module.exports = withFonts({
  webpack(config, options) {
    return config;
  },
  ...withImages(),
    future: {
      distDir: '_next',
      trailingSlash: true,
      webpack5: true,
      // basePath: `${mainPath}`,
      images: {
        domains: ['developer.lethalkale.com'],
        // path: `${mainPath}/`,
      },
      exportPathMap() {
          return {
              '/': { page: '/' }
          };
      },
      assetPrefix: 'http://developer.lethalkale.com',
    },
});