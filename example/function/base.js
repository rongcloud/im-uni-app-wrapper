// 链接相关接口
import RCIMIWEngine from "@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMEngine"
import { addSuccessResult, addErrorResult, addWarnResult, addPrimaryResult } from '../util/common.js'
import initListener from './listener.js'
import helper from '../common/helper.js'

export const _initListener = {
	name: "\xa0\xa0设置监听\xa0\xa0",
	action: function() {
		initListener()
		
		addSuccessResult({
			title: '添加事件监听',
		})
	}
}

export const _init = {
	name: "初始化引擎", 
	params: [
		{ key: 'appKey', value: '', type: 'string', name: '请输入AppKey', placeholder: ''},
		{ key: 'naviServer', value: '', type: 'string', name: '请输入导航地址', placeholder: '非必填'},
		{ key: 'fileServer', value: '', type: 'string', name: '请输入文件地址', placeholder: '非必填'},
		{ key: 'statisticServer', value: '', type: 'string', name: '请输入状态上传地址', placeholder: '非必填'},
		{ key: 'kickReconnectDevice', value: true, type: 'boolean', name: '是否踢出其他重连设备'},
		{ key: 'originalImageQuality', value: '', type: 'number', name: '请输入原图压缩比', placeholder: '非必填'},
		{ key: 'originalImageMaxSize', value: '', type: 'number', name: '原图大小限制 配置发送图片时，如果图片大小不超过则发送原图', placeholder: '非必填'},
		{ key: 'originalImageSize', value: '', type: 'number', name: '原图最长边的最大宽度', placeholder: '非必填'},
		{ key: 'thumbnailQuality', value: '', type: 'number', name: '缩略图压缩比例', placeholder: '非必填'},
		{ key: 'thumbnailMaxSize', value: '', type: 'number', name: '缩略图压缩宽、高', placeholder: '非必填'},
		{ key: 'thumbnailMinSize', value: '', type: 'number', name: '缩略图压缩最小宽、高', placeholder: '非必填'},
		{ key: 'sightCompressWidth', value: '', type: 'number', name: '小视频压缩宽度,建议使用16的倍数', placeholder: '非必填'},
		{ key: 'sightCompressHeight', value: '', type: 'number', name: '小视频压缩高度，建议使用16的倍数', placeholder: '非必填'},
		{ key: 'locationThumbnailQuality', value: '', type: 'number', name: '位置消息缩略图压缩比例', placeholder: '非必填'},
		{ key: 'locationThumbnailWidth', value: '', type: 'number', name: '位置消息缩略图高度', placeholder: '非必填'},
		{ key: 'locationThumbnailHeight', value: '', type: 'number', name: '位置消息缩略图宽度', placeholder: '非必填'},
	],
	action: function({appKey,naviServer,fileServer,statisticServer,kickReconnectDevice,originalImageQuality,originalImageMaxSize,
						originalImageSize,thumbnailQuality,thumbnailMaxSize,thumbnailMinSize,sightCompressWidth,sightCompressHeight,
						locationThumbnailQuality,locationThumbnailWidth,locationThumbnailHeight}) {
		console.log('调用初始化方法',appKey)
		if (appKey.length === 0) {
			uni.showToast({
				title: 'AppKey为空',
				icon: 'error'
			});
			console.log('appKey为空')
			return
		}
		// if (naviServer.length === 0) {
		// 	naviServer = ''
		// }
		const options = {
			naviServer: naviServer,
			fileServer: fileServer,
			statisticServer: statisticServer,
			kickReconnectDevice: kickReconnectDevice,
			compressOptions:{
				originalImageQuality: parseInt(originalImageQuality),
				originalImageSize: parseInt(originalImageSize),
				originalImageMaxSize: parseInt(originalImageMaxSize),
				thumbnailQuality: parseInt(thumbnailQuality),
				thumbnailMaxSize: parseInt(thumbnailMaxSize),
				thumbnailMinSize: parseInt(thumbnailMinSize),
				sightCompressWidth: parseInt(sightCompressWidth),
				sightCompressHeight: parseInt(sightCompressHeight),
				locationThumbnailQuality: parseInt(locationThumbnailQuality),
				locationThumbnailWidth: parseInt(locationThumbnailWidth),
				locationThumbnailHeight: parseInt(locationThumbnailHeight),
			}
		}
		RCIMIWEngine.create(appKey,options).then((res) => {
				console.log('初始化引擎res---', res)
				helper.RCIMIWEngineInstance = res;
			})
			
		addSuccessResult({
			title: 'create',
		})
	}
}

export const _connect = {
	name: "连接",
	params: [
		{ key: 'token', value: '', type: 'string', name: '请输入Token', placeholder: ''},
		{ key: 'timeout', value: '', type: 'number', name: '请输入超时时间', placeholder: '0为一直重连,非0为最多连接多少秒'},
	],
	action: async function({token,timeout}) {
		console.log('调用连接方法', token, timeout)
		if (token.length === 0) {
			uni.showToast({
				title: 'token为空',
				icon: 'error'
			});
			console.log('token为空')
			return
		}
		if (timeout.length === 0) {
			uni.showToast({
				title: 'timeout为空',
				icon: 'error'
			});
			console.log('timeout为空')
			return
		}
		if (!helper.engineInited()){
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.connect(token,parseInt(timeout))
		addSuccessResult({
			title: 'connect',
			code: code
		})
	}
}

export const _disconnect = {
	name: "断开连接",
	params: [
		{ key: 'receivePush', value: false, type: 'boolean', name: '断开后是否接收推送'}
	],
	action: async function({receivePush}) {
		console.log('调用断开连接方法')
		if (!helper.engineInited()) {
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.disconnect(receivePush)
		addPrimaryResult({
			title: 'disconnect',
			code: code
		})
	}
}

export const _destroy = {
	name: "销毁引擎",
	action: async function() {
		console.log('调用销毁引擎方法')
		if (!helper.engineInited()) {
			return
		}
		
		let code = await helper.RCIMIWEngineInstance.destroy()
		addSuccessResult({
			title: 'destroy',
			code: code
		})
	}
}

