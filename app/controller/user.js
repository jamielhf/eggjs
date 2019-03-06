'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    const userId = ctx.params.id;
    const userInfo = await ctx.service.user.find(userId);
    this.logger.info(userInfo);
    // this.logger.info(12, ctx.session.passport.user[0].uid);
    ctx.body = userInfo;
  }

}

module.exports = UserController;
