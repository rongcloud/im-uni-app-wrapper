import { addSuccessResult, addErrorResult, addWarnResult, addPrimaryResult } from '../util/common.js'
import helper from '../common/helper.js'; 

const initListener = function() {
	console.log('初始化监听')
	if (!helper.engineInited()){
		return
	}
	//链接
	helper.RCIMIWEngineInstance.setOnConnectedListener((res) => {
		console.log('链接 监听：',res)
		addPrimaryResult({
			title: 'OnConnected',
			data: res,
			code: res.code
		})
	})
	
	//链接
	helper.RCIMIWEngineInstance.setOnConnectionStatusChangedListener((res) => {
		console.log('链接状态改变 监听：',res)
		addPrimaryResult({
			title: 'OnConnectionStatusChanged',
			data: res,
			code: res.code
		})
	})
	
	//链接
	helper.RCIMIWEngineInstance.setOnDatabaseOpenedListener((res) => {
		console.log('数据库打开 监听：',res)
		addPrimaryResult({
			title: 'OnDatabaseOpened',
			data: res,
			code: res.code
		})
	})
	
	//加载某些会话
	helper.RCIMIWEngineInstance.setOnConversationsLoadedListener((res) => {
		console.log('加载某些会话 监听：',res)
		addPrimaryResult({
			title: 'OnConversationsLoaded',
			data: res,
			code: res.code
		})
	})
	
	//加载某个会话
	helper.RCIMIWEngineInstance.setOnConversationLoadedListener((res) => {
		console.log('加载某个会话 监听：',res)
		addPrimaryResult({
			title: 'OnConversationLoaded',
			data: res,
			code: res.code
		})
	})
	
	
	//收到消息 
	helper.RCIMIWEngineInstance.setOnMessageReceivedListener((res) => {
		console.log('收到的消息 监听',res)
		addPrimaryResult({
			title: 'OnMessageReceived',
			data: res,
		})
	})
	
	//取消发送媒体中的消息
	helper.RCIMIWEngineInstance.setOnSendingMediaMessageCanceledListener((res) => {
		console.log('取消发送媒体中的消息 监听',res)
		addPrimaryResult({
			title: 'OnSendingMediaMessageCanceled',
			data: res,
		})
	})
	
	//发送消息-Attached
	helper.RCIMIWEngineInstance.setOnMessageAttachedListener((res) => {
		console.log('发送消息-Attached 监听：',res)
		addPrimaryResult({
			title: 'OnMessageAttached',
			data: res,
			code: res.code
		})
	})
	
	//发送消息-Sent
	helper.RCIMIWEngineInstance.setOnMessageSentListener((res) => {
		console.log('发送消息-Sent 监听：',res)
		addPrimaryResult({
			title: 'OnMessageSent',
			data: res,
			code: res.code
		})
	})
	
	//发送媒体消息-Attached
	helper.RCIMIWEngineInstance.setOnMediaMessageAttachedListener((res) => {
		console.log('发送媒体消息-Attached 监听：',res)
		addPrimaryResult({
			title: 'OnMediaMessageAttached',
			data: res,
			code: res.code
		})
	})
	
	//发送媒体消息-Sent
	helper.RCIMIWEngineInstance.setOnMediaMessageSentListener((res) => {
		console.log('发送媒体消息-Sent 监听：',res)
		//测试使用，如果需要可以不赋空
		if (res.message != null && res.message.thumbnailBase64String != null){
			res.message.thumbnailBase64String = null
		}
		addPrimaryResult({
			title: 'OnMediaMessageSent',
			data: res,
			code: res.code
		})
	})
	
	//发送媒体消息-Sending
	helper.RCIMIWEngineInstance.setOnMediaMessageSendingListener((res) => {
		console.log('发送媒体消息-Sending 监听：',res)
		//测试使用，如果需要可以不赋空
		if (res.message != null && res.message.thumbnailBase64String != null){
			res.message.thumbnailBase64String = null
		}
		addPrimaryResult({
			title: 'OnMediaMessageSending',
			data: res,
			code: res.code
		})
	})
	
	//发送媒体消息-cancelSending
	helper.RCIMIWEngineInstance.setOnSendingMediaMessageCanceledListener((res) => {
		console.log('发送媒体消息-cancelSending 监听：',res)
		addPrimaryResult({
			title: 'OnSendingMediaMessageCanceled',
			data: res,
			code: res.code
		})
	})
	
	//下载媒体消息-Downloading
	helper.RCIMIWEngineInstance.setOnMediaMessageDownloadingListener((res) => {
		console.log('下载媒体消息-Downloading 监听：',res)
		//测试使用，如果需要可以不赋空
		if (res.message != null && res.message.thumbnailBase64String != null){
			res.message.thumbnailBase64String = null
		}
		addPrimaryResult({
			title: 'OnMediaMessageDownloading',
			data: res,
			code: res.code
		})
	})
	
	//下载媒体消息-Downloaded
	helper.RCIMIWEngineInstance.setOnMediaMessageDownloadedListener((res) => {
		console.log('下载媒体消息-Downloaded 监听：',res)
		addPrimaryResult({
			title: 'OnMediaMessageDownloaded',
			data: res,
			code: res.code
		})
	})
	
	//取消下载媒体消息
	helper.RCIMIWEngineInstance.setOnDownloadingMediaMessageCanceledListener((res) => {
		console.log('取消下载媒体消息 监听：',res)
		addPrimaryResult({
			title: 'OnDownloadingMediaMessageCanceled',
			data: res,
			code: res.code
		})
	})
	
	//插入一条消息
	helper.RCIMIWEngineInstance.setOnMessageInsertedListener((res) => {
		console.log('插入一条消息 监听：',res)
		addPrimaryResult({
			title: 'OnMessageInserted',
			data: res,
			code: res.code
		})
	})
	
	//插入多条消息
	helper.RCIMIWEngineInstance.setOnMessagesInsertedListener((res) => {
		console.log('插入多条消息 监听：',res)
		addPrimaryResult({
			title: 'OnMessagesInserted',
			data: res,
			code: res.code
		})
	})
	
	//删除消息
	helper.RCIMIWEngineInstance.setOnMessagesClearedListener((res) => {
		console.log('删除消息 监听：',res)
		addPrimaryResult({
			title: 'OnMessageCleared',
			data: res,
			code: res.code
		})
	})
	
	//删除本地消息
	helper.RCIMIWEngineInstance.setOnLocalMessagesDeletedListener((res) => {
		console.log('删除本地消息 监听：',res)
		addPrimaryResult({
			title: 'OnLocalMessagesDeleted',
			data: res,
			code: res.code
		})
	})
	
	//删除消息(本地和远端同时删除)
	helper.RCIMIWEngineInstance.setOnMessagesDeletedListener((res) => {
		console.log('删除消息(本地和远端同时删除) 监听：',res)
		addPrimaryResult({
			title: 'OnMessagesDeleted',
			data: res,
			code: res.code
		})
	})
	
	//撤回消息-本地
	helper.RCIMIWEngineInstance.setOnMessageRecalledListener((res) => {
		console.log('撤回消息-本地 监听：',res)
		addPrimaryResult({
			title: 'OnMessageRecalled',
			data: res,
			code: res.code
		})
	})
	
	//撤回消息-远端
	helper.RCIMIWEngineInstance.setOnRemoteMessageRecalledListener((res) => {
		console.log('撤回消息-远端 监听：',res)
		addPrimaryResult({
			title: 'OnRemoteMessageRecalled',
			data: res,
			code: res.code
		})
	})
	
	//发送单聊的已读回执
	helper.RCIMIWEngineInstance.setOnPrivateReadReceiptMessageSentListener((res) => {
		console.log('发送单聊的已读回执 监听：',res)
		addPrimaryResult({
			title: 'OnPrivateReadReceiptMessageSent',
			data: res,
			code: res.code
		})
	})
	
	//单聊中收到消息回执的回调
	helper.RCIMIWEngineInstance.setOnPrivateReadReceiptReceivedListener((res) => {
		console.log('单聊中收到消息回执的回调 监听：',res)
		addPrimaryResult({
			title: 'OnPrivateReadReceiptReceived',
			data: res,
			code: res.code
		})
	})
	
	//发起群聊的已读回执请求
	helper.RCIMIWEngineInstance.setOnGroupReadReceiptRequestSentListener((res) => {
		console.log('发起群聊的已读回执请求 监听：',res)
		addPrimaryResult({
			title: 'OnGroupReadReceiptRequestSent',
			data: res,
			code: res.code
		})
	})
	
	//发起群聊的已读回执请求
	helper.RCIMIWEngineInstance.setOnGroupMessageReadReceiptRequestReceivedListener((res) => {
		console.log('收到群聊已读回执请求的监听 监听：',res)
		addPrimaryResult({
			title: 'OnGroupMessageReadReceiptRequestReceived',
			data: res,
			code: res.code
		})
	})
	
	//发起群聊的已读回执响应
	helper.RCIMIWEngineInstance.setOnGroupReadReceiptResponseSentListener((res) => {
		console.log('发起群聊的已读回执响应 监听：',res)
		addPrimaryResult({
			title: 'OnGroupReadReceiptResponseSent',
			data: res,
			code: res.code
		})
	})
	
	//发起群聊的已读回执响应
	helper.RCIMIWEngineInstance.setOnGroupMessageReadReceiptResponseReceivedListener((res) => {
		console.log('收到群聊已读回执响应的监听 监听：',res)
		addPrimaryResult({
			title: 'OnGroupMessageReadReceiptResponseReceived',
			data: res,
			code: res.code
		})
	})
	
	//更新消息扩展
	helper.RCIMIWEngineInstance.setOnMessageExpansionUpdatedListener((res) => {
		console.log('更新消息扩展 监听：',res)
		addPrimaryResult({
			title: 'OnMessageExpansionUpdated',
			data: res,
			code: res.code
		})
	})
	
	//更新消息扩展-远端
	helper.RCIMIWEngineInstance.setOnRemoteMessageExpansionUpdatedListener((res) => {
		console.log('更新消息扩展-远端 监听：',res)
		addPrimaryResult({
			title: 'OnRemoteMessageExpansionUpdated',
			data: res,
			code: res.code
		})
	})
	
	//根据key移除消息扩展
	helper.RCIMIWEngineInstance.setOnMessageExpansionForKeysRemovedListener((res) => {
		console.log('根据key移除消息扩展 监听：',res)
		addPrimaryResult({
			title: 'OnMessageExpansionForKeysRemoved',
			data: res,
			code: res.code
		})
	})
	
	//根据key移除消息扩展-远端
	helper.RCIMIWEngineInstance.setOnRemoteMessageExpansionForKeyRemovedListener((res) => {
		console.log('根据key移除消息扩展-远端 监听：',res)
		addPrimaryResult({
			title: 'OnRemoteMessageExpansionForKeyRemoved',
			data: res,
			code: res.code
		})
	})
	
	//修改消息的发送状态
	helper.RCIMIWEngineInstance.setOnMessageSentStatusChangedListener((res) => {
		console.log('修改消息的发送状态 监听：',res)
		addPrimaryResult({
			title: 'OnMessageSentStatusChanged',
			data: res,
			code: res.code
		})
	})
	
	//修改消息的接收状态
	helper.RCIMIWEngineInstance.setOnMessageReceiveStatusChangedListener((res) => {
		console.log('修改消息的接收状态 监听：',res)
		addPrimaryResult({
			title: 'OnMessageReceiveStatusChanged',
			data: res,
			code: res.code
		})
	})
	
	//搜索消息
	helper.RCIMIWEngineInstance.setOnMessagesSearchedListener((res) => {
		console.log('搜索消息 监听：',res)
		addPrimaryResult({
			title: 'OnMessagesSearched',
			data: res,
			code: res.code
		})
	})
	
	//根据时间段搜索消息
	helper.RCIMIWEngineInstance.setOnMessagesSearchedByTimeRangeListener((res) => {
		console.log('根据时间段搜索消息 监听：',res)
		addPrimaryResult({
			title: 'OnMessagesSearchedByTimeRange',
			data: res,
			code: res.code
		})
	})
	
	//通过用户ID搜索消息
	helper.RCIMIWEngineInstance.setOnMessagesSearchedByUserIdListener((res) => {
		console.log('通过用户ID搜索消息 监听：',res)
		addPrimaryResult({
			title: 'OnMessagesSearchedByUserId',
			data: res,
			code: res.code
		})
	})
	
	//发送群聊定向消息-消息存入数据库
	helper.RCIMIWEngineInstance.setOnGroupMessageToDesignatedUsersAttachedListener((res) => {
		console.log('发送群聊定向消息-消息存入数据库 监听：',res)
		addPrimaryResult({
			title: 'OnGroupMessageToDesignatedUsersAttached',
			data: res,
			code: res.code
		})
	})
	
	//发送群聊定向消息-消息发送完成
	helper.RCIMIWEngineInstance.setOnGroupMessageToDesignatedUsersSentListener((res) => {
		console.log('发送群聊定向消息-消息发送完成 监听：',res)
		addPrimaryResult({
			title: 'OnGroupMessageToDesignatedUsersSent',
			data: res,
			code: res.code
		})
	})
	
	//加载消息
	helper.RCIMIWEngineInstance.setOnMessagesLoadedListener((res) => {
		console.log('加载消息 监听：',res)
		addPrimaryResult({
			title: 'OnMessagesLoaded',
			data: res,
			code: res.code
		})
	})
	
	//加载某个会话的第一条未读消息
	helper.RCIMIWEngineInstance.setOnFirstUnreadMessageLoadedListener((res) => {
		console.log('加载某个会话的第一条未读消息 监听：',res)
		addPrimaryResult({
			title: 'OnFirstUnreadMessageLoaded',
			data: res,
			code: res.code
		})
	})
	
	//加载某个会话中未读的 @ 消息
	helper.RCIMIWEngineInstance.setOnUnreadMentionedMessagesLoadedListener((res) => {
		console.log('加载某个会话中未读的 @ 消息 监听：',res)
		addPrimaryResult({
			title: 'OnUnreadMentionedMessagesLoaded',
			data: res,
			code: res.code
		})
	})
	
	//加载某个会话的未读数
	helper.RCIMIWEngineInstance.setOnUnreadCountLoadedListener((res) => {
		console.log('加载某个会话的未读数 监听：',res)
		addPrimaryResult({
			title: 'OnUnreadCountLoaded',
			data: res,
			code: res.code
		})
	})
	
	//加载所有未读数
	helper.RCIMIWEngineInstance.setOnTotalUnreadCountLoadedListener((res) => {
		console.log('加载所有未读数 监听：',res)
		addPrimaryResult({
			title: 'OnTotalUnreadCountLoaded',
			data: res,
			code: res.code
		})
	})
	
	//根据会话类型查询未读数
	helper.RCIMIWEngineInstance.setOnUnreadCountByConversationTypesLoadedListener((res) => {
		console.log('根据会话类型查询未读数 监听：',res)
		addPrimaryResult({
			title: 'OnUnreadCountByConversationTypesLoaded',
			data: res,
			code: res.code
		})
	})
	
	//加载所有@未读数
	helper.RCIMIWEngineInstance.setOnUnreadMentionedCountLoadedListener((res) => {
		console.log('加载所有@未读数 监听：',res)
		addPrimaryResult({
			title: 'OnUnreadMentionedCountLoaded',
			data: res,
			code: res.code
		})
	})
	
	//清除某个会话未读数
	helper.RCIMIWEngineInstance.setOnUnreadCountClearedListener((res) => {
		console.log('清除某个会话未读数 监听：',res)
		addPrimaryResult({
			title: 'OnUnreadCountCleared',
			data: res,
			code: res.code
		})
	})
	
	//会话输入状态变化
	helper.RCIMIWEngineInstance.setOnTypingStatusChangedListener((res) => {
		console.log('会话输入状态变化 监听：',res)
		addPrimaryResult({
			title: 'OnTypingStatusChanged',
			data: res,
			code: res.code
		})
	})
	
	//用户输入状态变化的回调
	helper.RCIMIWEngineInstance.setOnUltraGroupTypingStatusChangedListener((res) => {
		console.log('超级群输入状态变化 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupTypingStatusChanged',
			data: res,
			code: res.code
		})
	})
	
	//移除某个会话
	helper.RCIMIWEngineInstance.setOnConversationRemovedListener((res) => {
		console.log('移除某个会话 监听：',res)
		addPrimaryResult({
			title: 'OnConversationRemoved',
			data: res,
			code: res.code
		})
	})
	
	//根据会话类型移除会话
	helper.RCIMIWEngineInstance.setOnConversationsRemovedListener((res) => {
		console.log('根据会话类型移除会话 监听：',res)
		addPrimaryResult({
			title: 'OnConversationsRemoved',
			data: res,
			code: res.code
		})
	})
	
	//保存草稿信息
	helper.RCIMIWEngineInstance.setOnDraftMessageSavedListener((res) => {
		console.log('保存草稿信息 监听：',res)
		addPrimaryResult({
			title: 'OnDraftMessageSaved',
			data: res,
			code: res.code
		})
	})
	
	//获取会话中的草稿信息
	helper.RCIMIWEngineInstance.setOnDraftMessageLoadedListener((res) => {
		console.log('获取会话中的草稿信息 监听：',res)
		addPrimaryResult({
			title: 'OnDraftMessageLoaded',
			data: res,
			code: res.code
		})
	})
	
	//删除指定会话的草稿信息
	helper.RCIMIWEngineInstance.setOnDraftMessageClearedListener((res) => {
		console.log('删除指定会话的草稿信息 监听：',res)
		addPrimaryResult({
			title: 'OnDraftMessageCleared',
			data: res,
			code: res.code
		})
	})
	
	//设置会话的消息提醒状态
	helper.RCIMIWEngineInstance.setOnConversationNotificationLevelChangedListener((res) => {
		console.log('设置会话的消息提醒状态 监听：',res)
		addPrimaryResult({
			title: 'OnConversationNotificationLevelChanged',
			data: res,
			code: res.code
		})
	})
	
	//获取会话的消息提醒状态
	helper.RCIMIWEngineInstance.setOnConversationNotificationLevelLoadedListener((res) => {
		console.log('获取会话的消息提醒状态 监听：',res)
		addPrimaryResult({
			title: 'OnConversationNotificationLevelLoaded',
			data: res,
			code: res.code
		})
	})
	
	//设置会话类型的消息提醒状态
	helper.RCIMIWEngineInstance.setOnConversationTypeNotificationLevelChangedListener((res) => {
		console.log('设置会话类型的消息提醒状态 监听：',res)
		addPrimaryResult({
			title: 'OnConversationTypeNotificationLevelChanged',
			data: res,
			code: res.code
		})
	})
	
	//获取会话类型的消息提醒状态
	helper.RCIMIWEngineInstance.setOnConversationTypeNotificationLevelLoadedListener((res) => {
		console.log('获取会话类型的消息提醒状态 监听：',res)
		addPrimaryResult({
			title: 'OnConversationTypeNotificationLevelLoaded',
			data: res,
			code: res.code
		})
	})
	
	//获取免打扰的会话列表
	helper.RCIMIWEngineInstance.setOnBlockedConversationsLoadedListener((res) => {
		console.log('获取免打扰的会话列表 监听：',res)
		addPrimaryResult({
			title: 'OnBlockedConversationsLoaded',
			data: res,
			code: res.code
		})
	})
	
	//设置会话置顶状态
	helper.RCIMIWEngineInstance.setOnConversationTopStatusChangedListener((res) => {
		console.log('设置会话置顶状态 监听：',res)
		addPrimaryResult({
			title: 'OnConversationTopStatusChanged',
			data: res,
			code: res.code
		})
	})
	
	//设置会话置顶状态
	helper.RCIMIWEngineInstance.setOnConversationTopStatusSyncedListener((res) => {
		console.log('会话状态置顶多端同步监听 监听：',res)
		addPrimaryResult({
			title: 'OnConversationTopStatusSynced',
			data: res,
			code: res.code
		})
	})
	
	//获取会话置顶状态
	helper.RCIMIWEngineInstance.setOnConversationTopStatusLoadedListener((res) => {
		console.log('获取会话置顶状态 监听：',res)
		addPrimaryResult({
			title: 'OnConversationTopStatusLoaded',
			data: res,
			code: res.code
		})
	})
	
	//根据会话类型，获取置顶会话列表
	helper.RCIMIWEngineInstance.setOnTopConversationsLoadedListener((res) => {
		console.log('根据会话类型，获取置顶会话列表 监听：',res)
		addPrimaryResult({
			title: 'OnTopConversationsLoaded',
			data: res,
			code: res.code
		})
	})
	
	//同步会话阅读状态
	helper.RCIMIWEngineInstance.setOnConversationReadStatusSyncedListener((res) => {
		console.log('同步会话阅读状态 监听：',res)
		addPrimaryResult({
			title: 'OnConversationReadStatusSynced',
			data: res,
			code: res.code
		})
	})
	
	//根据关键字搜索会话
	helper.RCIMIWEngineInstance.setOnConversationsSearchedListener((res) => {
		console.log('根据关键字搜索会话 监听：',res)
		addPrimaryResult({
			title: 'OnConversationsSearched',
			data: res,
			code: res.code
		})
	})
	
	//获取指定会话的消息总数
	helper.RCIMIWEngineInstance.setOnMessageCountLoadedListener((res) => {
		console.log('获取指定会话的消息总数 监听：',res)
		addPrimaryResult({
			title: 'OnMessageCountLoaded',
			data: res,
			code: res.code
		})
	})
	
	//加入聊天室
	helper.RCIMIWEngineInstance.setOnChatRoomJoinedListener((res) => {
		console.log('加入聊天室 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomJoined',
			data: res,
			code: res.code
		})
	})
	
	//加入聊天室
	helper.RCIMIWEngineInstance.setOnChatRoomJoiningListener((res) => {
		console.log('正在加入聊天室 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomJoining',
			data: res,
			code: res.code
		})
	})
	
	//离开聊天室
	helper.RCIMIWEngineInstance.setOnChatRoomLeftListener((res) => {
		console.log('离开聊天室 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomLeft',
			data: res,
			code: res.code
		})
	})
	
	//聊天室用户进入、退出聊天室监听
	helper.RCIMIWEngineInstance.setOnChatRoomMemberChangedListener((res) => {
		console.log('聊天室用户进入、退出聊天室监听 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomMemberChanged',
			data: res,
			code: res.code
		})
	})
	
	//聊天室状态发生变化的监听
	helper.RCIMIWEngineInstance.setOnChatRoomStatusChangedListener((res) => {
		console.log('聊天室状态发生变化的监听 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomStatusChanged',
			data: res,
			code: res.code
		})
	})
	
	//加载聊天室消息
	helper.RCIMIWEngineInstance.setOnChatRoomMessagesLoadedListener((res) => {
		console.log('加载聊天室消息 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomMessagesLoaded',
			data: res,
			code: res.code
		})
	})
	
	//添加聊天室kv
	helper.RCIMIWEngineInstance.setOnChatRoomEntryAddedListener((res) => {
		console.log('添加聊天室kv 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomEntryAdded',
			data: res,
			code: res.code
		})
	})
	
	//添加多个聊天室kv
	helper.RCIMIWEngineInstance.setOnChatRoomEntriesAddedListener((res) => {
		console.log('添加多个聊天室kv 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomEntriesAdded',
			data: res,
			code: res.code
		})
	})
	
	//加载聊天室kv
	helper.RCIMIWEngineInstance.setOnChatRoomEntryLoadedListener((res) => {
		console.log('加载聊天室kv 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomEntryLoaded',
			data: res,
			code: res.code
		})
	})
	
	//加载聊天室所有kv
	helper.RCIMIWEngineInstance.setOnChatRoomAllEntriesLoadedListener((res) => {
		console.log('加载聊天室所有kv 监听：',res)
		addPrimaryResult({
			title: 'OnAllChatRoomEntriesLoaded',
			data: res,
			code: res.code
		})
	})
	
	//移除聊天室kv
	helper.RCIMIWEngineInstance.setOnChatRoomEntryRemovedListener((res) => {
		console.log('移除聊天室kv 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomEntryRemoved',
			data: res,
			code: res.code
		})
	})
	
	//移除多个聊天室kv
	helper.RCIMIWEngineInstance.setOnChatRoomEntriesRemovedListener((res) => {
		console.log('移除多个聊天室kv 监听：',res)
		addPrimaryResult({
			title: 'OnChatRoomEntriesRemoved',
			data: res,
			code: res.code
		})
	})
	
	//聊天室 KV 同步完成
	helper.RCIMIWEngineInstance.setOnChatRoomEntriesSyncedListener((res) => {
		console.log(res)
		addPrimaryResult({
			title: 'OnChatRoomEntriesSynced',
			data: res,
		})
	})
	
	//聊天室 KV 发生变化的回调
	helper.RCIMIWEngineInstance.setOnChatRoomEntriesChangedListener((res) => {
		console.log(res)
		addPrimaryResult({
			title: 'OnChatRoomEntriesChanged',
			data: res,
		})
	})
	
	//上报超级群的已读时间
	helper.RCIMIWEngineInstance.setOnUltraGroupReadStatusSyncedListener((res) => {
		console.log('上报超级群的已读时间 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupReadStatusSynced',
			data: res,
			code: res.code
		})
	})
	
	//获取特定会话下所有频道的会话列表
	helper.RCIMIWEngineInstance.setOnConversationsLoadedForAllChannelListener((res) => {
		console.log('获取特定会话下所有频道的会话列表 监听：',res)
		addPrimaryResult({
			title: 'OnConversationsLoadedForAllChannel',
			data: res,
			code: res.code
		})
	})
	
	//获取特定会话下所有频道的@未读消息消息数
	helper.RCIMIWEngineInstance.setOnUltraGroupUnreadMentionedCountLoadedListener((res) => {
		console.log('获取特定会话下所有频道的@未读消息消息数 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupUnreadMentionedCountLoaded',
			data: res,
			code: res.code
		})
	})
	
	//修改超级群消息
	helper.RCIMIWEngineInstance.setOnUltraGroupMessageModifiedListener((res) => {
		console.log('修改超级群消息 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupMessageModified',
			data: res,
			code: res.code
		})
	})
	
	//撤回超级群消息
	helper.RCIMIWEngineInstance.setOnUltraGroupMessageRecalledListener((res) => {
		console.log('撤回超级群消息 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupMessageRecalled',
			data: res,
			code: res.code
		})
	})
	
	//超级群消息被撤回
	helper.RCIMIWEngineInstance.setOnRemoteUltraGroupMessageRecalledListener((res) => {
		console.log('超级群消息被撤回 监听：',res)
		addPrimaryResult({
			title: 'OnRemoteUltraGroupMessageRecalled',
			data: res,
			code: res.code
		})
	})
	
	//超级群已读的监听
	helper.RCIMIWEngineInstance.setOnUltraGroupReadTimeReceivedListener((res) => {
		console.log('超级群已读的监听 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupReadTimeReceived',
			data: res,
			code: res.code
		})
	})
	
	//删除本地特定channel、特定时间之前的消息
	helper.RCIMIWEngineInstance.setOnUltraGroupMessagesClearedListener((res) => {
		console.log('删除本地特定channel、特定时间之前的消息 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupMessagesCleared',
			data: res,
			code: res.code
		})
	})
	
	//删除本地所有channel、特定时间之前的消息
	helper.RCIMIWEngineInstance.setOnUltraGroupMessagesClearedForAllChannelListener((res) => {
		console.log('删除本地所有channel、特定时间之前的消息 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupMessagesClearedForAllChannel',
			data: res,
			code: res.code
		})
	})
	
	//发送超级群输入状态
	helper.RCIMIWEngineInstance.setOnUltraGroupTypingStatusSentListener((res) => {
		console.log('发送超级群输入状态 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupTypingStatusSent',
			data: res,
			code: res.code
		})
	})
	
	//从服务获取批量消息
	helper.RCIMIWEngineInstance.setOnBatchRemoteUltraGroupMessagesLoadedListener((res) => {
		console.log('从服务获取批量消息 监听：',res)
		addPrimaryResult({
			title: 'OnBatchRemoteUltraGroupMessagesLoaded',
			data: res,
			code: res.code
		})
	})
	
	//更新超级群消息扩展信息
	helper.RCIMIWEngineInstance.setOnUltraGroupMessageExpansionUpdatedListener((res) => {
		console.log('更新超级群消息扩展信息 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupMessageExpansionUpdated',
			data: res,
			code: res.code
		})
	})
	
	//超级群消息扩展被更新
	helper.RCIMIWEngineInstance.setOnRemoteUltraGroupMessageExpansionUpdatedListener((res) => {
		console.log('超级群消息扩展被更新 监听：',res)
		addPrimaryResult({
			title: 'OnRemoteUltraGroupMessageExpansionUpdated',
			data: res,
			code: res.code
		})
	})
	
	//超级群消息被更改
	helper.RCIMIWEngineInstance.setOnRemoteUltraGroupMessageModifiedListener((res) => {
		console.log('超级群消息被更改 监听：',res)
		addPrimaryResult({
			title: 'OnRemoteUltraGroupMessageModified',
			data: res,
			code: res.code
		})
	})
	
	//删除超级群消息扩展信息中特定的键值对
	helper.RCIMIWEngineInstance.setOnUltraGroupMessageExpansionForKeysRemovedListener((res) => {
		console.log('删除超级群消息扩展信息中特定的键值对 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupMessageExpansionRemoved',
			data: res,
			code: res.code
		})
	})
	
	//设置超级群的默认消息状态
	helper.RCIMIWEngineInstance.setOnUltraGroupDefaultNotificationLevelChangedListener((res) => {
		console.log('设置超级群的默认消息状态 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupDefaultNotificationLevelChanged',
			data: res,
			code: res.code
		})
	})
	
	//获取超级群的默认消息状态
	helper.RCIMIWEngineInstance.setOnUltraGroupDefaultNotificationLevelLoadedListener((res) => {
		console.log('获取超级群的默认消息状态 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupDefaultNotificationLevelLoaded',
			data: res,
			code: res.code
		})
	})
	
	//设置超级群频道的默认消息状态
	helper.RCIMIWEngineInstance.setOnUltraGroupChannelDefaultNotificationLevelChangedListener((res) => {
		console.log('设置超级群频道的默认消息状态 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupChannelDefaultNotificationLevelChanged',
			data: res,
			code: res.code
		})
	})
	
	//获取超级群频道的默认消息状态
	helper.RCIMIWEngineInstance.setOnUltraGroupChannelDefaultNotificationLevelLoadedListener((res) => {
		console.log('获取超级群频道的默认消息状态 监听：',res)
		addPrimaryResult({
			title: 'OnUltraGroupChannelDefaultNotificationLevelLoaded',
			data: res,
			code: res.code
		})
	})
	
	//添加到黑名单
	helper.RCIMIWEngineInstance.setOnBlacklistAddedListener((res) => {
		console.log('添加到黑名单 监听：',res)
		addPrimaryResult({
			title: 'OnBlacklistAdded',
			data: res,
			code: res.code
		})
	})
	
	//从黑名单移出
	helper.RCIMIWEngineInstance.setOnBlacklistRemovedListener((res) => {
		console.log('从黑名单移出 监听：',res)
		addPrimaryResult({
			title: 'OnBlacklistRemoved',
			data: res,
			code: res.code
		})
	})
	
	//查询用户是否在黑名单中
	helper.RCIMIWEngineInstance.setOnBlacklistStatusLoadedListener((res) => {
		console.log('查询用户是否在黑名单中 监听：',res)
		addPrimaryResult({
			title: 'OnBlacklistStatusLoaded',
			data: res,
			code: res.code
		})
	})
	
	//加载黑名单列表
	helper.RCIMIWEngineInstance.setOnBlacklistLoadedListener((res) => {
		console.log('加载黑名单列表 监听：',res)
		addPrimaryResult({
			title: 'OnBlacklistLoaded',
			data: res,
			code: res.code
		})
	})
	
	//屏蔽某个时间段的消息提醒
	helper.RCIMIWEngineInstance.setOnNotificationQuietHoursChangedListener((res) => {
		console.log('屏蔽某个时间段的消息提醒 监听：',res)
		addPrimaryResult({
			title: 'OnNotificationQuietHoursChanged',
			data: res,
			code: res.code
		})
	})
	
	//删除已设置的全局时间段消息提醒屏蔽
	helper.RCIMIWEngineInstance.setOnNotificationQuietHoursRemovedListener((res) => {
		console.log('删除已设置的全局时间段消息提醒屏蔽 监听：',res)
		addPrimaryResult({
			title: 'OnNotificationQuietHoursRemoved',
			data: res,
			code: res.code
		})
	})
	
	//查询已设置的时间段消息提醒屏蔽
	helper.RCIMIWEngineInstance.setOnNotificationQuietHoursLoadedListener((res) => {
		console.log('查询已设置的时间段消息提醒屏蔽 监听：',res)
		addPrimaryResult({
			title: 'OnNotificationQuietHoursLoaded',
			data: res,
			code: res.code
		})
	})
	
	//设置推送内容的显示状态
	helper.RCIMIWEngineInstance.setOnPushContentShowStatusChangedListener((res) => {
		console.log('设置推送内容的显示状态 监听：',res)
		addPrimaryResult({
			title: 'OnPushContentShowStatusChanged',
			data: res,
			code: res.code
		})
	})
	
	//设置推送语言
	helper.RCIMIWEngineInstance.setOnPushLanguageChangedListener((res) => {
		console.log('设置推送语言 监听：',res)
		addPrimaryResult({
			title: 'OnPushLanguageChanged',
			data: res,
			code: res.code
		})
	})
	
	//设置推送内容的显示状态
	helper.RCIMIWEngineInstance.setOnPushReceiveStatusChangedListener((res) => {
		console.log('设置推送内容的显示状态 监听：',res)
		addPrimaryResult({
			title: 'OnPushReceiveStatusChanged',
			data: res,
			code: res.code
		})
	})
	
	//同步消息未读状态监听接口
	helper.RCIMIWEngineInstance.setOnConversationReadStatusSyncMessageReceivedListener((res) => {
		console.log('同步消息未读状态监听接口 监听：',res)
		addPrimaryResult({
			title: 'OnConversationReadStatusSyncMessageReceived',
			data: res,
			code: res.code
		})
	})
	
	//发送含有敏感词消息被拦截
	helper.RCIMIWEngineInstance.setOnMessageBlockedListener((res) => {
		console.log('发送含有敏感词消息被拦截 监听：',res)
		addPrimaryResult({
			title: 'OnMessageBlocked',
			data: res,
			code: res.code
		})
	})
	
}

export default initListener