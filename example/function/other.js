// 其他接口
import {addSuccessResult, addErrorResult, addPrimaryResult} from '../util/common.js'
import helper from '../common/helper.js'


export const _addToBlacklist = {
	name: "将某个用户加入黑名单",
	params: [
		{ key: 'userId', value: '', type: 'string', name: '请输入用户Id', placeholder: ''},
	],
	action: async function({userId}) {
		console.log('调用addToBlacklist方法')
		if (userId.length === 0) {
			uni.showToast({
				title: '用户Id为空',
				icon: 'error'
			});
			console.log('userId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.addToBlacklist(userId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'addToBlacklist',
			code: code,
		})
	}
}

export const _removeFromBlacklist = {
	name: "将某个用户从黑名单中移出",
	params: [
		{ key: 'userId', value: '', type: 'string', name: '请输入用户Id', placeholder: ''},
	],
	action: async function({userId}) {
		console.log('调用removeFromBlacklist方法')
		if (userId.length === 0) {
			uni.showToast({
				title: '用户Id为空',
				icon: 'error'
			});
			console.log('userId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.removeFromBlacklist(userId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'removeFromBlacklist',
			code: code,
		})
	}
}

/**
 *	未知	unknown = 0,
 *	在黑名单中	inBlacklist = 1,
 *	不在黑名单	notInBlacklist = 2,
 */
export const _loadBlacklistStatus = {
	name: "获取某用户是否在黑名单中",
	params: [
		{ key: 'userId', value: '', type: 'string', name: '请输入用户Id(返回状态status：0：未知；1:在黑名单；2:不在黑名单)', placeholder: ''},
	],
	action: async function({userId}) {
		console.log('调用loadBlacklistStatus方法')
		if (userId.length === 0) {
			uni.showToast({
				title: '用户Id为空',
				icon: 'error'
			});
			console.log('userId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadBlacklistStatus(userId)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadBlacklistStatus',
			code: code,
		})
	}
}

export const _loadBlacklist = {
	name: "获取当前用户设置的黑名单列表",
	action: async function() {
		console.log('调用loadBlacklist方法')
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadBlacklist()
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadBlacklist',
			code: code,
		})
	}
}

export const _changeNotificationQuietHours = {
	name: "屏蔽某个时间段的消息提醒",
	params: [
		{ key: 'startTime', value: '', type: 'string', name: '请输入开始时间', placeholder: '格式为 HH:MM:SS'},
		{ key: 'spanMins', value: '', type: 'string', name: '请输入需要消息免打扰分钟数', placeholder: '0 < 分钟数 < 1440'},
		{ key: 'level', value: '', type: 'string', name: '请输入消息通知级别:0:未设置；1:群仅@消息通知；2:屏蔽所有', placeholder: ''},
	],
	action: async function({startTime,spanMins,level}) {
		console.log('调用changeNotificationQuietHours方法')
		if (startTime.length === 0) {
			uni.showToast({
				title: '开始时间为空',
				icon: 'error'
			});
			console.log('startTime为空')
			return
		}
		if (spanMins.length === 0) {
			uni.showToast({
				title: '分钟数为空',
				icon: 'error'
			});
			console.log('spanMins为空')
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
		
		let code = await helper.RCIMIWEngineInstance.changeNotificationQuietHours(startTime,spanMins,parseInt(level))
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'changeNotificationQuietHours',
			code: code,
		})
	}
}

export const _removeNotificationQuietHours = {
	name: "删除已设置的全局时间段消息提醒屏蔽",
	action: async function() {
		console.log('调用removeNotificationQuietHours方法')
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.removeNotificationQuietHours()
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'removeNotificationQuietHours',
			code: code,
		})
	}
}

export const _loadNotificationQuietHours = {
	name: "查询已设置的时间段消息提醒屏蔽",
	action: async function() {
		console.log('调用loadNotificationQuietHours方法')
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.loadNotificationQuietHours()
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'loadNotificationQuietHours',
			code: code,
		})
	}
}

export const _changePushContentShowStatus = {
	name: "设置是否显示远程推送内容详情",
	params: [
		{ key: 'showContent', value: true, type: 'boolean', name: '是否显示远程推送内容' },
	],
	action: async function({showContent}) {
		console.log('调用changePushContentShowStatus方法')
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.changePushContentShowStatus(showContent)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'changePushContentShowStatus',
			code: code,
		})
	}
}

export const _changePushLanguage = {
	name: "修改推送语言",
	params: [
		{ key: 'language', value: '', type: 'string', name: '请输入推送语言："zh_cn"：中文；"en_us"：英文；"ar_sa"：阿拉伯文', placeholder: '' },
	],
	action: async function({language}) {
		console.log('调用changePushLanguage方法')
		if (language.length === 0) {
			uni.showToast({
				title: '语言为空',
				icon: 'error'
			});
			console.log('language为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.changePushLanguage(language)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'changePushLanguage',
			code: code,
		})
	}
}

export const _changePushReceiveStatus = {
	name: "设置是否接收远程推送",
	params: [
		{ key: 'receive', value: true, type: 'boolean', name: '是否接收远程推送' },
	],
	action: async function({receive}) {
		console.log('调用changePushReceiveStatus方法')
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.changePushReceiveStatus(receive)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'changePushReceiveStatus',
			code: code,
		})
	}
}

export const _changeLogLevel = {
	name: "设置日志级别",
	params: [
		{ key: 'level', value: '', type: 'number', name: '请输入日志级别:0:不输出日志；1:只输出错误日志；2:错误和警告；3:错误、警告和一般日志；4:错误、警告、一般和debug；5:输出所有日志', placeholder: '' },
	],
	action: async function({level}) {
		console.log('调用changeLogLevel方法')
		if (level.length === 0) {
			uni.showToast({
				title: '级别为空',
				icon: 'error'
			});
			console.log('level为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.changeLogLevel(parseInt(level))
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'changeLogLevel',
			code: code,
		})
	}
}

