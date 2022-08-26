// 聊天室
import {addSuccessResult, addErrorResult, addPrimaryResult} from '../util/common.js'
import helper from '../common/helper.js'


export const _joinChatRoom = {
	name: "加入聊天室",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'count', value: '', type: 'number', name: '请输入加入时获取的历史消息数', placeholder: '' },
		{ key: 'autoCreate', value: true, type: 'boolean', name: '聊天室不存在时是否自动创建'},
	],
	action: async function({targetId, count, autoCreate }) {
		console.log('调用joinChatRoom方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '房间Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (count.length === 0 || count <= 0) {
			uni.showToast({
				title: '数量要大于0',
				icon: 'error'
			});
			console.log('count为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.joinChatRoom(targetId,parseInt(count),autoCreate)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'joinChatRoom',
			code: code,
		})
	}
}

export const _leaveChatRoom = {
	name: "退出聊天室",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: ''}
	],
	action: async function({targetId}) {
		console.log('调用leaveChatRoom方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '房间Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.leaveChatRoom(targetId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'leaveChatRoom',
			code: code,
		})
	}
}

export const _loadChatRoomMessages = {
	name: "获取聊天室历史消息记录",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'timestamp', value: '', type: 'number', name: '请输入时间戳', placeholder: '起始的消息发送时间戳' },
		{ key: 'order', value: '', type: 'number', name: '请输入拉取顺序', placeholder: '拉取顺序：0：倒序，1:正序' },
		{ key: 'count', value: '', type: 'number', name: '请输入数量', placeholder: '要获取的消息数量,0 < count <= 50' },
	],
	action: async function({targetId, timestamp, order, count}) {
		console.log('调用loadChatRoomMessages方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '房间Id为空',
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
		if (order.length === 0) {
			uni.showToast({
				title: '拉取顺序为空',
				icon: 'error'
			});
			console.log('order为空')
			return
		}
		if (count.length === 0 || count <= 0) {
			uni.showToast({
				title: '数量要大于0',
				icon: 'error'
			});
			console.log('count为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadChatRoomMessages(targetId,parseInt(timestamp),parseInt(order),parseInt(count))
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadChatRoomMessages',
			code: code,
		})
	}
}

export const _addChatRoomEntry = {
	name: "设置聊天室自定义属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'key', value: '', type: 'string', name: '请输入key', placeholder: '' },
		{ key: 'value', value: '', type: 'string', name: '请输入value', placeholder: '' },
		{ key: 'autoDelete', value: true, type: 'boolean', name: '用户掉线或退出是否删除属性'},
		{ key: 'forceSet', value: false, type: 'boolean', name: '当key存在时是否强制覆盖'},
	],
	action: async function({ targetId, key, value, autoDelete,forceSet }) {
		console.log('调用addChatRoomEntry方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '房间Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (key.length === 0) {
			uni.showToast({
				title: 'key为空',
				icon: 'error'
			});
			console.log('key为空')
			return
		}
		if (value.length === 0) {
			uni.showToast({
				title: 'value为空',
				icon: 'error'
			});
			console.log('value为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.addChatRoomEntry(targetId,key,value,autoDelete,forceSet)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'addChatRoomEntry',
			code: code,
		})
	}
}

export const _addChatRoomEntries = {
	name: "批量设置聊天室自定义属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys', placeholder: '多个以英文 , 隔开 eg:key1,key2' },
		{ key: 'values', value: '', type: 'string', name: '请输入values', placeholder: '多个以英文 , 隔开 eg:value1,value2' },
		{ key: 'autoDelete', value: false, type: 'boolean', name: '用户掉线或退出是否删除属性'},
		{ key: 'forceSet', value: false, type: 'boolean', name: '当key存在时是否强制覆盖'},
	],
	action: async function({ targetId, keys, values, autoDelete, forceSet }) {
		console.log('调用addChatRoomEntries方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '房间Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
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
		if (values.length === 0) {
			uni.showToast({
				title: 'values为空',
				icon: 'error'
			});
			console.log('values为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		keys = keys.split(',')
		values = values.split(',')
		const chatRoomEntries = {}
		//使用for循环编辑数组，向jsonObject中赋值
		for (let i = 0; i < keys.length; i++) {
			chatRoomEntries[keys[i]] = values[i];
		}
		console.log('chatRoomEntries---',chatRoomEntries)
		
		let code = await helper.RCIMIWEngineInstance.addChatRoomEntries(targetId,chatRoomEntries,autoDelete,forceSet)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'addChatRoomEntries',
			code: code,
		})
	}
}

export const _loadChatRoomEntry = {
	name: "获取聊天室单个属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'key', value: '', type: 'string', name: '请输入key', placeholder: '' },
	],
	action: async function({ targetId, key }) {
		console.log('调用loadChatRoomEntry方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '房间Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (key.length === 0) {
			uni.showToast({
				title: 'key为空',
				icon: 'error'
			});
			console.log('key为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadChatRoomEntry(targetId,key)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadChatRoomEntry',
			code: code,
		})
	}
}

export const _loadAllChatRoomEntries = {
	name: "获取聊天室所有属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
	],
	action: async function({targetId}) {
		console.log('调用loadAllChatRoomEntries方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '房间Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadAllChatRoomEntries(targetId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadAllChatRoomEntries',
			code: code,
		})
	}
}

export const _removeChatRoomEntry = {
	name: "删除聊天室自定义属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'key', value: '', type: 'string', name: '请输入key', placeholder: '' },
		{ key: 'forceDelete', value: false, type: 'boolean', name: '是否强制删除'},
	],
	action: async function({ targetId, key,forceDelete }) {
		console.log('调用removeChatRoomEntry方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '房间Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (key.length === 0) {
			uni.showToast({
				title: 'key为空',
				icon: 'error'
			});
			console.log('key为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.removeChatRoomEntry(targetId,key,forceDelete)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'removeChatRoomEntry',
			code: code,
		})
	}
}

export const _removeChatRoomEntries = {
	name: "批量删除聊天室自定义属性",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入聊天室房间Id', placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys', placeholder: '多个以英文 , 隔开 eg:key1,key2' },
		{ key: 'forceDelete', value: false, type: 'boolean', name: '是否强制删除'},
	],
	action: async function({ targetId, keys, forceDelete }) {
		console.log('调用removeChatRoomEntries方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '房间Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
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
		
		const keyAaary = keys.split(',')
		let code = await helper.RCIMIWEngineInstance.removeChatRoomEntries(targetId,keyAaary,forceDelete)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'removeChatRoomEntries',
			code: code,
		})
	}
}
