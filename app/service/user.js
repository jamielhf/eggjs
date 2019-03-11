'use strict';
const Service = require('egg').Service;


class UserService extends Service {
  async find(uid) {
    this.logger.info(uid);
    const user = await this.app.model.User.findByUid(uid);

    this.logger.info(user);
    if (!user) {
      return { msg: null };
    }
    return user;
  }
  /**
   * 第三方登陆的uid查询用户信息
   * @param {*} uid 用户uid
   * @return {*} result
   */
  async findUserByAuthUid(uid) {
    const result = await this.app.model.query(
      'SELECT * FROM authorization , users WHERE authorization.user_id=users.uid AND authorization.uid=?',
      [ uid ]
    );
    // console.log(result);
    return result;
  }
  /**
   * 注册用户users表
   * @param {*} {} 用户信息
   * @return {*} res
   */
  async register({ uid, username, photo }) {
    const result = await this.app.model.User.create(
      {
        uid,
        username,
        photo,
      });
    return result;
  }
}

module.exports = UserService;
