import {connect, disconnect} from '../../function/engine_func_auto.js';
import { create, addListener, destroy } from '../../function/engine_func.js';
import Config from '../../config/config.js'

export const _init = {
	name: "初始化引擎", 
	params: [
		{ key: 'appKey', value: Config.appKey, type: 'string', name: '请输入AppKey', placeholder: ''},
		{ key: 'naviServer', value: '', type: 'string', name: '请输入导航地址', placeholder: '非必填'},
		{ key: 'fileServer', value: '', type: 'string', name: '请输入文件地址', placeholder: '非必填'},
		{ key: 'statisticServer', value: '', type: 'string', name: '请输入状态上传地址', placeholder: '非必填'},
		{ key: 'areaCode', value: '', type: 'string', name: '请输入区域码', placeholder: '非必填，默认北京'},
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
	action: create,
}

export const _addListener = {
    name: "\xa0\xa0设置监听\xa0\xa0",
	action: addListener
}

export const _connect = {
	name: "连接",
	params: [
		{ key: 'token', value: Config.token, type: 'string', name: '请输入Token', placeholder: ''},
		{ key: 'timeout', value: '0', type: 'number', name: '请输入超时时间', placeholder: '0为一直重连,非0为最多连接多少秒'},
	],
	action: connect,
}

export const _disconnect = {
	name: "断开连接",
	params: [
		{ key: 'receivePush', value: false, type: 'boolean', name: '断开后是否接收推送'}
	],
	action: disconnect,
}

export const _destroy = {
	name: "销毁引擎",
	action: destroy,
}