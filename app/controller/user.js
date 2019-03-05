'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async info() {
    const { ctx } = this;
    const userId = ctx.params.id;
    const userInfo = await ctx.service.user.find(userId);
    this.logger.info(userInfo);
    ctx.body = userInfo;
  }

}

module.exports = UserController;
