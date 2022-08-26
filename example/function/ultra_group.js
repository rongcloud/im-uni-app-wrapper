// 超级群相关接口
import {addSuccessResult, addErrorResult, addPrimaryResult} from '../util/common.js'
import helper from '../common/helper.js'

export const _syncUltraGroupReadStatus = {
	name: "上报超级群的已读时间",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'timestamp', value: '', type: 'number', name: '请输入时间戳', placeholder: ''},
	],
	action: async function({targetId, channelId,timestamp}) {
		console.log('调用syncUltraGroupReadStatus方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (timestamp.length === 0) {
			uni.showToast({
				title: '时间戳为空',
				icon: 'error'
			});
			console.log('timestamp为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.syncUltraGroupReadStatus(targetId,channelId,parseInt(timestamp))
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'syncUltraGroupReadStatus',
			code: code,
		})
	}
}

export const _loadConversationsForAllChannel = {
	name: "获取特定会话下所有频道的会话列表",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: async function({conversationType, targetId}) {
		console.log('调用loadConversationsForAllChannel方法')
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
		
		let code = await helper.RCIMIWEngineInstance.loadConversationsForAllChannel(parseInt(conversationType),targetId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadConversationsForAllChannel',
			code: code,
		})
	}
}

export const _loadUltraGroupUnreadMentionedCount = {
	name: "获取特定会话下所有频道的@未读消息消息数",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: async function({conversationType, targetId, channelId}) {
		console.log('调用loadUltraGroupUnreadMentionedCount方法')
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
		
		let code = await helper.RCIMIWEngineInstance.loadUltraGroupUnreadMentionedCount(targetId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadUltraGroupUnreadMentionedCount',
			code: code,
		})
	}
}

export const _modifyUltraGroupMessage = {
	name: "修改超级群消息",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId', placeholder: ''},
	],
	action: async function({ messageUId }) {
		console.log('调用_modifyUltraGroupMessage方法')
		if (messageUId.length === 0) {
			uni.showToast({
				title: 'messageUId空',
				icon: 'error'
			});
			console.log('messageUId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		const content = '这个是超级群修改消息的内容'
		let message = await helper.RCIMIWEngineInstance.createTextMessage(5,'targetId','channelId',content)
		console.log('await:message---',message)
		
		let code = await helper.RCIMIWEngineInstance.modifyUltraGroupMessage(messageUId,message)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'modifyUltraGroupMessage',
			code: code,
		})
	}
}

export const _recallUltraGroupMessage = {
	name: "撤回超级群消息",
	params: [
		{ key: 'messageId', value: '', type: 'string', name: '请输入需要撤回的消息Id', placeholder: ''},
		{ key: 'deleteRemote', value: true, type: 'boolean', name: '是否删除远程'},
	],
	action: async function({ messageId,deleteRemote }) {
		console.log('调用recallUltraGroupMessage方法')
		if (messageId.length === 0) {
			uni.showToast({
				title: 'messageId为空',
				icon: 'error'
			});
			console.log('messageId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		const result = await helper.RCIMIWEngineInstance.getMessageById(parseInt(messageId))
		console.log('getMessageById-result---',result)
		if (result.message == null){
			uni.showToast({
				title: '未查询到message',
				icon: 'error'
			});
			console.log('未查询到message')
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.recallUltraGroupMessage(result.message,deleteRemote)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'recallUltraGroupMessage',
			code: code,
		})
	}
}

export const _clearUltraGroupMessages = {
	name: "删除本地特定channel、特定时间之前的消息",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'timestamp', value: '', type: 'number', name: '请输入时间戳', placeholder: ''},
		{ key: 'policy', value: '', type: 'number', name: '请输入清除策略', placeholder: '0:本地；1:远端；2:本地和远端'},
	],
	action: async function({ targetId, channelId, timestamp, policy }) {
		console.log('调用clearUltraGroupMessages方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (timestamp.length === 0) {
			uni.showToast({
				title: '时间戳为空',
				icon: 'error'
			});
			console.log('timestamp为空')
			return
		}
		if (policy.length === 0) {
			uni.showToast({
				title: '清除策略为空',
				icon: 'error'
			});
			console.log('policy为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.clearUltraGroupMessages(targetId,channelId,parseInt(timestamp),parseInt(policy))
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'clearUltraGroupMessages',
			code: code,
		})
	}
}

export const _sendUltraGroupTypingStatus = {
	name: "发送超级群输入状态",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'typingStatus', value: '', type: 'number', name: '请输入状态', placeholder: '0:正在输入'},
	],
	action: async function({ targetId, channelId, typingStatus }) {
		console.log('调用sendUltraGroupTypingStatus方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (typingStatus.length === 0) {
			uni.showToast({
				title: '状态为空',
				icon: 'error'
			});
			console.log('typingStatus为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.sendUltraGroupTypingStatus(targetId,channelId,parseInt(typingStatus))
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'sendUltraGroupTypingStatus',
			code: code,
		})
	}
}

export const _clearUltraGroupMessagesForAllChannel = {
	name: "删除本地所有channel、特定时间之前的消息",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'timestamp', value: '', type: 'number', name: '请输入时间戳', placeholder: ''},
	],
	action: async function({ targetId, timestamp }) {
		console.log('调用clearUltraGroupMessagesForAllChannel方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (timestamp.length === 0) {
			uni.showToast({
				title: '时间戳为空',
				icon: 'error'
			});
			console.log('timestamp为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.clearUltraGroupMessagesForAllChannel(targetId,parseInt(timestamp))
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'clearUltraGroupMessagesForAllChannel',
			code: code,
		})
	}
}

export const _loadBatchRemoteUltraGroupMessages = {
	name: "从服务获取批量消息",
	params: [
		{ key: 'messageIds', value: '', type: 'string', name: '请输入messageIds', placeholder: '多个以英文 , 隔开 eg:id1,id2 ' },
	],
	action: async function({ messageIds }) {
		console.log('调用loadBatchRemoteUltraGroupMessages方法')
		if (messageIds.length === 0) {
			uni.showToast({
				title: 'messageIds为空',
				icon: 'error'
			});
			console.log('messageIds为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		messageIds = messageIds.split(',').map(i => parseInt(i))
		var messageArr = new Array();
		for (let i=0; i<messageIds.length; i++) {
			const message = await helper.RCIMIWEngineInstance.getMessageById(messageIds[i])
			message.message.groupReadReceiptInfo = null
			messageArr.push(message.message)
		}
		console.log('getMessageById-messageArr---',messageArr)
		
		let code = await helper.RCIMIWEngineInstance.loadBatchRemoteUltraGroupMessages(messageArr)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadBatchRemoteUltraGroupMessages',
			code: code,
		})
	}
}

export const _updateUltraGroupMessageExpansion = {
	name: "更新超级群消息扩展信息",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId', placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys:key支持大小写英文字母、数字、特殊字符 + = - _的组合方式，不支持汉字',placeholder: '多个以英文 , 隔开 eg:key1,key2' },
		{ key: 'values', value: '', type: 'string', name: '请输入values', placeholder: '多个以英文 , 隔开 eg:value1,value2' },
	],
	action: async function({ messageUId,keys,values }) {
		console.log('调用updateUltraGroupMessageExpansion方法')
		if (messageUId.length === 0) {
			uni.showToast({
				title: 'messageUId为空',
				icon: 'error'
			});
			console.log('messageUId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		keys = keys.split(',')
		values = values.split(',')
		let expansion = {}
		for (let i=0;i<keys.length;i++){
			expansion[keys[i]] = values[i]
		}
		let code = await helper.RCIMIWEngineInstance.updateUltraGroupMessageExpansion(messageUId,expansion)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'updateUltraGroupMessageExpansion',
			code: code,
		})
	}
}

export const _removeUltraGroupMessageExpansion = {
	name: "删除超级群消息扩展信息中特定的键值对",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId', placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys',placeholder: '多个以英文 , 隔开 eg:key1,key2' },
	],
	action: async function({ messageUId,keys }) {
		console.log('调用removeUltraGroupMessageExpansion方法')
		if (messageUId.length === 0) {
			uni.showToast({
				title: 'messageUId为空',
				icon: 'error'
			});
			console.log('messageUId为空')
			return
		}
		if (keys.length === 0) {
			uni.showToast({
				title: 'keys为空',
				icon: 'error'
			});
			console.log('keys为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		keys = keys.split(',')
		let code = await helper.RCIMIWEngineInstance.removeUltraGroupMessageExpansion(messageUId,keys)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'removeUltraGroupMessageExpansion',
			code: code,
		})
	}
}

export const _changeUltraGroupDefaultNotificationLevel = {
	name: "设置超级群的默认消息状态",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'level', value: '', type: 'number', name: '请输入消息通知级别:0:全部消息；1:未设置；2:群聊@所有人或@有自己；3:@的人有自己；4:@所有人；5:屏蔽消息通知', placeholder: ''},
	],
	action: async function({ targetId,level }) {
		console.log('调用changeUltraGroupDefaultNotificationLevel方法')
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
				title: '通知级别为空',
				icon: 'error'
			});
			console.log('level为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.changeUltraGroupDefaultNotificationLevel(targetId,parseInt(level))
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'changeUltraGroupDefaultNotificationLevel',
			code: code,
		})
	}
}

export const _loadUltraGroupDefaultNotificationLevel = {
	name: "获取超级群的默认消息状态",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: async function({ targetId }) {
		console.log('调用loadUltraGroupDefaultNotificationLevel方法')
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
		
		let code = await helper.RCIMIWEngineInstance.loadUltraGroupDefaultNotificationLevel(targetId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadUltraGroupDefaultNotificationLevel',
			code: code,
		})
	}
}

export const _changeUltraGroupChannelDefaultNotificationLevel = {
	name: "设置超级群频道的默认消息状态",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'level', value: '', type: 'number', name: '请输入消息通知级别:0:全部消息；1:未设置；2:群聊@所有人或@有自己；3:@的人有自己；4:@所有人；5:屏蔽消息通知', placeholder: ''},
	],
	action: async function({ targetId, channelId, level }) {
		console.log('调用changeUltraGroupChannelDefaultNotificationLevel方法')
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
				title: '通知级别为空',
				icon: 'error'
			});
			console.log('level为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.changeUltraGroupChannelDefaultNotificationLevel(targetId,channelId,parseInt(level))
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'changeUltraGroupChannelDefaultNotificationLevel',
			code: code,
		})
	}
}

export const _loadUltraGroupChannelDefaultNotificationLevel = {
	name: "获取超级群频道的默认消息状态",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({ targetId, channelId }) {
		console.log('调用loadUltraGroupChannelDefaultNotificationLevel方法')
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
		
		let code = await helper.RCIMIWEngineInstance.loadUltraGroupChannelDefaultNotificationLevel(targetId,channelId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadUltraGroupChannelDefaultNotificationLevel',
			code: code,
		})
	}
}

export const _loadUltraGroupAllUnreadCount = {
	name: "获取当前用户所有超级群会话未读消息数",
	action: async function() {
		console.log('调用loadUltraGroupAllUnreadCount方法')
		if (!helper.engineInited()){
			return
		}
		
		let res = await helper.RCIMIWEngineInstance.loadUltraGroupAllUnreadCount()
		console.log('await:code---',res)
		
		addPrimaryResult({
			title: 'loadUltraGroupAllUnreadCount',
			code: res.code,
			data: res
		})
	}
}

export const _loadUltraGroupAllUnreadMentionedCount = {
	name: "获取当前用户所有超级群会话未读@消息数",
	action: async function() {
		console.log('调用loadUltraGroupAllUnreadMentionedCount方法')
		if (!helper.engineInited()){
			return
		}
		
		let res = await helper.RCIMIWEngineInstance.loadUltraGroupAllUnreadMentionedCount()
		console.log('await:code---',res)
		
		addPrimaryResult({
			title: 'loadUltraGroupAllUnreadMentionedCount',
			code: res.code,
			data: res
		})
	}
}

export const _loadUltraGroupUnreadCount = {
	name: "获取指定会话的未读消息数",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: async function({targetId}) {
		console.log('调用loadUltraGroupUnreadCount方法')
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
		
		let res = await helper.RCIMIWEngineInstance.loadUltraGroupUnreadCount(targetId)
		console.log('await:code---',res)
		
		addPrimaryResult({
			title: 'loadUltraGroupUnreadCount',
			code: res.code,
			data: res
		})
	}
}