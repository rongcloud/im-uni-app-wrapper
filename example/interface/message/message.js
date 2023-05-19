// 消息接口
import { 
	sendTextMessage,
	sendImageMessage,
	sendFileMessage,
	sendVoiceMessage,
	sendSightMessage,
	sendReferenceMessage,
	sendGIFMessage,
	sendLocationMessage,
	sendCustomMessage,
	cancelSendingMediaMessage,
	downloadMediaMessage,
	cancelDownloadingMediaMessage,
	insertMessage,
	insertMessages,
	deleteLocalMessage,
	deleteMessages,
	recallMessage,
	sendGroupReadReceiptRequest,
	sendGroupReadReceiptResponse,
	sendGroupMessageToDesignatedUsers,
 } from '../../function/engine_func.js';

import {
	sendTypingStatus,
	getMessages,
	getMessageById,
	getMessageByUId,
	getFirstUnreadMessage,
	getUnreadMentionedMessages,
	clearMessages,
	sendPrivateReadReceiptMessage,
	updateMessageExpansion,
	removeMessageExpansionForKeys,
	changeMessageSentStatus,
	changeMessageReceiveStatus,
	searchMessages,
	searchMessagesByTimeRange,
	searchMessagesByUserId,
} from '../../function/engine_func_auto.js'

export const _sendTextMessage = {
	name: "\xa0\xa0发送文本消息\xa0\xa0",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'content', value: '', type: 'string', name: '请输入发送文本', placeholder: '' },
		{ key: 'pushContent', value: '', type: 'string', name: '请输入需要显示的推送内容', placeholder: '非必填'},
		{ key: 'pushData', value: '', type:'string', name: '请输入携带的推送数据', placeholder: '非必填'},
		{ key: 'extra', value: '', type:'string', name: '消息的附加字段', placeholder: '非必填'},
		{ key: 'userId', value: '', type:'string', name: '用户信息Id', placeholder: '非必填'},
		{ key: 'name', value: '', type:'string', name: '用户信息名称', placeholder: '非必填'},
		{ key: 'portrait', value: '', type:'string', name: '用户信息头像地址', placeholder: '非必填'},
		{ key: 'alias', value: '', type:'string', name: '用户信息备注', placeholder: '非必填'},
		{ key: 'userExtra', value: '', type:'string', name: '用户信息附加信息', placeholder: '非必填'},
		{ key: 'mentionedType', value: '', type: 'number', name: '选择@类型：0：@所有人，1：@指定的用户', placeholder: '非必填'},
		{ key: 'userIdList', value: '', type: 'string', name: '请输入@的用户', placeholder: '非必填(多个以英文 , 隔开 eg:user1,user2)' },
		{ key: 'mentionedContent', value: '', type: 'string', name: '请输入@文本', placeholder: '非必填'},
		{ key: 'keys', value: '', type: 'string', name: '消息扩展-请输入keys:key支持大小写英文字母、数字、特殊字符 + = - _的组合方式，不支持汉字',placeholder: '非必填,多个以英文 , 隔开 eg:key1,key2' },
		{ key: 'values', value: '', type: 'string', name: '消息扩展-请输入values', placeholder: '非必填,多个以英文 , 隔开 eg:value1,value2' },
	],
	action: sendTextMessage,
}

export const _sendImageMessage = {
	name: "发送图片消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		// { key: 'pushContent', value: '', type: 'string', name: '请输入需要显示的推送内容', placeholder: '非必填'},
		// { key: 'pushData', value: '', type:'string', name: '请输入携带的推送数据', placeholder: '非必填'},
		{ key: 'original', value: true, type: 'boolean', name: '是否发送原图'},
	],
	action: sendImageMessage,
}

export const _sendFileMessage = {
	name: "\xa0\xa0发送文件消息\xa0\xa0",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		// { key: 'pushContent', value: '', type: 'string', name: '请输入需要显示的推送内容', placeholder: '非必填'},
		// { key: 'pushData', value: '', type:'string', name: '请输入携带的推送数据', placeholder: '非必填'},
	],
	action: sendFileMessage,
}

export const _sendVoiceMessage = {
	name: "发送语音消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		// { key: 'pushContent', value: '', type: 'string', name: '请输入需要显示的推送内容', placeholder: '非必填'},
		// { key: 'pushData', value: '', type:'string', name: '请输入携带的推送数据', placeholder: '非必填'},
	],
	action: sendVoiceMessage,
}

export const _sendSightMessage = {
	name: "发送小视频消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		// { key: 'pushContent', value: '', type: 'string', name: '请输入需要显示的推送内容', placeholder: '非必填'},
		// { key: 'pushData', value: '', type:'string', name: '请输入携带的推送数据', placeholder: '非必填'},
	],
	action: sendSightMessage,
}

export const _sendReferenceMessage = {
	name: "发送引用消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'referenceMessageId', value: '', type: 'string', name: '请输入引用的消息Id', placeholder: ''},
		{ key: 'referenceMessageContent', value: '', type:'string', name: '请输入引用文本', placeholder: ''},
		// { key: 'pushContent', value: '', type: 'string', name: '请输入需要显示的推送内容', placeholder: '非必填'},
		// { key: 'pushData', value: '', type:'string', name: '请输入携带的推送数据', placeholder: '非必填'},
	],
	action: sendReferenceMessage,
}

export const _sendGIFMessage = {
	name: "\xa0\xa0\xa0发送GIF消息\xa0\xa0\xa0",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'pushContent', value: '', type: 'string', name: '请输入需要显示的推送内容', placeholder: '非必填'},
		{ key: 'pushData', value: '', type:'string', name: '请输入携带的推送数据', placeholder: '非必填'},
	],
	action: sendGIFMessage,
}

export const _sendLocationMessage = {
	name: "发送位置消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'longitude', value: '', type: 'string', name: '请输入经度', placeholder: '必填'},
		{ key: 'latitude', value: '', type: 'string', name: '请输入纬度', placeholder: '必填'},
		{ key: 'poiName', value: '', type: 'string', name: '请输入地理位置信息', placeholder: '必填'},
		{ key: 'pushContent', value: '', type: 'string', name: '请输入需要显示的推送内容', placeholder: '非必填'},
		{ key: 'pushData', value: '', type:'string', name: '请输入携带的推送数据', placeholder: '非必填'},
	],
	action: sendLocationMessage,
}

export const _sendCustomMessage = {
	name: "发送自定义消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'policy', value: '', type: 'number', name: '请输入存储策略：0：客户端不存储，支持离线消息机制，不计入未读消息数；' 
			+ '1：客户端存储，支持离线消息机制，且存入服务端历史消息，计入未读消息数；'
			+ '2：客户端不存储，服务端不存储，不计入未读消息数'
			+ '3：客户端存储，支持离线消息机制，且存入服务端历史消息，不计入未读消息数', placeholder: '' },
		{ key: 'messageIdentifier', value: '', type: 'string', name: '请输入标识符', placeholder: ''},
		{ key: 'keys', value: '', type: 'string', name: '请输入自定义内容的键', placeholder: '多个以英文 , 隔开 eg:key1,key2'},
		{ key: 'values', value: '', type: 'string', name: '请输入自定义内容的值', placeholder: '多个以英文 , 隔开 eg:value1,value2'},
		{ key: 'pushContent', value: '', type: 'string', name: '请输入需要显示的推送内容', placeholder: '非必填'},
		{ key: 'pushData', value: '', type:'string', name: '请输入携带的推送数据', placeholder: '非必填'},
	],
	action: sendCustomMessage,
}

export const _cancelSendMediaMessage = {
	name: "取消发送中媒体的消息",
	params: [
		{ key: 'messageId', value: '', type: 'number', name: '请输入取消发送的消息Id', placeholder: ''},
	],
	action: cancelSendingMediaMessage,
}

export const _downloadMediaMessage = {
	name: "下载媒体消息",
	params: [
		{ key: 'messageId', value: '', type: 'number', name: '请输入取消发送的消息Id', placeholder: ''},
	],
	action: downloadMediaMessage,
}

export const _cancelDownloadMediaMessage = {
	name: "取消下载中的媒体消息",
	params: [
		{ key: 'messageId', value: '', type: 'number', name: '请输入取消发送的消息Id', placeholder: ''},
	],
	action: cancelDownloadingMediaMessage,
}

//向会话中发送正在输入的状态，目前只支持单聊。
export const _sendTypingStatus = {
	name: "发送输入状态消息",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'currentType', value: '', type: 'string', name: '请输入当前的状态', placeholder: ''},
	],
	action: sendTypingStatus,
}

export const _getMessages = {
	name: "加载消息",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'sentTime', value: '', type: 'number', name: '请输入开始时间(时间戳单位：毫秒)', placeholder: ''},
		{ key: 'order', value: '', type: 'number', name: '请输入时间策略：0:获取sentTime之前的消息；1:获取sentTime之后的消息', placeholder: ''},
		{ key: 'policy', value: '', type: 'number', name: '请输入加载策略', placeholder: '0:仅本地；1:仅远端；2:本地和远端'},
		{ key: 'count', value: '', type: 'number', name: '请输入获取数量', placeholder: '最多获取20条'},
	],
	action: getMessages,
}

export const _getMessageById = {
	name: "根据消息ID加载消息",
	params: [
		{ key: 'messageId', value: '', type: 'string', name: '请输入messageId', placeholder: ''},
	],
	action: getMessageById,
}

export const _getMessageByUId = {
	name: "根据远端 UID 加载消息",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId', placeholder: ''},
	],
	action: getMessageByUId,
}

export const _getFirstUnreadMessage = {
	name: "加载某个会话的第一条未读消息",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: getFirstUnreadMessage,
}

export const _getUnreadMentionedMessages = {
	name: "加载某个会话中未读的 @ 消息",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: getUnreadMentionedMessages,
}

export const _insertMessage = {
	name: "插入一条消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: insertMessage,
}

export const _insertMessages = {
	name: "插入多条消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: insertMessages,
}

export const _clearMessages = {
	name: "删除消息",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'timestamp', value: '', type: 'string', name: '清除消息截止时间戳：0 <= recordTime <= 当前会话最后一条消息的sentTime，'
			+ '0:清除所有消息，其他值清除小于等于recordTime的消息', placeholder: ''},
		{ key: 'policy', value: '', type: 'number', name: '请输入policy', placeholder: '0:仅本地；1:仅远端；2:本地和远端'},
	],
	action: clearMessages,
}

export const _deleteLocalMessage = {
	name: "删除本地消息",
	params: [
		{ key: 'messageIds', value: '', type: 'string', name: '请输入需要删除的消息Id', placeholder: '多个以英文 , 隔开 eg:1,2 '},
	],
	action: deleteLocalMessage,
}

export const _deleteMessages = {
	name: "删除消息(本地和远端同时删除)",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'messageIds', value: '', type: 'string', name: '请输入需要删除的消息Id', placeholder: '多个以英文 , 隔开 eg:1,2 '},
	],
	action: deleteMessages,
}

export const _recallMessage = {
	name: "撤回某条消息",
	params: [
		{ key: 'messageId', value: '', type: 'number', name: '请输入撤回的消息Id', placeholder: '' },
	],
	action: recallMessage,
}

export const _sendPrivateReadReceiptMessage = {
	name: "发送单聊的已读回执",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'timestamp', value: '', type: 'string', name: '该会话中已读的最后一条消息的发送时间戳', placeholder: ''},
	],
	action: sendPrivateReadReceiptMessage,
}

export const _sendGroupReadReceiptRequest = {
	name: "发起群聊的已读回执请求",
	params: [
		{ key: 'messageId', value: '', type: 'number', name: '请输入需要回执的消息Id', placeholder: '' },
	],
	action: sendGroupReadReceiptRequest,
}

export const _sendGroupReadReceiptResponse = {
	name: "发起群聊的已读回执响应",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '' },
		{ key: 'messageIds', value: '', type: 'string', name: '请输入相应的消息Id', placeholder: '多个以英文 , 隔开 eg:1,2' },
	],
	action: sendGroupReadReceiptResponse,
}

export const _updateMessageExpansion = {
	name: "更新消息扩展",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId',placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys:key支持大小写英文字母、数字、特殊字符 + = - _的组合方式，不支持汉字，最大32个字符',placeholder: '多个以英文 , 隔开 eg:key1,key2' },
		{ key: 'values', value: '', type: 'string', name: '请输入values', placeholder: '多个以英文 , 隔开 eg:value1,value2' },
	],
	action: updateMessageExpansion,
}

export const _removeMessageExpansion = {
	name: "根据key移除消息扩展",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId',placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys:key支持大小写英文字母、数字、特殊字符 + = - _的组合方式，不支持汉字，最大32个字符',placeholder: '' },
	],
	action: removeMessageExpansionForKeys,
}

export const _changeMessageSentStatus = {
	name: "修改消息的发送状态",
	params: [
		{ key: 'messageId', value: '', type: 'string', name: '请输入messageId', placeholder: '' },
		{ key: 'sentStatus', value: '', type: 'number', name: '请输入sentStatus：0:发送中；1：发送失败；2:已发送；3：对方已接收；4:对方已读；5:对方已销毁；6:对方已取消', placeholder: '' },
	],
	action: changeMessageSentStatus,
}

export const _changeMessageReceiveStatus = {
	name: "修改消息的接收状态",
	params: [
		{ key: 'messageId', value: '', type: 'string', name: '请输入messageId', placeholder: '' },
		{ key: 'receivedStatus', value: '', type: 'number', name: '请输入receivedStatus：0:未读；1:已读；2:已听；3:已下载；4:被多端其他设备收取过；5:被多端同时收取', placeholder: '' },
	],
	action: changeMessageReceiveStatus,
}

export const _searchMessages = {
	name: "搜索消息",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'keyword', value: '', type: 'string', name: '请输入关键词', placeholder: '' },
		{ key: 'startTime', value: '', type: 'number', name: '请输入开始时间', placeholder: '' },
		{ key: 'count', value: '', type: 'number', name: '请输入数量', placeholder: '' },
	],
	action: searchMessages,
}

export const _searchMessagesByTimeRange = {
	name: "根据时间段搜索消息",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'keyword', value: '', type: 'string', name: '请输入关键词', placeholder: '' },
		{ key: 'startTime', value: '', type: 'number', name: '请输入开始时间', placeholder: '' },
		{ key: 'endTime', value: '', type: 'number', name: '请输入结束时间', placeholder: '' },
		{ key: 'offset', value: '', type: 'number', name: '请输入偏移量', placeholder: '' },
		{ key: 'count', value: '', type: 'number', name: '请输入数量', placeholder: '' },
	],
	action: searchMessagesByTimeRange,
}


export const _searchMessagesByUserId = {
  name: "通过用户ID搜索消息",
  params: [
	  { key: 'userId', value: '', type: 'string', name: '请输入用户ID', placeholder: '' },
	  { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
	  { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	  { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
	  { key: 'startTime', value: '', type: 'number', name: '请输入开始时间', placeholder: '' },
	  { key: 'count', value: '', type: 'number', name: '请输入数量', placeholder: '' },
  ],
  action: searchMessagesByUserId,
}

export const _sendGroupMessageToDesignatedUsers = {
	name: "发送群聊定向消息",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'userIds', value: '', type: 'string', name: '请输入用户Id', placeholder: '多个以英文 , 隔开 eg:userId1,userId2' },
	],
	action: sendGroupMessageToDesignatedUsers,
}

