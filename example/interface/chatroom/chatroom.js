import {
    joinChatRoom, 
    leaveChatRoom, 
    getChatRoomMessages, 
    addChatRoomEntry, 
    addChatRoomEntries, 
    getChatRoomEntry, 
    getChatRoomAllEntries, 
    removeChatRoomEntry, 
    removeChatRoomEntries,
} from '../../function/engine_func_auto.js';

export const _joinChatRoom = {
	name: "加入聊天室",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'messageCount', value: '', type: 'number', name: '请输入加入时获取的历史消息数', placeholder: '' },
		{ key: 'autoCreate', value: true, type: 'boolean', name: '聊天室不存在时是否自动创建'},
	],
	action: joinChatRoom,
}

export const _leaveChatRoom = {
	name: "退出聊天室",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: ''}
	],
	action: leaveChatRoom,
}

export const _getChatRoomMessages = {
	name: "获取聊天室历史消息记录",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'timestamp', value: '', type: 'number', name: '请输入时间戳', placeholder: '起始的消息发送时间戳' },
		{ key: 'order', value: '', type: 'number', name: '请输入拉取顺序', placeholder: '拉取顺序：0：倒序，1:正序' },
		{ key: 'count', value: '', type: 'number', name: '请输入数量', placeholder: '要获取的消息数量,0 < count <= 50' },
	],
	action: getChatRoomMessages,
}

export const _addChatRoomEntry = {
	name: "设置聊天室自定义属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'key', value: '', type: 'string', name: '请输入key', placeholder: '' },
		{ key: 'value', value: '', type: 'string', name: '请输入value', placeholder: '' },
		{ key: 'deleteWhenLeft', value: true, type: 'boolean', name: '用户掉线或退出是否删除属性'},
		{ key: 'overwrite', value: false, type: 'boolean', name: '当key存在时是否强制覆盖'},
	],
	action: addChatRoomEntry,
}

export const _addChatRoomEntries = {
	name: "批量设置聊天室自定义属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys', placeholder: '多个以英文 , 隔开 eg:key1,key2' },
		{ key: 'values', value: '', type: 'string', name: '请输入values', placeholder: '多个以英文 , 隔开 eg:value1,value2' },
		{ key: 'deleteWhenLeft', value: false, type: 'boolean', name: '用户掉线或退出是否删除属性'},
		{ key: 'overwrite', value: false, type: 'boolean', name: '当key存在时是否强制覆盖'},
	],
	action: addChatRoomEntries,
}

export const _getChatRoomEntry = {
	name: "获取聊天室单个属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'key', value: '', type: 'string', name: '请输入key', placeholder: '' },
	],
	action: getChatRoomEntry,
}

export const _getChatRoomAllEntries = {
	name: "获取聊天室所有属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
	],
	action: getChatRoomAllEntries,
}

export const _removeChatRoomEntry = {
	name: "删除聊天室自定义属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'key', value: '', type: 'string', name: '请输入key', placeholder: '' },
		{ key: 'force', value: false, type: 'boolean', name: '是否强制删除'},
	],
	action: removeChatRoomEntry,
}

export const _removeChatRoomEntries = {
	name: "批量删除聊天室自定义属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys', placeholder: '多个以英文 , 隔开 eg:key1,key2' },
		{ key: 'force', value: false, type: 'boolean', name: '是否强制删除'},
	],
	action: removeChatRoomEntries,
}