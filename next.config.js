const path = require('path');

module.exports = () => {
  return {
    target: 'serverless',
    // useFileSystemPublicRoutes: false,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
      return config
    }
  }
};