'use strict';

const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513765449219_5858';

  config.view = {
    root: path.join(appInfo.baseDir, 'app/view'),
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.security = {
    csrf: false,
  };
  // gifhub 配置
  config.passportGithub = {
    key: '741e6d458f9c8f27fb6f',
    secret: 'c1465ac92cf1fef12a95f282b8de1d39dd4dfe8a',
    // callbackURL: '/passport/github/callback',
    // proxy: false,
  };

  return config;
};
