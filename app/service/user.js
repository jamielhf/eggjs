const Service = require('egg').Service;



class UserService extends Service {
  async find(uid) {
    this.logger.info(uid);
    const user = await this.app.mysql.get('users',{uid : uid});

    this.logger.info(user);
    if(!user) {
      return {msg : null};
    }
    return user;
  }
  /**
   * 加入到authorization表
   * @param {*} param0 
   */
  async authInsert({uid, user_id}) {
    const result = await this.app.mysql.insert('authorization',
    { 
      uid,
      user_id,
      provider: 'github',
    });
    return result
  }
  /**
   * 第三方登陆的uid查询用户信息
   * @param {*} uid 
   */
  async findUserByAuthUid(uid) {
    const result = await this.app.mysql.query(
      'SELECT * FROM authorization , users WHERE authorization.user_id=users.uid AND authorization.uid=?',
      [uid]
      );
    // console.log(result);
    return result;
  }
  /**
   * 注册用户 users表
   * @param {*} param0 
   */
  async register({uid, username, photo}) {
    const result = await this.app.mysql.insert('users',
    { 
      uid,
      username,
      photo,
    });
    return result
  }
}

module.exports = UserService;