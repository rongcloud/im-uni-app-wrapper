export var RCIMIWPushType;
(function (RCIMIWPushType) {
    /**
     * iOS
     */
    RCIMIWPushType[RCIMIWPushType["iOS"] = 0] = "iOS";
    /**
     * 未知类型
     */
    RCIMIWPushType[RCIMIWPushType["unknown"] = 1] = "unknown";
    /**
     * 融云自己的，不再使用
     */
    RCIMIWPushType[RCIMIWPushType["rong"] = 2] = "rong";
    /**
     * 华为推送
     */
    RCIMIWPushType[RCIMIWPushType["huawei"] = 3] = "huawei";
    /**
     * 小米推送
     */
    RCIMIWPushType[RCIMIWPushType["xiaomi"] = 4] = "xiaomi";
    /**
     * FCM 推送
     */
    RCIMIWPushType[RCIMIWPushType["googleFCM"] = 5] = "googleFCM";
    /**
     * GCM 推送
     */
    RCIMIWPushType[RCIMIWPushType["googleGCM"] = 6] = "googleGCM";
    /**
     * 魅族推送
     */
    RCIMIWPushType[RCIMIWPushType["meizu"] = 7] = "meizu";
    /**
     * VIVO 推送
     */
    RCIMIWPushType[RCIMIWPushType["vivo"] = 8] = "vivo";
    /**
     * OPPO 推送
     */
    RCIMIWPushType[RCIMIWPushType["oppo"] = 9] = "oppo";
    /**
     * 华为荣耀推送
     */
    RCIMIWPushType[RCIMIWPushType["honor"] = 10] = "honor";
})(RCIMIWPushType || (RCIMIWPushType = {}));
export var RCIMIWImportanceHW;
(function (RCIMIWImportanceHW) {
    /**
     * 表示消息为服务与通讯类。消息提醒方式为锁屏+铃声+震动。
     */
    RCIMIWImportanceHW[RCIMIWImportanceHW["normal"] = 0] = "normal";
    /**
     * 表示消息为资讯营销类。消息提醒方式为静默通知，仅在下拉通知栏展示。
     */
    RCIMIWImportanceHW[RCIMIWImportanceHW["low"] = 1] = "low";
})(RCIMIWImportanceHW || (RCIMIWImportanceHW = {}));
export var RCIMIWMessageOperationPolicy;
(function (RCIMIWMessageOperationPolicy) {
    /**
     * 本地
     */
    RCIMIWMessageOperationPolicy[RCIMIWMessageOperationPolicy["local"] = 0] = "local";
    /**
     * 远端
     */
    RCIMIWMessageOperationPolicy[RCIMIWMessageOperationPolicy["remote"] = 1] = "remote";
    /**
     * 本地和远端
     */
    RCIMIWMessageOperationPolicy[RCIMIWMessageOperationPolicy["localRemote"] = 2] = "localRemote";
})(RCIMIWMessageOperationPolicy || (RCIMIWMessageOperationPolicy = {}));
export var RCIMIWNativeCustomMessagePersistentFlag;
(function (RCIMIWNativeCustomMessagePersistentFlag) {
    /**
     * 不存储，不计数
     */
    RCIMIWNativeCustomMessagePersistentFlag[RCIMIWNativeCustomMessagePersistentFlag["none"] = 0] = "none";
    /**
     * 在本地只存储，但不计入未读数
     */
    RCIMIWNativeCustomMessagePersistentFlag[RCIMIWNativeCustomMessagePersistentFlag["persisted"] = 1] = "persisted";
    /**
     * 在本地进行存储并计入未读数
     */
    RCIMIWNativeCustomMessagePersistentFlag[RCIMIWNativeCustomMessagePersistentFlag["counted"] = 2] = "counted";
    /**
 * 在本地不存储，不计入未读数，并且如果对方不在线，服务器会直接丢弃该消息，对方如果之后再上线也不会再收到此消息。
    一般用于发送输入状态之类的消息。
 */
    RCIMIWNativeCustomMessagePersistentFlag[RCIMIWNativeCustomMessagePersistentFlag["status"] = 3] = "status";
})(RCIMIWNativeCustomMessagePersistentFlag || (RCIMIWNativeCustomMessagePersistentFlag = {}));
export var RCIMIWVIVOPushType;
(function (RCIMIWVIVOPushType) {
    /**
     * 运营消息
     */
    RCIMIWVIVOPushType[RCIMIWVIVOPushType["operate"] = 0] = "operate";
    /**
     * 系统消息
     */
    RCIMIWVIVOPushType[RCIMIWVIVOPushType["system"] = 1] = "system";
})(RCIMIWVIVOPushType || (RCIMIWVIVOPushType = {}));
export var RCIMIWSentStatus;
(function (RCIMIWSentStatus) {
    /**
     * 发送中
     */
    RCIMIWSentStatus[RCIMIWSentStatus["sending"] = 0] = "sending";
    /**
     * 发送失败
     */
    RCIMIWSentStatus[RCIMIWSentStatus["failed"] = 1] = "failed";
    /**
     * 已发送
     */
    RCIMIWSentStatus[RCIMIWSentStatus["sent"] = 2] = "sent";
    /**
     * 对方已接收
     */
    RCIMIWSentStatus[RCIMIWSentStatus["received"] = 3] = "received";
    /**
     * 对方已读
     */
    RCIMIWSentStatus[RCIMIWSentStatus["read"] = 4] = "read";
    /**
     * 对方已销毁
     */
    RCIMIWSentStatus[RCIMIWSentStatus["destroyed"] = 5] = "destroyed";
    /**
     * 对方已取消
     */
    RCIMIWSentStatus[RCIMIWSentStatus["canceled"] = 6] = "canceled";
})(RCIMIWSentStatus || (RCIMIWSentStatus = {}));
export var RCIMIWPushNotificationQuietHoursLevel;
(function (RCIMIWPushNotificationQuietHoursLevel) {
    /**
     * 未设置。如未设置，SDK 会依次查询消息所属群的用户级别免打扰设置及其他非用户级别设置，再判断是否需要推送通知。
     */
    RCIMIWPushNotificationQuietHoursLevel[RCIMIWPushNotificationQuietHoursLevel["none"] = 0] = "none";
    /**
     * 与融云服务端断开连接后，当前用户仅在指定时段内针对指定会话中提及（@）当前用户和全体群成员的消息接收通知。
     */
    RCIMIWPushNotificationQuietHoursLevel[RCIMIWPushNotificationQuietHoursLevel["mentionMessage"] = 1] = "mentionMessage";
    /**
     * 当前用户在指定时段内针对任何消息都不接收推送通知。
     */
    RCIMIWPushNotificationQuietHoursLevel[RCIMIWPushNotificationQuietHoursLevel["blocked"] = 2] = "blocked";
})(RCIMIWPushNotificationQuietHoursLevel || (RCIMIWPushNotificationQuietHoursLevel = {}));
export var RCIMIWMessageDirection;
(function (RCIMIWMessageDirection) {
    /**
     * 发送方
     */
    RCIMIWMessageDirection[RCIMIWMessageDirection["send"] = 0] = "send";
    /**
     * 接收方
     */
    RCIMIWMessageDirection[RCIMIWMessageDirection["receive"] = 1] = "receive";
})(RCIMIWMessageDirection || (RCIMIWMessageDirection = {}));
export var RCIMIWReceivedStatus;
(function (RCIMIWReceivedStatus) {
    /**
     * 未读
     */
    RCIMIWReceivedStatus[RCIMIWReceivedStatus["unread"] = 0] = "unread";
    /**
     * 已读
     */
    RCIMIWReceivedStatus[RCIMIWReceivedStatus["read"] = 1] = "read";
    /**
     * 已听
     */
    RCIMIWReceivedStatus[RCIMIWReceivedStatus["listened"] = 2] = "listened";
    /**
     * 已下载
     */
    RCIMIWReceivedStatus[RCIMIWReceivedStatus["downloaded"] = 3] = "downloaded";
    /**
     * 该消息已经被其他登录的多端收取过。（即该消息已经被其他端收取过后。当前端才登录，并重新拉取了这条消息。客户可以通过这个状态更新 UI，比如不再提示）
     */
    RCIMIWReceivedStatus[RCIMIWReceivedStatus["retrieved"] = 4] = "retrieved";
    /**
     * 该消息是被多端同时收取的。（即其他端正同时登录，一条消息被同时发往多端。客户可以通过这个状态值更新自己的某些 UI 状态）。
     */
    RCIMIWReceivedStatus[RCIMIWReceivedStatus["multipleReceive"] = 5] = "multipleReceive";
})(RCIMIWReceivedStatus || (RCIMIWReceivedStatus = {}));
export var RCIMIWChatRoomMemberActionType;
(function (RCIMIWChatRoomMemberActionType) {
    /**
     * 未知
     */
    RCIMIWChatRoomMemberActionType[RCIMIWChatRoomMemberActionType["unknown"] = 0] = "unknown";
    /**
     * 已加入
     */
    RCIMIWChatRoomMemberActionType[RCIMIWChatRoomMemberActionType["join"] = 1] = "join";
    /**
     * 已离开
     */
    RCIMIWChatRoomMemberActionType[RCIMIWChatRoomMemberActionType["leave"] = 2] = "leave";
})(RCIMIWChatRoomMemberActionType || (RCIMIWChatRoomMemberActionType = {}));
export var RCIMIWPushNotificationLevel;
(function (RCIMIWPushNotificationLevel) {
    /**
     * 与融云服务端断开连接后，当前用户可针对指定类型会话中的所有消息接收通知。
     */
    RCIMIWPushNotificationLevel[RCIMIWPushNotificationLevel["allMessage"] = 0] = "allMessage";
    /**
     * 未设置。未设置时均为此初始状态。
     */
    RCIMIWPushNotificationLevel[RCIMIWPushNotificationLevel["none"] = 1] = "none";
    /**
     * 与融云服务端断开连接后，当前用户仅针对指定类型的会话中提及（@）当前用户和全体群成员的消息接收通知。
     */
    RCIMIWPushNotificationLevel[RCIMIWPushNotificationLevel["mention"] = 2] = "mention";
    /**
     * 与融云服务端断开连接后，当前用户仅针对指定类型的会话中提及（@）当前用户的消息接收通知。例如：张三只会接收 “@张三 Hello” 的消息的通知。
     */
    RCIMIWPushNotificationLevel[RCIMIWPushNotificationLevel["mentionUsers"] = 3] = "mentionUsers";
    /**
     * 与融云服务端断开连接后，当前用户仅针对指定类型的会话中提及（@）全部群成员的消息接收通知。
     */
    RCIMIWPushNotificationLevel[RCIMIWPushNotificationLevel["mentionAll"] = 4] = "mentionAll";
    /**
     * 当前用户针对指定类型的会话中的任何消息都不接收推送通知。
     */
    RCIMIWPushNotificationLevel[RCIMIWPushNotificationLevel["blocked"] = 5] = "blocked";
})(RCIMIWPushNotificationLevel || (RCIMIWPushNotificationLevel = {}));
export var RCIMIWMessageType;
(function (RCIMIWMessageType) {
    /**
     * 无效类型
     */
    RCIMIWMessageType[RCIMIWMessageType["unknown"] = 0] = "unknown";
    /**
     * 自定义
     */
    RCIMIWMessageType[RCIMIWMessageType["custom"] = 1] = "custom";
    /**
     * 文本
     */
    RCIMIWMessageType[RCIMIWMessageType["text"] = 2] = "text";
    /**
     * 语音
     */
    RCIMIWMessageType[RCIMIWMessageType["voice"] = 3] = "voice";
    /**
     * 图片
     */
    RCIMIWMessageType[RCIMIWMessageType["image"] = 4] = "image";
    /**
     * 文件
     */
    RCIMIWMessageType[RCIMIWMessageType["file"] = 5] = "file";
    /**
     * 小视频
     */
    RCIMIWMessageType[RCIMIWMessageType["sight"] = 6] = "sight";
    /**
     * GIF 图
     */
    RCIMIWMessageType[RCIMIWMessageType["gif"] = 7] = "gif";
    /**
     * 撤回
     */
    RCIMIWMessageType[RCIMIWMessageType["recall"] = 8] = "recall";
    /**
     * 引用
     */
    RCIMIWMessageType[RCIMIWMessageType["reference"] = 9] = "reference";
    /**
     * 命令
     */
    RCIMIWMessageType[RCIMIWMessageType["command"] = 10] = "command";
    /**
     * 命令通知
     */
    RCIMIWMessageType[RCIMIWMessageType["commandNotification"] = 11] = "commandNotification";
    /**
     * 位置消息
     */
    RCIMIWMessageType[RCIMIWMessageType["location"] = 12] = "location";
    /**
     * 用户自定义消息
     */
    RCIMIWMessageType[RCIMIWMessageType["userCustom"] = 13] = "userCustom";
    /**
     * 原生自定义普通消息
     */
    RCIMIWMessageType[RCIMIWMessageType["nativeCustom"] = 14] = "nativeCustom";
    /**
     * 原生自定义媒体消息
     */
    RCIMIWMessageType[RCIMIWMessageType["nativeCustomMedia"] = 15] = "nativeCustomMedia";
})(RCIMIWMessageType || (RCIMIWMessageType = {}));
export var RCIMIWMessageBlockType;
(function (RCIMIWMessageBlockType) {
    /**
     * 未知
     */
    RCIMIWMessageBlockType[RCIMIWMessageBlockType["unknown"] = 0] = "unknown";
    /**
     * 全局敏感词：命中了融云内置的全局敏感词
     */
    RCIMIWMessageBlockType[RCIMIWMessageBlockType["global"] = 1] = "global";
    /**
     * 自定义敏感词拦截：命中了客户在融云自定义的敏感词
     */
    RCIMIWMessageBlockType[RCIMIWMessageBlockType["custom"] = 2] = "custom";
    /**
     * 第三方审核拦截：命中了第三方（数美）或模板路由决定不下发的状态
     */
    RCIMIWMessageBlockType[RCIMIWMessageBlockType["thirdParty"] = 3] = "thirdParty";
})(RCIMIWMessageBlockType || (RCIMIWMessageBlockType = {}));
export var RCIMIWTimeOrder;
(function (RCIMIWTimeOrder) {
    /**
     * 时间递减
     */
    RCIMIWTimeOrder[RCIMIWTimeOrder["before"] = 0] = "before";
    /**
     * 时间递增
     */
    RCIMIWTimeOrder[RCIMIWTimeOrder["after"] = 1] = "after";
})(RCIMIWTimeOrder || (RCIMIWTimeOrder = {}));
export var RCIMIWCustomMessagePolicy;
(function (RCIMIWCustomMessagePolicy) {
    /**
     * 客户端不存储，支持离线消息机制，不计入未读消息数
     */
    RCIMIWCustomMessagePolicy[RCIMIWCustomMessagePolicy["command"] = 0] = "command";
    /**
     * 客户端存储，支持离线消息机制，且存入服务端历史消息，计入未读消息数
     */
    RCIMIWCustomMessagePolicy[RCIMIWCustomMessagePolicy["normal"] = 1] = "normal";
    /**
     * 客户端不存储，服务端不存储，不计入未读消息数
     */
    RCIMIWCustomMessagePolicy[RCIMIWCustomMessagePolicy["status"] = 2] = "status";
    /**
     * 客户端存储，支持离线消息机制，且存入服务端历史消息，不计入未读消息数
     */
    RCIMIWCustomMessagePolicy[RCIMIWCustomMessagePolicy["storage"] = 3] = "storage";
})(RCIMIWCustomMessagePolicy || (RCIMIWCustomMessagePolicy = {}));
export var RCIMIWChatRoomStatus;
(function (RCIMIWChatRoomStatus) {
    /**
     * 聊天室被重置
     */
    RCIMIWChatRoomStatus[RCIMIWChatRoomStatus["reset"] = 0] = "reset";
    /**
     * 用户调用IM Server API 手动销毁聊天室
     */
    RCIMIWChatRoomStatus[RCIMIWChatRoomStatus["destroyManual"] = 1] = "destroyManual";
    /**
     * IM Server 自动销毁聊天室
     */
    RCIMIWChatRoomStatus[RCIMIWChatRoomStatus["destroyAuto"] = 2] = "destroyAuto";
})(RCIMIWChatRoomStatus || (RCIMIWChatRoomStatus = {}));
export var RCIMIWConversationType;
(function (RCIMIWConversationType) {
    /**
     * 暂不支持，SDK 保留类型，开发者不可使用
     */
    RCIMIWConversationType[RCIMIWConversationType["invalid"] = 0] = "invalid";
    /**
     * 单聊会话
     */
    RCIMIWConversationType[RCIMIWConversationType["private"] = 1] = "private";
    /**
     * 群聊会话
     */
    RCIMIWConversationType[RCIMIWConversationType["group"] = 2] = "group";
    /**
     * 聊天室会话
     */
    RCIMIWConversationType[RCIMIWConversationType["chatroom"] = 3] = "chatroom";
    /**
     * 系统会话
     */
    RCIMIWConversationType[RCIMIWConversationType["system"] = 4] = "system";
    /**
     * 超级群会话
     */
    RCIMIWConversationType[RCIMIWConversationType["ultraGroup"] = 5] = "ultraGroup";
})(RCIMIWConversationType || (RCIMIWConversationType = {}));
export var RCIMIWErrorCode;
(function (RCIMIWErrorCode) {
    RCIMIWErrorCode[RCIMIWErrorCode["success"] = 0] = "success";
    RCIMIWErrorCode[RCIMIWErrorCode["paramError"] = 1] = "paramError";
    RCIMIWErrorCode[RCIMIWErrorCode["engineDestroyed"] = 2] = "engineDestroyed";
    RCIMIWErrorCode[RCIMIWErrorCode["nativeOperationError"] = 3] = "nativeOperationError";
    RCIMIWErrorCode[RCIMIWErrorCode["resultUnknown"] = 4] = "resultUnknown";
})(RCIMIWErrorCode || (RCIMIWErrorCode = {}));
export var RCIMIWUltraGroupTypingStatus;
(function (RCIMIWUltraGroupTypingStatus) {
    /**
     * 正在输入文本
     */
    RCIMIWUltraGroupTypingStatus[RCIMIWUltraGroupTypingStatus["text"] = 0] = "text";
})(RCIMIWUltraGroupTypingStatus || (RCIMIWUltraGroupTypingStatus = {}));
export var RCIMIWMentionedType;
(function (RCIMIWMentionedType) {
    /**
     * @ 所有人
     */
    RCIMIWMentionedType[RCIMIWMentionedType["all"] = 0] = "all";
    /**
     * @ 指定的人
     */
    RCIMIWMentionedType[RCIMIWMentionedType["part"] = 1] = "part";
})(RCIMIWMentionedType || (RCIMIWMentionedType = {}));
export var RCIMIWAreaCode;
(function (RCIMIWAreaCode) {
    /**
     * 北京数据中心，默认值
     */
    RCIMIWAreaCode[RCIMIWAreaCode["bj"] = 0] = "bj";
    /**
     * 新加坡数据中心
     */
    RCIMIWAreaCode[RCIMIWAreaCode["sg"] = 1] = "sg";
    /**
     * 北美数据中心
     */
    RCIMIWAreaCode[RCIMIWAreaCode["na"] = 2] = "na";
    /**
     * 新加坡 B 企业合作数据中心
     */
    RCIMIWAreaCode[RCIMIWAreaCode["sgB"] = 3] = "sgB";
    /**
     * 沙特数据中心
     */
    RCIMIWAreaCode[RCIMIWAreaCode["sa"] = 4] = "sa";
})(RCIMIWAreaCode || (RCIMIWAreaCode = {}));
export var RCIMIWChatRoomEntriesOperationType;
(function (RCIMIWChatRoomEntriesOperationType) {
    /**
     * 更新操作
     */
    RCIMIWChatRoomEntriesOperationType[RCIMIWChatRoomEntriesOperationType["update"] = 0] = "update";
    /**
     * 删除操作
     */
    RCIMIWChatRoomEntriesOperationType[RCIMIWChatRoomEntriesOperationType["remove"] = 1] = "remove";
})(RCIMIWChatRoomEntriesOperationType || (RCIMIWChatRoomEntriesOperationType = {}));
export var RCIMIWLogLevel;
(function (RCIMIWLogLevel) {
    /**
     * 不输出任何日志
     */
    RCIMIWLogLevel[RCIMIWLogLevel["none"] = 0] = "none";
    /**
     * 只输出错误的日志
     */
    RCIMIWLogLevel[RCIMIWLogLevel["error"] = 1] = "error";
    /**
     * 输出错误和警告的日志
     */
    RCIMIWLogLevel[RCIMIWLogLevel["warn"] = 2] = "warn";
    /**
     * 输出错误、警告和一般的日志
     */
    RCIMIWLogLevel[RCIMIWLogLevel["info"] = 3] = "info";
    /**
     * 输出输出错误、警告和一般的日志以及 debug 日志
     */
    RCIMIWLogLevel[RCIMIWLogLevel["debug"] = 4] = "debug";
    /**
     * 输出所有日志
     */
    RCIMIWLogLevel[RCIMIWLogLevel["verbose"] = 5] = "verbose";
})(RCIMIWLogLevel || (RCIMIWLogLevel = {}));
export var RCIMIWBlacklistStatus;
(function (RCIMIWBlacklistStatus) {
    /**
     * 未知
     */
    RCIMIWBlacklistStatus[RCIMIWBlacklistStatus["unknown"] = 0] = "unknown";
    /**
     * 在黑名单中
     */
    RCIMIWBlacklistStatus[RCIMIWBlacklistStatus["inBlacklist"] = 1] = "inBlacklist";
    /**
     * 不在黑名单
     */
    RCIMIWBlacklistStatus[RCIMIWBlacklistStatus["notInBlacklist"] = 2] = "notInBlacklist";
})(RCIMIWBlacklistStatus || (RCIMIWBlacklistStatus = {}));
export var RCIMIWImportanceHonor;
(function (RCIMIWImportanceHonor) {
    /**
     * 表示消息为服务与通讯类。消息提醒方式为锁屏+铃声+震动。
     */
    RCIMIWImportanceHonor[RCIMIWImportanceHonor["normal"] = 0] = "normal";
    /**
     * 表示消息为资讯营销类。消息提醒方式为静默通知，仅在下拉通知栏展示。
     */
    RCIMIWImportanceHonor[RCIMIWImportanceHonor["low"] = 1] = "low";
})(RCIMIWImportanceHonor || (RCIMIWImportanceHonor = {}));
export var RCIMIWConnectionStatus;
(function (RCIMIWConnectionStatus) {
    /**
     * 网络不可用
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["networkUnavailable"] = 0] = "networkUnavailable";
    /**
     * 连接成功
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["connected"] = 1] = "connected";
    /**
     * 连接中
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["connecting"] = 2] = "connecting";
    /**
     * 未连接
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["unconnected"] = 3] = "unconnected";
    /**
     * 用户账户在其他设备登录，本机会被踢掉线
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["kickedOfflineByOtherClient"] = 4] = "kickedOfflineByOtherClient";
    /**
     * Token 不正确
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["tokenIncorrect"] = 5] = "tokenIncorrect";
    /**
     * 用户被开发者后台封禁
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["connUserBlocked"] = 6] = "connUserBlocked";
    /**
     * 用户主动调用 disconnect 或 logout 接口断开连接
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["signOut"] = 7] = "signOut";
    /**
     * 连接暂时挂起（多是由于网络问题导致），SDK 会在合适时机进行自动重连
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["suspend"] = 8] = "suspend";
    /**
     * 自动连接超时，SDK 将不会继续连接，用户需要做超时处理，再自行调用 connectWithToken 接口进行连接
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["timeout"] = 9] = "timeout";
    /**
     * 异常情况
     */
    RCIMIWConnectionStatus[RCIMIWConnectionStatus["unknown"] = 10] = "unknown";
})(RCIMIWConnectionStatus || (RCIMIWConnectionStatus = {}));
