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
}

module.exports = UserService;