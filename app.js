module.exports = app => {
  app.passport.verify(async (ctx, user) => {
      // 检查用户
      // console.log(user);
      const auth = await app.mysql.get('authorization',{
        uid: user.id,
      });
      console.log('auth', auth);
      if(!auth) {
        const user_id = Math.random().toString(16).substr(2,20);
        const res = await ctx.service.user.authInsert({
          uid: user.id,
          user_id,
        });
        // 成功
        if(res.affectedRows === 1) {
          // 调用 service 注册新用户
          const newUser = await ctx.service.user.register({
            uid: user_id,
            username: user.name,
            photo: user.photo,
          });
         
          if(newUser.affectedRows === 1) {
            console.log('已创建新用户', newUser);
            return {
              uid: user_id,
              username: user.name,
              photo: user.photo,
            }
          }
        }
      } else {
        const res = await ctx.service.user.findUserByAuthUid(auth.uid);
        console.log(res);
        return res;
      }
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
}