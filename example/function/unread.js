// 未读相关接口
import helper from '../common/helper.js'
import {addSuccessResult, addErrorResult, addPrimaryResult} from '../util/common.js'

export const _loadUnreadCount = {
	name: "加载某个会话的未读数",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({conversationType, targetId, channelId}) {
		console.log('调用loadUnreadCount方法')
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
		
		let code = await helper.RCIMIWEngineInstance.loadUnreadCount(parseInt(conversationType),targetId,channelId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadUnreadCount',
			code: code,
		})
	}
}

export const _loadTotalUnreadCount = {
	name: "加载所有未读数",
	params: [
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({ channelId }) {
		console.log('调用loadTotalUnreadCount方法')
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadTotalUnreadCount(channelId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadTotalUnreadCount',
			code: code,
		})
	}
}

export const _loadUnreadCountByConversationTypes = {
	name: "根据会话类型加载未读数",
	params: [
		{ key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2'},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'contain', value: true, type: 'boolean', name: '是否包含免打扰消息的未读消息数'},
	],
	action: async function({ conversationTypes, channelId, contain }) {
		console.log('调用loadUnreadCountByConversationTypes方法')
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
		
		console.log('contain---',contain)
		conversationTypes = conversationTypes.split(',').map(i => parseInt(i))
		let code = await helper.RCIMIWEngineInstance.loadUnreadCountByConversationTypes(conversationTypes,channelId,contain)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadUnreadCountByConversationTypes',
			code: code,
		})
	}
}

export const _loadUnreadMentionedCount = {
	name: "获取会话中的 @ 未读数",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function({ conversationType,targetId,channelId }) {
		console.log('调用loadUnreadMentionedCount方法')
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
		
		let code = await helper.RCIMIWEngineInstance.loadUnreadMentionedCount(parseInt(conversationType),targetId,channelId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadUnreadMentionedCount',
			code: code,
		})
	}
}

export const _clearUnreadCount = {
	name: "清除某个会话中的未读消息数",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'timestamp', value: '', type: 'number', name: '请输入时间戳', placeholder: ''},
	],
	action: async function({conversationType, targetId,channelId, timestamp}) {
		console.log('调用clearUnreadCount方法')
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
		
		let code = await helper.RCIMIWEngineInstance.clearUnreadCount(parseInt(conversationType),targetId,channelId,parseInt(timestamp))
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'clearUnreadCount',
			code: code,
		})
	}
}