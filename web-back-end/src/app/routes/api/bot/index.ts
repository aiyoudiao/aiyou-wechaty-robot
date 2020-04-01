/*
 * @Descripttion: aiyoudiao
 * @version: 1.0.0
 * @Author: aiyoudiao
 * @Date: 2020-03-10 11:33:01
 * @LastEditTime: 2020-03-30 01:39:02
 * @LastEditors: aiyoudiao
 * @FilePath: \my-robot\src\app\routes\api\bot\index.ts
 */

import { start } from '@ormController/index';
import { table, searchByFormData } from '@ormController/group-record-controller';
import { currentBotInfo } from '@ormController/bot-info-controller';

 import Router from 'koa-router';
 const router = new Router();
 router.prefix('/bot/');

 router.get('/start', start);
 router.get('/table', table);
 router.get('/searchByFormData', searchByFormData);
 router.get('/currentBotInfo', currentBotInfo);
//  router.use(user.routes(), user.allowedMethods());
//  router.use(project.routes(), project.allowedMethods());

 router.get('/', async ctx => {
   ctx.body = 'api/bot';
 });

 export default router;
