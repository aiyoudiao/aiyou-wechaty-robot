const env = process.env.NODE_ENV;
/*
 * @Descripttion: aiyoudiao
 * @version: 1.0.0
 * @Author: aiyoudiao
 * @Date: 2020-03-12 11:24:27
 * @LastEditTime: 2020-03-25 23:41:47
 * @LastEditors: aiyoudiao
 * @FilePath: \my-robot\ormconfig.js
 */


module.exports = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'aiyou-wechaty-robot-db',
  charset: 'utf8mb4',
  synchronize: true,
  logging: false,
  entities: [`${env === 'development' ? 'src' : 'dist/src'}/app/orm-core/entity/*{.ts,.js}`]
};
