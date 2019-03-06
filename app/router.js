'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 挂载鉴权路由
  app.passport.mount('github');
 
  router.get('/api/user/:id', controller.user.info);
  router.get('*', controller.home.index);
};
