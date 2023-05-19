import { 
    modifyUltraGroupMessage,
    recallUltraGroupMessage,
    getBatchRemoteUltraGroupMessages,
 } from '../../function/engine_func.js';

 import { 
    syncUltraGroupReadStatus,
    getConversationsForAllChannel,
    getUltraGroupUnreadMentionedCount,
    clearUltraGroupMessages,
    sendUltraGroupTypingStatus,
    clearUltraGroupMessagesForAllChannel,
    updateUltraGroupMessageExpansion,
    removeUltraGroupMessageExpansionForKeys,
    changeUltraGroupDefaultNotificationLevel,
    getUltraGroupDefaultNotificationLevel,
    changeUltraGroupChannelDefaultNotificationLevel,
    getUltraGroupChannelDefaultNotificationLevel,
    getUltraGroupAllUnreadCount,
    getUltraGroupAllUnreadMentionedCount,
    getUltraGroupUnreadCount,
 } from '../../function/engine_func_auto.js';

 export const _syncUltraGroupReadStatus = {
	name: "上报超级群的已读时间",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'timestamp', value: '', type: 'number', name: '请输入时间戳', placeholder: ''},
	],
	action: syncUltraGroupReadStatus,
}

export const _getConversationsForAllChannel = {
	name: "获取特定会话下所有频道的会话列表",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: getConversationsForAllChannel,
}

export const _getUltraGroupUnreadMentionedCount = {
	name: "获取特定会话下所有频道的@未读消息消息数",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: getUltraGroupUnreadMentionedCount,
}

export const _modifyUltraGroupMessage = {
	name: "修改超级群消息",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId', placeholder: ''},
	],
	action: modifyUltraGroupMessage,
}

export const _recallUltraGroupMessage = {
	name: "撤回超级群消息",
	params: [
		{ key: 'messageId', value: '', type: 'string', name: '请输入需要撤回的消息Id', placeholder: ''},
		{ key: 'deleteRemote', value: true, type: 'boolean', name: '是否删除远程'},
	],
	action: recallUltraGroupMessage,
}

export const _clearUltraGroupMessages = {
	name: "删除本地特定channel、特定时间之前的消息",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'timestamp', value: '', type: 'number', name: '请输入时间戳', placeholder: ''},
		{ key: 'policy', value: '', type: 'number', name: '请输入清除策略', placeholder: '0:本地；1:远端；2:本地和远端'},
	],
	action: clearUltraGroupMessages,
}

export const _sendUltraGroupTypingStatus = {
	name: "发送超级群输入状态",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'typingStatus', value: '', type: 'number', name: '请输入状态', placeholder: '0:正在输入'},
	],
	action: sendUltraGroupTypingStatus,
}

export const _clearUltraGroupMessagesForAllChannel = {
	name: "删除本地所有channel、特定时间之前的消息",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'timestamp', value: '', type: 'number', name: '请输入时间戳', placeholder: ''},
	],
	action: clearUltraGroupMessagesForAllChannel,
}

export const _getBatchRemoteUltraGroupMessages = {
	name: "从服务获取批量消息",
	params: [
		{ key: 'messageIds', value: '', type: 'string', name: '请输入messageIds', placeholder: '多个以英文 , 隔开 eg:id1,id2 ' },
	],
	action: getBatchRemoteUltraGroupMessages,
}

export const _updateUltraGroupMessageExpansion = {
	name: "更新超级群消息扩展信息",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId', placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys:key支持大小写英文字母、数字、特殊字符 + = - _的组合方式，不支持汉字',placeholder: '多个以英文 , 隔开 eg:key1,key2' },
		{ key: 'values', value: '', type: 'string', name: '请输入values', placeholder: '多个以英文 , 隔开 eg:value1,value2' },
	],
	action: updateUltraGroupMessageExpansion,
}

export const _removeUltraGroupMessageExpansion = {
	name: "删除超级群消息扩展信息中特定的键值对",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId', placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys',placeholder: '多个以英文 , 隔开 eg:key1,key2' },
	],
	action: removeUltraGroupMessageExpansionForKeys,
}

export const _changeUltraGroupDefaultNotificationLevel = {
	name: "设置超级群的默认消息状态",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'level', value: '', type: 'number', name: '请输入消息通知级别:0:全部消息；1:未设置；2:群聊@所有人或@有自己；3:@的人有自己；4:@所有人；5:屏蔽消息通知', placeholder: ''},
	],
	action: changeUltraGroupDefaultNotificationLevel,
}

export const _getUltraGroupDefaultNotificationLevel = {
	name: "获取超级群的默认消息状态",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: getUltraGroupDefaultNotificationLevel,
}

export const _changeUltraGroupChannelDefaultNotificationLevel = {
	name: "设置超级群频道的默认消息状态",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'level', value: '', type: 'number', name: '请输入消息通知级别:0:全部消息；1:未设置；2:群聊@所有人或@有自己；3:@的人有自己；4:@所有人；5:屏蔽消息通知', placeholder: ''},
	],
	action: changeUltraGroupChannelDefaultNotificationLevel,
}

export const _getUltraGroupChannelDefaultNotificationLevel = {
	name: "获取超级群频道的默认消息状态",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: getUltraGroupChannelDefaultNotificationLevel,
}

export const _getUltraGroupAllUnreadCount = {
	name: "获取当前用户所有超级群会话未读消息数",
	action: getUltraGroupAllUnreadCount,
}

export const _getUltraGroupAllUnreadMentionedCount = {
	name: "获取当前用户所有超级群会话未读@消息数",
	action: getUltraGroupAllUnreadMentionedCount,
}

export const _getUltraGroupUnreadCount = {
	name: "获取指定会话的未读消息数",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: getUltraGroupUnreadCount,
}