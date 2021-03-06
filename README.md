<p align="center">
    <img src="./sources/ipad_scaned_confirm_code2.png" alt="aiyou-robot" width="100%"/>
</p>

# aiyou-robot（轻量 robot ）- TypeScript 微信机器人 MVP

## 🔍aiyou-robot 是什么鬼？

aiyou-robot 是一个 TypeScript 微信机器人，是基于 github 上一款 7.4k+的开源微信 SDK [Wechaty](https://github.com/wechaty/wechaty)。  
没错，他是一个完成了简单可用功能的微信机器人 MVP，好不好用嘞？**谁用谁知道**。

## ⚔️ 为什么要做它？

恕我一本正经的大言不惭，我要改变这个世界（咳咳，天亮了，该起床搬砖了）。  
我的产品大神，他孤独寂寞，需要一款微信机器女闺蜜，在他失眠的时候陪他聊聊天、讲讲笑话，当然最好是能够告诉他这个世界上最帅气内涵的人是谁。  
于是这个机器人就诞生了，好的，上面两句话你可以忽略。  
做这个机器人是想完成微信的这些功能：  
好友自动验证、私聊关键字回复、自动聊天、加群自动欢迎您、群消息管理、数据可视化展示、定时签到。  
这些功能有时候过于繁琐，大前端拒绝重复的劳作。高效高效高效，就是我哎哟迪奥的目标。
我是看了这篇[文章](https://juejin.im/post/5e5b2aeff265da5710438a1e)入门的，所以我这个机器人也是基于这位兄弟完成的功能下继续完成的，感谢他。

## 🚀 技术选型

玩，要什么就来什么。

- 我要好维护，所以来了一个 typescript，微软的强类型 JavaScript 语言。
- 我要带上服务器，所以来了一个 koa2，洋葱圈模型的后端 nodejs 框架。
- 我要操作数据库，所以来了一个 typeorm，实体模型映射框架，支持可以 N 多种数据库。
- 我要测试代码质量，所以来了一个 jest，脸书的 JavaScript 语言的测试框架。
- 我要快捷部署，所以来了一个 docker，便捷、安全的项目部署工具。
- 我要好用的微信 SDK，所以来了一个 wechaty，好用到哭的第三方微信 SDK 框架。

## 🔥 微信 SDK？Wechaty

作者[李卓桓](https://baike.baidu.com/item/%E6%9D%8E%E5%8D%93%E6%A1%93/6268404?fr=aladdin)有 20+年编程经验，是一位编程强者，作者牛，作品肯定不怂，玩一玩吧。

## 💉 少走弯路

先加 微信号`botorange_yeah`，一位很友善的机器人大哥 `Juzi BOT`，和他聊天，就可以进入 `Wechaty Developers'Homne`开发群，作者在里面噢，作者和星爷、马老师合过影，非常强非常强，恭喜你找到组织了。

然后去看一下这篇掘金入门文章[Wechaty|NodeJS 基于 iPad 协议手撸一个简单的微信机器人助手](https://juejin.im/post/5e5b2aeff265da5710438a1e)，先拷贝这篇文章作者的项目过来玩玩。  
你还需要 token 哟，找`Juzi BOT`机器人兄弟吧，申请一下就行了，快的话当场就答复你，慢的话等一天，再申请一次，你就能拿到试用版的 token 了，当然条件也是你要为社区做点贡献嘞，加`Juzi BOT`之后，他会告诉你的。

## ✨ 效果展示

![./sources/ipad_scan_code1.png](./sources/ipad_scan_code1.png)  
![./sources/werobot_back3.png](./sources/werobot_back3.png)  

## 📚 把需求列出来吧

- 🔨 普通需求

  1. 好友验证
  2. 私聊关键字回复
  3. 自动聊天
  4. 加群自动欢迎您

- ⚡ 再加需求

  1. 群消息管理：消息入库、敏感词警告。
  2. 统计的可视化展示。
  3. 定时任务： 签到、节日群发祝福语。

## ✂️ 模块功能

### 💉 前端

- 系统管理

  1. 好友验证配置
  2. 私聊关键字回复
  3. 自动聊天接口配置
  4. 加群自动欢迎配置
  5. 敏感词配置
  6. 个人信息配置

- 定时任务管理
  1. 签到
  2. 发言
  3. 发公告
  4. 发文件

- 群消息管理
  1. 群记录查询
  2. 群成员信息查询
  3. 群成员信息可视化
  4. 群聊天条数可视化

- 好友管理
  1. 好友信息查询
  2. 好友聊天记录查询
  3. 好友信息可视化
  4. 好友聊天条数可视化

### ⚙️ 后端

- 页面显示二维码

- 群消息管理接口
  1. 所有群记录
  2. 根据条件查询群记录

- 好友管理
  1. 好友信息查询
  2. 好友聊天记录查询
  3. 好友信息可视化
  4. 聊天条数可视化

- 系统管理
  1. 好友验证配置
  2. 私聊关键字回复
  3. 自动聊天接口配置
  4. 加群自动欢迎配置
  5. 敏感词配置
  6. 个人信息管理
