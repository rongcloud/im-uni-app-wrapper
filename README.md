本教程是为了让新手快速了解融云即时通讯能力库（IMLib）。在本教程中，您可以体验集成 SDK 的基本流程和 IMLib 的基础通信能力。
- [融云 uni-app IM 官方文档](https://doc.rongcloud.cn/im/uni-app/5.X/prepare)

- [融云 uni-app RCUniIMV2 插件](https://ext.dcloud.net.cn/plugin?id=9227)

#### 融云开发者账户

融云开发者账户是使用融云 SDK 产品的必要条件。

在开始之前，请先[前往融云官网注册开发者账户] (https://developer.rongcloud.cn/signup)。注册后，开发者后台将自动为您创建一个应用，默认为开发环境应用，使用国内数据中心。请获取该应用的 App Key，在本教程中使用。

>App Secret 用于生成数据签名，仅在请求融云服务端 API 接口时使用。本教程中暂不涉及。

如果您已拥有融云开发者账户，您可以直接选择合适的环境，创建应用。

您需要记录的应用 App Key，在本教程中使用。

应用的 App Key / Secret 是获取连接融云服务器身份凭证的必要条件，请注意不要泄露。

#### 安装插件 {#import}

1. 在[ DCloud 插件市场 ](https://ext.dcloud.net.cn/search?q=RCUniIMV2)搜索并安装原生插件[ RCUniIMV2 ](https://ext.dcloud.net.cn/plugin?id=9227)，或者手动下载安装插件放入 `nativeplugins` 目录下。

2. 在 manifest.json -> APP 原生插件配置 -> 加入原生插件 `RCUniIMV2`。

3. 运行 -> 运行到手机 -> 制作自定义调试基座。

4. 安装即时通讯 Typescript 依赖项

    请从 uni-app 插件市场安装
    [ RongCloud-IMWrapper-V2 ](https://ext.dcloud.net.cn/plugin?id=9225)

    >如果您曾使用 NPM 安装过即时通讯依赖项 `@rongcloud/imlib-uni`，请在升级时替换为从插件市场安装的方式，并注意修改初始化代码。

5. 在项目中集成引用

    ```js
    import RCIMIWEngine from "@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMEngine"
    ```

#### 初始化 {#init}

在使用 SDK 所有功能之前，必须先调用此方法初始化 SDK。

初始化时需要传入上文获取的 App Key。引擎配置请参见官方文档。

```ts
let appKey = 'xxx';
// 初始化配置，没有可传 {}
let options = {};
let engine = null;
// 需要使用 await 或者 .then
RCIMIWEngine.create(appKey, options).then((res) => {
  // 这里打印 {} 代表初始化成功
  console.log('初始化引擎res---', res);
  engine = res;
});
```

以上提供了一个简化的初始化示例，关于初始化的更多配置请参见官方文档。


#### 连接融云 {#connect}

应用客户端在使用融云即时通讯功能前必须连接融云服务器，连接时必须传入 Token 参数。Token 是与用户 ID 对应的身份验证令牌，是应用客户端用户在融云的唯一身份标识。

在实际业务运行过程中，应用客户端需要通过应用的服务端向融云服务端申请取得 Token，具体方法可参考 [Server API 获取 Token]。

在本教程中，为了快速体验和测试 SDK，我们从开发者后台「北极星」开发者工具箱 [IM Server API 调试]页面获取 Token 用于测试。

1. 访问开发者后台「北极星」开发者工具箱的 [IM Server API 调试]页面。

1. 在**用户**标签下，找到 **用户服务** > **获取 Token** 接口。

1. 根据页面提示，填写 **userId**，并提交。

    在以下示例中，我们将获取到 **userId** 为 1 的用户的 Token。

    提交后，可在左侧**结果**中取得 Token 字符串。

1. 设置获取连接状态的监听器。使用 setOnConnectionStatusChangedListener 监听 IM 连接状态的变化，连接状态发生变化时返回 RCIMIWConnectionStatus。详见[连接状态监听](https://doc.rongcloud.cn/im/uni-app/5.X/noui/connect/listener)。

    ```ts
    engine.setOnConnectionStatusChangedListener(({status}) => {
      console.log('连接状态变化监听：', status);
    });
    ```

2. 使用上方获取的 Token, 连接到融云服务器。

    ```ts
    let token = 'xxx';
    // 默认为 0 即可
    let timeout = 0;
    let callback = {
      onDatabaseOpened:({code}) => {
        //本地数据库打开状态
      },
      onConnected:({code, userId}) => {
        // 连接成功
      }
    };
    let code = await engine.connect(token, timeout, callback);
    ```

SDK 已实现自动重连机制。

#### 监听消息 {#msg-listener}

实现此功能需要开发者实现消息监听回调。

##### 代码示例 {#msg-code}

设置消息接收监听器，用于接收所有类型的实时或者离线消息。

  ```ts
  engine.setOnMessageReceivedListener((res) => {
    console.log('收到的消息 监听',res);
  });
  ```
  - `res.message` 接收到的消息对象。
  - `res.left` 当客户端连接成功后，服务端会将所有补偿消息以消息包的形式下发给客户端，最多每 200 条消息为一个消息包，即一个 Package, 客户端接受到消息包后，会逐条解析并通知应用。left 为当前消息包（Package）里还剩余的消息条数。
  - `res.offline` 消息是否离线消息。
  - `res.hasPackage` 是否在服务端还存在未下发的消息包。


#### 发送消息 {#sendmessage}

```ts
import RCIMIWEngine from "@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMEngine"
import { RCIMIWConversationType } from "@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMDefines"

// 会话类型，使用 RCIMIWConversationType 需要 import 导入这个枚举类型
let conversationType = RCIMIWConversationType.private;
// 目标 id
let targetId = 'xxx';
// 频道 id，没有可传空字符串
let channelId = '';
// 消息内容
let text = '一条文本消息';
// 创建消息实体
let message = await engine.createTextMessage(conversationType, targetId, channelId, text);
// 将构造的消息发送出去
let callback = {
  onMessageSaved:(res) => {
    // 消息保存到本地数据库的回调
  },
  onMessageSent:(res) => {
    // 消息发送结果的回调
  }
};
let code = await engine.sendMessage(message, callback); 
```

#### 退出登录

```ts
// 退出登录后是否继续接收推送
let receivePush = true
let code = await engine.disconnect(receivePush);
```

#### 引擎销毁

```ts
let code = await engine.destroy();
```

