// import webpack from 'webpack';


export default agent => {
    // 在这里写你的初始化逻辑
    console.log(agent);
    // 也可以通过 messenger 对象发送消息给 App Worker
    // 但需要等待 App Worker 启动成功后才能发送，不然很可能丢失
    agent.messenger.on('egg-ready', () => {
      const data = 1;
      agent.messenger.sendToApp('xxx_action', data);
    });
  };