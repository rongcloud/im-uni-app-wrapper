// 消息接口
import { addSuccessResult, addErrorResult, addPrimaryResult } from '../util/common.js'
import helper from '../common/helper.js'


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
	action: async function ({ conversationType, targetId, channelId, content, pushContent, pushData, mentionedType, userIdList, 
				mentionedContent,keys, values,userId,name,portrait,alias,extra,userExtra }) {
		console.log('调用sendTextMessage方法')
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
		if (content.length === 0) {
			uni.showToast({
				title: '发送文本为空',
				icon: 'error'
			});
			console.log('content为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let message = await helper.RCIMIWEngineInstance.createTextMessage(parseInt(conversationType),targetId,channelId,content)
		console.log('await:message---',message)
		//extra
		message.extra = extra
		//mentionedInfo
		if (mentionedType.length != 0){
			console.log('mentionedType != null')
			userIdList = userIdList.split(',')
			message.mentionedInfo = {
				type: parseInt(mentionedType),
				userIdList: userIdList,
				mentionedContent: mentionedContent
			}
		}
		console.log('message.mentionedInfo---',message.mentionedInfo)
		//userInfo
		if (userId.length != 0){
			message.userInfo = {
				userId: userId,
				name: name,
				portrait: portrait,
				alias: alias,
				extra: userExtra
			}
		}
		//pushOptions
		if (pushContent.length != 0 && pushData.length != 0){
			console.log('pushContent != null')
			const jsonRCIMIWIOSPushOptions = {
				threadId: 'threadId',
				category: 'category',
				apnsCollapseId: 'apnsCollapseId',
				richMediaUri: 'richMediaUri'
			}
			
			const jsonRCIMIWAndroidPushOptions = {
				notificationId: 'notificationId',
				channelIdMi: 'channelIdMi',
				channelIdHW: 'channelIdHW',
				channelIdOPPO: 'channelIdOPPO',
				pushTypeVIVO: 0,
				collapseKeyFCM: 'collapseKeyFCM',
				imageUrlFCM: 'imageUrlFCM',
				importanceHW: 1,
				imageUrlHW: 'imageUrlHW',
				imageUrlMi: 'imageUrlMi',
				channelIdFCM: 'channelIdFCM'
			}
			const pushOptions = {
				pushContent: pushContent,
				pushData: pushData,
				disableNotification: true,
				disablePushTitle: true,
				pushTitle: '推送标题',
				forceShowDetailContent: true,
				templateId: 'templateId',
				voIPPush: true,
				iOSPushOptions: jsonRCIMIWIOSPushOptions,
				androidPushOptions: jsonRCIMIWAndroidPushOptions
				
			}
			message.pushOptions = pushOptions
			console.log('message.pushOptions---',message.pushOptions)
		}
		//expansion
		if (keys.length !=0 && values.length != 0) {
			keys = keys.split(',')
			values = values.split(',')
			const entries = {}
			//使用for循环编辑数组，向jsonObject中赋值
			for (let i = 0; i < keys.length; i++) {
				entries[keys[i]] = values[i];
			}
			console.log('message.expansion---',entries)
			message.expansion = entries
		}
		
		console.log('await:last-message---',message)
		let code = await helper.RCIMIWEngineInstance.sendMessage(message)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'sendMessage',
			code: code,
		})
	}
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
	action: async function ({ conversationType, targetId, channelId, original }) {
		console.log('调用sendImageMessage方法')
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
		
		uni.chooseImage({
			count: 1,
			sourceType: ['album'],
			success: async (res) => {
				if (res.tempFilePaths.length < 0) return
				console.log('chooseImage-res',res)
				const filePath = 'file:///' + plus.io.convertLocalFileSystemURL(res.tempFilePaths[0])
				let message = await helper.RCIMIWEngineInstance.createImageMessage(parseInt(conversationType),targetId,channelId,filePath)
				//original 是否发送原图
				message.original = original
				console.log('await:message---',message)
				let code = await helper.RCIMIWEngineInstance.sendMediaMessage(message)
				console.log('await:code---',code)
				
				addPrimaryResult({
					title: 'sendMediaMessage',
					code: code,
				})
			},
			fail: (res) => {
				console.log('chooseImage-fail',res)
			}
		})

	}
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
	action: async function ({ conversationType, targetId, channelId, pushContent, pushData }) {
		console.log('调用sendMediaMessage方法')
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
		
		//项目本地路径：前面加www是因为手机存储中生成的项目对应的该文件前面有www文件夹
		const filePath = 'file://' + plus.io.convertLocalFileSystemURL('../www/static/assets/sendFileMessage.docx')
		console.log('filePath---',filePath)
		let message = await helper.RCIMIWEngineInstance.createFileMessage(parseInt(conversationType),targetId,channelId,filePath)
		console.log('await:message---',message)
		let code = await helper.RCIMIWEngineInstance.sendMediaMessage(message)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'sendMediaMessage',
			code: code,
		})
		

	}
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
	action: async function ({ conversationType, targetId, channelId }) {
		console.log('调用sendVoiceMessage方法')
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
		
		
		const recorderManager = uni.getRecorderManager()
		/**
		 * 目前仅支持aac格式
		 * format：录制格式
		 * duration：录制时长
		 */
		const recordOptions = {
			format: 'aac',
			duration: 5000
		}
		recorderManager.start(recordOptions);
		uni.showActionSheet({
			title: '正在录音,5秒后自动停止',
			itemList: ['确定'],
				success: function (res) {
					console.log('点击确定按钮');
					// recorderManager.stop();
				},
				fail: function (res) {
					console.log(res.errMsg);
				}
		})
		
		recorderManager.onStop(async function (res) {
			console.log('录音结果：res---',res)
			// const innerAudioContext = uni.createInnerAudioContext();
			// console.log('播放录音');
			// innerAudioContext.src = res.tempFilePath;
			// innerAudioContext.play();
			
			/**
			 * 1.前面录音设置的时长5s，所以这里最后一个参数duration：音频时长5秒
			 * 2.请开发者根据自身实际音频文件时长传递参数，单位为 秒，数据类型为 int
			 * 3.local 路径：filePath 需要转换为平台路径
			 */
			const filePath = 'file:///' + plus.io.convertLocalFileSystemURL(res.tempFilePath)
			let message = await helper.RCIMIWEngineInstance.createVoiceMessage(parseInt(conversationType),targetId,channelId,filePath,5)
			console.log('await:message---',message)
			let code = await helper.RCIMIWEngineInstance.sendMediaMessage(message)
			console.log('await:code---',code)
			
			addPrimaryResult({
				title: 'sendMediaMessage',
				code: code,
			})
		
		})
		
		recorderManager.onError(async function (error) {
			console.log('recorderManager-error:', error)
		})
	}
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
	action: async function ({ conversationType, targetId, channelId, pushContent, pushData }) {
		console.log('调用sendSightMessage方法')
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
		
		uni.chooseVideo({
			count: 1,
			sourceType: ['album', 'camera'],
			success: async (res) => {
				console.log('chooseVideo---',res)
				
				const duration = parseInt(res.duration)
				const filePath = plus.io.convertLocalFileSystemURL(res.tempFilePath)
				let message = await helper.RCIMIWEngineInstance.createSightMessage(parseInt(conversationType),targetId,channelId,filePath,duration)
				console.log('await:message---',message)
				let code = await helper.RCIMIWEngineInstance.sendMediaMessage(message)
				console.log('await:code---',code)
				
				addPrimaryResult({
					title: 'sendMediaMessage',
					code: code,
				})
			}
		})

	}
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
	action: async function ({ conversationType, targetId, channelId, referenceMessageId, referenceMessageContent }) {
		console.log('调用sendReferenceMessage方法')
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
		if (referenceMessageId.length === 0) {
			uni.showToast({
				title: '消息Id为空',
				icon: 'error'
			});
			console.log('referenceMessageId为空')
			return
		}
		if (referenceMessageContent.length === 0) {
			uni.showToast({
				title: '引用文本为空',
				icon: 'error'
			});
			console.log('referenceMessageContent为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		const result = await helper.RCIMIWEngineInstance.getMessageById(parseInt(referenceMessageId))
		console.log('getMessageById-result---',result)
		if (result.message == null){
			uni.showToast({
				title: '未查询到引用的message',
				icon: 'error'
			});
			console.log('未查询到引用的message')
			return
		}
		
		let message = await helper.RCIMIWEngineInstance.createReferenceMessage(parseInt(conversationType),targetId,channelId,result.message,referenceMessageContent)
		console.log('await:message---',message)
		let code = await helper.RCIMIWEngineInstance.sendMessage(message)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'sendMessage',
			code: code,
		})
		

	}
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
	action: async function ({ conversationType, targetId, channelId, referenceMessageId, referenceMessageContent, pushContent, pushData }) {
		console.log('调用sendGIFMessage方法')
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
		
		uni.chooseImage({
			count: 1,
			sourceType: ['album'],
			success: async (res) => {
				console.log('chooseImage-res---',res)
				if (res.tempFilePaths.length < 0) return
				const filePath = 'file:///' + plus.io.convertLocalFileSystemURL(res.tempFilePaths[0])
				if (!filePath.endsWith('.gif') && !filePath.endsWith('.GIF')){
					uni.showToast({
						title: '非GIF格式',
						icon: 'error'
					});
					console.log('非GIF格式')
					return
				}
				let message = await helper.RCIMIWEngineInstance.createGIFMessage(parseInt(conversationType),targetId,channelId,filePath)
				console.log('await:message---',message)
				let code = await helper.RCIMIWEngineInstance.sendMediaMessage(message)
				console.log('await:code---',code)
				
				addPrimaryResult({
					title: 'sendMediaMessage',
					code: code,
				})
			}
		})
	}
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
	action: async function ({conversationType,targetId,channelId,longitude,latitude,poiName,pushContent,pushData}) {
		console.log('调用sendLocationMessage方法')
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
		if (longitude.length === 0) {
			uni.showToast({
				title: '经度为空',
				icon: 'error'
			});
			console.log('longitude为空')
			return
		}
		if (latitude.length === 0) {
			uni.showToast({
				title: '纬度为空',
				icon: 'error'
			});
			console.log('latitude为空')
			return
		}
		if (poiName.length === 0) {
			uni.showToast({
				title: '位置信息空',
				icon: 'error'
			});
			console.log('poiName为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		uni.chooseImage({
			count: 1,
			sourceType: ['album'],
			success: async (res) => {
				console.log('chooseImage-res---',res)
				if (res.tempFilePaths.length < 0) return
				const filePath = 'file:///' + plus.io.convertLocalFileSystemURL(res.tempFilePaths[0])
				
				let message = await helper.RCIMIWEngineInstance.createLocationMessage(parseInt(conversationType),targetId,channelId,parseFloat(longitude),parseFloat(latitude),poiName,filePath)
				console.log('await:message---',message)
				let code = await helper.RCIMIWEngineInstance.sendMessage(message)
				console.log('await:code---',code)
				
				addPrimaryResult({
					title: 'sendMessage',
					code: code,
				})
			}
		})
	}
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
	action: async function ({conversationType,targetId,channelId,policy,messageIdentifier,keys,values,pushContent,pushData}) {
		console.log('调用sendCustomMessage方法')
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
		if (policy.length === 0) {
			uni.showToast({
				title: '存储策略类型为空',
				icon: 'error'
			});
			console.log('policy为空')
			return
		}
		if (messageIdentifier.length === 0) {
			uni.showToast({
				title: '标识符为空',
				icon: 'error'
			});
			console.log('messageIdentifier为空')
			return
		}
		if (keys.length === 0) {
			uni.showToast({
				title: '内容的键空',
				icon: 'error'
			});
			console.log('keys为空')
			return
		}
		if (values.length === 0) {
			uni.showToast({
				title: '内容的值空',
				icon: 'error'
			});
			console.log('values为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		const fields = {}
		keys = keys.split(',')
		values = values.split(',')
		//使用for循环编辑数组，向jsonObject中赋值
		for (let i = 0; i < keys.length; i++) {
			fields[keys[i]] = values[i];
		}
		console.log('fields---',fields)
		let message = await helper.RCIMIWEngineInstance.createCustomMessage(parseInt(conversationType),targetId,channelId,parseInt(policy),messageIdentifier,fields)
		console.log('await:message---',message)
		let code = await helper.RCIMIWEngineInstance.sendMessage(message)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'sendMessage',
			code: code,
		})
	}
}

export const _cancelSendMediaMessage = {
	name: "取消发送媒体中的消息",
	params: [
		{ key: 'messageId', value: '', type: 'number', name: '请输入取消发送的消息Id', placeholder: ''},
	],
	action: async function ({ messageId }) {
		console.log('调用cancelSendMediaMessage方法')
		if (messageId.length === 0) {
			uni.showToast({
				title: '消息Id为空',
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
		let code = await helper.RCIMIWEngineInstance.cancelSendingMediaMessage(result.message)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'cancelSendingMediaMessage',
			code: code,
		})
	}
}

export const _downloadMediaMessage = {
	name: "下载媒体消息",
	params: [
		{ key: 'messageId', value: '', type: 'number', name: '请输入取消发送的消息Id', placeholder: ''},
	],
	action: async function ({ messageId }) {
		console.log('调用downloadMediaMessage方法')
		if (messageId.length === 0) {
			uni.showToast({
				title: '消息Id为空',
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
		let code = await helper.RCIMIWEngineInstance.downloadMediaMessage(result.message)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'downloadMediaMessage',
			code: code,
		})

	}
}

export const _cancelDownloadMediaMessage = {
	name: "取消下载媒体消息",
	params: [
		{ key: 'messageId', value: '', type: 'number', name: '请输入取消发送的消息Id', placeholder: ''},
	],
	action: async function ({ messageId }) {
		console.log('调用cancelDownloadMediaMessage方法')
		if (messageId.length === 0) {
			uni.showToast({
				title: '消息Id为空',
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
		let code = await helper.RCIMIWEngineInstance.cancelDownloadingMediaMessage(result.message)
		console.log('await:code---',code)
		
		addPrimaryResult({
			title: 'cancelDownloadingMediaMessage',
			code: code,
		})

	}
}

//向会话中发送正在输入的状态，目前只支持单聊。
export const _sendTypingStatus = {
	name: "发送输入状态消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'currentType', value: '', type: 'string', name: '请输入当前的状态', placeholder: ''},
	],
	action: async function ({ conversationType, targetId, channelId, currentType }) {
		console.log('调用sendTypingStatus方法')
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
		if (currentType.length === 0) {
			uni.showToast({
				title: '状态为空',
				icon: 'error'
			});
			console.log('currentType为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		

		let code = await helper.RCIMIWEngineInstance.sendTypingStatus(parseInt(conversationType),targetId,channelId,currentType)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'sendTypingStatus',
			code: code,
		})
	}
}

export const _loadMessages = {
	name: "加载消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
		{ key: 'sentTime', value: '', type: 'number', name: '请输入开始时间(时间戳单位：毫秒)', placeholder: ''},
		{ key: 'order', value: '', type: 'number', name: '请输入时间策略：0:获取sentTime之前的消息；1:获取sentTime之后的消息', placeholder: ''},
		{ key: 'policy', value: '', type: 'number', name: '请输入加载策略', placeholder: '0:仅本地；1:仅远端；2:本地和远端'},
		{ key: 'count', value: '', type: 'number', name: '请输入获取数量', placeholder: '最多获取20条'},
	],
	action: async function ({ conversationType, messageId, targetId, channelId, sentTime, order, policy, count }) {
		console.log('调用loadMessages方法')
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
		if (sentTime.length === 0) {
			uni.showToast({
				title: '开始时间为空',
				icon: 'error'
			});
			console.log('sentTime为空')
			return
		}
		if (order.length === 0) {
			uni.showToast({
				title: '时间策略为空',
				icon: 'error'
			});
			console.log('order为空')
			return
		}
		if (policy.length === 0) {
			uni.showToast({
				title: '加载策略为空',
				icon: 'error'
			});
			console.log('policy为空')
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
		
		let code = await helper.RCIMIWEngineInstance.loadMessages(parseInt(conversationType),targetId,channelId,parseInt(sentTime),order,policy,parseInt(count))
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadMessages',
			code: code,
		})
	}
}

export const _getMessageById = {
	name: "根据消息ID加载消息",
	params: [
		{ key: 'messageId', value: '', type: 'string', name: '请输入messageId', placeholder: ''},
	],
	action: async function ({ messageId }) {
		console.log('调用getMessage方法')
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
		}
		addPrimaryResult({
			title: 'getMessageById',
			code: result.code,
			data: result,
		})
	}
}

export const _getMessageByUId = {
	name: "根据远端 UID 加载消息",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId', placeholder: ''},
	],
	action: async function ({ messageUId }) {
		console.log('调用getMessageByUId方法')
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
		
		const result = await helper.RCIMIWEngineInstance.getMessageByUId(messageUId)
		console.log('getMessageByUId-result---',result)
		if (result.message == null){
			uni.showToast({
				title: '未查询到message',
				icon: 'error'
			});
			console.log('未查询到message')
		}
		addPrimaryResult({
			title: 'getMessageByUId',
			code: result.code,
			data: result,
		})
	}
}

export const _getFirstUnreadMessage = {
	name: "加载某个会话的第一条未读消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function ({ conversationType, targetId, channelId }) {
		console.log('调用getFirstUnreadMessage方法')
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
		
		let code = await helper.RCIMIWEngineInstance.loadFirstUnreadMessage(parseInt(conversationType),targetId,channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadFirstUnreadMessage',
			code: code,
		})
		
	}
}

export const _getUnreadMentionedMessages = {
	name: "加载某个会话中未读的 @ 消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写'},
	],
	action: async function ({ conversationType, targetId, channelId }) {
		console.log('调用getUnreadMentionedMessages方法')
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
		
		let code = await helper.RCIMIWEngineInstance.loadUnreadMentionedMessages(parseInt(conversationType),targetId,channelId)
		console.log('await:code---',code)
		addPrimaryResult({
			title: 'loadUnreadMentionedMessages',
			code: code,
		})
	}
}

export const _insertMessage = {
	name: "插入一条消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: async function ({ conversationType, targetId }) {
		console.log('调用insertMessage方法')
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
		
		const content = '这是一条插入的消息'
		let message = await helper.RCIMIWEngineInstance.createTextMessage(parseInt(conversationType),targetId,'',content)
		console.log('await:message---',message)
		let code = await helper.RCIMIWEngineInstance.insertMessage(message)
		addPrimaryResult({
			title: 'insertMessage',
			code: code,
		})
	}
}

export const _insertMessages = {
	name: "插入多条消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	],
	action: async function ({ conversationType, targetId }) {
		console.log('调用insertOutgoingMessage方法', JSON.stringify(arguments))
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
		
		const content1 = '这是一条插入的消息-01'
		let message1 = await helper.RCIMIWEngineInstance.createTextMessage(parseInt(conversationType),targetId,'',content1)
		const content2 = '这是一条插入的消息-02'
		let message2 = await helper.RCIMIWEngineInstance.createTextMessage(parseInt(conversationType),targetId,'',content2)
		console.log('await:message---',message1,message2)
		var messages = new Array();
		messages.push(message1)
		messages.push(message2)
		console.log('messages---',messages)
		let code = await helper.RCIMIWEngineInstance.insertMessages(messages)
		addPrimaryResult({
			title: 'insertMessages',
			code: code,
		})
	}
}

export const _clearMessages = {
	name: "删除消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'timestamp', value: '', type: 'string', name: '清除消息截止时间戳：0 <= recordTime <= 当前会话最后一条消息的sentTime，'
			+ '0:清除所有消息，其他值清除小于等于recordTime的消息', placeholder: ''},
		{ key: 'policy', value: '', type: 'number', name: '请输入policy', placeholder: '0:仅本地；1:仅远端；2:本地和远端'},
	],
	action: async function ({ conversationType, targetId, channelId, timestamp, policy }) {
		console.log('调用clearMessages方法')
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
		if (policy.length === 0) {
			uni.showToast({
				title: 'policy为空',
				icon: 'error'
			});
			console.log('policy为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.clearMessages(parseInt(conversationType),targetId,channelId,parseInt(timestamp),parseInt(policy))
		addPrimaryResult({
			title: 'clearMessages',
			code: code,
		})
	}
}

export const _deleteLocalMessage = {
	name: "删除本地消息",
	params: [
		{ key: 'messageIds', value: '', type: 'string', name: '请输入需要删除的消息Id', placeholder: '多个以英文 , 隔开 eg:1,2 '},
	],
	action: async function ({ messageIds }) {
		console.log('调用insertOutgoingMessage方法')
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
		var messages = new Array();
		for (let i=0; i<messageIds.length; i++) {
			const result = await helper.RCIMIWEngineInstance.getMessageById(messageIds[i])
			if (result.message != null) {
				messages.push(result.message)
			}
		}
		if (messages.length == 0) {
			uni.showToast({
				title: '未查询到message',
				icon: 'error'
			});
			console.log('未查询到message')
			return
		}
		console.log('getMessageById-messages---',messages)
		const code = await helper.RCIMIWEngineInstance.deleteLocalMessages(messages)
		addPrimaryResult({
			title: 'deleteLocalMessages',
			code: code,
		})
	}
}

export const _deleteMessages = {
	name: "删除消息(本地和远端同时删除)",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'messageIds', value: '', type: 'string', name: '请输入需要删除的消息Id', placeholder: '多个以英文 , 隔开 eg:1,2 '},
	],
	action: async function ({ conversationType, targetId, channelId, messageIds }) {
		console.log('调用_deleteMessages方法')
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
		var messages = new Array();
		for (let i=0; i<messageIds.length; i++) {
			const result = await helper.RCIMIWEngineInstance.getMessageById(messageIds[i])
			if (result.message != null) {
				messages.push(result.message)
			}
		}
		if (messages.length == 0) {
			uni.showToast({
				title: '未查询到message',
				icon: 'error'
			});
			console.log('未查询到message')
			return
		}
		console.log('getMessageById-messages---',messages)
		const code = await helper.RCIMIWEngineInstance.deleteMessages(parseInt(conversationType),targetId,channelId,messages)
		addPrimaryResult({
			title: 'deleteMessages',
			code: code,
		})
	}
}

export const _recallMessage = {
	name: "撤回某条消息",
	params: [
		{ key: 'messageId', value: '', type: 'number', name: '请输入撤回的消息Id', placeholder: '' },
	],
	action: async function ({ messageId }) {
		console.log('调用recallMessage方法')
		if (messageId.length === 0) {
			uni.showToast({
				title: '消息Id为空',
				icon: 'error'
			});
			console.log('messageId为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		const result = await helper.RCIMIWEngineInstance.getMessageById(parseInt(messageId))
		console.log('getMessageById-message---',result)
		if (result.message == null){
			uni.showToast({
				title: '未查询到message',
				icon: 'error'
			});
			console.log('未查询到message')
			return
		}
		console.log('last-message---',result.message)
		const code = await helper.RCIMIWEngineInstance.recallMessage(result.message)
		addPrimaryResult({
			title: 'recallMessage',
			code: code,
		})
	}
}

export const _sendPrivateReadReceiptMessage = {
	name: "发送单聊的已读回执",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'timestamp', value: '', type: 'string', name: '该会话中已读的最后一条消息的发送时间戳', placeholder: ''},
	],
	action: async function ({ targetId, channelId, timestamp }) {
		console.log('调用sendPrivateReadReceiptMessage方法')
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
		
		const code = await helper.RCIMIWEngineInstance.sendPrivateReadReceiptMessage(targetId,channelId,parseInt(timestamp))
		addPrimaryResult({
			title: 'sendPrivateReadReceiptMessage',
			code: code,
		})
	}
}

export const _sendGroupReadReceiptRequest = {
	name: "发起群聊的已读回执请求",
	params: [
		{ key: 'messageId', value: '', type: 'number', name: '请输入需要回执的消息Id', placeholder: '' },
	],
	action: async function ({ messageId }) {
		console.log('调用sendGroupReadReceiptRequest方法')
		if (messageId.length === 0) {
			uni.showToast({
				title: '消息Id为空',
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
		console.log('last-message---',result.message)
		const code = await helper.RCIMIWEngineInstance.sendGroupReadReceiptRequest(result.message)
		addPrimaryResult({
			title: 'sendGroupReadReceiptRequest',
			code: code,
		})
	}
}

export const _sendGroupReadReceiptResponse = {
	name: "发起群聊的已读回执响应",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '' },
		{ key: 'messageIds', value: '', type: 'string', name: '请输入相应的消息Id', placeholder: '多个以英文 , 隔开 eg:1,2' },
	],
	action: async function ({ targetId, channelId, messageIds }) {
		console.log('调用sendGroupReadReceiptResponse方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (messageIds.length === 0) {
			uni.showToast({
				title: '消息Id为空',
				icon: 'error'
			});
			console.log('messageIds为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		messageIds = messageIds.split(',').map(i => parseInt(i))
		var messages = new Array();
		for (let i=0; i<messageIds.length; i++) {
			const result = await helper.RCIMIWEngineInstance.getMessageById(messageIds[i])
			if (result.message != null) {
				messages.push(result.message)
			}
		}
		if (messages.length == 0) {
			uni.showToast({
				title: '未查询到message',
				icon: 'error'
			});
			console.log('未查询到message')
			return
		}
		console.log('getMessageById-messages---',messages)
		const code = await helper.RCIMIWEngineInstance.sendGroupReadReceiptResponse(targetId,channelId,messages)
		addPrimaryResult({
			title: 'sendGroupReadReceiptResponse',
			code: code,
		})
	}
}

export const _updateMessageExpansion = {
	name: "更新消息扩展",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId',placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys:key支持大小写英文字母、数字、特殊字符 + = - _的组合方式，不支持汉字，最大32个字符',placeholder: '多个以英文 , 隔开 eg:key1,key2' },
		{ key: 'values', value: '', type: 'string', name: '请输入values', placeholder: '多个以英文 , 隔开 eg:value1,value2' },
	],
	action: async function ({messageUId, keys, values}) {
		if (messageUId.length === 0) {
			uni.showToast({
				title: 'messageUId空',
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
		const expansion = {}
		//使用for循环编辑数组，向jsonObject中赋值
		for (let i = 0; i < keys.length; i++) {
			expansion[keys[i]] = values[i];
		}
		
		const code = await helper.RCIMIWEngineInstance.updateMessageExpansion(messageUId,expansion)
		addPrimaryResult({
			title: 'updateMessageExpansion',
			code: code,
		})
	}
}

export const _removeMessageExpansion = {
	name: "根据key移除消息扩展",
	params: [
		{ key: 'messageUId', value: '', type: 'string', name: '请输入messageUId',placeholder: '' },
		{ key: 'keys', value: '', type: 'string', name: '请输入keys:key支持大小写英文字母、数字、特殊字符 + = - _的组合方式，不支持汉字，最大32个字符',placeholder: '' },
	],
	action: async function ({messageUId, keys}) {
		console.log('调用removeMessageExpansion')
		if (messageUId.length === 0) {
			uni.showToast({
				title: 'messageUId空',
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
		const code = await helper.RCIMIWEngineInstance.removeMessageExpansionForKeys(messageUId,keys)
		addPrimaryResult({
			title: 'removeMessageExpansionForKeys',
			code: code,
		})
		
	}
}

export const _changeMessageSentStatus = {
	name: "修改消息的发送状态",
	params: [
		{ key: 'messageId', value: '', type: 'string', name: '请输入messageId', placeholder: '' },
		{ key: 'sentStatus', value: '', type: 'number', name: '请输入sentStatus：0:发送中；1：发送失败；2:已发送；3：对方已接收；4:对方已读；5:对方已销毁；6:对方已取消', placeholder: '' },
	],
	action: async function ({ messageId, sentStatus }) {
		console.log('调用changeMessageSentStatus方法')
		if (messageId.length === 0) {
			uni.showToast({
				title: 'messageId空',
				icon: 'error'
			});
			console.log('messageId为空')
			return
		}
		if (sentStatus.length === 0) {
			uni.showToast({
				title: 'sentStatus为空',
				icon: 'error'
			});
			console.log('sentStatus为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		const code = await helper.RCIMIWEngineInstance.changeMessageSentStatus(parseInt(messageId),parseInt(sentStatus))
		addPrimaryResult({
			title: 'changeMessageSentStatus',
			code: code,
		})

	}
}

export const _changeMessageReceiveStatus = {
	name: "修改消息的接收状态",
	params: [
		{ key: 'messageId', value: '', type: 'string', name: '请输入messageId', placeholder: '' },
		{ key: 'receivedStatus', value: '', type: 'number', name: '请输入receivedStatus：0:未读；1:已读；2:已听；3:已下载；4:被多端其他设备收取过；5:被多端同时收取', placeholder: '' },
	],
	action: async function ({ messageId, receivedStatus }) {
		console.log('调用changeMessageReceiveStatus方法')
		if (messageId.length === 0) {
			uni.showToast({
				title: 'messageId空',
				icon: 'error'
			});
			console.log('messageId为空')
			return
		}
		if (receivedStatus.length === 0) {
			uni.showToast({
				title: 'receivedStatus为空',
				icon: 'error'
			});
			console.log('receivedStatus为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		const code = await helper.RCIMIWEngineInstance.changeMessageReceiveStatus(parseInt(messageId),parseInt(receivedStatus))
		addPrimaryResult({
			title: 'changeMessageReceiveStatus',
			code: code,
		})

	}
}

export const _searchMessages = {
	name: "搜索消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'keyword', value: '', type: 'string', name: '请输入关键词', placeholder: '' },
		{ key: 'startTime', value: '', type: 'number', name: '请输入开始时间', placeholder: '' },
		{ key: 'count', value: '', type: 'number', name: '请输入数量', placeholder: '' },
	],
	action: async function ({ conversationType, targetId,channelId, keyword, startTime, count }) {
		console.log('调用searchMessages方法')
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
		if (keyword.length === 0) {
			uni.showToast({
				title: '关键词为空',
				icon: 'error'
			});
			console.log('keyword为空')
			return
		}
		if (startTime.length === 0) {
			uni.showToast({
				title: '开始时间为空',
				icon: 'error'
			});
			console.log('startTime为空')
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
		
		const code = await helper.RCIMIWEngineInstance.searchMessages(parseInt(conversationType),targetId,channelId,keyword,parseInt(startTime),parseInt(count))
		addPrimaryResult({
			title: 'searchMessages',
			code: code,
		})
	}
}

export const _searchMessagesByTimeRange = {
	name: "根据时间段搜索消息",
	params: [
		{ key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'keyword', value: '', type: 'string', name: '请输入关键词', placeholder: '' },
		{ key: 'startTime', value: '', type: 'number', name: '请输入开始时间', placeholder: '' },
		{ key: 'endTime', value: '', type: 'number', name: '请输入结束时间', placeholder: '' },
		{ key: 'offset', value: '', type: 'number', name: '请输入偏移量', placeholder: '' },
		{ key: 'count', value: '', type: 'number', name: '请输入数量', placeholder: '' },
	],
	action: async function ({ conversationType, targetId,channelId, keyword, startTime, endTime, offset, count }) {
		console.log('调用searchMessagesByTimeRange方法')
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
		if (keyword.length === 0) {
			uni.showToast({
				title: '关键词为空',
				icon: 'error'
			});
			console.log('keyword为空')
			return
		}
		if (startTime.length === 0) {
			uni.showToast({
				title: '开始时间为空',
				icon: 'error'
			});
			console.log('startTime为空')
			return
		}
		if (endTime.length === 0) {
			uni.showToast({
				title: '结束时间为空',
				icon: 'error'
			});
			console.log('endTime为空')
			return
		}
		if (offset.length === 0) {
			uni.showToast({
				title: '偏移量为空',
				icon: 'error'
			});
			console.log('offset为空')
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
		
		const code = await helper.RCIMIWEngineInstance.searchMessagesByTimeRange(parseInt(conversationType),targetId,channelId,keyword,parseInt(startTime),parseInt(endTime),parseInt(offset),parseInt(count))
		addPrimaryResult({
			title: 'searchMessagesByTimeRange',
			code: code,
		})
	}
}


export const _searchMessagesByUserId = {
  name: "通过用户ID搜索消息",
  params: [
	  { key: 'userId', value: '', type: 'string', name: '请输入用户ID', placeholder: '' },
	  { key: 'conversationType', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: ''},
	  { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
	  { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
	  { key: 'startTime', value: '', type: 'number', name: '请输入开始时间', placeholder: '' },
	  { key: 'count', value: '', type: 'number', name: '请输入数量', placeholder: '' },
  ],
  action: async function ({ userId, conversationType, targetId, channelId, startTime, count }) {
    console.log('调用searchMessagesByUserId方法')
	if (userId.length === 0) {
		uni.showToast({
			title: '用户Id为空',
			icon: 'error'
		});
		console.log('userId为空')
		return
	}
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
	if (startTime.length === 0) {
		uni.showToast({
			title: '开始时间为空',
			icon: 'error'
		});
		console.log('startTime为空')
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
    
    const code = await helper.RCIMIWEngineInstance.searchMessagesByUserId(userId,parseInt(conversationType),targetId,channelId,parseInt(startTime),parseInt(count))
    addPrimaryResult({
    	title: 'searchMessagesByUserId',
    	code: code,
    })
  }
}

export const _sendGroupMessageToDesignatedUsers = {
	name: "发送群聊定向消息",
	params: [
		{ key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: ''},
		{ key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: ''},
		{ key: 'userIds', value: '', type: 'string', name: '请输入用户Id', placeholder: '多个以英文 , 隔开 eg:userId1,userId2' },
	],
	action: async function ({ targetId, channelId, userIds }) {
		console.log('调用sendGroupMessageToDesignatedUsers方法')
		if (targetId.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('targetId为空')
			return
		}
		if (userIds.length === 0) {
			uni.showToast({
				title: '会话Id为空',
				icon: 'error'
			});
			console.log('userIds为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let content = '这是一条群定向消息'
		let message = await helper.RCIMIWEngineInstance.createTextMessage(2,targetId,channelId,content)
		console.log('await:message---',message)
		
		userIds = userIds.split(',')
		const code = await helper.RCIMIWEngineInstance.sendGroupMessageToDesignatedUsers(message,userIds)
		addPrimaryResult({
			title: 'sendGroupMessageToDesignatedUsers',
			code: code,
		})
	}
}

