'use strict';

module.exports = app => {
  app.passport.verify(async (ctx, user) => {
    // 检查用户
    const auth = await ctx.model.Authorizations.findUserByAuthUid(user.id);
    console.log('auth', auth);
    if (!auth) {
      const user_id = Math.random().toString(16).substr(2, 20);
      const res = await ctx.model.Authorizations.create({
        uid: user.id,
        user_id,
        provider: 'github',
      });
      console.log(222, res);
      // 成功
      if (res) {
        const u = {
          uid: user_id,
          name: user.name,
          photo: user.photo,
          type: 'user',
        };
        // 注册新用户
        const newUser = await ctx.model.User.create(u);

        if (newUser) {
          console.log('已创建新用户', newUser);
          return u;
        }
        return {
          status: 500,
          msg: '数据保存失败',
        };
      }
      return {
        status: 500,
        msg: '数据保存失败',
      };

    }
    const res = await ctx.service.User.findUserByAuthUid(auth.uid);
    console.log(res);
    return res;

  });

  // 将用户信息序列化后存进 session 里面，一般需要精简，只保存个别字段
  app.passport.serializeUser(async (ctx, user) => {
    console.log('session', user);
    return user;
  });
  // 反序列化后把用户信息从 session 中取出来，反查数据库拿到完整信息
  app.passport.deserializeUser(async (ctx, user) => {
    // 处理 user
    // ...
    return user;
  });
};
