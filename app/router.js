'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/api/user/:id', controller.user.info);
  router.get('*', controller.home.index);
};
