# 融云即时通讯 uni-app Demo

## 项目简介
本项目提供融云即时通讯能力库（IMLib）的 uni-app 示例，帮助开发者快速集成和了解融云 IM 所支持的功能。

## 运行 Demo

> [!WARNING]
> 本项目是基于 uni-app 开发的，并且使用了融云 IM 原生插件，只能使用自定义基座运行在手机端。

### 1. 获取示例项目
```bash
git clone https://github.com/rongcloud/im-uni-app-wrapper.git
cd im-uni-app-wrapper
```
### 2. 配置项目
1. 使用 HBuilderX 导入 example 目录
2. 打开 manifest.json，完成以下配置：
    - 基础配置：重新获取 uni-app 应用标识（AppID）
    - APP 原生插件配置：选择 RCUniIMV2 插件（免费）
  
### 3. 运行项目
1. 制作自定义基座：发行 -> 原生 APP -> 云打包
2. 连接手机设备
3. 使用自定义基座运行到真机

## 文档与资源

### 官方文档

- [融云 uni-app IM 官方文档](https://docs.rongcloud.cn/uni-app-imlib/quick_integration)
- [融云 uni-app IM API 文档](https://doc.rongcloud.cn/apidoc/imlib-uniapp/latest/zh_CN/)

### 相关链接

- [融云 uni-app RCUniIMV2 插件](https://ext.dcloud.net.cn/plugin?id=9227)
- [uni-app 基座介绍](https://uniapp.dcloud.net.cn/tutorial/run/run-app.html#customplayground)

## 技术支持

- [知识库](https://help.rongcloud.cn/)
- [工单](https://console.rongcloud.cn/agile/formwork/ticket/create?_=1719221853901) （需要登录融云控制台账号）