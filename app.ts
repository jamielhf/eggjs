export default app => {
    console.log(333);
    app.messenger.on('xxx_action', data => {
       console.log(data);
    });
  };