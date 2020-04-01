/*
 * @Descripttion: 好友信息的业务逻辑
 * @version: 1.0.0
 * @Author: aiyoudiao
 * @Date: 2020-03-30 02:20:17
 * @LastEditTime: 2020-03-30 22:34:20
 * @LastEditors: aiyoudiao
 * @FilePath: \my-robot\src\app\orm-core\service\bot-friend-service.ts
 */

 import { getManager } from 'typeorm';
 import { BotFriend } from '@orm/entity/bot-friend';

export class BotFriendService {
  static async insertFriendInfo(info: BotFriend) {
    const botFriendInfoRepository = getManager().getRepository(BotFriend);
    const newbotFriendInfo = botFriendInfoRepository.create(info);

    await botFriendInfoRepository.save(newbotFriendInfo);

    return true;
  }
}
