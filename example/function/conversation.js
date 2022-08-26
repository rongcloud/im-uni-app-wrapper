//会话相关
import {addSuccessResult, addErrorResult, addPrimaryResult} from '../util/common.js'
import helper from '../common/helper.js'

export const _loadConversations = {
	name: "加载某些会话",
	params: [
		{ key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2'},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'count', value: '', type: 'number', name: '请输入查询数量', placeholder: '0 < 数量 <= 50'},
		{ key: 'timestamp', value: '', type: 'number',name: '请输入开始时间(时间戳单位:毫秒)',placeholder: '0:查询所有'},
	],
	action: async function({conversationTypes, channelId, count, timestamp}) {
		console.log('调用loadConversations方法')
		if (conversationTypes.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationTypes为空')
			return
		}
		if (count.length === 0) {
			uni.showToast({
				title: '查询数量为空',
				icon: 'error'
			});
			console.log('count为空')
			return
		}
		if (timestamp.length === 0) {
			uni.showToast({
				title: '开始时间为空',
				icon: 'error'
			});
			console.log('timestamp为空')
			return
		}
		
		if (!helper.engineInited()){
			return
		}
		conversationTypes = conversationTypes.split(',').map(i => parseInt(i))
		let code = await helper.RCIMIWEngineInstance.loadConversations(conversationTypes, channelId, parseInt(timestamp), count)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadConversations',
			code: code,
		})
	}
}

export const _loadConversation = {
	name: "加载某个会话",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({ conversationType, targetId, channelId }) { 
		console.log('调用loadConversation方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadConversation(parseInt(conversationType), targetId,channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadConversation',
			code: code,
		})
	}
}

export const _removeConversation = {
	name: "移除某个会话",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({conversationType, targetId, channelId}) {
		console.log('调用removeConversation方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.removeConversation(parseInt(conversationType), targetId, channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'removeConversation',
			code: code,
		})

	}
}

export const _removeConversations = {
	name: "根据会话类型移除会话",
	params: [
		{ key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2'},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({conversationTypes, channelId}) {
		console.log('调用removeConversations方法')
		if (conversationTypes.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationTypes为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		conversationTypes = conversationTypes.split(',').map(i => parseInt(i))
		let code = await helper.RCIMIWEngineInstance.removeConversations(conversationTypes, channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'removeConversations',
			code: code,
		})
	}
}

export const _saveDraftMessage = {
	name: "保存草稿信息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'draft', value: '', type: 'string', name: '请输入草稿内容', placeholder: ''},
	],
	action: async function({conversationType, targetId, channelId, draft}) {
		console.log('调用saveDraftMessage方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (draft.length === 0) {
			uni.showToast({
				title: '草稿内容为空',
				icon: 'error'
			});
			console.log('draft为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.saveDraftMessage(parseInt(conversationType), targetId, channelId, draft)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'saveDraftMessage',
			code: code,
		})
	}
}

export const _loadDraftMessage = {
	name: "获取会话中的草稿信息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({conversationType, targetId, channelId}) {
		console.log('调用loadDraftMessage方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadDraftMessage(parseInt(conversationType), targetId, channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadDraftMessage',
			code: code,
		})
	}
}

export const _clearDraftMessage = {
	name: "删除指定会话的草稿信息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({conversationType, targetId, channelId}) {
		console.log('调用clearDraftMessage方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.clearDraftMessage(parseInt(conversationType), targetId, channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'clearDraftMessage',
			code: code,
		})
	}
}

export const _changeConversationNotificationLevel = {
	name: "设置会话的消息提醒状态",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'level', value: '', type: 'number', placeholder: '', name: '请输入提醒状态值:' + 
		' 0:全部消息通知(接收全部消息通知-显示指定关闭免打扰功能)； ' + 
		'1:未设置(向上查询群或者APP级别设置,存量数据中0表示未设置)； ' + 
		'2:群聊，超级群@所有人或者@成员列表有自己时通知；单聊代表消息不通知； ' + 
		'3:群聊，超级群@成员列表有自己时通知，@所有人不通知；单聊代表消息不通知； ' + 
		'4:群聊，超级群@所有人通知，其他情况都不通知；单聊代表消息不通知； ' + 
		'5:消息通知屏蔽，即不接收消息通知'},
	],
	action: async function({conversationType, targetId, channelId, level}) {
		console.log('调用changeConversationNotificationLevel方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (level.length === 0) {
			uni.showToast({
				title: '提醒状态值为空',
				icon: 'error'
			});
			console.log('level为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.changeConversationNotificationLevel(parseInt(conversationType), targetId, channelId, parseInt(level))
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'changeConversationNotificationLevel',
			code: code,
		})
	}
}

export const _loadConversationNotificationLevel = {
	name: "获取会话的消息提醒状态",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({ conversationType, targetId, channelId }) {
		console.log('调用loadConversationNotificationLevel方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadConversationNotificationLevel(parseInt(conversationType), targetId, channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadConversationNotificationLevel',
			code: code,
		})
	}
}

export const _changeConversationTypeNotificationLevel = {
	name: "设置会话类型的消息提醒状态",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'level', value: '', type: 'number', placeholder: '', name: '请输入提醒状态值:' + 
		' 0:全部消息通知(接收全部消息通知-显示指定关闭免打扰功能)； ' + 
		'1:未设置(向上查询群或者APP级别设置,存量数据中0表示未设置)； ' + 
		'2:群聊，超级群@所有人或者@成员列表有自己时通知；单聊代表消息不通知； ' + 
		'3:群聊，超级群@成员列表有自己时通知，@所有人不通知；单聊代表消息不通知； ' + 
		'4:群聊，超级群@所有人通知，其他情况都不通知；单聊代表消息不通知； ' + 
		'5:消息通知屏蔽，即不接收消息通知'},
	],
	action: async function({conversationType, level}) {
		console.log('调用changeConversationTypeNotificationLevel方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (level.length === 0) {
			uni.showToast({
				title: '提醒状态值为空',
				icon: 'error'
			});
			console.log('level为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.changeConversationTypeNotificationLevel(parseInt(conversationType),parseInt(level))
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'changeConversationTypeNotificationLevel',
			code: code,
		})
	}
}

export const _loadConversationTypeNotificationLevel = {
	name: "获取会话类型的消息提醒状态",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
	],
	action: async function({ conversationType }) {
		console.log('调用loadConversationTypeNotificationLevel方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadConversationTypeNotificationLevel(parseInt(conversationType))
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadConversationTypeNotificationLevel',
			code: code,
		})
	}
}

export const _loadBlockedConversations = {
	name: "获取免打扰的会话列表",
	params: [
		{ key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2'},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({conversationTypes, channelId}) {
		console.log('调用loadBlockedConversations方法')
		if (conversationTypes.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationTypes为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		conversationTypes = conversationTypes.split(',').map(i => parseInt(i))
		let code = await helper.RCIMIWEngineInstance.loadBlockedConversations(conversationTypes, channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadBlockedConversations',
			code: code,
		})
		
	}
}

export const _changeConversationTopStatus = {
	name: "设置会话置顶状态",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'isTop', value: true, type: 'boolean', name: '是否置顶'},
	],
	action: async function({conversationType, targetId, channelId, isTop}) {
		console.log('调用changeConversationTopStatus方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.changeConversationTopStatus(parseInt(conversationType), targetId, channelId, isTop)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'changeConversationTopStatus',
			code: code,
		})
	}
}

export const _setOnConversationTopStatusLoadedListener = {
	name: "\xa0\xa0获取会话置顶状态\xa0\xa0",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({conversationType, targetId, channelId}) {
		console.log('调用setOnConversationTopStatusLoadedListener方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadConversationTopStatus(parseInt(conversationType), targetId, channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadConversationTopStatus',
			code: code,
		})
	}
}

export const _loadTopConversations = {
	name: "根据会话类型，获取置顶会话列表",
	params: [
		{ key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2'},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({conversationTypes, channelId}) {
		console.log('调用loadTopConversations方法')
		if (conversationTypes.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationTypes为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		conversationTypes = conversationTypes.split(',').map(i => parseInt(i))
		let code = await helper.RCIMIWEngineInstance.loadTopConversations(conversationTypes, channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadTopConversations',
			code: code,
		})
	}
}


export const _syncConversationReadStatus = {
	name: "\xa0\xa0同步会话阅读状态\xa0\xa0",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'timestamp', value: null, type: 'number',name: '请输入开始时间(时间戳单位:毫秒)',placeholder: '会话中已读的最后一条消息发送时间'},
	],
	action: async function({conversationType, targetId, channelId, timestamp}) {
		console.log('调用syncConversationReadStatus方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (timestamp === null || timestamp === '') {
			uni.showToast({
				title: '开始时间为空',
				icon: 'error'
			});
			console.log('timestamp为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.syncConversationReadStatus(parseInt(conversationType), targetId, channelId, parseInt(timestamp))
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'syncConversationReadStatus',
			code: code,
		})
	}
}

export const _searchConversations = {
	name: "根据关键字搜索会话",
	params: [
		{ key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2'},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'messageTypes', value: '', type: 'string', name: '请输入查询的消息类型:1:自定义消息；2:文本消息；3:语音；4:图片；' + 
			'5:文件；6:小视频；7:GIF图；8:撤回；9:引用；10:命令；11:命令通知', placeholder: '多个以英文 , 隔开 eg:1,2'},
		{ key: 'keyword', value: '', type: 'string', name: '请输入关键字', placeholder: ''},
	],
	action: async function({conversationTypes, channelId, messageTypes, keyword}) {
		console.log('调用searchConversations方法')
		if (conversationTypes.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationTypes为空')
			return
		}
		if (messageTypes.length === 0) {
			uni.showToast({
				title: '消息类型为空',
				icon: 'error'
			});
			console.log('messageTypes为空')
			return
		}
		if (keyword.length === 0) {
			uni.showToast({
				title: '关键字为空',
				icon: 'error'
			});
			console.log('keyword为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		messageTypes = messageTypes.split(',').map(i => parseInt(i))
		conversationTypes = conversationTypes.split(',').map(i => parseInt(i))
		let code = await helper.RCIMIWEngineInstance.searchConversations(conversationTypes, channelId, messageTypes, keyword)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'searchConversations',
			code: code,
		})
	}
}

export const _loadMessageCount = {
	name: "\xa0\xa0\xa0\xa0获取指定会话的消息总数\xa0\xa0\xa0\xa0",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({conversationType, targetId, channelId}) {
		console.log('调用loadMessageCount方法')
		if (conversationType.length === 0) {
			uni.showToast({
				title: '会话类型为空',
				icon: 'error'
			});
			console.log('conversationType为空')
			return
		}
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadMessageCount(parseInt(conversationType), targetId, channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadMessageCount',
			code: code,
		})
	}
}

