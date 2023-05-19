import { 
    getUnreadCount,
    getTotalUnreadCount,
    getUnreadCountByConversationTypes,
    getUnreadMentionedCount,
    clearUnreadCount,
} from '../../function/engine_func_auto.js';

export const _getUnreadCount = {
	name: "加载某个会话的未读数",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: getUnreadCount,
}

export const _getTotalUnreadCount = {
	name: "加载所有未读数",
	params: [
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: getTotalUnreadCount,
}

export const _getUnreadCountByConversationTypes = {
	name: "根据会话类型加载未读数",
	params: [
		{ key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2'},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'contain', value: true, type: 'boolean', name: '是否包含免打扰消息的未读消息数'},
	],
	action: getUnreadCountByConversationTypes,
}

export const _getUnreadMentionedCount = {
	name: "获取会话中的 @ 未读数",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: getUnreadMentionedCount,
}

export const _clearUnreadCount = {
	name: "清除某个会话中的未读消息数",
	params: [
		{ key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'timestamp', value: '', type: 'number', name: '请输入时间戳', placeholder: ''},
	],
	action: clearUnreadCount,
}