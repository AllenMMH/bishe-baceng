/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    cors: { // 解决跨域
      // origin: '*', // 如果有credential: true 那么origin将不能写通配符设置
      origin: (ctx) => {
        return ctx.request.header.origin
      },

      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      credentials: true //有些时候需要携带凭证 注意单词一定不要写错 大小写 加不加s
    },
    security : {
      csrf: {
        enable: false,
        ignoreJSON: true
      },
      domainWhiteList: ['*']//[]中放放出的白名单，*代表所有
    },

    // mysql : {
    //   // 单数据库信息配置
    //   client: {
    //     // host -- localhost  127.0.0.1 
    //     host: 'http://120.78.175.184',
    //     // 端口号
    //     port: '8889',
    //     // 用户名 ---数据库的用户名
    //     user: 'mydb',
    //     // 密码  ---数据库密码
    //     password: 'mydb',
    //     // 数据库名
    //     database: 'mydb',
    //   },
    //   // 是否加载到 app 上，默认开启
    //   app: true,
    //   // 是否加载到 agent 上，默认关闭
    //   agent: false,
    // },

    multipart : {
      mode: 'file',
    }

  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1648481484406_288';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
