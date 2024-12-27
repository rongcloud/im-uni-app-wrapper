import RCIMIWEngine from "@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMEngine"
import {
	addSuccessResult,
	addErrorResult,
	addWarnResult,
	addPrimaryResult
} from '@/util/common.js'
import initListener from './listener.js'
import helper from '@/common/helper.js'
import config from "@/config/config.js"


export function create(arg) {
	console.log('调用初始化方法', appKey)
	let {
		appKey,
		naviServer,
		fileServer,
		statisticServer,
		kickReconnectDevice,
		originalImageQuality,
		originalImageMaxSize,
		originalImageSize,
		thumbnailQuality,
		thumbnailMaxSize,
		thumbnailMinSize,
		sightCompressWidth,
		sightCompressHeight,
		locationThumbnailQuality,
		locationThumbnailWidth,
		locationThumbnailHeight,
		areaCode,
	} = arg;
	if (appKey.length === 0) {
		uni.showToast({
			title: 'appKey为空',
			icon: 'error'
		});
		return;
	}
	let compressOptions = {}
	if (originalImageQuality.length != 0) {
		compressOptions.originalImageQuality = originalImageQuality
	}
	if (originalImageSize.length != 0) {
		compressOptions.originalImageSize = originalImageSize
	}
	if (originalImageMaxSize.length != 0) {
		compressOptions.originalImageMaxSize = originalImageMaxSize
	}
	if (thumbnailQuality.length != 0) {
		compressOptions.thumbnailQuality = thumbnailQuality
	}
	if (thumbnailMaxSize.length != 0) {
		compressOptions.thumbnailMaxSize = thumbnailMaxSize
	}
	if (thumbnailMinSize.length != 0) {
		compressOptions.thumbnailMinSize = thumbnailMinSize
	}
	if (sightCompressWidth.length != 0) {
		compressOptions.sightCompressWidth = sightCompressWidth
	}
	if (sightCompressHeight.length != 0) {
		compressOptions.sightCompressHeight = sightCompressHeight
	}
	if (locationThumbnailQuality.length != 0) {
		compressOptions.locationThumbnailQuality = locationThumbnailQuality
	}
	if (locationThumbnailWidth.length != 0) {
		compressOptions.locationThumbnailWidth = locationThumbnailWidth
	}
	if (locationThumbnailHeight.length != 0) {
		compressOptions.locationThumbnailHeight = locationThumbnailHeight
	}
	let options = {
		naviServer: naviServer,
		fileServer: fileServer,
		statisticServer: statisticServer,
		kickReconnectDevice: kickReconnectDevice,
		compressOptions: compressOptions,
		// 非必填，推送使用
		pushOptions: config.pushOptions,
		enablePush: true,
	}
	if (areaCode.length > 0) {
		options.areaCode = parseInt(areaCode);
	}

	console.log('options---', options)
	RCIMIWEngine.create(appKey, options).then((res) => {
		console.log('初始化引擎res---', res)
		helper.RCIMIWEngineInstance = res;
		// 上报三方推送
		// setTimeout(() => {
		// 	helper.RCIMIWEngineInstance.registerPushToken(0, 'xxxx');
		// }, 3000);
	})

	addSuccessResult({
		title: 'create',
	})
}

// 链接相关接口
export function addListener() {
	initListener()

	addSuccessResult({
		title: '添加事件监听',
	})
}

export async function destroy() {
	console.log('调用销毁引擎方法')
	if (!helper.engineInited()) {
		return
	}

	let code = await helper.RCIMIWEngineInstance.destroy();
	if (code === 0) {
		helper.RCIMIWEngineInstance = null;
	}
	addSuccessResult({
		title: 'destroy',
		code: code
	});
}

// message

export async function sendTextMessage(arg) {
	console.log('调用sendTextMessage方法')
	let {
		conversationType,
		targetId,
		channelId,
		content,
		pushContent,
		pushData,
		pushTypeVIVO,
		categoryVivo,
		imageUrlHonor,
		importanceHonor,
		mentionedType,
		userIdList,
		mentionedContent,
		keys,
		values,
		userId,
		name,
		portrait,
		alias,
		extra,
		userExtra
	} = arg;
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
	if (!helper.engineInited()) {
		return
	}

	let message = await helper.RCIMIWEngineInstance.createTextMessage(parseInt(conversationType), targetId,
		channelId, content)
	console.log('await:message---', message)
	if (!message) {
		uni.showToast({
			title: 'createTextMessage 失败',
			icon: 'error'
		});
		return;
	}
	//extra
	message.extra = extra
	//mentionedInfo
	if (mentionedType.length != 0) {
		console.log('mentionedType != null')
		userIdList = userIdList.split(',')
		message.mentionedInfo = {
			type: parseInt(mentionedType),
			userIdList: userIdList,
			mentionedContent: mentionedContent
		}
	}
	console.log('message.mentionedInfo---', message.mentionedInfo)
	//userInfo
	if (userId.length != 0) {
		message.userInfo = {
			userId: userId,
			name: name,
			portrait: portrait,
			alias: alias,
			extra: userExtra
		};
	}
	//pushOptions
	let jsonRCIMIWIOSPushOptions = {
		threadId: '',
		category: '',
		apnsCollapseId: '',
		richMediaUri: ''
	};
	let jsonRCIMIWAndroidPushOptions = {
		notificationId: '',
		channelIdMi: '',
		channelIdHW: '',
		channelIdOPPO: '',
		collapseKeyFCM: '',
		imageUrlFCM: '',
		importanceHW: 1,
		imageUrlHW: '',
		imageUrlMi: '',
		channelIdFCM: ''
	};
	if (pushTypeVIVO) {
		jsonRCIMIWAndroidPushOptions.pushTypeVIVO = parseInt(pushTypeVIVO);
	}
	if (categoryVivo) {
		jsonRCIMIWAndroidPushOptions.categoryVivo = categoryVivo;
	}

	jsonRCIMIWAndroidPushOptions.imageUrlHonor = imageUrlHonor;	
	if (importanceHonor) {
		jsonRCIMIWAndroidPushOptions.importanceHonor = parseInt(importanceHonor);
	}
	let pushOptions = {
		pushContent: pushContent,
		pushData: pushData,
		disableNotification: false,
		disablePushTitle: false,
		pushTitle: '',
		forceShowDetailContent: false,
		templateId: '',
		voIPPush: false,
		iOSPushOptions: jsonRCIMIWIOSPushOptions,
		androidPushOptions: jsonRCIMIWAndroidPushOptions
	};
	message.pushOptions = pushOptions;
	console.log('message.pushOptions---', message.pushOptions);
	//expansion
	if (keys.length != 0 && values.length != 0) {
		keys = keys.split(',');
		values = values.split(',');
		let entries = {};
		//使用for循环编辑数组，向jsonObject中赋值
		for (let i = 0; i < keys.length; i++) {
			entries[keys[i]] = values[i];
		}
		console.log('message.expansion---', entries);
		message.expansion = entries;
	}
	console.log('await:last-message---', message);
	let code = await sendMessage(message);
	console.log('await:sendMessage code ---', code);
	addPrimaryResult({
		title: 'sendMessage',
		code: code,
	});
}

export async function sendImageMessage(arg) {
	console.log('调用sendImageMessage方法');
	let { conversationType, targetId, channelId, original } = arg;
	if (conversationType.length === 0) {
		uni.showToast({
			title: '会话类型为空',
			icon: 'error'
		});
		console.log('conversationType为空');
		return;
	}
	if (targetId.length === 0) {
		uni.showToast({
			title: '会话Id为空',
			icon: 'error'
		});
		console.log('targetId为空');
		return;
	}
	if (!helper.engineInited()) {
		return;
	}

	uni.chooseImage({
		count: 1,
		sourceType: ['album'],
		success: async (res) => {
			if (res.tempFilePaths.length < 0) return;
			console.log('chooseImage-res', res);
			let filePath = 'file:///' + plus.io.convertLocalFileSystemURL(res.tempFilePaths[0]);
			let message = await helper.RCIMIWEngineInstance.createImageMessage(parseInt(
				conversationType), targetId, channelId, filePath);
			//original 是否发送原图
			message.original = original;
			console.log('await:message---', message);
			let code = await sendMediaMessage(message);
			console.log('await:code---', code);

			addPrimaryResult({
				title: 'sendMediaMessage',
				code: code,
			});
		},
		fail: (res) => {
			console.log('chooseImage-fail', res)
		}
	});
}

export async function sendFileMessage(arg) {
	console.log('调用 sendFileMessage 方法');
	let { conversationType, targetId, channelId, pushContent, pushData } = arg;
	if (!helper.engineInited()) {
		return;
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
		return;
	}

	//项目本地路径：前面加www是因为手机存储中生成的项目对应的该文件前面有www文件夹
	let filePath = 'file://' + plus.io.convertLocalFileSystemURL('../www/static/assets/sendFileMessage.docx');
	console.log('filePath---', filePath);
	let message = await helper.RCIMIWEngineInstance.createFileMessage(parseInt(conversationType), targetId,
		channelId, filePath);
	console.log('await:message---', message);
	let code = await sendMediaMessage(message);
	console.log('await:code---', code);

	addPrimaryResult({
		title: 'sendMediaMessage',
		code: code,
	});
}

export async function sendVoiceMessage(arg) {
	console.log('调用sendVoiceMessage方法');
	if (!helper.engineInited()) {
		return;
	}
	let { conversationType, targetId, channelId } = arg;
	if (conversationType.length === 0) {
		uni.showToast({
			title: '会话类型为空',
			icon: 'error'
		});
		console.log('conversationType为空');
		return;
	}
	if (targetId.length === 0) {
		uni.showToast({
			title: '会话Id为空',
			icon: 'error'
		});
		console.log('targetId为空');
		return;
	}

	let recorderManager = uni.getRecorderManager();
	/**
	 * 目前仅支持aac格式
	 * format：录制格式
	 * duration：录制时长
	 */
	let recordOptions = {
		format: 'aac',
		duration: 5000
	};
	recorderManager.start(recordOptions);
	uni.showActionSheet({
		title: '正在录音,5秒后自动停止',
		itemList: ['确定'],
		success: function(res) {
			console.log('点击确定按钮');
			// recorderManager.stop();
		},
		fail: function(res) {
			console.log(res.errMsg);
		}
	});

	recorderManager.onStop(async function(res) {
		console.log('录音结果：res---', res)
		// let innerAudioContext = uni.createInnerAudioContext();
		// console.log('播放录音');
		// innerAudioContext.src = res.tempFilePath;
		// innerAudioContext.play();

		/**
		 * 1.前面录音设置的时长5s，所以这里最后一个参数duration：音频时长5秒
		 * 2.请开发者根据自身实际音频文件时长传递参数，单位为 秒，数据类型为 int
		 * 3.local 路径：filePath 需要转换为平台路径
		 */
		let filePath = 'file:///' + plus.io.convertLocalFileSystemURL(res.tempFilePath)
		let message = await helper.RCIMIWEngineInstance.createVoiceMessage(parseInt(conversationType),
			targetId, channelId, filePath, 5)
		console.log('await:message---', message)
		let code = await sendMediaMessage(message);
		console.log('await:code---', code)

		addPrimaryResult({
			title: 'sendVoiceMessage',
			code: code,
		})

	});

	recorderManager.onError(async function(error) {
		console.log('recorderManager-error:', error)
	});
}

export async function sendSightMessage(arg) {
	console.log('调用 sendSightMessage 方法')
	let { conversationType, targetId, channelId, pushContent, pushData } = arg;
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
	if (!helper.engineInited()) {
		return
	}

	uni.chooseVideo({
		count: 1,
		sourceType: ['album', 'camera'],
		success: async (res) => {
			console.log('chooseVideo---', res)

			let duration = parseInt(res.duration)
			let filePath = plus.io.convertLocalFileSystemURL(res.tempFilePath)
			let message = await helper.RCIMIWEngineInstance.createSightMessage(parseInt(
				conversationType), targetId, channelId, filePath, duration)
			console.log('await:message---', message)
			let code = await sendMediaMessage(message);
			console.log('await:code---', code)

			addPrimaryResult({
				title: 'sendSightMessage',
				code: code,
			})
		}
	})
}

export async function sendReferenceMessage(arg) {
	console.log('调用 sendReferenceMessage 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { conversationType, targetId, channelId, referenceMessageId, referenceMessageContent } = arg;
	if (conversationType.length === 0) {
		uni.showToast({
			title: '会话类型为空',
			icon: 'error'
		});
		console.log('conversationType为空');
		return;
	}
	if (targetId.length === 0) {
		uni.showToast({
			title: '会话Id为空',
			icon: 'error'
		});
		console.log('targetId为空');
		return
	}
	if (referenceMessageId.length === 0) {
		uni.showToast({
			title: '消息Id为空',
			icon: 'error'
		});
		console.log('referenceMessageId为空');
		return;
	}
	if (referenceMessageContent.length === 0) {
		uni.showToast({
			title: '引用文本为空',
			icon: 'error'
		});
		console.log('referenceMessageContent为空');
		return;
	}

	let result = await getMessageById(parseInt(referenceMessageId));
	console.log('getMessageById-result---', result);
	let refMessage = result.t;
	if (refMessage == null) {
		uni.showToast({
			title: '未查询到引用的message',
			icon: 'error'
		});
		console.log('未查询到引用的message');
		return;
	}

	let message = await helper.RCIMIWEngineInstance.createReferenceMessage(parseInt(conversationType), targetId,
		channelId, refMessage, referenceMessageContent)
	console.log('await:message---', message);
	let code = await sendMessage(message);
	console.log('await:code---', code);

	addPrimaryResult({
		title: 'sendReferenceMessage',
		code: code,
	});
}

export async function sendGIFMessage(arg) {
	console.log('调用sendGIFMessage方法');
	if (!helper.engineInited()) {
		return
	}
	let { conversationType, targetId, channelId, referenceMessageId, referenceMessageContent, pushContent,
		pushData } = arg;
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

	uni.chooseImage({
		count: 1,
		sourceType: ['album'],
		success: async (res) => {
			console.log('chooseImage-res---', res)
			if (res.tempFilePaths.length < 0) return
			let filePath = 'file:///' + plus.io.convertLocalFileSystemURL(res.tempFilePaths[0])
			if (!filePath.endsWith('.gif') && !filePath.endsWith('.GIF')) {
				uni.showToast({
					title: '非GIF格式',
					icon: 'error'
				});
				console.log('非GIF格式')
				return
			}
			let message = await helper.RCIMIWEngineInstance.createGIFMessage(parseInt(conversationType),
				targetId, channelId, filePath)
			console.log('await:message---', message)
			let code = await sendMediaMessage(message);
			console.log('await:code---', code)

			addPrimaryResult({
				title: 'sendGIFMessage',
				code: code,
			})
		}
	});
}

export async function sendLocationMessage(arg) {
	console.log('调用 sendLocationMessage 方法');
	if (!helper.engineInited()) {
		return
	}
	let { conversationType, targetId, channelId, longitude, latitude, poiName, pushContent, pushData } = arg;
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

	uni.chooseImage({
		count: 1,
		sourceType: ['album'],
		success: async (res) => {
			console.log('chooseImage-res---', res)
			if (res.tempFilePaths.length < 0) return
			let filePath = 'file:///' + plus.io.convertLocalFileSystemURL(res.tempFilePaths[0])

			let message = await helper.RCIMIWEngineInstance.createLocationMessage(parseInt(
				conversationType), targetId, channelId, parseFloat(longitude), parseFloat(
				latitude), poiName, filePath)
			console.log('await:message---', message)
			let code = await sendMessage(message);
			console.log('await:code---', code)

			addPrimaryResult({
				title: 'sendLocationMessage',
				code: code,
			})
		}
	})

}

export async function sendCustomMessage(arg) {
	console.log('调用sendCustomMessage方法');
	if (!helper.engineInited()) {
		return
	}
	let { conversationType, targetId, channelId, policy, messageIdentifier, keys, values, pushContent, pushData } =
	arg;

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

	let fields = {}
	keys = keys.split(',')
	values = values.split(',')
	//使用for循环编辑数组，向jsonObject中赋值
	for (let i = 0; i < keys.length; i++) {
		fields[keys[i]] = values[i];
	}
	console.log('fields---', fields)
	let message = await helper.RCIMIWEngineInstance.createCustomMessage(parseInt(conversationType), targetId,
		channelId, parseInt(policy), messageIdentifier, fields)
	console.log('await:message---', message)
	let code = await sendMessage(message);
	console.log('await:code---', code)

	addPrimaryResult({
		title: 'sendCustomMessage',
		code: code,
	})
}

export async function sendNativeCustomMessage(arg) {
	console.log('调用sendCustomMessage方法');
	if (!helper.engineInited()) {
		return
	}
	let { conversationType, targetId, channelId, messageIdentifier, fields, searchableWords } =
	arg;

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
	if (messageIdentifier.length === 0) {
		uni.showToast({
			title: '消息类型名为空',
			icon: 'error'
		});
		console.log('messageIdentifier 为空')
		return
	}
	if (fields.length === 0) {
		uni.showToast({
			title: 'fields 内容为空',
			icon: 'error'
		});
		console.log('fields 为空')
		return
	}
	fields = JSON.parse(fields)
	
	let searchableWordsArr = []; 
	if (searchableWords.length > 0) {
		searchableWordsArr = searchableWords.split(',');
	}
	let message = await helper.RCIMIWEngineInstance.createNativeCustomMessage(parseInt(conversationType), targetId,
		channelId, messageIdentifier, fields);
	message.searchableWords = searchableWordsArr;
	
	let code = await sendMessage(message);

	addPrimaryResult({
		title: 'sendNativeCustomMessage',
		code: code,
	})
}

export async function sendNativeCustomMediaMessage(arg) {
	console.log('调用sendCustomMessage方法');
	if (!helper.engineInited()) {
		return
	}
	let { conversationType, targetId, channelId, messageIdentifier, fields, searchableWords } =
	arg;

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
	if (messageIdentifier.length === 0) {
		uni.showToast({
			title: '消息类型名为空',
			icon: 'error'
		});
		console.log('messageIdentifier 为空')
		return
	}
	if (fields.length === 0) {
		uni.showToast({
			title: 'json 内容为空',
			icon: 'error'
		});
		console.log('fields 为空')
		return
	}
	fields = JSON.parse(fields)
	
	let searchableWordsArr = []; 
	if (searchableWords.length > 0) {
		searchableWordsArr = searchableWords.split(',');
	}
	
	uni.chooseImage({
			count: 1,
			sourceType: ['album'],
			success: async (res) => {
				console.log('chooseImage-res---', res)
				if (res.tempFilePaths.length < 0) return
				let filePath = 'file:///' + plus.io.convertLocalFileSystemURL(res.tempFilePaths[0])
				let message = await helper.RCIMIWEngineInstance.createNativeCustomMediaMessage(parseInt(conversationType), targetId,
					channelId, messageIdentifier, filePath, fields);
				message.searchableWords = searchableWordsArr;
				
				let code = await sendMediaMessage(message);
				addPrimaryResult({
					title: 'sendNativeCustomMediaMessage',
					code: code,
				})
			}
		})
}

export async function cancelSendingMediaMessage(arg) {
	console.log('调用 cancelSendMediaMessage 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { messageId } = arg;
	if (messageId.length === 0) {
		uni.showToast({
			title: '消息 Id 为空',
			icon: 'error'
		});
		console.log('messageId 为空');
		return;
	}

	let result = await getMessageById(parseInt(messageId))
	console.log('getMessageById-result---', result);
	let resMessage = result.t
	if (resMessage == null) {
		uni.showToast({
			title: '未查询到 message',
			icon: 'error'
		});
		console.log('未查询到 message');
		return;
	}
	let callback = {
		onCancelSendingMediaMessageCalled: res => {
			addPrimaryResult({
				title: 'cancelSendingMediaMessage - onCancelSendingMediaMessageCalled',
				data: res,
			});
		}
	};
	let code = await helper.RCIMIWEngineInstance.cancelSendingMediaMessage(resMessage, callback);
	console.log('await:code---', code);

	addPrimaryResult({
		title: 'cancelSendingMediaMessage',
		code: code,
	})
}

export async function downloadMediaMessage(arg) {
	console.log('调用downloadMediaMessage方法');
	if (!helper.engineInited()) {
		return;
	}
	let { messageId } = arg;
	if (messageId.length === 0) {
		uni.showToast({
			title: '消息Id为空',
			icon: 'error'
		});
		console.log('messageId为空')
		return
	}

	let result = await getMessageById(parseInt(messageId));
	console.log('getMessageById-result---', result)
	let resMessage = result.t
	if (resMessage == null) {
		uni.showToast({
			title: '未查询到 message',
			icon: 'error'
		});
		console.log('未查询到 message')
		return
	}
	let callback = {
		onMediaMessageDownloading: res => {
			addPrimaryResult({
				title: 'downloadMediaMessage - onMediaMessageDownloading',
				data: res,
			})
		},
		onDownloadingMediaMessageCanceled: res => {
			addPrimaryResult({
				title: 'downloadMediaMessage - onDownloadingMediaMessageCanceled',
				data: res,
			})
		}
	};
	let code = await helper.RCIMIWEngineInstance.downloadMediaMessage(resMessage);
	console.log('await:code---', code);

	addPrimaryResult({
		title: 'downloadMediaMessage',
		code: code,
	})
}

export async function cancelDownloadingMediaMessage(arg) {
	console.log('调用 cancelDownloadingMediaMessage 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { messageId } = arg;
	if (messageId.length === 0) {
		uni.showToast({
			title: '消息 Id 为空',
			icon: 'error'
		});
		console.log('messageId 为空')
		return
	}
	let result = await getMessageById(parseInt(messageId))
	console.log('getMessageById-result---', result)
	let resMessage = result.t
	if (resMessage == null) {
		uni.showToast({
			title: '未查询到 message',
			icon: 'error'
		});
		console.log('未查询到 message')
		return
	}
	let callback = {
		onCancelDownloadingMediaMessageCalled: res => {
			addPrimaryResult({
				title: 'cancelDownloadingMediaMessage - onCancelDownloadingMediaMessageCalled',
				data: res,
			})
		}
	};
	let code = await helper.RCIMIWEngineInstance.cancelDownloadingMediaMessage(resMessage)
	console.log('await:code---', code)

	addPrimaryResult({
		title: 'cancelDownloadingMediaMessage',
		code: code,
	})
}

export async function insertMessage(arg) {
	console.log('调用 insertMessage 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { conversationType, targetId } = arg;
	if (conversationType.length === 0) {
		uni.showToast({
			title: '会话类型为空',
			icon: 'error'
		});
		console.log('conversationType 为空')
		return
	}
	if (targetId.length === 0) {
		uni.showToast({
			title: '会话 Id 为空',
			icon: 'error'
		});
		console.log('targetId 为空')
		return
	}

	let content = '这是一条插入的消息'
	let message = await helper.RCIMIWEngineInstance.createTextMessage(parseInt(conversationType), targetId, '',
		content)
	console.log('await:message---', message)
	let callback = {
		onMessageInserted: res => {
			addPrimaryResult({
				title: 'insertMessage - onMessageInserted',
				data: res,
			});
		}
	};
	let code = await helper.RCIMIWEngineInstance.insertMessage(message, callback);
	addPrimaryResult({
		title: 'insertMessage',
		code: code,
	});
}

export async function insertMessages(arg) {
	console.log('调用 insertMessages 方法', arg);
	if (!helper.engineInited()) {
		return;
	}
	let { conversationType, targetId } = arg;
	if (conversationType.length === 0) {
		uni.showToast({
			title: '会话类型为空',
			icon: 'error'
		});
		console.log('conversationType为空');
		return;
	}
	if (targetId.length === 0) {
		uni.showToast({
			title: '会话Id为空',
			icon: 'error'
		});
		console.log('targetId为空');
		return;
	}

	let content1 = '这是一条插入的消息-01';
	let message1 = await helper.RCIMIWEngineInstance.createTextMessage(parseInt(conversationType), targetId, '',
		content1);
	let content2 = '这是一条插入的消息-02';
	let message2 = await helper.RCIMIWEngineInstance.createTextMessage(parseInt(conversationType), targetId, '',
		content2);
	console.log('await:message---', message1, message2);
	let messages = [];
	messages.push(message1);
	messages.push(message2);
	console.log('messages---', messages);
	let callback = {
		onMessagesInserted: res => {
			addPrimaryResult({
				title: 'insertMessages - onMessagesInserted',
				data: res,
			});
		}
	};
	let code = await helper.RCIMIWEngineInstance.insertMessages(messages, callback);
	addPrimaryResult({
		title: 'insertMessages',
		code: code,
	});
}

export async function deleteLocalMessage(arg) {
	console.log('调用 deleteLocalMessage 方法', arg);
	if (!helper.engineInited()) {
		return;
	}
	let { messageIds } = arg;
	if (messageIds.length === 0) {
		uni.showToast({
			title: 'messageIds 为空',
			icon: 'error'
		});
		console.log('messageIds 为空');
		return;
	}

	messageIds = messageIds.split(',').map(i => parseInt(i));
	let messages = [];
	for (let i = 0; i < messageIds.length; i++) {
		let result = await getMessageById(messageIds[i]);
		let resMessage = result.t
		if (resMessage != null) {
			messages.push(resMessage);
		}
	}
	if (messages.length == 0) {
		uni.showToast({
			title: '未查询到 message',
			icon: 'error'
		});
		console.log('未查询到 message');
		return;
	}
	console.log('getMessageById-messages---', messages);
	let callback = {
		onLocalMessagesDeleted: res => {
			addPrimaryResult({
				title: 'deleteLocalMessages - onLocalMessagesDeleted',
				data: res,
			});
		}
	};
	let code = await helper.RCIMIWEngineInstance.deleteLocalMessages(messages, callback);
	addPrimaryResult({
		title: 'deleteLocalMessages',
		code: code,
	})
}

export async function deleteMessages(arg) {
	console.log('调用 deleteMessages 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { conversationType, targetId, channelId, messageIds } = arg;
	if (conversationType.length === 0) {
		uni.showToast({
			title: '会话类型为空',
			icon: 'error'
		});
		console.log('conversationType 为空');
		return;
	}
	if (targetId.length === 0) {
		uni.showToast({
			title: '会话 Id 为空',
			icon: 'error'
		});
		console.log('targetId 为空');
		return;
	}
	if (messageIds.length === 0) {
		uni.showToast({
			title: 'messageIds 为空',
			icon: 'error'
		});
		console.log('messageIds 为空');
		return;
	}

	messageIds = messageIds.split(',').map(i => parseInt(i));
	let messages = [];
	for (let i = 0; i < messageIds.length; i++) {
		let result = await getMessageById(messageIds[i]);
		let resMessage = result.t;
		if (resMessage != null) {
			messages.push(resMessage);
		}
	}
	if (messages.length == 0) {
		uni.showToast({
			title: '未查询到 message',
			icon: 'error'
		});
		console.log('未查询到 message');
		return;
	}
	console.log('getMessageById-messages---', messages);
	let callback = {
		onMessagesDeleted: res => {
			addPrimaryResult({
				title: 'deleteMessages - onMessagesDeleted',
				data: res,
			});
		}
	};
	let code = await helper.RCIMIWEngineInstance.deleteMessages(parseInt(conversationType), targetId, channelId,
		messages, callback);
	addPrimaryResult({
		title: 'deleteMessages',
		code: code,
	});
}

export async function recallMessage(arg) {
	console.log('调用 recallMessage 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { messageId } = arg;
	if (messageId.length === 0) {
		uni.showToast({
			title: '消息 Id 为空',
			icon: 'error'
		});
		console.log('messageId 为空');
		return;
	}

	let result = await getMessageById(parseInt(messageId));
	console.log('getMessageById-message---', result);
	let resMessage = result.t;
	if (resMessage == null) {
		uni.showToast({
			title: '未查询到 message',
			icon: 'error'
		});
		console.log('未查询到 message');
		return;
	}
	console.log('last-message---', resMessage);
	let callback = {
		onMessageRecalled: res => {
			addPrimaryResult({
				title: 'recallMessage - onMessageRecalled',
				data: res,
			});
		}
	}
	let code = await helper.RCIMIWEngineInstance.recallMessage(resMessage, callback);
	addPrimaryResult({
		title: 'recallMessage',
		code: code,
	});
}

export async function sendGroupReadReceiptRequest(arg) {
	console.log('调用 sendGroupReadReceiptRequest 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { messageId } = arg;
	if (messageId.length === 0) {
		uni.showToast({
			title: '消息 Id 为空',
			icon: 'error'
		});
		console.log('messageId 为空');
		return;
	}

	let result = await getMessageById(parseInt(messageId));
	console.log('getMessageById-result---', result);
	let resMessage = result.t;
	if (resMessage == null) {
		uni.showToast({
			title: '未查询到message',
			icon: 'error'
		});
		console.log('未查询到message');
		return;
	}
	console.log('last-message---', resMessage);
	let callback = {
		onGroupReadReceiptRequestSent: res => {
			addPrimaryResult({
				title: 'sendGroupReadReceiptRequest - onGroupReadReceiptRequestSent',
				data: res,
			});
		}
	};
	let code = await helper.RCIMIWEngineInstance.sendGroupReadReceiptRequest(resMessage, callback);
	addPrimaryResult({
		title: 'sendGroupReadReceiptRequest',
		code: code,
	});
}

export async function sendGroupReadReceiptResponse(arg) {
	console.log('调用 sendGroupReadReceiptResponse 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { targetId, channelId, messageIds } = arg;
	if (targetId.length === 0) {
		uni.showToast({
			title: '会话 Id 为空',
			icon: 'error'
		});
		console.log('targetId 为空');
		return;
	}
	if (messageIds.length === 0) {
		uni.showToast({
			title: '消息 Id 为空',
			icon: 'error'
		});
		console.log('messageIds 为空')
		return
	}

	messageIds = messageIds.split(',').map(i => parseInt(i));
	let messages = [];
	for (let i = 0; i < messageIds.length; i++) {
		let result = await getMessageById(messageIds[i]);
		let resMessage = result.t;
		if (resMessage != null) {
			messages.push(resMessage);
		}
	}
	if (messages.length == 0) {
		uni.showToast({
			title: '未查询到 message',
			icon: 'error'
		});
		console.log('未查询到 message')
		return
	}
	console.log('getMessageById-messages---', messages)
	let callback = {
		onGroupReadReceiptResponseSent: res => {
			addPrimaryResult({
				title: 'sendGroupReadReceiptResponse - onGroupReadReceiptResponseSent',
				data: res,
			});
		}
	};
	let code = await helper.RCIMIWEngineInstance.sendGroupReadReceiptResponse(targetId, channelId, messages,
		callback)
	addPrimaryResult({
		title: 'sendGroupReadReceiptResponse',
		code: code,
	});
}

export async function sendGroupMessageToDesignatedUsers(arg) {
	console.log('调用 sendGroupMessageToDesignatedUsers 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { targetId, channelId, userIds } = arg;
	if (targetId.length === 0) {
		uni.showToast({
			title: '会话 Id 为空',
			icon: 'error'
		});
		console.log('targetId 为空');
		return;
	}
	if (userIds.length === 0) {
		uni.showToast({
			title: '会话 Id 为空',
			icon: 'error'
		});
		console.log('userIds 为空');
		return;
	}

	let content = '这是一条群定向消息';
	let message = await helper.RCIMIWEngineInstance.createTextMessage(2, targetId, channelId, content);
	console.log('await:message---', message);

	userIds = userIds.split(',');
	let callback = {
		onMessageSaved: res => {
			addPrimaryResult({
				title: 'sendGroupMessageToDesignatedUsers - onMessageSaved',
				data: res,
			});
		},
		onMessageSent: res => {
			addPrimaryResult({
				title: 'sendGroupMessageToDesignatedUsers - onMessageSent',
				data: res,
			});
		}
	};
	let code = await helper.RCIMIWEngineInstance.sendGroupMessageToDesignatedUsers(message, userIds, callback);
	addPrimaryResult({
		title: 'sendGroupMessageToDesignatedUsers',
		code: code,
	});
}

// ultra_group

export async function modifyUltraGroupMessage(arg) {
	console.log('调用 modifyUltraGroupMessage 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { messageUId } = arg;
	if (messageUId.length === 0) {
		uni.showToast({
			title: 'messageUId 空',
			icon: 'error'
		});
		console.log('messageUId 为空');
		return;
	}

	let content = '这个是超级群修改消息的内容';
	let message = await helper.RCIMIWEngineInstance.createTextMessage(5, 'targetId', 'channelId', content);
	console.log('await:message---', message);
	let callback = {
		onUltraGroupMessageModified: res => {
			addPrimaryResult({
				title: 'modifyUltraGroupMessage - onUltraGroupMessageModified',
				data: res,
			});
		}
	};
	let code = await helper.RCIMIWEngineInstance.modifyUltraGroupMessage(messageUId, message, callback);
	console.log('await:code---', code);

	addPrimaryResult({
		title: 'modifyUltraGroupMessage',
		code: code,
	});
}

export async function recallUltraGroupMessage(arg) {
	console.log('调用 recallUltraGroupMessage 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { messageId, deleteRemote } = arg;
	if (messageId.length === 0) {
		uni.showToast({
			title: 'messageId 为空',
			icon: 'error'
		});
		console.log('messageId为空');
		return;
	}

	let result = await getMessageById(parseInt(messageId));
	console.log('getMessageById-result---', result);
	let resMessage = result.t;
	if (resMessage == null) {
		uni.showToast({
			title: '未查询到 message',
			icon: 'error'
		});
		console.log('未查询到 message');
		return;
	}
	let callback = {
		onUltraGroupMessageRecalled: res => {
			addPrimaryResult({
				title: 'recallUltraGroupMessage - onUltraGroupMessageRecalled',
				data: res,
			});
		}
	};
	let code = await helper.RCIMIWEngineInstance.recallUltraGroupMessage(resMessage, deleteRemote, callback);
	console.log('await:code---', code);

	addPrimaryResult({
		title: 'recallUltraGroupMessage',
		code: code,
	});
}

export async function getBatchRemoteUltraGroupMessages(arg) {
	console.log('调用 getBatchRemoteUltraGroupMessages 方法');
	if (!helper.engineInited()) {
		return;
	}
	let { messageIds } = arg;
	if (messageIds.length === 0) {
		uni.showToast({
			title: 'messageIds为空',
			icon: 'error'
		});
		console.log('messageIds为空');
		return;
	}

	messageIds = messageIds.split(',').map(i => parseInt(i));
	let messageArr = [];
	for (let i = 0; i < messageIds.length; i++) {
		let result = await getMessageById(messageIds[i]);
		let resMessage = result.t;
		if (resMessage) {
			resMessage.groupReadReceiptInfo = null;
			messageArr.push(resMessage);
		}
	}
	console.log('getMessageById-messageArr---', messageArr);
	let callback = {
		onSuccess: res => {
			addPrimaryResult({
				title: 'getBatchRemoteUltraGroupMessages - onSuccess',
				data: res,
			});
		},
		onError: res => {
			addPrimaryResult({
				title: 'getBatchRemoteUltraGroupMessages - onError',
				data: res,
			});
		},
	}
	let code = await helper.RCIMIWEngineInstance.getBatchRemoteUltraGroupMessages(messageArr, callback);
	console.log('await:code---', code);

	addPrimaryResult({
		title: 'getBatchRemoteUltraGroupMessages',
		code: code,
	});
}

async function sendMessage(message) {
	let callback = {
		onMessageSaved: (res) => {
			addPrimaryResult({
				title: 'sendMessage_onMessageSaved',
				data: res,
			});
		},
		onMessageSent: (res) => {
			addPrimaryResult({
				title: 'sendMessage_onMessageSent',
				data: res,
			});
		},
	}
	let code = await helper.RCIMIWEngineInstance.sendMessage(message, callback);
	return code;
}

async function sendMediaMessage(message) {
	let listener = {
		onMediaMessageSaved: (res) => {
			addPrimaryResult({
				title: 'sendMediaMessage_onMediaMessageSaved',
				data: res,
			});
		},
		onMediaMessageSending: (res) => {
			addPrimaryResult({
				title: 'sendMediaMessage_onMediaMessageSending',
				data: res,
			});
		},
		onSendingMediaMessageCanceled: (res) => {
			addPrimaryResult({
				title: 'sendMediaMessage_onSendingMediaMessageCanceled',
				data: res,
			});
		},
		onMediaMessageSent: (res) => {
			addPrimaryResult({
				title: 'sendMediaMessage_onMediaMessageSent',
				data: res,
			});
		},
	};
	let code = await helper.RCIMIWEngineInstance.sendMediaMessage(message, listener);
	return code;
}

async function getMessageById(messageId) {
	return new Promise(async (resolve, reject) => {
		let callback = {
			onSuccess: (res) => {
				resolve(res);
				addPrimaryResult({
					title: 'getMessageById_onSuccess',
					data: res,
				});
			},
			onError: (res) => {
				reject(res);
				addPrimaryResult({
					title: 'getMessageById_onError',
					data: res,
				});
			},
		};
		let code = helper.RCIMIWEngineInstance.getMessageById(messageId, callback);
		if (code != 0) {
			reject(res);
		}
	});
}

export async function registerPushToken(arg) {
	let { pushType, pushToken } = arg;
	let code = await helper.RCIMIWEngineInstance.registerPushToken(parseInt(pushType), pushToken);
	addSuccessResult({
		title: 'registerPushToken',
		data: {
			'result': code
		}
	})
}