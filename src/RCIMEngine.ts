const RCUniIM = uni.requireNativePlugin('RongCloud-IM-V2-RCUniIMV2');

import {
    RCIMIWEngineOptions,
} from './RCIMDefines';

import {
    IRCIMIWAddChatRoomEntriesCallback,
    IRCIMIWAddChatRoomEntryCallback,
    IRCIMIWAddToBlacklistCallback,
    IRCIMIWCancelDownloadingMediaMessageCallback,
    IRCIMIWCancelSendingMediaMessageCallback,
    IRCIMIWChangeConversationNotificationLevelCallback,
    IRCIMIWChangeConversationTopStatusCallback,
    IRCIMIWChangeConversationTypeNotificationLevelCallback,
    IRCIMIWChangeMessageReceivedStatusCallback,
    IRCIMIWChangeMessageSentStatusCallback,
    IRCIMIWChangeNotificationQuietHoursCallback,
    IRCIMIWChangePushContentShowStatusCallback,
    IRCIMIWChangePushLanguageCallback,
    IRCIMIWChangePushReceiveStatusCallback,
    IRCIMIWChangeUltraGroupChannelDefaultNotificationLevelCallback,
    IRCIMIWChangeUltraGroupDefaultNotificationLevelCallback,
    IRCIMIWClearDraftMessageCallback,
    IRCIMIWClearMessagesCallback,
    IRCIMIWClearUltraGroupMessagesCallback,
    IRCIMIWClearUltraGroupMessagesForAllChannelCallback,
    IRCIMIWClearUnreadCountCallback,
    IRCIMIWDeleteLocalMessagesCallback,
    IRCIMIWDeleteMessagesCallback,
    IRCIMIWGetBatchRemoteUltraGroupMessagesCallback,
    IRCIMIWGetBlacklistCallback,
    IRCIMIWGetBlacklistStatusCallback,
    IRCIMIWGetBlockedConversationsCallback,
    IRCIMIWGetChatRoomAllEntriesCallback,
    IRCIMIWGetChatRoomEntryCallback,
    IRCIMIWGetChatRoomMessagesCallback,
    IRCIMIWGetConversationCallback,
    IRCIMIWGetConversationNotificationLevelCallback,
    IRCIMIWGetConversationTopStatusCallback,
    IRCIMIWGetConversationTypeNotificationLevelCallback,
    IRCIMIWGetConversationsCallback,
    IRCIMIWGetConversationsForAllChannelCallback,
    IRCIMIWGetDraftMessageCallback,
    IRCIMIWGetFirstUnreadMessageCallback,
    IRCIMIWGetMessageCallback,
    IRCIMIWGetMessageCountCallback,
    IRCIMIWGetMessagesCallback,
    IRCIMIWGetNotificationQuietHoursCallback,
    IRCIMIWGetTopConversationsCallback,
    IRCIMIWGetTotalUnreadCountCallback,
    IRCIMIWGetUltraGroupAllUnreadCountCallback,
    IRCIMIWGetUltraGroupAllUnreadMentionedCountCallback,
    IRCIMIWGetUltraGroupChannelDefaultNotificationLevelCallback,
    IRCIMIWGetUltraGroupDefaultNotificationLevelCallback,
    IRCIMIWGetUltraGroupUnreadCountCallback,
    IRCIMIWGetUltraGroupUnreadMentionedCountCallback,
    IRCIMIWGetUnreadCountByConversationTypesCallback,
    IRCIMIWGetUnreadCountCallback,
    IRCIMIWGetUnreadMentionedCountCallback,
    IRCIMIWGetUnreadMentionedMessagesCallback,
    IRCIMIWInsertMessageCallback,
    IRCIMIWInsertMessagesCallback,
    IRCIMIWJoinChatRoomCallback,
    IRCIMIWLeaveChatRoomCallback,
    IRCIMIWModifyUltraGroupMessageCallback,
    IRCIMIWRecallMessageCallback,
    IRCIMIWRecallUltraGroupMessageCallback,
    IRCIMIWRemoveChatRoomEntriesCallback,
    IRCIMIWRemoveChatRoomEntryCallback,
    IRCIMIWRemoveConversationCallback,
    IRCIMIWRemoveConversationsCallback,
    IRCIMIWRemoveFromBlacklistCallback,
    IRCIMIWRemoveMessageExpansionForKeysCallback,
    IRCIMIWRemoveNotificationQuietHoursCallback,
    IRCIMIWRemoveUltraGroupMessageExpansionForKeysCallback,
    IRCIMIWSaveDraftMessageCallback,
    IRCIMIWSearchConversationsCallback,
    IRCIMIWSearchMessagesByTimeRangeCallback,
    IRCIMIWSearchMessagesByUserIdCallback,
    IRCIMIWSearchMessagesCallback,
    IRCIMIWSendGroupReadReceiptRequestCallback,
    IRCIMIWSendGroupReadReceiptResponseCallback,
    IRCIMIWSendPrivateReadReceiptMessageCallback,
    IRCIMIWSendUltraGroupTypingStatusCallback,
    IRCIMIWSyncConversationReadStatusCallback,
    IRCIMIWSyncUltraGroupReadStatusCallback,
    IRCIMIWUpdateMessageExpansionCallback,
    IRCIMIWUpdateUltraGroupMessageExpansionCallback,
    OnBatchRemoteUltraGroupMessagesLoadedResult,
    OnBlacklistAddedResult,
    OnBlacklistLoadedResult,
    OnBlacklistRemovedResult,
    OnBlacklistStatusLoadedResult,
    OnBlockedConversationsLoadedResult,
    OnChatRoomAllEntriesLoadedResult,
    OnChatRoomEntriesAddedResult,
    OnChatRoomEntriesChangedResult,
    OnChatRoomEntriesRemovedResult,
    OnChatRoomEntriesSyncedResult,
    OnChatRoomEntryAddedResult,
    OnChatRoomEntryLoadedResult,
    OnChatRoomEntryRemovedResult,
    OnChatRoomJoinedResult,
    OnChatRoomJoiningResult,
    OnChatRoomLeftResult,
    OnChatRoomMemberChangedResult,
    OnChatRoomMessagesLoadedResult,
    OnChatRoomStatusChangedResult,
    OnConnectedResult,
    OnConnectionStatusChangedResult,
    OnConversationLoadedResult,
    OnConversationNotificationLevelChangedResult,
    OnConversationNotificationLevelLoadedResult,
    OnConversationReadStatusSyncMessageReceivedResult,
    OnConversationReadStatusSyncedResult,
    OnConversationRemovedResult,
    OnConversationTopStatusChangedResult,
    OnConversationTopStatusLoadedResult,
    OnConversationTopStatusSyncedResult,
    OnConversationTypeNotificationLevelChangedResult,
    OnConversationTypeNotificationLevelLoadedResult,
    OnConversationsLoadedForAllChannelResult,
    OnConversationsLoadedResult,
    OnConversationsRemovedResult,
    OnConversationsSearchedResult,
    OnDatabaseOpenedResult,
    OnDownloadingMediaMessageCanceledResult,
    OnDraftMessageClearedResult,
    OnDraftMessageLoadedResult,
    OnDraftMessageSavedResult,
    OnFirstUnreadMessageLoadedResult,
    OnGroupMessageReadReceiptRequestReceivedResult,
    OnGroupMessageReadReceiptResponseReceivedResult,
    OnGroupMessageToDesignatedUsersAttachedResult,
    OnGroupMessageToDesignatedUsersSentResult,
    OnGroupReadReceiptRequestSentResult,
    OnGroupReadReceiptResponseSentResult,
    OnLocalMessagesDeletedResult,
    OnMediaMessageAttachedResult,
    OnMediaMessageDownloadedResult,
    OnMediaMessageDownloadingResult,
    OnMediaMessageSendingResult,
    OnMediaMessageSentResult,
    OnMessageAttachedResult,
    OnMessageBlockedResult,
    OnMessageCountLoadedResult,
    OnMessageExpansionForKeysRemovedResult,
    OnMessageExpansionUpdatedResult,
    OnMessageInsertedResult,
    OnMessageRecalledResult,
    OnMessageReceiveStatusChangedResult,
    OnMessageReceivedResult,
    OnMessageSentResult,
    OnMessageSentStatusChangedResult,
    OnMessagesClearedResult,
    OnMessagesDeletedResult,
    OnMessagesInsertedResult,
    OnMessagesLoadedResult,
    OnMessagesSearchedByTimeRangeResult,
    OnMessagesSearchedByUserIdResult,
    OnMessagesSearchedResult,
    OnNotificationQuietHoursChangedResult,
    OnNotificationQuietHoursLoadedResult,
    OnNotificationQuietHoursRemovedResult,
    OnPrivateReadReceiptMessageSentResult,
    OnPrivateReadReceiptReceivedResult,
    OnPushContentShowStatusChangedResult,
    OnPushLanguageChangedResult,
    OnPushReceiveStatusChangedResult,
    OnRemoteMessageExpansionForKeyRemovedResult,
    OnRemoteMessageExpansionUpdatedResult,
    OnRemoteMessageRecalledResult,
    OnRemoteUltraGroupMessageExpansionUpdatedResult,
    OnRemoteUltraGroupMessageModifiedResult,
    OnRemoteUltraGroupMessageRecalledResult,
    OnSendingMediaMessageCanceledResult,
    OnTopConversationsLoadedResult,
    OnTotalUnreadCountLoadedResult,
    OnTypingStatusChangedResult,
    OnUltraGroupAllUnreadCountLoadedResult,
    OnUltraGroupAllUnreadMentionedCountLoadedResult,
    OnUltraGroupChannelDefaultNotificationLevelChangedResult,
    OnUltraGroupChannelDefaultNotificationLevelLoadedResult,
    OnUltraGroupConversationsSyncedResult,
    OnUltraGroupDefaultNotificationLevelChangedResult,
    OnUltraGroupDefaultNotificationLevelLoadedResult,
    OnUltraGroupMessageExpansionForKeysRemovedResult,
    OnUltraGroupMessageExpansionUpdatedResult,
    OnUltraGroupMessageModifiedResult,
    OnUltraGroupMessageRecalledResult,
    OnUltraGroupMessagesClearedForAllChannelResult,
    OnUltraGroupMessagesClearedResult,
    OnUltraGroupReadStatusSyncedResult,
    OnUltraGroupReadTimeReceivedResult,
    OnUltraGroupTypingStatusChangedResult,
    OnUltraGroupTypingStatusSentResult,
    OnUltraGroupUnreadCountLoadedResult,
    OnUltraGroupUnreadMentionedCountLoadedResult,
    OnUnreadCountByConversationTypesLoadedResult,
    OnUnreadCountClearedResult,
    OnUnreadCountLoadedResult,
    OnUnreadMentionedCountLoadedResult,
    OnUnreadMentionedMessagesLoadedResult,
    RCIMIWBlacklistStatus,
    RCIMIWBlockedMessageInfo,
    RCIMIWChatRoomEntriesOperationType,
    RCIMIWChatRoomMemberAction,
    RCIMIWChatRoomStatus,
    RCIMIWConnectCallback,
    RCIMIWConnectionStatus,
    RCIMIWConversation,
    RCIMIWConversationType,
    RCIMIWCustomMessage,
    RCIMIWCustomMessagePolicy,
    RCIMIWDownloadMediaMessageListener,
    RCIMIWFileMessage,
    RCIMIWGIFMessage,
    RCIMIWImageMessage,
    RCIMIWLocationMessage,
    RCIMIWLogLevel,
    RCIMIWMediaMessage,
    RCIMIWMessage,
    RCIMIWMessageOperationPolicy,
    RCIMIWMessageType,
    RCIMIWPushNotificationLevel,
    RCIMIWPushNotificationQuietHoursLevel,
    RCIMIWReceivedStatus,
    RCIMIWReferenceMessage,
    RCIMIWSearchConversationResult,
    RCIMIWSendGroupMessageToDesignatedUsersCallback,
    RCIMIWSendMediaMessageListener,
    RCIMIWSendMessageCallback,
    RCIMIWSentStatus,
    RCIMIWSightMessage,
    RCIMIWTextMessage,
    RCIMIWTimeOrder,
    RCIMIWTypingStatus,
    RCIMIWUltraGroupTypingStatus,
    RCIMIWUltraGroupTypingStatusInfo,
    RCIMIWVoiceMessage
} from './RCIMDefines';

let instance: RCIMIWEngine|null;

export default class RCIMIWEngine {

    static _invokeMethod(name: string, params?: object): any {
        console.log(`invokeMethod methodName: ${name}, params:${JSON.stringify(params)}`);
        return new Promise((resolve, _) => { RCUniIM.invokeMethod({ name, params }, (res: any) => { resolve(res); }); });
    }

    _invokeMethod(name: string, callback: any, params?: object): any {
        console.log(`invokeMethod methodName: ${name}, params:${JSON.stringify(params)}`);
        return new Promise((resolve, _) => {
            if (callback) {
                RCUniIM.invokeMethod({ name, params }, (res: any) => { resolve(res); }, callback);
            } else {
                RCUniIM.invokeMethod({ name, params }, (res: any) => { resolve(res); });
            }
        });
    }

    private _setListener(eventName: string, callback?: any): void {
        console.log(`setListener eventName: ${eventName}, callback:${callback != null}`);
        // 因为单个事件名只支持设置一个监听，所以要先移除已有的监听。
        RCUniIM.removeAllEventListeners(eventName);
        if (callback) {
            let listener = (res: { module: string, type: string, data: any }) => { callback(res.data); };
            RCUniIM.addEventListener(eventName, listener);
        }
    }

    /**
     * 初始化 IM 对象
     * @param appKey 融云后台申请的应用 appKey
     * @param options 全局配置项
     * @returns 创建的 IM 对象
     */
    static async create(appKey: string, options: RCIMIWEngineOptions = {}): Promise<RCIMIWEngine|null> {
        if (instance) {
            return new Promise(resolve => resolve(instance));
        }
        let code = await RCIMIWEngine._invokeMethod('create', { appKey, options });
        if (code === 0) {
            instance = new RCIMIWEngine();
            return instance;
        }
        return new Promise(resolve => resolve(null));
    }

    /**
     * 销毁 IM 对象
     */
    async destroy(): Promise<number> {
        let code = await this._invokeMethod('destroy', null);
        if (code === 0) {
            instance = null;
        }
        return code;
    }

    // /**
    //  * 根据消息 id 获取消息体（本地数据库索引唯一值）。
    //  * @param messageId 消息的 messageId，可在消息对象中获取
    //  */
    // getMessageById(messageId: number): Promise<{code: number, message: RCIMIWMessage}> {
    //     return this._invokeMethod('getMessageById', {messageId});
    // }

    // /**
    //  * 通过全局唯一 id 获取消息实体。
    //  * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值。
    //  */
    // getMessageByUId(messageUId: string): Promise<{code: number, message: RCIMIWMessage}> {
    //     return this._invokeMethod('getMessageByUId', {messageUId});
    // }

    /**
     * 连接融云服务器，在整个应用程序全局，只需要调用一次。调用此接口返回非业务错误码时，SDK 会启动重连机制进行重连；如果仍没有连接成功，会在设备网络状态变化时再次进行重连。
     * @param token    调用 server api 获取到的 token
     * @param timeout  连接超时时间，单位：秒。
     * timeLimit <= 0，则 IM 将一直连接，直到连接成功或者无法连接（如 token 非法）
     * timeLimit > 0，则 IM 将最多连接 timeLimit 秒
     * 如果在 timeLimit 秒内连接成功，后面再发生了网络变化或前后台切换，SDK 会自动重连； 如果在 timeLimit 秒无法连接成功则不再进行重连，通过 listener 告知连接超时，您需要再自行调用 connect 接口
     * @param callback 链接事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener 接口回调可以监听 [onConnected]
     */
    connect(token: string, timeout: number, callback: RCIMIWConnectCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onDatabaseOpened') {
                    let { code } = res;
                    callback.onDatabaseOpened?.({ code });
                }
                if (res.callbackName === 'onConnected') {
                    let { code, userId } = res;
                    callback.onConnected?.({ code, userId });
                }
            }
        }
        return this._invokeMethod('connect', resultCallback, { token, timeout });
    }

    /**
     * 断开链接
     * 注：因为 SDK 在前后台切换或者网络出现异常都会自动重连，保证连接可靠性。 所以除非您的 App 逻辑需要登出，否则一般不需要调用此方法进行手动断开
     * @param receivePush 退出后是否接收 push，true:断开后接收远程推送，false:断开后不再接收远程推送
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    disconnect(receivePush: boolean): Promise<number> {
        let resultCallback;
        return this._invokeMethod('disconnect', resultCallback, { receivePush });
    }

    /**
     * 构建文本消息
     * @param type      会话类型，
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param text      文本内容
     * @return 文本消息实体
     */
    createTextMessage(type: RCIMIWConversationType, targetId: string, channelId: string, text: string): Promise<RCIMIWTextMessage> {
        let resultCallback;
        return this._invokeMethod('createTextMessage', resultCallback, { type, targetId, channelId, text });
    }

    /**
     * 构建图片消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param path      图片消息的本地路径，必须为有效路径
     * @return 图片消息实体
     */
    createImageMessage(type: RCIMIWConversationType, targetId: string, channelId: string, path: string): Promise<RCIMIWImageMessage> {
        let resultCallback;
        return this._invokeMethod('createImageMessage', resultCallback, { type, targetId, channelId, path });
    }

    /**
     * 构建文件消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param path      文件消息的本地路径，必须为有效路径
     * @return 文件消息实体
     */
    createFileMessage(type: RCIMIWConversationType, targetId: string, channelId: string, path: string): Promise<RCIMIWFileMessage> {
        let resultCallback;
        return this._invokeMethod('createFileMessage', resultCallback, { type, targetId, channelId, path });
    }

    /**
     * 构建小视频消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param path      小视频消息的本地路径，必须为有效路径
     * @param duration  小视频消息的视频时长
     * @return 视频消息实体
     */
    createSightMessage(type: RCIMIWConversationType, targetId: string, channelId: string, path: string, duration: number): Promise<RCIMIWSightMessage> {
        let resultCallback;
        return this._invokeMethod('createSightMessage', resultCallback, { type, targetId, channelId, path, duration });
    }

    /**
     * 构建语音消息 (高清语音)
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param path      语音消息的本地路径，必须为有效路径
     * @param duration  语音消息的消息时长
     * @return 语音消息的实体
     */
    createVoiceMessage(type: RCIMIWConversationType, targetId: string, channelId: string, path: string, duration: number): Promise<RCIMIWVoiceMessage> {
        let resultCallback;
        return this._invokeMethod('createVoiceMessage', resultCallback, { type, targetId, channelId, path, duration });
    }

    /**
     * 构建引用消息
     * @param type             会话类型
     * @param targetId         会话 ID
     * @param channelId        频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param referenceMessage 引用的消息
     * @param text             引用的文本内容
     * @return 引用消息实体
     */
    createReferenceMessage(type: RCIMIWConversationType, targetId: string, channelId: string, referenceMessage: RCIMIWMessage, text: string): Promise<RCIMIWReferenceMessage> {
        let resultCallback;
        return this._invokeMethod('createReferenceMessage', resultCallback, { type, targetId, channelId, referenceMessage, text });
    }

    /**
     * 构建 GIF 消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param path      GIF 消息的本地路径
     * @return GIF 消息实体
     */
    createGIFMessage(type: RCIMIWConversationType, targetId: string, channelId: string, path: string): Promise<RCIMIWGIFMessage> {
        let resultCallback;
        return this._invokeMethod('createGIFMessage', resultCallback, { type, targetId, channelId, path });
    }

    /**
     * 构建自定义消息
     * @param type              会话类型
     * @param targetId          会话 ID
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param policy            消息的存储策略
     * @param messageIdentifier 消息的标识符，需唯一
     * @param fields            消息的内容键值对
     * @return 自定义消息实体
     */
    createCustomMessage(type: RCIMIWConversationType, targetId: string, channelId: string, policy: RCIMIWCustomMessagePolicy, messageIdentifier: string, fields: { [propName: string]: string }): Promise<RCIMIWCustomMessage> {
        let resultCallback;
        return this._invokeMethod('createCustomMessage', resultCallback, { type, targetId, channelId, policy, messageIdentifier, fields });
    }

    /**
     * 构建位置消息
     * @param type          会话类型
     * @param targetId      会话 ID
     * @param channelId     频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param longitude     经度
     * @param latitude      纬度
     * @param poiName       POI 信息
     * @param thumbnailPath 缩略图本地路径，必须为有效路径
     * @return 位置消息实体
     */
    createLocationMessage(type: RCIMIWConversationType, targetId: string, channelId: string, longitude: number, latitude: number, poiName: string, thumbnailPath: string): Promise<RCIMIWLocationMessage> {
        let resultCallback;
        return this._invokeMethod('createLocationMessage', resultCallback, { type, targetId, channelId, longitude, latitude, poiName, thumbnailPath });
    }

    /**
     * 发送普通消息
     * @param message  发送的消息实体
     * @param callback 发送消息的事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener 接口回调可以监听 [onMessageAttached],[onMessageSent]
     */
    sendMessage(message: RCIMIWMessage, callback: RCIMIWSendMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessageSaved') {
                    let { message } = res;
                    callback.onMessageSaved?.({ message });
                }
                if (res.callbackName === 'onMessageSent') {
                    let { code, message } = res;
                    callback.onMessageSent?.({ code, message });
                }
            }
        }
        return this._invokeMethod('sendMessage', resultCallback, { message });
    }

    /**
     * 发送媒体消息
     * @param message  发送的媒体消息实体
     * @param listener 发送媒体消息的事件监听
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener 接口回调可以监听 [onMediaMessageSending],[onMediaMessageAttached],[onMediaMessageSent]
     */
    sendMediaMessage(message: RCIMIWMediaMessage, listener: RCIMIWSendMediaMessageListener): Promise<number> {
        let resultCallback;
        if (listener) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMediaMessageSaved') {
                    let { message } = res;
                    listener.onMediaMessageSaved?.({ message });
                }
                if (res.callbackName === 'onMediaMessageSending') {
                    let { message, progress } = res;
                    listener.onMediaMessageSending?.({ message, progress });
                }
                if (res.callbackName === 'onSendingMediaMessageCanceled') {
                    let { message } = res;
                    listener.onSendingMediaMessageCanceled?.({ message });
                }
                if (res.callbackName === 'onMediaMessageSent') {
                    let { code, message } = res;
                    listener.onMediaMessageSent?.({ code, message });
                }
            }
        }
        return this._invokeMethod('sendMediaMessage', resultCallback, { message });
    }

    /**
     * 取消发送媒体消息
     * @param message  需要取消发送的媒体消息实体
     * @param callback 取消发送媒体消息的事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener 接口回调可以监听 [onSendingMediaMessageCanceled]
     */
    cancelSendingMediaMessage(message: RCIMIWMediaMessage, callback: IRCIMIWCancelSendingMediaMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onCancelSendingMediaMessageCalled') {
                    let { code, message } = res;
                    callback.onCancelSendingMediaMessageCalled?.({ code, message });
                }
            }
        }
        return this._invokeMethod('cancelSendingMediaMessage', resultCallback, { message });
    }

    /**
     * 下载媒体消息
     * @param message  需要下载的媒体消息实体
     * @param listener 下载媒体消息的事件监听
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMediaMessageDownloaded], [onMediaMessageDownloading]
     */
    downloadMediaMessage(message: RCIMIWMediaMessage, listener: RCIMIWDownloadMediaMessageListener): Promise<number> {
        let resultCallback;
        if (listener) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMediaMessageDownloading') {
                    let { message, progress } = res;
                    listener.onMediaMessageDownloading?.({ message, progress });
                }
                if (res.callbackName === 'onDownloadingMediaMessageCanceled') {
                    let { message } = res;
                    listener.onDownloadingMediaMessageCanceled?.({ message });
                }
                if (res.callbackName === 'onMediaMessageDownloaded') {
                    let { code, message } = res;
                    listener.onMediaMessageDownloaded?.({ code, message });
                }
            }
        }
        return this._invokeMethod('downloadMediaMessage', resultCallback, { message });
    }

    /**
     * 取消下载媒体消息
     * @param message  需要取消下载的媒体消息实体
     * @param callback 取消下载媒体消息的事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onDownloadingMediaMessageCanceled]
     */
    cancelDownloadingMediaMessage(message: RCIMIWMediaMessage, callback: IRCIMIWCancelDownloadingMediaMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onCancelDownloadingMediaMessageCalled') {
                    let { code, message } = res;
                    callback.onCancelDownloadingMediaMessageCalled?.({ code, message });
                }
            }
        }
        return this._invokeMethod('cancelDownloadingMediaMessage', resultCallback, { message });
    }

    /**
     * 加载某个会话
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationLoaded]
     * @deprecated 用 {@link #getConversation(RCIMIWConversationType, String, String, IRCIMIWGetConversationCallback)} 代替
     */
    loadConversation(type: RCIMIWConversationType, targetId: string, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadConversation', resultCallback, { type, targetId, channelId });
    }

    /**
     * 获取某个会话
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可
     * @param callback  获取会话事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationLoaded]
     */
    getConversation(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWGetConversationCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getConversation', resultCallback, { type, targetId, channelId });
    }

    /**
     * 加载某些会话
     * @param conversationTypes 会话类型
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可
     * @param startTime         时间戳（毫秒），获取小于此时间戳的会话，传 0 为查询最新数据
     * @param count             查询的数量， 0 < count <= 50
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationsLoaded]
     * @deprecated 用 {@link #getConversations(List, String, long, int, IRCIMIWGetConversationsCallback)} 代替
     */
    loadConversations(conversationTypes: Array<RCIMIWConversationType>, channelId: string, startTime: number, count: number): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadConversations', resultCallback, { conversationTypes, channelId, startTime, count });
    }

    /**
     * 获取某些会话
     * @param conversationTypes 会话类型
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可
     * @param startTime         时间戳（毫秒），获取小于此时间戳的会话，传 0 为查询最新数据
     * @param count             查询的数量， 0 < count <= 50
     * @param callback          获取会话列表事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationsLoaded]
     */
    getConversations(conversationTypes: Array<RCIMIWConversationType>, channelId: string, startTime: number, count: number, callback: IRCIMIWGetConversationsCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getConversations', resultCallback, { conversationTypes, channelId, startTime, count });
    }

    /**
     * 移除某个会话
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可
     * @param callback  移除会话事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationRemoved]
     */
    removeConversation(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWRemoveConversationCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onConversationRemoved') {
                    let { code } = res;
                    callback.onConversationRemoved?.({ code });
                }
            }
        }
        return this._invokeMethod('removeConversation', resultCallback, { type, targetId, channelId });
    }

    /**
     * 根据会话类型移除会话
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback          移除会话列表事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationsRemoved]
     */
    removeConversations(conversationTypes: Array<RCIMIWConversationType>, channelId: string, callback: IRCIMIWRemoveConversationsCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onConversationsRemoved') {
                    let { code } = res;
                    callback.onConversationsRemoved?.({ code });
                }
            }
        }
        return this._invokeMethod('removeConversations', resultCallback, { conversationTypes, channelId });
    }

    /**
     * 加载某个会话的未读数
     * 注：不支持聊天室！
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadCountLoaded]
     * @deprecated 用 {@link #getUnreadCount(RCIMIWConversationType, String, String, IRCIMIWGetUnreadCountCallback)} 代替
     */
    loadUnreadCount(type: RCIMIWConversationType, targetId: string, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadUnreadCount', resultCallback, { type, targetId, channelId });
    }

    /**
     * 获取某个会话的未读数
     * 注：不支持聊天室！
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  获取会话未读数事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadCountLoaded]
     */
    getUnreadCount(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWGetUnreadCountCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getUnreadCount', resultCallback, { type, targetId, channelId });
    }

    /**
     * 加载所有未读数
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onTotalUnreadCountLoaded]
     * @deprecated 用 {@link #getTotalUnreadCount(String, IRCIMIWGetTotalUnreadCountCallback)} 代替
     */
    loadTotalUnreadCount(channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadTotalUnreadCount', resultCallback, { channelId });
    }

    /**
     * 获取所有未读数
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  获取所有未读数事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onTotalUnreadCountLoaded]
     */
    getTotalUnreadCount(channelId: string, callback: IRCIMIWGetTotalUnreadCountCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getTotalUnreadCount', resultCallback, { channelId });
    }

    /**
     * 加载会话中未读的 @ 消息数量。
     * 注：不支持聊天室！
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadMentionedCountLoaded]
     * @deprecated 用 {@link #getUnreadMentionedCount(RCIMIWConversationType, String, String, IRCIMIWGetUnreadMentionedCountCallback)} 代替
     */
    loadUnreadMentionedCount(type: RCIMIWConversationType, targetId: string, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadUnreadMentionedCount', resultCallback, { type, targetId, channelId });
    }

    /**
     * 获取会话中未读的 @ 消息数量。
     * 注：不支持聊天室！
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  获取会话中未读的 @ 消息数量事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadMentionedCountLoaded]
     */
    getUnreadMentionedCount(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWGetUnreadMentionedCountCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getUnreadMentionedCount', resultCallback, { type, targetId, channelId });
    }

    /**
     * 加载当前用户加入的所有超级群会话的未读消息数的总和。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupAllUnreadCountLoaded]
     * @deprecated 用 {@link #getUltraGroupAllUnreadCount(IRCIMIWGetUltraGroupAllUnreadCountCallback)} 代替
     */
    loadUltraGroupAllUnreadCount(): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadUltraGroupAllUnreadCount', resultCallback, {});
    }

    /**
     * 获取当前用户加入的所有超级群会话的未读消息数的总和。
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupAllUnreadCountLoaded]
     */
    getUltraGroupAllUnreadCount(callback: IRCIMIWGetUltraGroupAllUnreadCountCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getUltraGroupAllUnreadCount', resultCallback, {});
    }

    /**
     * 加载当前用户加入的所有超级群会话中的未读 @ 消息数的总和。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupAllUnreadMentionedCountLoaded]
     * @deprecated 用 {@link #getUltraGroupAllUnreadMentionedCount(IRCIMIWGetUltraGroupAllUnreadMentionedCountCallback)} 代替
     */
    loadUltraGroupAllUnreadMentionedCount(): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadUltraGroupAllUnreadMentionedCount', resultCallback, {});
    }

    /**
     * 获取当前用户加入的所有超级群会话中的未读 @ 消息数的总和。
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupAllUnreadMentionedCountLoaded]
     */
    getUltraGroupAllUnreadMentionedCount(callback: IRCIMIWGetUltraGroupAllUnreadMentionedCountCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getUltraGroupAllUnreadMentionedCount', resultCallback, {});
    }

    /**
     * 获取指定会话的未读消息数
     * @param targetId 会话 ID
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupUnreadCountLoaded]
     * @deprecated 用 {@link #getUltraGroupUnreadCount(String, IRCIMIWGetUltraGroupUnreadCountCallback)} 代替
     */
    loadUltraGroupUnreadCount(targetId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadUltraGroupUnreadCount', resultCallback, { targetId });
    }

    /**
     * 获取指定会话的未读消息数
     * @param targetId 会话 ID
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupUnreadCountLoaded]
     */
    getUltraGroupUnreadCount(targetId: string, callback: IRCIMIWGetUltraGroupUnreadCountCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getUltraGroupUnreadCount', resultCallback, { targetId });
    }

    /**
     * 获取超级群会话中被 @ 的消息数
     * @param targetId 会话 ID
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupUnreadMentionedCountLoaded]
     * @deprecated 用 {@link #getUltraGroupUnreadMentionedCount(String, IRCIMIWGetUltraGroupUnreadMentionedCountCallback)} 代替
     */
    loadUltraGroupUnreadMentionedCount(targetId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadUltraGroupUnreadMentionedCount', resultCallback, { targetId });
    }

    /**
     * 获取超级群会话中被 @ 的消息数
     * @param targetId 会话 ID
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupUnreadMentionedCountLoaded]
     */
    getUltraGroupUnreadMentionedCount(targetId: string, callback: IRCIMIWGetUltraGroupUnreadMentionedCountCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getUltraGroupUnreadMentionedCount', resultCallback, { targetId });
    }

    /**
     * 根据会话类型加载未读数
     * 注：不支持聊天室！
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param contain           是否包含免打扰消息的未读消息数。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadCountByConversationTypesLoaded]
     * @deprecated 用 {@link #getUnreadCountByConversationTypes(List, String, boolean, IRCIMIWGetUnreadCountByConversationTypesCallback)} 代替
     */
    loadUnreadCountByConversationTypes(conversationTypes: Array<RCIMIWConversationType>, channelId: string, contain: boolean): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadUnreadCountByConversationTypes', resultCallback, { conversationTypes, channelId, contain });
    }

    /**
     * 根据会话类型加载未读数
     * 注：不支持聊天室！
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param contain           是否包含免打扰消息的未读消息数。
     * @param callback          事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadCountByConversationTypesLoaded]
     */
    getUnreadCountByConversationTypes(conversationTypes: Array<RCIMIWConversationType>, channelId: string, contain: boolean, callback: IRCIMIWGetUnreadCountByConversationTypesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getUnreadCountByConversationTypes', resultCallback, { conversationTypes, channelId, contain });
    }

    /**
     * 清除某个会话中的未读消息数。
     * 注：不支持聊天室！
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param timestamp 该会话已阅读的最后一条消息的发送时间戳，清除所有传入当前最新时间戳
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadCountCleared]
     */
    clearUnreadCount(type: RCIMIWConversationType, targetId: string, channelId: string, timestamp: number, callback: IRCIMIWClearUnreadCountCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUnreadCountCleared') {
                    let { code } = res;
                    callback.onUnreadCountCleared?.({ code });
                }
            }
        }
        return this._invokeMethod('clearUnreadCount', resultCallback, { type, targetId, channelId, timestamp });
    }

    /**
     * 保存会话草稿信息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param draft     草稿的文字内容。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onDraftMessageSaved]
     */
    saveDraftMessage(type: RCIMIWConversationType, targetId: string, channelId: string, draft: string, callback: IRCIMIWSaveDraftMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onDraftMessageSaved') {
                    let { code } = res;
                    callback.onDraftMessageSaved?.({ code });
                }
            }
        }
        return this._invokeMethod('saveDraftMessage', resultCallback, { type, targetId, channelId, draft });
    }

    /**
     * 加载会话中的草稿信息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onDraftMessageLoaded]
     * @deprecated 用 {@link #getDraftMessage(RCIMIWConversationType, String, String, IRCIMIWGetDraftMessageCallback)} 代替
     */
    loadDraftMessage(type: RCIMIWConversationType, targetId: string, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadDraftMessage', resultCallback, { type, targetId, channelId });
    }

    /**
     * 获取会话中的草稿信息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onDraftMessageLoaded]
     */
    getDraftMessage(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWGetDraftMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getDraftMessage', resultCallback, { type, targetId, channelId });
    }

    /**
     * 删除指定会话中的草稿信息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onDraftMessageCleared]
     */
    clearDraftMessage(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWClearDraftMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onDraftMessageCleared') {
                    let { code } = res;
                    callback.onDraftMessageCleared?.({ code });
                }
            }
        }
        return this._invokeMethod('clearDraftMessage', resultCallback, { type, targetId, channelId });
    }

    /**
     * 加载免打扰的会话列表。
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlockedConversationsLoaded]
     * @deprecated 用 {@link #getBlockedConversations(List, String, IRCIMIWGetBlockedConversationsCallback)} 代替
     */
    loadBlockedConversations(conversationTypes: Array<RCIMIWConversationType>, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadBlockedConversations', resultCallback, { conversationTypes, channelId });
    }

    /**
     * 获取免打扰的会话列表。
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback          事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlockedConversationsLoaded]
     */
    getBlockedConversations(conversationTypes: Array<RCIMIWConversationType>, channelId: string, callback: IRCIMIWGetBlockedConversationsCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getBlockedConversations', resultCallback, { conversationTypes, channelId });
    }

    /**
     * 设置会话的置顶状态。若会话不存在，调用此方法 SDK 自动创建会话并置顶。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param top       是否置顶
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationTopStatusChanged]
     */
    changeConversationTopStatus(type: RCIMIWConversationType, targetId: string, channelId: string, top: boolean, callback: IRCIMIWChangeConversationTopStatusCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onConversationTopStatusChanged') {
                    let { code } = res;
                    callback.onConversationTopStatusChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changeConversationTopStatus', resultCallback, { type, targetId, channelId, top });
    }

    /**
     * 加载会话的置顶状态
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationTopStatusLoaded]
     * @deprecated 用 {@link #getConversationTopStatus(RCIMIWConversationType, String, String, IRCIMIWGetConversationTopStatusCallback)} 代替
     */
    loadConversationTopStatus(type: RCIMIWConversationType, targetId: string, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadConversationTopStatus', resultCallback, { type, targetId, channelId });
    }

    /**
     * 获取会话的置顶状态
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationTopStatusLoaded]
     */
    getConversationTopStatus(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWGetConversationTopStatusCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getConversationTopStatus', resultCallback, { type, targetId, channelId });
    }

    /**
     * 同步会话阅读状态。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param timestamp 会话中已读的最后一条消息的发送时间戳
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationReadStatusSynced]
     */
    syncConversationReadStatus(type: RCIMIWConversationType, targetId: string, channelId: string, timestamp: number, callback: IRCIMIWSyncConversationReadStatusCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onConversationReadStatusSynced') {
                    let { code } = res;
                    callback.onConversationReadStatusSynced?.({ code });
                }
            }
        }
        return this._invokeMethod('syncConversationReadStatus', resultCallback, { type, targetId, channelId, timestamp });
    }

    /**
     * 向会话中发送正在输入的状态，目前只支持单聊。
     * @param type        会话类型
     * @param targetId    会话 ID
     * @param channelId   频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param currentType 当前的状态
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    sendTypingStatus(type: RCIMIWConversationType, targetId: string, channelId: string, currentType: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('sendTypingStatus', resultCallback, { type, targetId, channelId, currentType });
    }

    /**
     * 加载历史消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param sentTime  当前消息时间戳
     * @param order     获取消息的方向。BEFORE：获取 sentTime 之前的消息 （时间递减），AFTER：获取 sentTime 之后的消息 （时间递增）
     * @param policy    消息的加载策略。LOCAL：只加载本地，REMOTE：只加载远端，LOCAL_REMOTE：本地远端都加载
     * @param count     获取的消息数量，0 < count <= 20
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesLoaded]
     * @deprecated 用 {@link #getMessages(RCIMIWConversationType, String, String, long, RCIMIWTimeOrder, RCIMIWMessageOperationPolicy, int, IRCIMIWGetMessagesCallback)} 代替
     */
    loadMessages(type: RCIMIWConversationType, targetId: string, channelId: string, sentTime: number, order: RCIMIWTimeOrder, policy: RCIMIWMessageOperationPolicy, count: number): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadMessages', resultCallback, { type, targetId, channelId, sentTime, order, policy, count });
    }

    /**
     * 加载历史消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param sentTime  当前消息时间戳
     * @param order     获取消息的方向。BEFORE：获取 sentTime 之前的消息 （时间递减），AFTER：获取 sentTime 之后的消息 （时间递增）
     * @param policy    消息的加载策略。LOCAL：只加载本地，REMOTE：只加载远端，LOCAL_REMOTE：本地远端都加载
     * @param count     获取的消息数量，0 < count <= 20
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesLoaded]
     */
    getMessages(type: RCIMIWConversationType, targetId: string, channelId: string, sentTime: number, order: RCIMIWTimeOrder, policy: RCIMIWMessageOperationPolicy, count: number, callback: IRCIMIWGetMessagesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getMessages', resultCallback, { type, targetId, channelId, sentTime, order, policy, count });
    }

    /**
     * 根据消息 id 获取消息体（本地数据库索引唯一值）。
     * @param messageId 消息的 messageId，可在消息对象中获取
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getMessageById(messageId: number, callback: IRCIMIWGetMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getMessageById', resultCallback, { messageId });
    }

    /**
     * 通过全局唯一 id 获取消息实体。
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值。
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getMessageByUId(messageUId: string, callback: IRCIMIWGetMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getMessageByUId', resultCallback, { messageUId });
    }

    /**
     * 加载第一条未读消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onFirstUnreadMessageLoaded]
     * @deprecated 用 {@link #getFirstUnreadMessage(RCIMIWConversationType, String, String, IRCIMIWGetFirstUnreadMessageCallback)} 代替
     */
    loadFirstUnreadMessage(type: RCIMIWConversationType, targetId: string, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadFirstUnreadMessage', resultCallback, { type, targetId, channelId });
    }

    /**
     * 获取第一条未读消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onFirstUnreadMessageLoaded]
     */
    getFirstUnreadMessage(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWGetFirstUnreadMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getFirstUnreadMessage', resultCallback, { type, targetId, channelId });
    }

    /**
     * 加载会话中未读的 @ 消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadMentionedMessagesLoaded]
     * @deprecated 用 {@link #getUnreadMentionedMessages(RCIMIWConversationType, String, String, IRCIMIWGetUnreadMentionedMessagesCallback)} 代替
     */
    loadUnreadMentionedMessages(type: RCIMIWConversationType, targetId: string, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadUnreadMentionedMessages', resultCallback, { type, targetId, channelId });
    }

    /**
     * 获取会话中未读的 @ 消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadMentionedMessagesLoaded]
     */
    getUnreadMentionedMessages(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWGetUnreadMentionedMessagesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getUnreadMentionedMessages', resultCallback, { type, targetId, channelId });
    }

    /**
     * 插入一条消息
     * @param message  插入的消息
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageInserted]
     */
    insertMessage(message: RCIMIWMessage, callback: IRCIMIWInsertMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessageInserted') {
                    let { code, message } = res;
                    callback.onMessageInserted?.({ code, message });
                }
            }
        }
        return this._invokeMethod('insertMessage', resultCallback, { message });
    }

    /**
     * 插入多条消息，不支持超级群
     * @param messages 插入的消息集合
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesInserted]
     */
    insertMessages(messages: Array<RCIMIWMessage>, callback: IRCIMIWInsertMessagesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessagesInserted') {
                    let { code, messages } = res;
                    callback.onMessagesInserted?.({ code, messages });
                }
            }
        }
        return this._invokeMethod('insertMessages', resultCallback, { messages });
    }

    /**
     * 清除消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param timestamp 清除消息截止时间戳，0 <= recordTime <= 当前会话最后一条消息的 sentTime, 0 清除所有消息，其他值清除小于等于 recordTime 的消息
     * @param policy    清除的策略
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesCleared]
     */
    clearMessages(type: RCIMIWConversationType, targetId: string, channelId: string, timestamp: number, policy: RCIMIWMessageOperationPolicy, callback: IRCIMIWClearMessagesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessagesCleared') {
                    let { code } = res;
                    callback.onMessagesCleared?.({ code });
                }
            }
        }
        return this._invokeMethod('clearMessages', resultCallback, { type, targetId, channelId, timestamp, policy });
    }

    /**
     * 删除本地消息
     * @param messages 消息集合
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onLocalMessagesDeleted]
     */
    deleteLocalMessages(messages: Array<RCIMIWMessage>, callback: IRCIMIWDeleteLocalMessagesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onLocalMessagesDeleted') {
                    let { code, messages } = res;
                    callback.onLocalMessagesDeleted?.({ code, messages });
                }
            }
        }
        return this._invokeMethod('deleteLocalMessages', resultCallback, { messages });
    }

    /**
     * 删除消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param messages  消息集合
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesDeleted]
     */
    deleteMessages(type: RCIMIWConversationType, targetId: string, channelId: string, messages: Array<RCIMIWMessage>, callback: IRCIMIWDeleteMessagesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessagesDeleted') {
                    let { code, messages } = res;
                    callback.onMessagesDeleted?.({ code, messages });
                }
            }
        }
        return this._invokeMethod('deleteMessages', resultCallback, { type, targetId, channelId, messages });
    }

    /**
     * 撤回消息
     * @param message  需要被撤回的消息
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageRecalled]
     */
    recallMessage(message: RCIMIWMessage, callback: IRCIMIWRecallMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessageRecalled') {
                    let { code, message } = res;
                    callback.onMessageRecalled?.({ code, message });
                }
            }
        }
        return this._invokeMethod('recallMessage', resultCallback, { message });
    }

    /**
     * 发送某个会话中的消息阅读回执
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param timestamp 该会话中已读的最后一条消息的发送时间戳
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onPrivateReadReceiptMessageSent]
     */
    sendPrivateReadReceiptMessage(targetId: string, channelId: string, timestamp: number, callback: IRCIMIWSendPrivateReadReceiptMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onPrivateReadReceiptMessageSent') {
                    let { code } = res;
                    callback.onPrivateReadReceiptMessageSent?.({ code });
                }
            }
        }
        return this._invokeMethod('sendPrivateReadReceiptMessage', resultCallback, { targetId, channelId, timestamp });
    }

    /**
     * 发起群聊消息已读回执请求
     * @param message  需要请求已读回执的消息
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onGroupReadReceiptRequestSent]
     */
    sendGroupReadReceiptRequest(message: RCIMIWMessage, callback: IRCIMIWSendGroupReadReceiptRequestCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onGroupReadReceiptRequestSent') {
                    let { code, message } = res;
                    callback.onGroupReadReceiptRequestSent?.({ code, message });
                }
            }
        }
        return this._invokeMethod('sendGroupReadReceiptRequest', resultCallback, { message });
    }

    /**
     * 发送群聊已读回执
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param messages  会话中需要发送已读回执的消息列表
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onGroupReadReceiptResponseSent]
     */
    sendGroupReadReceiptResponse(targetId: string, channelId: string, messages: Array<RCIMIWMessage>, callback: IRCIMIWSendGroupReadReceiptResponseCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onGroupReadReceiptResponseSent') {
                    let { code, message } = res;
                    callback.onGroupReadReceiptResponseSent?.({ code, message });
                }
            }
        }
        return this._invokeMethod('sendGroupReadReceiptResponse', resultCallback, { targetId, channelId, messages });
    }

    /**
     * 更新消息扩展信息
     * 每条消息携带扩展信息键值对最大值 300个，单次设置扩展信息键值对最大值 20个
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值
     * @param expansion  要更新的消息扩展信息键值对，类型是 HashMap；Key 支持大小写英文字母、数字、部分特殊符号 + = - _ 的组合方式，不支持汉字。Value 可以输入空格
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageExpansionUpdated]
     */
    updateMessageExpansion(messageUId: string, expansion: { [propName: string]: string }, callback: IRCIMIWUpdateMessageExpansionCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessageExpansionUpdated') {
                    let { code } = res;
                    callback.onMessageExpansionUpdated?.({ code });
                }
            }
        }
        return this._invokeMethod('updateMessageExpansion', resultCallback, { messageUId, expansion });
    }

    /**
     * 删除消息扩展信息中特定的键值对
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值
     * @param keys       消息扩展信息中待删除的 key 的列表，类型是 ArrayList
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageExpansionForKeysRemoved]
     */
    removeMessageExpansionForKeys(messageUId: string, keys: Array<string>, callback: IRCIMIWRemoveMessageExpansionForKeysCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessageExpansionForKeysRemoved') {
                    let { code } = res;
                    callback.onMessageExpansionForKeysRemoved?.({ code });
                }
            }
        }
        return this._invokeMethod('removeMessageExpansionForKeys', resultCallback, { messageUId, keys });
    }

    /**
     * 设置消息发送状态。
     * @param messageId  消息的 messageId，可在消息对象中获取
     * @param sentStatus 要修改的状态
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageSentStatusChanged]
     */
    changeMessageSentStatus(messageId: number, sentStatus: RCIMIWSentStatus, callback: IRCIMIWChangeMessageSentStatusCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessageSentStatusChanged') {
                    let { code } = res;
                    callback.onMessageSentStatusChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changeMessageSentStatus', resultCallback, { messageId, sentStatus });
    }

    /**
     * 设置消息接收状态。
     * @param messageId      消息的 messageId，可在消息对象中获取
     * @param receivedStatus 要修改的状态
     * @param callback       事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageReceiveStatusChanged]
     */
    changeMessageReceiveStatus(messageId: number, receivedStatus: RCIMIWReceivedStatus, callback: IRCIMIWChangeMessageReceivedStatusCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessageReceiveStatusChanged') {
                    let { code } = res;
                    callback.onMessageReceiveStatusChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changeMessageReceiveStatus', resultCallback, { messageId, receivedStatus });
    }

    /**
     * 加入聊天室。
     * @param targetId     聊天室会话 ID
     * @param messageCount 进入聊天室拉取消息数目，-1 时不拉取任何消息，0 时拉取 10 条消息，最多只能拉取 50
     * @param autoCreate   是否创建聊天室，TRUE 如果聊天室不存在，sdk 会创建聊天室并加入，如果已存在，则直接加入
     * @param callback     事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomJoined]
     */
    joinChatRoom(targetId: string, messageCount: number, autoCreate: boolean, callback: IRCIMIWJoinChatRoomCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onChatRoomJoined') {
                    let { code, targetId } = res;
                    callback.onChatRoomJoined?.({ code, targetId });
                }
            }
        }
        return this._invokeMethod('joinChatRoom', resultCallback, { targetId, messageCount, autoCreate });
    }

    /**
     * 退出聊天室。
     * @param targetId 聊天室会话 ID
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomLeft]
     */
    leaveChatRoom(targetId: string, callback: IRCIMIWLeaveChatRoomCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onChatRoomLeft') {
                    let { code, targetId } = res;
                    callback.onChatRoomLeft?.({ code, targetId });
                }
            }
        }
        return this._invokeMethod('leaveChatRoom', resultCallback, { targetId });
    }

    /**
     * 加载聊天室历史消息记录。
     * 注：必须先开通聊天室消息云存储功能。
     * @param targetId  聊天室会话 ID
     * @param timestamp 起始的消息发送时间戳
     * @param order     拉取顺序 0:倒序，1:正序
     * @param count     要获取的消息数量，0 < count <= 50。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomMessagesLoaded]
     * @deprecated 用 {@link #getChatRoomMessages(String, long, RCIMIWTimeOrder, int, IRCIMIWGetChatRoomMessagesCallback)} 代替
     */
    loadChatRoomMessages(targetId: string, timestamp: number, order: RCIMIWTimeOrder, count: number): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadChatRoomMessages', resultCallback, { targetId, timestamp, order, count });
    }

    /**
     * 获取聊天室历史消息记录。
     * 注：必须先开通聊天室消息云存储功能。
     * @param targetId  聊天室会话 ID
     * @param timestamp 起始的消息发送时间戳
     * @param order     拉取顺序 0:倒序，1:正序
     * @param count     要获取的消息数量，0 < count <= 50。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomMessagesLoaded]
     */
    getChatRoomMessages(targetId: string, timestamp: number, order: RCIMIWTimeOrder, count: number, callback: IRCIMIWGetChatRoomMessagesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getChatRoomMessages', resultCallback, { targetId, timestamp, order, count });
    }

    /**
     * 设置聊天室自定义属性。
     * @param targetId       聊天室会话 ID
     * @param key            聊天室属性名称，Key 支持大小写英文字母、数字、部分特殊符号 + = - _ 的组合方式，最大长度 128 个字符
     * @param value          聊天室属性对应的值，最大长度 4096 个字符
     * @param deleteWhenLeft 用户掉线或退出时，是否自动删除该 Key、Value 值
     * @param overwrite      如果当前 key 存在，是否进行覆盖
     * @param callback       事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntryAdded]
     */
    addChatRoomEntry(targetId: string, key: string, value: string, deleteWhenLeft: boolean, overwrite: boolean, callback: IRCIMIWAddChatRoomEntryCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onChatRoomEntryAdded') {
                    let { code } = res;
                    callback.onChatRoomEntryAdded?.({ code });
                }
            }
        }
        return this._invokeMethod('addChatRoomEntry', resultCallback, { targetId, key, value, deleteWhenLeft, overwrite });
    }

    /**
     * 批量设置聊天室自定义属性
     * @param targetId       聊天室会话 ID
     * @param entries        聊天室属性
     * @param deleteWhenLeft 用户掉线或退出时，是否自动删除该 Key、Value 值
     * @param overwrite      是否强制覆盖
     * @param callback       事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntriesAdded]
     */
    addChatRoomEntries(targetId: string, entries: { [propName: string]: string }, deleteWhenLeft: boolean, overwrite: boolean, callback: IRCIMIWAddChatRoomEntriesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onChatRoomEntriesAdded') {
                    let { code, errors } = res;
                    callback.onChatRoomEntriesAdded?.({ code, errors });
                }
            }
        }
        return this._invokeMethod('addChatRoomEntries', resultCallback, { targetId, entries, deleteWhenLeft, overwrite });
    }

    /**
     * 加载聊天室单个属性。
     * @param targetId 聊天室会话 ID
     * @param key      聊天室属性键值
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntryLoaded]
     * @deprecated 用 {@link #getChatRoomEntry(String, String, IRCIMIWGetChatRoomEntryCallback)} 代替
     */
    loadChatRoomEntry(targetId: string, key: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadChatRoomEntry', resultCallback, { targetId, key });
    }

    /**
     * 获取聊天室单个属性。
     * @param targetId 聊天室会话 ID
     * @param key      聊天室属性键值
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntryLoaded]
     */
    getChatRoomEntry(targetId: string, key: string, callback: IRCIMIWGetChatRoomEntryCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getChatRoomEntry', resultCallback, { targetId, key });
    }

    /**
     * 加载聊天室所有属性。
     * @param targetId 聊天室会话 ID
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomAllEntriesLoaded]
     * @deprecated 用 {@link #getChatRoomAllEntries(String, IRCIMIWGetChatRoomAllEntriesCallback)} 代替
     */
    loadChatRoomAllEntries(targetId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadChatRoomAllEntries', resultCallback, { targetId });
    }

    /**
     * 获取聊天室所有属性。
     * @param targetId 聊天室会话 ID
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomAllEntriesLoaded]
     */
    getChatRoomAllEntries(targetId: string, callback: IRCIMIWGetChatRoomAllEntriesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getChatRoomAllEntries', resultCallback, { targetId });
    }

    /**
     * 删除聊天室自定义属性。
     * @param targetId 聊天室会话 ID
     * @param key      聊天室属性键值
     * @param force    是否强制删除
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntryRemoved]
     */
    removeChatRoomEntry(targetId: string, key: string, force: boolean, callback: IRCIMIWRemoveChatRoomEntryCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onChatRoomEntryRemoved') {
                    let { code } = res;
                    callback.onChatRoomEntryRemoved?.({ code });
                }
            }
        }
        return this._invokeMethod('removeChatRoomEntry', resultCallback, { targetId, key, force });
    }

    /**
     * 批量删除聊天室自定义属性
     * @param targetId 聊天室会话 ID
     * @param keys     聊天室属性
     * @param force    是否强制覆盖
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntriesRemoved]
     */
    removeChatRoomEntries(targetId: string, keys: Array<string>, force: boolean, callback: IRCIMIWRemoveChatRoomEntriesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onChatRoomEntriesRemoved') {
                    let { code } = res;
                    callback.onChatRoomEntriesRemoved?.({ code });
                }
            }
        }
        return this._invokeMethod('removeChatRoomEntries', resultCallback, { targetId, keys, force });
    }

    /**
     * 将某个用户加入黑名单。
     * 当你把对方加入黑名单后，对方再发消息时，就会提示“已被加入黑名单，消息发送失败”。 但你依然可以发消息个对方。
     * @param userId   用户 Id
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlacklistAdded]
     */
    addToBlacklist(userId: string, callback: IRCIMIWAddToBlacklistCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onBlacklistAdded') {
                    let { code, userId } = res;
                    callback.onBlacklistAdded?.({ code, userId });
                }
            }
        }
        return this._invokeMethod('addToBlacklist', resultCallback, { userId });
    }

    /**
     * 将某个用户从黑名单中移出。
     * @param userId   用户 Id
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlacklistRemoved]
     */
    removeFromBlacklist(userId: string, callback: IRCIMIWRemoveFromBlacklistCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onBlacklistRemoved') {
                    let { code, userId } = res;
                    callback.onBlacklistRemoved?.({ code, userId });
                }
            }
        }
        return this._invokeMethod('removeFromBlacklist', resultCallback, { userId });
    }

    /**
     * 获取某用户是否在黑名单中。
     * @param userId 用户 Id
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlacklistStatusLoaded]
     * @deprecated 用 {@link #getBlacklistStatus(String, IRCIMIWGetBlacklistStatusCallback)} 代替
     */
    loadBlacklistStatus(userId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadBlacklistStatus', resultCallback, { userId });
    }

    /**
     * 获取某用户是否在黑名单中。
     * @param userId   用户 Id
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlacklistStatusLoaded]
     */
    getBlacklistStatus(userId: string, callback: IRCIMIWGetBlacklistStatusCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getBlacklistStatus', resultCallback, { userId });
    }

    /**
     * 加载当前用户设置的黑名单列表。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlacklistLoaded]
     * @deprecated 用 {@link #getBlacklist(IRCIMIWGetBlacklistCallback)} 代替
     */
    loadBlacklist(): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadBlacklist', resultCallback, {});
    }

    /**
     * 获取当前用户设置的黑名单列表。
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlacklistLoaded]
     */
    getBlacklist(callback: IRCIMIWGetBlacklistCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getBlacklist', resultCallback, {});
    }

    /**
     * 根据关键字搜索指定会话中的消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param keyword   搜索的关键字
     * @param startTime 查询 beginTime 之前的消息， 传 0 时从最新消息开始搜索，从该时间往前搜索。
     * @param count     查询的数量，0 < count <= 50。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesSearched]
     */
    searchMessages(type: RCIMIWConversationType, targetId: string, channelId: string, keyword: string, startTime: number, count: number, callback: IRCIMIWSearchMessagesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('searchMessages', resultCallback, { type, targetId, channelId, keyword, startTime, count });
    }

    /**
     * 根据关键字搜索指定会话中某个时间段的消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param keyword   搜索的关键字
     * @param startTime 开始时间
     * @param endTime   结束时间
     * @param offset    偏移量
     * @param count     返回的搜索结果数量，0 < count <= 50。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesSearchedByTimeRange]
     */
    searchMessagesByTimeRange(type: RCIMIWConversationType, targetId: string, channelId: string, keyword: string, startTime: number, endTime: number, offset: number, count: number, callback: IRCIMIWSearchMessagesByTimeRangeCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('searchMessagesByTimeRange', resultCallback, { type, targetId, channelId, keyword, startTime, endTime, offset, count });
    }

    /**
     * 根据用户 id 搜索指定会话中的消息。
     * @param userId    用户 id
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param startTime 查询记录的起始时间， 传 0 时从最新消息开始搜索，从该时间往前搜索。
     * @param count     返回的搜索结果数量 0 < count <= 50。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesSearchedByUserId]
     */
    searchMessagesByUserId(userId: string, type: RCIMIWConversationType, targetId: string, channelId: string, startTime: number, count: number, callback: IRCIMIWSearchMessagesByUserIdCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('searchMessagesByUserId', resultCallback, { userId, type, targetId, channelId, startTime, count });
    }

    /**
     * 根据关键字搜索会话。
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param messageTypes      搜索的消息类型
     * @param keyword           搜索的关键字。
     * @param callback          事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationsSearched]
     */
    searchConversations(conversationTypes: Array<RCIMIWConversationType>, channelId: string, messageTypes: Array<RCIMIWMessageType>, keyword: string, callback: IRCIMIWSearchConversationsCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('searchConversations', resultCallback, { conversationTypes, channelId, messageTypes, keyword });
    }

    /**
     * 屏蔽某个时间段的消息提醒
     * @param startTime   开始消息免打扰时间，格式为 HH:MM:SS
     * @param spanMinutes 需要消息免打扰分钟数，0 < spanMinutes < 1440（ 比如，您设置的起始时间是 00：00， 结束时间为 01:00，则 spanMinutes 为 60 分钟。设置为 1439 代表全天免打扰 （23  60 + 59 = 1439 ））
     * @param level       消息通知级别
     * @param callback    事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onNotificationQuietHoursChanged]
     */
    changeNotificationQuietHours(startTime: string, spanMinutes: number, level: RCIMIWPushNotificationQuietHoursLevel, callback: IRCIMIWChangeNotificationQuietHoursCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onNotificationQuietHoursChanged') {
                    let { code } = res;
                    callback.onNotificationQuietHoursChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changeNotificationQuietHours', resultCallback, { startTime, spanMinutes, level });
    }

    /**
     * 删除已设置的全局时间段消息提醒屏蔽
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onNotificationQuietHoursRemoved]
     */
    removeNotificationQuietHours(callback: IRCIMIWRemoveNotificationQuietHoursCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onNotificationQuietHoursRemoved') {
                    let { code } = res;
                    callback.onNotificationQuietHoursRemoved?.({ code });
                }
            }
        }
        return this._invokeMethod('removeNotificationQuietHours', resultCallback, {});
    }

    /**
     * 加载已设置的时间段消息提醒屏蔽
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onNotificationQuietHoursLoaded]
     * @deprecated 用 {@link #getNotificationQuietHours(IRCIMIWGetNotificationQuietHoursCallback)} 代替
     */
    loadNotificationQuietHours(): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadNotificationQuietHours', resultCallback, {});
    }

    /**
     * 获取已设置的时间段消息提醒屏蔽
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onNotificationQuietHoursLoaded]
     */
    getNotificationQuietHours(callback: IRCIMIWGetNotificationQuietHoursCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { startTime, spanMinutes, level } = res;
                    callback.onSuccess?.({ startTime, spanMinutes, level });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getNotificationQuietHours', resultCallback, {});
    }

    /**
     * 设置会话的消息提醒状态
     * 注：超级群调用该接口，channelId 为空时，相当于设置了 channelId 为空的频道的免打扰，不会屏蔽整个超级群会话下所有频道的免打扰
     * @param type      会话类型。请注意以下限制：<ul><li>*超级群会话类型*：如在 2022.09.01 之前开通超级群业务，默认不支持为单个超级群会话*所有消息*设置免打扰级别（“所有消息”指所有频道中的消息和不属于任何频道的消息）。该接口仅设置指定超级群会话（`targetId`）中*不属于任何频道的消息*的免打扰状态级别。如需修改请提交工单。</li><li>*聊天室会话类型*：不支持，因为聊天室消息默认不支持消息推送提醒。</li></ul>
     * @param targetId  会话 ID
     * @param channelId 超级群的会话频道 ID。其他类型传 null 即可。<ul><li>如果传入频道 ID，则针对该指定频道设置消息免打扰级别。如果不指定频道 ID，则对所有超级群消息生效。</li><li>*注意*：2022.09.01 之前开通超级群业务的客户，如果不指定频道 ID，则默认传 "" 空字符串，即仅针对指定超级群会话（`targetId`）中*不属于任何频道的消息*设置免打扰状态级别。如需修改请提交工单。</p></li></ul>
     * @param level     消息通知级别
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationNotificationLevelChanged]
     */
    changeConversationNotificationLevel(type: RCIMIWConversationType, targetId: string, channelId: string, level: RCIMIWPushNotificationLevel, callback: IRCIMIWChangeConversationNotificationLevelCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onConversationNotificationLevelChanged') {
                    let { code } = res;
                    callback.onConversationNotificationLevelChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changeConversationNotificationLevel', resultCallback, { type, targetId, channelId, level });
    }

    /**
     * 加载会话的消息提醒状态
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationNotificationLevelLoaded]
     * @deprecated 用 {@link #getConversationNotificationLevel(RCIMIWConversationType, String, String, IRCIMIWGetConversationNotificationLevelCallback)} 代替
     */
    loadConversationNotificationLevel(type: RCIMIWConversationType, targetId: string, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadConversationNotificationLevel', resultCallback, { type, targetId, channelId });
    }

    /**
     * 获取会话的消息提醒状态
     * @param type      会话类型。请注意以下限制：<ul><li>*超级群会话类型*：如在 2022.09.01 之前开通超级群业务，默认不支持为单个超级群会话*所有消息*设置免打扰级别（“所有消息”指所有频道中的消息和不属于任何频道的消息）。该接口仅设置指定超级群会话（`targetId`）中*不属于任何频道的消息*的免打扰状态级别。如需修改请提交工单。</li><li>*聊天室会话类型*：不支持，因为聊天室消息默认不支持消息推送提醒。</li></ul>
     * @param targetId  会话 ID
     * @param channelId 超级群的会话频道 ID。其他类型传 null 即可。<ul><li>如果传入频道 ID，则针对该指定频道设置消息免打扰级别。如果不指定频道 ID，则对所有超级群消息生效。</li><li>*注意*：2022.09.01 之前开通超级群业务的客户，如果不指定频道 ID，则默认传 "" 空字符串，即仅针对指定超级群会话（`targetId`）中*不属于任何频道的消息*设置免打扰状态级别。如需修改请提交工单。</p></li></ul>
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationNotificationLevelLoaded]
     */
    getConversationNotificationLevel(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWGetConversationNotificationLevelCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getConversationNotificationLevel', resultCallback, { type, targetId, channelId });
    }

    /**
     * 设置会话类型的消息提醒状态
     * 注：如要移除消息提醒状态，设置level为RCIMIWPushNotificationLevelDefault
     * @param type     会话类型
     * @param level    消息通知级别
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationTypeNotificationLevelChanged]
     */
    changeConversationTypeNotificationLevel(type: RCIMIWConversationType, level: RCIMIWPushNotificationLevel, callback: IRCIMIWChangeConversationTypeNotificationLevelCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onConversationTypeNotificationLevelChanged') {
                    let { code } = res;
                    callback.onConversationTypeNotificationLevelChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changeConversationTypeNotificationLevel', resultCallback, { type, level });
    }

    /**
     * 获取会话类型的消息提醒状态
     * @param type 会话类型
     * @return [onConversationTypeNotificationLevelLoaded]
     * @deprecated 用 {@link #getConversationTypeNotificationLevel(RCIMIWConversationType, IRCIMIWGetConversationTypeNotificationLevelCallback)} 代替
     */
    loadConversationTypeNotificationLevel(type: RCIMIWConversationType): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadConversationTypeNotificationLevel', resultCallback, { type });
    }

    /**
     * 获取会话类型的消息提醒状态
     * @param type     会话类型
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return [onConversationTypeNotificationLevelLoaded]
     */
    getConversationTypeNotificationLevel(type: RCIMIWConversationType, callback: IRCIMIWGetConversationTypeNotificationLevelCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getConversationTypeNotificationLevel', resultCallback, { type });
    }

    /**
     * 设置超级群的默认消息状态
     * 一般由管理员设置的接口，针对超级群的所有群成员生效，针对超级群下所有频道生效，优先级较低。如果群成员自己超级群的免打扰级别，那么以群成员自己设置的为准。
     * @param targetId 会话 ID
     * @param level    消息通知级别
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupDefaultNotificationLevelChanged]
     */
    changeUltraGroupDefaultNotificationLevel(targetId: string, level: RCIMIWPushNotificationLevel, callback: IRCIMIWChangeUltraGroupDefaultNotificationLevelCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUltraGroupDefaultNotificationLevelChanged') {
                    let { code } = res;
                    callback.onUltraGroupDefaultNotificationLevelChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changeUltraGroupDefaultNotificationLevel', resultCallback, { targetId, level });
    }

    /**
     * 获取超级群的默认消息状态
     * @param targetId 会话 ID
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupDefaultNotificationLevelLoaded]
     * @deprecated 用 {@link #getUltraGroupDefaultNotificationLevel(String, IRCIMIWGetUltraGroupDefaultNotificationLevelCallback)} 代替
     */
    loadUltraGroupDefaultNotificationLevel(targetId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadUltraGroupDefaultNotificationLevel', resultCallback, { targetId });
    }

    /**
     * 获取超级群的默认消息状态
     * @param targetId 会话 ID
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupDefaultNotificationLevelLoaded]
     */
    getUltraGroupDefaultNotificationLevel(targetId: string, callback: IRCIMIWGetUltraGroupDefaultNotificationLevelCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getUltraGroupDefaultNotificationLevel', resultCallback, { targetId });
    }

    /**
     * 设置超级群频道的默认消息状态
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用。
     * @param level     消息通知级别
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupChannelDefaultNotificationLevelChanged]
     */
    changeUltraGroupChannelDefaultNotificationLevel(targetId: string, channelId: string, level: RCIMIWPushNotificationLevel, callback: IRCIMIWChangeUltraGroupChannelDefaultNotificationLevelCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUltraGroupChannelDefaultNotificationLevelChanged') {
                    let { code } = res;
                    callback.onUltraGroupChannelDefaultNotificationLevelChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changeUltraGroupChannelDefaultNotificationLevel', resultCallback, { targetId, channelId, level });
    }

    /**
     * 获取超级群频道的默认消息状态
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupChannelDefaultNotificationLevelLoaded]
     * @deprecated 用 {@link #getUltraGroupChannelDefaultNotificationLevel(String, String, IRCIMIWGetUltraGroupChannelDefaultNotificationLevelCallback)} 代替
     */
    loadUltraGroupChannelDefaultNotificationLevel(targetId: string, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadUltraGroupChannelDefaultNotificationLevel', resultCallback, { targetId, channelId });
    }

    /**
     * 获取超级群频道的默认消息状态
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupChannelDefaultNotificationLevelLoaded]
     */
    getUltraGroupChannelDefaultNotificationLevel(targetId: string, channelId: string, callback: IRCIMIWGetUltraGroupChannelDefaultNotificationLevelCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getUltraGroupChannelDefaultNotificationLevel', resultCallback, { targetId, channelId });
    }

    /**
     * 设置是否显示远程推送内容详情，此功能需要从服务端开启用户设置功能。
     * @param showContent 是否显示远程推送内容
     * @param callback    事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onPushContentShowStatusChanged]
     */
    changePushContentShowStatus(showContent: boolean, callback: IRCIMIWChangePushContentShowStatusCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onPushContentShowStatusChanged') {
                    let { code } = res;
                    callback.onPushContentShowStatusChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changePushContentShowStatus', resultCallback, { showContent });
    }

    /**
     * 设置推送语言
     * @param language 推送语言， 目前仅支持 en_us、zh_cn、ar_sa
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onPushLanguageChanged]
     */
    changePushLanguage(language: string, callback: IRCIMIWChangePushLanguageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onPushLanguageChanged') {
                    let { code } = res;
                    callback.onPushLanguageChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changePushLanguage', resultCallback, { language });
    }

    /**
     * 设置是否接收远程推送。
     * 前提：移动端未在线，Web 、MAC/PC 终端在线，移动端是否接收远程推送。
     * 此功能需要从服务端开启用户设置功能。
     * @param receive  是否接收
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onPushReceiveStatusChanged]
     */
    changePushReceiveStatus(receive: boolean, callback: IRCIMIWChangePushReceiveStatusCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onPushReceiveStatusChanged') {
                    let { code } = res;
                    callback.onPushReceiveStatusChanged?.({ code });
                }
            }
        }
        return this._invokeMethod('changePushReceiveStatus', resultCallback, { receive });
    }

    /**
     * 给指定的群成员发送消息
     * @param message  要发送的消息
     * @param userIds  群成员集合
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onGroupMessageToDesignatedUsersAttached], [onGroupMessageToDesignatedUsersSent]
     */
    sendGroupMessageToDesignatedUsers(message: RCIMIWMessage, userIds: Array<string>, callback: RCIMIWSendGroupMessageToDesignatedUsersCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onMessageSaved') {
                    let { message } = res;
                    callback.onMessageSaved?.({ message });
                }
                if (res.callbackName === 'onMessageSent') {
                    let { code, message } = res;
                    callback.onMessageSent?.({ code, message });
                }
            }
        }
        return this._invokeMethod('sendGroupMessageToDesignatedUsers', resultCallback, { message, userIds });
    }

    /**
     * 加载指定会话的消息总数。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageCountLoaded]
     * @deprecated 用 {@link #getMessageCount(RCIMIWConversationType, String, String, IRCIMIWGetMessageCountCallback)} 代替
     */
    loadMessageCount(type: RCIMIWConversationType, targetId: string, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadMessageCount', resultCallback, { type, targetId, channelId });
    }

    /**
     * 获取指定会话的消息总数。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageCountLoaded]
     */
    getMessageCount(type: RCIMIWConversationType, targetId: string, channelId: string, callback: IRCIMIWGetMessageCountCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getMessageCount', resultCallback, { type, targetId, channelId });
    }

    /**
     * 根据会话类型,加载置顶会话列表
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onTopConversationsLoaded]
     * @deprecated 用 {@link #getTopConversations(List, String, IRCIMIWGetTopConversationsCallback)} 代替
     */
    loadTopConversations(conversationTypes: Array<RCIMIWConversationType>, channelId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadTopConversations', resultCallback, { conversationTypes, channelId });
    }

    /**
     * 根据会话类型,获取置顶会话列表
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback          事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onTopConversationsLoaded]
     */
    getTopConversations(conversationTypes: Array<RCIMIWConversationType>, channelId: string, callback: IRCIMIWGetTopConversationsCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getTopConversations', resultCallback, { conversationTypes, channelId });
    }

    /**
     * 上报超级群的已读时间
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用。
     * @param timestamp 已读时间
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupReadStatusSynced]
     */
    syncUltraGroupReadStatus(targetId: string, channelId: string, timestamp: number, callback: IRCIMIWSyncUltraGroupReadStatusCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUltraGroupReadStatusSynced') {
                    let { code } = res;
                    callback.onUltraGroupReadStatusSynced?.({ code });
                }
            }
        }
        return this._invokeMethod('syncUltraGroupReadStatus', resultCallback, { targetId, channelId, timestamp });
    }

    /**
     * 获取特定会话下所有频道的会话列表，只支持超级群
     * @param type     会话类型
     * @param targetId 会话 ID
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationsLoadedForAllChannel]
     * @deprecated 用 {@link #getConversationsForAllChannel(RCIMIWConversationType, String, IRCIMIWGetConversationsForAllChannelCallback)} 代替
     */
    loadConversationsForAllChannel(type: RCIMIWConversationType, targetId: string): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadConversationsForAllChannel', resultCallback, { type, targetId });
    }

    /**
     * 获取特定会话下所有频道的会话列表，只支持超级群
     * @param type     会话类型
     * @param targetId 会话 ID
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationsLoadedForAllChannel]
     */
    getConversationsForAllChannel(type: RCIMIWConversationType, targetId: string, callback: IRCIMIWGetConversationsForAllChannelCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { t } = res;
                    callback.onSuccess?.({ t });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getConversationsForAllChannel', resultCallback, { type, targetId });
    }

    /**
     * 修改超级群消息
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值
     * @param message    要修改的 message
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessageModified]
     */
    modifyUltraGroupMessage(messageUId: string, message: RCIMIWMessage, callback: IRCIMIWModifyUltraGroupMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUltraGroupMessageModified') {
                    let { code } = res;
                    callback.onUltraGroupMessageModified?.({ code });
                }
            }
        }
        return this._invokeMethod('modifyUltraGroupMessage', resultCallback, { messageUId, message });
    }

    /**
     * 撤回超级群消息
     * @param message      需要撤回的消息
     * @param deleteRemote 是否删除远端消息
     * @param callback     事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessageRecalled]
     */
    recallUltraGroupMessage(message: RCIMIWMessage, deleteRemote: boolean, callback: IRCIMIWRecallUltraGroupMessageCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUltraGroupMessageRecalled') {
                    let { code } = res;
                    callback.onUltraGroupMessageRecalled?.({ code });
                }
            }
        }
        return this._invokeMethod('recallUltraGroupMessage', resultCallback, { message, deleteRemote });
    }

    /**
     * 删除超级群指定时间之前的消息
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用。
     * @param timestamp 时间戳
     * @param policy    清除策略
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessagesCleared]
     */
    clearUltraGroupMessages(targetId: string, channelId: string, timestamp: number, policy: RCIMIWMessageOperationPolicy, callback: IRCIMIWClearUltraGroupMessagesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUltraGroupMessagesCleared') {
                    let { code } = res;
                    callback.onUltraGroupMessagesCleared?.({ code });
                }
            }
        }
        return this._invokeMethod('clearUltraGroupMessages', resultCallback, { targetId, channelId, timestamp, policy });
    }

    /**
     * 发送超级群输入状态
     * @param targetId     会话 ID
     * @param channelId    频道 ID，仅支持超级群使用。
     * @param typingStatus 输入状态
     * @param callback     事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupTypingStatusSent]
     */
    sendUltraGroupTypingStatus(targetId: string, channelId: string, typingStatus: RCIMIWUltraGroupTypingStatus, callback: IRCIMIWSendUltraGroupTypingStatusCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUltraGroupTypingStatusSent') {
                    let { code } = res;
                    callback.onUltraGroupTypingStatusSent?.({ code });
                }
            }
        }
        return this._invokeMethod('sendUltraGroupTypingStatus', resultCallback, { targetId, channelId, typingStatus });
    }

    /**
     * 删除超级群所有频道指定时间之前的消息
     * @param targetId  会话 ID
     * @param timestamp 时间戳
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessagesClearedForAllChannel]
     */
    clearUltraGroupMessagesForAllChannel(targetId: string, timestamp: number, callback: IRCIMIWClearUltraGroupMessagesForAllChannelCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUltraGroupMessagesClearedForAllChannel') {
                    let { code } = res;
                    callback.onUltraGroupMessagesClearedForAllChannel?.({ code });
                }
            }
        }
        return this._invokeMethod('clearUltraGroupMessagesForAllChannel', resultCallback, { targetId, timestamp });
    }

    /**
     * 从服务获取批量消息
     * @param messages 获取的消息集合
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBatchRemoteUltraGroupMessagesLoaded]
     * @deprecated 用 {@link #getBatchRemoteUltraGroupMessages(List, IRCIMIWGetBatchRemoteUltraGroupMessagesCallback)} 代替
     */
    loadBatchRemoteUltraGroupMessages(messages: Array<RCIMIWMessage>): Promise<number> {
        let resultCallback;
        return this._invokeMethod('loadBatchRemoteUltraGroupMessages', resultCallback, { messages });
    }

    /**
     * 从服务获取批量消息
     * @param messages 获取的消息集合
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBatchRemoteUltraGroupMessagesLoaded]
     */
    getBatchRemoteUltraGroupMessages(messages: Array<RCIMIWMessage>, callback: IRCIMIWGetBatchRemoteUltraGroupMessagesCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onSuccess') {
                    let { matchedMessages, notMatchedMessages } = res;
                    callback.onSuccess?.({ matchedMessages, notMatchedMessages });
                }
                if (res.callbackName === 'onError') {
                    let { code } = res;
                    callback.onError?.({ code });
                }
            }
        }
        return this._invokeMethod('getBatchRemoteUltraGroupMessages', resultCallback, { messages });
    }

    /**
     * 更新超级群消息扩展信息
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值
     * @param expansion  更新的消息扩展信息键值对，类型是 HashMap；Key 支持大小写英文字母、数字、部分特殊符号 + = - _ 的组合方式，不支持汉字。Value 可以输入空格。
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessageExpansionUpdated]
     */
    updateUltraGroupMessageExpansion(messageUId: string, expansion: { [propName: string]: string }, callback: IRCIMIWUpdateUltraGroupMessageExpansionCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUltraGroupMessageExpansionUpdated') {
                    let { code } = res;
                    callback.onUltraGroupMessageExpansionUpdated?.({ code });
                }
            }
        }
        return this._invokeMethod('updateUltraGroupMessageExpansion', resultCallback, { messageUId, expansion });
    }

    /**
     * 删除超级群消息扩展信息中特定的键值对
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值
     * @param keys       消息扩展信息中待删除的 key 的列表，类型是 ArrayList
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0 版本废弃该接口的其他回调方式。如果传入了 callback 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessageExpansionForKeysRemoved]
     */
    removeUltraGroupMessageExpansionForKeys(messageUId: string, keys: Array<string>, callback: IRCIMIWRemoveUltraGroupMessageExpansionForKeysCallback): Promise<number> {
        let resultCallback;
        if (callback) {
            resultCallback = (res: any) => {
                if (res.callbackName === 'onUltraGroupMessageExpansionForKeysRemoved') {
                    let { code } = res;
                    callback.onUltraGroupMessageExpansionForKeysRemoved?.({ code });
                }
            }
        }
        return this._invokeMethod('removeUltraGroupMessageExpansionForKeys', resultCallback, { messageUId, keys });
    }

    /**
     * 修改日志等级
     * @param level 日志级别
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    changeLogLevel(level: RCIMIWLogLevel): Promise<number> {
        let resultCallback;
        return this._invokeMethod('changeLogLevel', resultCallback, { level });
    }

    /**
     * 获取本地时间与服务器时间的时间差。消息发送成功后，SDK 与服务器同步时间，消息所在数据库中存储的时间就是服务器时间。 System.currentTimeMillis() - getDeltaTime() 可以获取服务器当前时间。
     * @return 本地时间与服务器时间的差值
     */
    getDeltaTime(): Promise<number> {
        let resultCallback;
        return this._invokeMethod('getDeltaTime', resultCallback, {});
    }

    /**
     * 收到消息的监听
     */
    setOnMessageReceivedListener(callback?: (res: OnMessageReceivedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageReceived';
        this._setListener(eventName, callback);
    }

    /**
     * 网络状态变化
     */
    setOnConnectionStatusChangedListener(callback?: (res: OnConnectionStatusChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConnectionStatusChanged';
        this._setListener(eventName, callback);
    }

    /**
     * 会话状态置顶多端同步监听
     */
    setOnConversationTopStatusSyncedListener(callback?: (res: OnConversationTopStatusSyncedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationTopStatusSynced';
        this._setListener(eventName, callback);
    }

    /**
     * 撤回消息监听器
     */
    setOnRemoteMessageRecalledListener(callback?: (res: OnRemoteMessageRecalledResult) => void): void {
        const eventName = 'IRCIMIWListener:onRemoteMessageRecalled';
        this._setListener(eventName, callback);
    }

    /**
     * 单聊中收到消息回执的回调。
     */
    setOnPrivateReadReceiptReceivedListener(callback?: (res: OnPrivateReadReceiptReceivedResult) => void): void {
        const eventName = 'IRCIMIWListener:onPrivateReadReceiptReceived';
        this._setListener(eventName, callback);
    }

    /**
     * 消息扩展信息更改的回调
     */
    setOnRemoteMessageExpansionUpdatedListener(callback?: (res: OnRemoteMessageExpansionUpdatedResult) => void): void {
        const eventName = 'IRCIMIWListener:onRemoteMessageExpansionUpdated';
        this._setListener(eventName, callback);
    }

    /**
     * 消息扩展信息删除的回调
     */
    setOnRemoteMessageExpansionForKeyRemovedListener(callback?: (res: OnRemoteMessageExpansionForKeyRemovedResult) => void): void {
        const eventName = 'IRCIMIWListener:onRemoteMessageExpansionForKeyRemoved';
        this._setListener(eventName, callback);
    }

    /**
     * 聊天室用户进入、退出聊天室监听
     */
    setOnChatRoomMemberChangedListener(callback?: (res: OnChatRoomMemberChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomMemberChanged';
        this._setListener(eventName, callback);
    }

    /**
     * 会话输入状态发生变化。对于单聊而言，当对方正在输入时，监听会触发一次；当对方不处于输入状态时，该监听还会触发一次，但回调里输入用户列表为空。
     */
    setOnTypingStatusChangedListener(callback?: (res: OnTypingStatusChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onTypingStatusChanged';
        this._setListener(eventName, callback);
    }

    /**
     * 同步消息未读状态监听接口。多端登录，收到其它端清除某一会话未读数通知的时候
     */
    setOnConversationReadStatusSyncMessageReceivedListener(callback?: (res: OnConversationReadStatusSyncMessageReceivedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationReadStatusSyncMessageReceived';
        this._setListener(eventName, callback);
    }

    /**
     * 聊天室 KV 同步完成的回调
     */
    setOnChatRoomEntriesSyncedListener(callback?: (res: OnChatRoomEntriesSyncedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomEntriesSynced';
        this._setListener(eventName, callback);
    }

    /**
     * 聊天室 KV 发生变化的回调
     */
    setOnChatRoomEntriesChangedListener(callback?: (res: OnChatRoomEntriesChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomEntriesChanged';
        this._setListener(eventName, callback);
    }

    /**
     * 超级群消息 kv 被更新
     */
    setOnRemoteUltraGroupMessageExpansionUpdatedListener(callback?: (res: OnRemoteUltraGroupMessageExpansionUpdatedResult) => void): void {
        const eventName = 'IRCIMIWListener:onRemoteUltraGroupMessageExpansionUpdated';
        this._setListener(eventName, callback);
    }

    /**
     * 超级群消息被更改
     */
    setOnRemoteUltraGroupMessageModifiedListener(callback?: (res: OnRemoteUltraGroupMessageModifiedResult) => void): void {
        const eventName = 'IRCIMIWListener:onRemoteUltraGroupMessageModified';
        this._setListener(eventName, callback);
    }

    /**
     * 超级群消息被撤回
     */
    setOnRemoteUltraGroupMessageRecalledListener(callback?: (res: OnRemoteUltraGroupMessageRecalledResult) => void): void {
        const eventName = 'IRCIMIWListener:onRemoteUltraGroupMessageRecalled';
        this._setListener(eventName, callback);
    }

    /**
     * 超级群已读的监听
     */
    setOnUltraGroupReadTimeReceivedListener(callback?: (res: OnUltraGroupReadTimeReceivedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupReadTimeReceived';
        this._setListener(eventName, callback);
    }

    /**
     * 用户输入状态变化的回调
          当客户端收到用户输入状态的变化时，会回调此接口，通知发生变化的会话以及当前正在输入的RCUltraGroupTypingStatusInfo列表
     */
    setOnUltraGroupTypingStatusChangedListener(callback?: (res: OnUltraGroupTypingStatusChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupTypingStatusChanged';
        this._setListener(eventName, callback);
    }

    /**
     * 发送含有敏感词消息被拦截的回调
     */
    setOnMessageBlockedListener(callback?: (res: OnMessageBlockedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageBlocked';
        this._setListener(eventName, callback);
    }

    /**
     * 聊天室状态发生变化的监听
     */
    setOnChatRoomStatusChangedListener(callback?: (res: OnChatRoomStatusChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomStatusChanged';
        this._setListener(eventName, callback);
    }

    /**
     * 收到群聊已读回执请求的监听
     */
    setOnGroupMessageReadReceiptRequestReceivedListener(callback?: (res: OnGroupMessageReadReceiptRequestReceivedResult) => void): void {
        const eventName = 'IRCIMIWListener:onGroupMessageReadReceiptRequestReceived';
        this._setListener(eventName, callback);
    }

    /**
     * 收到群聊已读回执响应的监听
     */
    setOnGroupMessageReadReceiptResponseReceivedListener(callback?: (res: OnGroupMessageReadReceiptResponseReceivedResult) => void): void {
        const eventName = 'IRCIMIWListener:onGroupMessageReadReceiptResponseReceived';
        this._setListener(eventName, callback);
    }

    /**
     * [connect] 的接口监听，收到链接结果的回调
     */
    setOnConnectedListener(callback?: (res: OnConnectedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConnected';
        this._setListener(eventName, callback);
    }

    /**
     * [connect] 的接口监听，数据库打开时发生的回调
     */
    setOnDatabaseOpenedListener(callback?: (res: OnDatabaseOpenedResult) => void): void {
        const eventName = 'IRCIMIWListener:onDatabaseOpened';
        this._setListener(eventName, callback);
    }

    /**
     * [loadConversation] 的接口监听
     */
    setOnConversationLoadedListener(callback?: (res: OnConversationLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadConversations] 的接口监听
     */
    setOnConversationsLoadedListener(callback?: (res: OnConversationsLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationsLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [removeConversation] 的接口监听
     */
    setOnConversationRemovedListener(callback?: (res: OnConversationRemovedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationRemoved';
        this._setListener(eventName, callback);
    }

    /**
     * [removeConversations] 的接口监听
     */
    setOnConversationsRemovedListener(callback?: (res: OnConversationsRemovedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationsRemoved';
        this._setListener(eventName, callback);
    }

    /**
     * [loadTotalUnreadCount] 的接口监听
     */
    setOnTotalUnreadCountLoadedListener(callback?: (res: OnTotalUnreadCountLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onTotalUnreadCountLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadUnreadCount] 的接口监听
     */
    setOnUnreadCountLoadedListener(callback?: (res: OnUnreadCountLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUnreadCountLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadUnreadCountByConversationTypes] 的接口监听
     */
    setOnUnreadCountByConversationTypesLoadedListener(callback?: (res: OnUnreadCountByConversationTypesLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUnreadCountByConversationTypesLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadUnreadMentionedCount] 的接口监听
     */
    setOnUnreadMentionedCountLoadedListener(callback?: (res: OnUnreadMentionedCountLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUnreadMentionedCountLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadUltraGroupAllUnreadMentionedCount] 的接口监听
     */
    setOnUltraGroupAllUnreadCountLoadedListener(callback?: (res: OnUltraGroupAllUnreadCountLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupAllUnreadCountLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadUltraGroupAllUnreadMentionedCount] 的接口监听
     */
    setOnUltraGroupAllUnreadMentionedCountLoadedListener(callback?: (res: OnUltraGroupAllUnreadMentionedCountLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupAllUnreadMentionedCountLoaded';
        this._setListener(eventName, callback);
    }

    /**
     *
          超级群列表同步完成的回调

     */
    setOnUltraGroupConversationsSyncedListener(callback?: (res: OnUltraGroupConversationsSyncedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupConversationsSynced';
        this._setListener(eventName, callback);
    }

    /**
     * [clearUnreadCount] 的接口监听
     */
    setOnUnreadCountClearedListener(callback?: (res: OnUnreadCountClearedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUnreadCountCleared';
        this._setListener(eventName, callback);
    }

    /**
     * [saveDraftMessage] 的接口监听
     */
    setOnDraftMessageSavedListener(callback?: (res: OnDraftMessageSavedResult) => void): void {
        const eventName = 'IRCIMIWListener:onDraftMessageSaved';
        this._setListener(eventName, callback);
    }

    /**
     * [clearDraftMessage] 的接口监听
     */
    setOnDraftMessageClearedListener(callback?: (res: OnDraftMessageClearedResult) => void): void {
        const eventName = 'IRCIMIWListener:onDraftMessageCleared';
        this._setListener(eventName, callback);
    }

    /**
     * [loadDraftMessage] 的接口监听
     */
    setOnDraftMessageLoadedListener(callback?: (res: OnDraftMessageLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onDraftMessageLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadBlockedConversations] 的接口监听
     */
    setOnBlockedConversationsLoadedListener(callback?: (res: OnBlockedConversationsLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onBlockedConversationsLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [changeConversationTopStatus] 的接口监听
     */
    setOnConversationTopStatusChangedListener(callback?: (res: OnConversationTopStatusChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationTopStatusChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [loadConversationTopStatus] 的接口监听
     */
    setOnConversationTopStatusLoadedListener(callback?: (res: OnConversationTopStatusLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationTopStatusLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [syncConversationReadStatus] 的接口监听
     */
    setOnConversationReadStatusSyncedListener(callback?: (res: OnConversationReadStatusSyncedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationReadStatusSynced';
        this._setListener(eventName, callback);
    }

    /**
     * [sendMessage] 的接口监听
     */
    setOnMessageAttachedListener(callback?: (res: OnMessageAttachedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageAttached';
        this._setListener(eventName, callback);
    }

    /**
     * [sendMessage] 的接口监听
     */
    setOnMessageSentListener(callback?: (res: OnMessageSentResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageSent';
        this._setListener(eventName, callback);
    }

    /**
     * [sendMediaMessage] 的接口监听
     */
    setOnMediaMessageAttachedListener(callback?: (res: OnMediaMessageAttachedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMediaMessageAttached';
        this._setListener(eventName, callback);
    }

    /**
     * [sendMediaMessage] 的接口监听
     */
    setOnMediaMessageSendingListener(callback?: (res: OnMediaMessageSendingResult) => void): void {
        const eventName = 'IRCIMIWListener:onMediaMessageSending';
        this._setListener(eventName, callback);
    }

    /**
     * [cancelSendingMediaMessage] 的接口监听
     */
    setOnSendingMediaMessageCanceledListener(callback?: (res: OnSendingMediaMessageCanceledResult) => void): void {
        const eventName = 'IRCIMIWListener:onSendingMediaMessageCanceled';
        this._setListener(eventName, callback);
    }

    /**
     * [sendMediaMessage] 的接口监听
     */
    setOnMediaMessageSentListener(callback?: (res: OnMediaMessageSentResult) => void): void {
        const eventName = 'IRCIMIWListener:onMediaMessageSent';
        this._setListener(eventName, callback);
    }

    /**
     * [downloadMediaMessage] 的接口监听
     */
    setOnMediaMessageDownloadingListener(callback?: (res: OnMediaMessageDownloadingResult) => void): void {
        const eventName = 'IRCIMIWListener:onMediaMessageDownloading';
        this._setListener(eventName, callback);
    }

    /**
     * [downloadMediaMessage] 的接口监听
     */
    setOnMediaMessageDownloadedListener(callback?: (res: OnMediaMessageDownloadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMediaMessageDownloaded';
        this._setListener(eventName, callback);
    }

    /**
     * [cancelDownloadingMediaMessage] 的接口监听
     */
    setOnDownloadingMediaMessageCanceledListener(callback?: (res: OnDownloadingMediaMessageCanceledResult) => void): void {
        const eventName = 'IRCIMIWListener:onDownloadingMediaMessageCanceled';
        this._setListener(eventName, callback);
    }

    /**
     * [loadMessages] 的接口监听
     */
    setOnMessagesLoadedListener(callback?: (res: OnMessagesLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessagesLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadUnreadMentionedMessages] 的接口监听
     */
    setOnUnreadMentionedMessagesLoadedListener(callback?: (res: OnUnreadMentionedMessagesLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUnreadMentionedMessagesLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadFirstUnreadMessage] 的接口监听
     */
    setOnFirstUnreadMessageLoadedListener(callback?: (res: OnFirstUnreadMessageLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onFirstUnreadMessageLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [insertMessage] 的接口监听
     */
    setOnMessageInsertedListener(callback?: (res: OnMessageInsertedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageInserted';
        this._setListener(eventName, callback);
    }

    /**
     * [insertMessages] 的接口监听
     */
    setOnMessagesInsertedListener(callback?: (res: OnMessagesInsertedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessagesInserted';
        this._setListener(eventName, callback);
    }

    /**
     * [clearMessages] 的接口监听
     */
    setOnMessagesClearedListener(callback?: (res: OnMessagesClearedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessagesCleared';
        this._setListener(eventName, callback);
    }

    /**
     * [deleteLocalMessages] 的接口监听
     */
    setOnLocalMessagesDeletedListener(callback?: (res: OnLocalMessagesDeletedResult) => void): void {
        const eventName = 'IRCIMIWListener:onLocalMessagesDeleted';
        this._setListener(eventName, callback);
    }

    /**
     * [deleteMessages] 的接口监听
     */
    setOnMessagesDeletedListener(callback?: (res: OnMessagesDeletedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessagesDeleted';
        this._setListener(eventName, callback);
    }

    /**
     * [recallMessage] 的接口监听
     */
    setOnMessageRecalledListener(callback?: (res: OnMessageRecalledResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageRecalled';
        this._setListener(eventName, callback);
    }

    /**
     * [sendPrivateReadReceiptMessage] 的接口监听
     */
    setOnPrivateReadReceiptMessageSentListener(callback?: (res: OnPrivateReadReceiptMessageSentResult) => void): void {
        const eventName = 'IRCIMIWListener:onPrivateReadReceiptMessageSent';
        this._setListener(eventName, callback);
    }

    /**
     * [updateMessageExpansion] 的接口监听
     */
    setOnMessageExpansionUpdatedListener(callback?: (res: OnMessageExpansionUpdatedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageExpansionUpdated';
        this._setListener(eventName, callback);
    }

    /**
     * [removeMessageExpansionForKeys] 的接口监听
     */
    setOnMessageExpansionForKeysRemovedListener(callback?: (res: OnMessageExpansionForKeysRemovedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageExpansionForKeysRemoved';
        this._setListener(eventName, callback);
    }

    /**
     * [changeMessageReceiveStatus] 的接口监听
     */
    setOnMessageReceiveStatusChangedListener(callback?: (res: OnMessageReceiveStatusChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageReceiveStatusChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [changeMessageSentStatus] 的接口监听
     */
    setOnMessageSentStatusChangedListener(callback?: (res: OnMessageSentStatusChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageSentStatusChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [joinChatRoom] 的接口监听
     */
    setOnChatRoomJoinedListener(callback?: (res: OnChatRoomJoinedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomJoined';
        this._setListener(eventName, callback);
    }

    /**
     * 正在加入聊天室的回调
     */
    setOnChatRoomJoiningListener(callback?: (res: OnChatRoomJoiningResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomJoining';
        this._setListener(eventName, callback);
    }

    /**
     * [leaveChatRoom] 的接口监听
     */
    setOnChatRoomLeftListener(callback?: (res: OnChatRoomLeftResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomLeft';
        this._setListener(eventName, callback);
    }

    /**
     * [loadChatRoomMessages] 的接口监听
     */
    setOnChatRoomMessagesLoadedListener(callback?: (res: OnChatRoomMessagesLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomMessagesLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [addChatRoomEntry] 的接口监听
     */
    setOnChatRoomEntryAddedListener(callback?: (res: OnChatRoomEntryAddedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomEntryAdded';
        this._setListener(eventName, callback);
    }

    /**
     * [addChatRoomEntries] 的接口监听
     */
    setOnChatRoomEntriesAddedListener(callback?: (res: OnChatRoomEntriesAddedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomEntriesAdded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadChatRoomEntry] 的接口监听
     */
    setOnChatRoomEntryLoadedListener(callback?: (res: OnChatRoomEntryLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomEntryLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadChatRoomAllEntries] 的接口监听
     */
    setOnChatRoomAllEntriesLoadedListener(callback?: (res: OnChatRoomAllEntriesLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomAllEntriesLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [removeChatRoomEntry] 的接口监听
     */
    setOnChatRoomEntryRemovedListener(callback?: (res: OnChatRoomEntryRemovedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomEntryRemoved';
        this._setListener(eventName, callback);
    }

    /**
     * [removeChatRoomEntries] 的接口监听
     */
    setOnChatRoomEntriesRemovedListener(callback?: (res: OnChatRoomEntriesRemovedResult) => void): void {
        const eventName = 'IRCIMIWListener:onChatRoomEntriesRemoved';
        this._setListener(eventName, callback);
    }

    /**
     * [addToBlacklist] 的接口监听
     */
    setOnBlacklistAddedListener(callback?: (res: OnBlacklistAddedResult) => void): void {
        const eventName = 'IRCIMIWListener:onBlacklistAdded';
        this._setListener(eventName, callback);
    }

    /**
     * [removeFromBlacklist] 的接口监听
     */
    setOnBlacklistRemovedListener(callback?: (res: OnBlacklistRemovedResult) => void): void {
        const eventName = 'IRCIMIWListener:onBlacklistRemoved';
        this._setListener(eventName, callback);
    }

    /**
     * [loadBlacklistStatus] 的接口监听
     */
    setOnBlacklistStatusLoadedListener(callback?: (res: OnBlacklistStatusLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onBlacklistStatusLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [loadBlacklist] 的接口监听
     */
    setOnBlacklistLoadedListener(callback?: (res: OnBlacklistLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onBlacklistLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [searchMessages] 的接口监听
     */
    setOnMessagesSearchedListener(callback?: (res: OnMessagesSearchedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessagesSearched';
        this._setListener(eventName, callback);
    }

    /**
     * [searchMessagesByTimeRange] 的接口监听
     */
    setOnMessagesSearchedByTimeRangeListener(callback?: (res: OnMessagesSearchedByTimeRangeResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessagesSearchedByTimeRange';
        this._setListener(eventName, callback);
    }

    /**
     * [searchMessagesByUserId] 的接口监听
     */
    setOnMessagesSearchedByUserIdListener(callback?: (res: OnMessagesSearchedByUserIdResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessagesSearchedByUserId';
        this._setListener(eventName, callback);
    }

    /**
     * [searchConversations] 的接口监听
     */
    setOnConversationsSearchedListener(callback?: (res: OnConversationsSearchedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationsSearched';
        this._setListener(eventName, callback);
    }

    /**
     * sendGroupReadReceiptRequest 的接口监听
     */
    setOnGroupReadReceiptRequestSentListener(callback?: (res: OnGroupReadReceiptRequestSentResult) => void): void {
        const eventName = 'IRCIMIWListener:onGroupReadReceiptRequestSent';
        this._setListener(eventName, callback);
    }

    /**
     * [sendGroupReadReceiptResponse] 的接口监听
     */
    setOnGroupReadReceiptResponseSentListener(callback?: (res: OnGroupReadReceiptResponseSentResult) => void): void {
        const eventName = 'IRCIMIWListener:onGroupReadReceiptResponseSent';
        this._setListener(eventName, callback);
    }

    /**
     * [changeNotificationQuietHours] 的接口回调
     */
    setOnNotificationQuietHoursChangedListener(callback?: (res: OnNotificationQuietHoursChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onNotificationQuietHoursChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [removeNotificationQuietHours] 的接口回调
     */
    setOnNotificationQuietHoursRemovedListener(callback?: (res: OnNotificationQuietHoursRemovedResult) => void): void {
        const eventName = 'IRCIMIWListener:onNotificationQuietHoursRemoved';
        this._setListener(eventName, callback);
    }

    /**
     * [loadNotificationQuietHours] 的接口回调
     */
    setOnNotificationQuietHoursLoadedListener(callback?: (res: OnNotificationQuietHoursLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onNotificationQuietHoursLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [changeConversationNotificationLevel] 的接口回调
     */
    setOnConversationNotificationLevelChangedListener(callback?: (res: OnConversationNotificationLevelChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationNotificationLevelChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [loadConversationNotificationLevel] 的接口回调
     */
    setOnConversationNotificationLevelLoadedListener(callback?: (res: OnConversationNotificationLevelLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationNotificationLevelLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [changeConversationTypeNotificationLevel] 的接口回调
     */
    setOnConversationTypeNotificationLevelChangedListener(callback?: (res: OnConversationTypeNotificationLevelChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationTypeNotificationLevelChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [loadConversationTypeNotificationLevel] 的接口回调
     */
    setOnConversationTypeNotificationLevelLoadedListener(callback?: (res: OnConversationTypeNotificationLevelLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationTypeNotificationLevelLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [changeUltraGroupDefaultNotificationLevel] 的接口回调
     */
    setOnUltraGroupDefaultNotificationLevelChangedListener(callback?: (res: OnUltraGroupDefaultNotificationLevelChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupDefaultNotificationLevelChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [loadUltraGroupDefaultNotificationLevel] 的接口回调
     */
    setOnUltraGroupDefaultNotificationLevelLoadedListener(callback?: (res: OnUltraGroupDefaultNotificationLevelLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupDefaultNotificationLevelLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [changeUltraGroupChannelDefaultNotificationLevel] 的接口回调
     */
    setOnUltraGroupChannelDefaultNotificationLevelChangedListener(callback?: (res: OnUltraGroupChannelDefaultNotificationLevelChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupChannelDefaultNotificationLevelChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [loadUltraGroupChannelDefaultNotificationLevel] 的接口回调
     */
    setOnUltraGroupChannelDefaultNotificationLevelLoadedListener(callback?: (res: OnUltraGroupChannelDefaultNotificationLevelLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupChannelDefaultNotificationLevelLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [changePushContentShowStatus] 的接口监听
     */
    setOnPushContentShowStatusChangedListener(callback?: (res: OnPushContentShowStatusChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onPushContentShowStatusChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [changePushLanguage] 的接口监听
     */
    setOnPushLanguageChangedListener(callback?: (res: OnPushLanguageChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onPushLanguageChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [changePushReceiveStatus] 的接口监听
     */
    setOnPushReceiveStatusChangedListener(callback?: (res: OnPushReceiveStatusChangedResult) => void): void {
        const eventName = 'IRCIMIWListener:onPushReceiveStatusChanged';
        this._setListener(eventName, callback);
    }

    /**
     * [loadMessageCount] 的接口监听
     */
    setOnMessageCountLoadedListener(callback?: (res: OnMessageCountLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onMessageCountLoaded';
        this._setListener(eventName, callback);
    }

    /**
     *
     */
    setOnTopConversationsLoadedListener(callback?: (res: OnTopConversationsLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onTopConversationsLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [sendGroupMessageToDesignatedUsers] 的接口回调
          消息存入数据库的回调
     */
    setOnGroupMessageToDesignatedUsersAttachedListener(callback?: (res: OnGroupMessageToDesignatedUsersAttachedResult) => void): void {
        const eventName = 'IRCIMIWListener:onGroupMessageToDesignatedUsersAttached';
        this._setListener(eventName, callback);
    }

    /**
     * [sendGroupMessageToDesignatedUsers] 的接口回调
          消息发送完成的回调
     */
    setOnGroupMessageToDesignatedUsersSentListener(callback?: (res: OnGroupMessageToDesignatedUsersSentResult) => void): void {
        const eventName = 'IRCIMIWListener:onGroupMessageToDesignatedUsersSent';
        this._setListener(eventName, callback);
    }

    /**
     * [syncUltraGroupReadStatus] 的接口监听
     */
    setOnUltraGroupReadStatusSyncedListener(callback?: (res: OnUltraGroupReadStatusSyncedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupReadStatusSynced';
        this._setListener(eventName, callback);
    }

    /**
     * [loadConversationsForAllChannel] 的接口监听
     */
    setOnConversationsLoadedForAllChannelListener(callback?: (res: OnConversationsLoadedForAllChannelResult) => void): void {
        const eventName = 'IRCIMIWListener:onConversationsLoadedForAllChannel';
        this._setListener(eventName, callback);
    }

    /**
     * [loadUltraGroupUnreadMentionedCount] 的接口监听
     */
    setOnUltraGroupUnreadMentionedCountLoadedListener(callback?: (res: OnUltraGroupUnreadMentionedCountLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupUnreadMentionedCountLoaded';
        this._setListener(eventName, callback);
    }

    setOnUltraGroupUnreadCountLoadedListener(callback?: (res: OnUltraGroupUnreadCountLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupUnreadCountLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [modifyUltraGroupMessage] 的接口监听
     */
    setOnUltraGroupMessageModifiedListener(callback?: (res: OnUltraGroupMessageModifiedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupMessageModified';
        this._setListener(eventName, callback);
    }

    /**
     * [recallUltraGroupMessage] 的接口监听
     */
    setOnUltraGroupMessageRecalledListener(callback?: (res: OnUltraGroupMessageRecalledResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupMessageRecalled';
        this._setListener(eventName, callback);
    }

    /**
     * [clearUltraGroupMessages] 的接口监听
     */
    setOnUltraGroupMessagesClearedListener(callback?: (res: OnUltraGroupMessagesClearedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupMessagesCleared';
        this._setListener(eventName, callback);
    }

    /**
     * [clearUltraGroupMessagesForAllChannel] 的接口监听
     */
    setOnUltraGroupMessagesClearedForAllChannelListener(callback?: (res: OnUltraGroupMessagesClearedForAllChannelResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupMessagesClearedForAllChannel';
        this._setListener(eventName, callback);
    }

    /**
     * [sendUltraGroupTypingStatus] 的接口监听
     */
    setOnUltraGroupTypingStatusSentListener(callback?: (res: OnUltraGroupTypingStatusSentResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupTypingStatusSent';
        this._setListener(eventName, callback);
    }

    /**
     * [loadBatchRemoteUltraGroupMessages] 的接口监听
     */
    setOnBatchRemoteUltraGroupMessagesLoadedListener(callback?: (res: OnBatchRemoteUltraGroupMessagesLoadedResult) => void): void {
        const eventName = 'IRCIMIWListener:onBatchRemoteUltraGroupMessagesLoaded';
        this._setListener(eventName, callback);
    }

    /**
     * [updateUltraGroupMessageExpansion] 的接口监听
     */
    setOnUltraGroupMessageExpansionUpdatedListener(callback?: (res: OnUltraGroupMessageExpansionUpdatedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupMessageExpansionUpdated';
        this._setListener(eventName, callback);
    }

    /**
     * [removeUltraGroupMessageExpansionForKeys] 的接口监听
     */
    setOnUltraGroupMessageExpansionForKeysRemovedListener(callback?: (res: OnUltraGroupMessageExpansionForKeysRemovedResult) => void): void {
        const eventName = 'IRCIMIWListener:onUltraGroupMessageExpansionForKeysRemoved';
        this._setListener(eventName, callback);
    }
}