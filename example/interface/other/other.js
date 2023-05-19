import {
    addToBlacklist,
    removeFromBlacklist,
    getBlacklistStatus,
    getBlacklist,
    changeNotificationQuietHours,
    removeNotificationQuietHours,
    getNotificationQuietHours,
    changePushContentShowStatus,
    changePushLanguage,
    changePushReceiveStatus,
    changeLogLevel,
    getDeltaTime,
} from '../../function/engine_func_auto.js';

export const _addToBlacklist = {
    name: "将某个用户加入黑名单",
    params: [
        { key: 'userId', value: '', type: 'string', name: '请输入用户Id', placeholder: '' },
    ],
    action: addToBlacklist,
}

export const _removeFromBlacklist = {
    name: "将某个用户从黑名单中移出",
    params: [
        { key: 'userId', value: '', type: 'string', name: '请输入用户Id', placeholder: '' },
    ],
    action: removeFromBlacklist,
}

export const _getBlacklistStatus = {
    name: "获取某用户是否在黑名单中",
    params: [
        { key: 'userId', value: '', type: 'string', name: '请输入用户Id(返回状态status：0：未知；1:在黑名单；2:不在黑名单)', placeholder: '' },
    ],
    action: getBlacklistStatus,
}

export const _getBlacklist = {
    name: "获取当前用户设置的黑名单列表",
    action: getBlacklist,
}

export const _changeNotificationQuietHours = {
    name: "屏蔽某个时间段的消息提醒",
    params: [
        { key: 'startTime', value: '', type: 'string', name: '请输入开始时间', placeholder: '格式为 HH:MM:SS' },
        { key: 'spanMinutes', value: '', type: 'string', name: '请输入需要消息免打扰分钟数', placeholder: '0 < 分钟数 < 1440' },
        { key: 'level', value: '', type: 'string', name: '请输入消息通知级别:0:未设置；1:群仅@消息通知；2:屏蔽所有', placeholder: '' },
    ],
    action: changeNotificationQuietHours,
}

export const _removeNotificationQuietHours = {
    name: "删除已设置的全局时间段消息提醒屏蔽",
    action: removeNotificationQuietHours,
}

export const _getNotificationQuietHours = {
    name: "查询已设置的时间段消息提醒屏蔽",
    action: getNotificationQuietHours,
}

export const _changePushContentShowStatus = {
    name: "设置是否显示远程推送内容详情",
    params: [
        { key: 'showContent', value: true, type: 'boolean', name: '是否显示远程推送内容' },
    ],
    action: changePushContentShowStatus,
}

export const _changePushLanguage = {
    name: "修改推送语言",
    params: [
        { key: 'language', value: '', type: 'string', name: '请输入推送语言："zh_cn"：中文；"en_us"：英文；"ar_sa"：阿拉伯文', placeholder: '' },
    ],
    action: changePushLanguage,
}

export const _changePushReceiveStatus = {
    name: "设置是否接收远程推送",
    params: [
        { key: 'receive', value: true, type: 'boolean', name: '是否接收远程推送' },
    ],
    action: changePushReceiveStatus,
}

export const _changeLogLevel = {
    name: "设置日志级别",
    params: [
        { key: 'level', value: '', type: 'number', name: '请输入日志级别:0:不输出日志；1:只输出错误日志；2:错误和警告；3:错误、警告和一般日志；4:错误、警告、一般和debug；5:输出所有日志', placeholder: '' },
    ],
    action: changeLogLevel,
}

export const _getDeltaTime = {
	name: "获取服务器时间差",
	params:[],
	action: getDeltaTime,
}