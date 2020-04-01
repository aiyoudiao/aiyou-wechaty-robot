# aiyou-wechaty-robot
这是2020年哎哟迪奥基于wechaty做的一个typescript版机器人。技术栈：typescript（编程语言）、koa2（服务器端框架）typeorm（数据库映射框架）、jest（测试框架）、docker（线上部署）、wechaty（微信机器人SDK）。

## 使用

### 注意事项

node > 10.0
npm > 6.0.0

### 使用步骤

1. 先配置根目录下ormconfig.js中的数据库连接信
2. 然后在根目录下按照顺序运行 [程序命令](#程序命令)
3. 最后在浏览器地址栏输入地址：`http://localhost:8080/api/bot/start` 来开启机器人服务
4. 之后在浏览器地址栏输入地址：`http://localhost:8080/static/index.html`来扫描微信二维码，来进行微信机器人的授权登录流程。

### 安装依赖问题

切记安装比较新的，因为这样就能够少遇到坑

1. 到[npm官网](https://www.npmjs.com/)上去搜索 `wechaty`和`wechaty-puppet-padplus`,
2. 然后查看最新版本号，不一定最新的版本就是latest
3. 最后通过 `npm i wechaty@版本号 wechaty-puppet-padplus@版本号 -S`的方式下载
4. 截止2020-03-17日，我下载的是`npm i -S wechaty@0.35.1;npm i -S wechaty-puppet-padplus@0.5.24;`

### 可能会遇见的bug

1. 依赖安装问题，让你去安装VC.exe之类的，你需要打开电脑操作系统中的的控制面板 --> 然后选择启用或者关闭windows操作系统 --> 选中.NET Framework 3.5 和 .NET Framework4.7高级服务 --> 最后就可以了。
2. grpc 网关问题，这个可能是你的无线网网络问题，需要你开手机热点来连接了，暂时不确实是不是你的无线网在服务器的黑名单中。

#### 程序命令
```
npm i
npm run start:dev
```

## 工具

### typescript 模型生成

####  安装
npm install -g schemats

#### 使用
schemats generate -c mysql://username:password@localhost/aiyou-wechaty-robot-db -t user -s aiyou-wechaty-robot-db

schemats generate -c mysql://root:123456@localhost/aiyou-wechaty-robot-db  -t users -o osm.ts