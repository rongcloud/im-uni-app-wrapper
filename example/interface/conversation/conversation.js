import { 
    getConversations, 
    getConversation, 
    removeConversation, 
    removeConversations, 
    saveDraftMessage,
    getDraftMessage, 
    clearDraftMessage, 
    changeConversationNotificationLevel, 
    getConversationNotificationLevel, 
    changeConversationTypeNotificationLevel,
    getConversationTypeNotificationLevel,
    getBlockedConversations,
    changeConversationTopStatus,
    getConversationTopStatus,
    getTopConversations,
    syncConversationReadStatus,
    searchConversations,
    getMessageCount,
} from '../../function/engine_func_auto.js';

export const _getConversations = {
    name: "加载某些会话",
    params: [
        { key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
        { key: 'count', value: '', type: 'number', name: '请输入查询数量', placeholder: '0 < 数量 <= 50' },
        { key: 'startTime', value: '', type: 'number', name: '请输入开始时间(时间戳单位:毫秒)', placeholder: '0:查询所有' },
    ],
    action: getConversations,
}

export const _getConversation = {
    name: "加载某个会话",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
    ],
    action: getConversation,
}

export const _removeConversation = {
    name: "移除某个会话",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
    ],
    action: removeConversation,
}

export const _removeConversations = {
    name: "根据会话类型移除会话",
    params: [
        { key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
    ],
    action: removeConversations,
}

export const _saveDraftMessage = {
    name: "保存草稿信息",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
        { key: 'draft', value: '', type: 'string', name: '请输入草稿内容', placeholder: '' },
    ],
    action: saveDraftMessage,
}

export const _getDraftMessage = {
    name: "获取会话中的草稿信息",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
    ],
    action: getDraftMessage,
}

export const _clearDraftMessage = {
    name: "删除指定会话的草稿信息",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
    ],
    action: clearDraftMessage,
}

export const _changeConversationNotificationLevel = {
    name: "设置会话的消息提醒状态",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
        {
            key: 'level', value: '', type: 'number', placeholder: '', name: '请输入提醒状态值:' +
                ' 0:全部消息通知(接收全部消息通知-显示指定关闭免打扰功能)； ' +
                '1:未设置(向上查询群或者APP级别设置,存量数据中0表示未设置)； ' +
                '2:群聊，超级群@所有人或者@成员列表有自己时通知；单聊代表消息不通知； ' +
                '3:群聊，超级群@成员列表有自己时通知，@所有人不通知；单聊代表消息不通知； ' +
                '4:群聊，超级群@所有人通知，其他情况都不通知；单聊代表消息不通知； ' +
                '5:消息通知屏蔽，即不接收消息通知'
        },
    ],
    action: changeConversationNotificationLevel
}

export const _getConversationNotificationLevel = {
    name: "获取会话的消息提醒状态",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
    ],
    action: getConversationNotificationLevel,
}

export const _changeConversationTypeNotificationLevel = {
    name: "设置会话类型的消息提醒状态",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        {
            key: 'level', value: '', type: 'number', placeholder: '', name: '请输入提醒状态值:' +
                ' 0:全部消息通知(接收全部消息通知-显示指定关闭免打扰功能)； ' +
                '1:未设置(向上查询群或者APP级别设置,存量数据中0表示未设置)； ' +
                '2:群聊，超级群@所有人或者@成员列表有自己时通知；单聊代表消息不通知； ' +
                '3:群聊，超级群@成员列表有自己时通知，@所有人不通知；单聊代表消息不通知； ' +
                '4:群聊，超级群@所有人通知，其他情况都不通知；单聊代表消息不通知； ' +
                '5:消息通知屏蔽，即不接收消息通知'
        },
    ],
    action: changeConversationTypeNotificationLevel,
}

export const _getConversationTypeNotificationLevel = {
    name: "获取会话类型的消息提醒状态",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
    ],
    action: getConversationTypeNotificationLevel,
}

export const _getBlockedConversations = {
    name: "获取免打扰的会话列表",
    params: [
        { key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
    ],
    action: getBlockedConversations,
}

export const _changeConversationTopStatus = {
    name: "设置会话置顶状态",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
        { key: 'top', value: true, type: 'boolean', name: '是否置顶' },
    ],
    action: changeConversationTopStatus,
}

export const _getConversationTopStatus = {
    name: "\xa0\xa0获取会话置顶状态\xa0\xa0",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
    ],
    action: getConversationTopStatus,
}

export const _getTopConversations = {
    name: "根据会话类型，获取置顶会话列表",
    params: [
        { key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
    ],
    action: getTopConversations,
}


export const _syncConversationReadStatus = {
    name: "\xa0\xa0同步会话阅读状态\xa0\xa0",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
        { key: 'timestamp', value: null, type: 'number', name: '请输入开始时间(时间戳单位:毫秒)', placeholder: '会话中已读的最后一条消息发送时间' },
    ],
    action: syncConversationReadStatus,
}

export const _searchConversations = {
    name: "根据关键字搜索会话",
    params: [
        { key: 'conversationTypes', value: '', type: 'string', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '多个以英文 , 隔开 eg:1,2' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
        {
            key: 'messageTypes', value: '', type: 'string', name: '请输入查询的消息类型:1:自定义消息；2:文本消息；3:语音；4:图片；' +
                '5:文件；6:小视频；7:GIF图；8:撤回；9:引用；10:命令；11:命令通知', placeholder: '多个以英文 , 隔开 eg:1,2'
        },
        { key: 'keyword', value: '', type: 'string', name: '请输入关键字', placeholder: '' },
    ],
    action: searchConversations,
}

export const _getMessageCount = {
    name: "\xa0\xa0\xa0\xa0获取指定会话的消息总数\xa0\xa0\xa0\xa0",
    params: [
        { key: 'type', value: '', type: 'number', name: '请输入会话类型:1:单聊,2:群聊,3:聊天室,4:系统,5:超级群', placeholder: '' },
        { key: 'targetId', value: '', type: 'string', name: '请输入会话Id', placeholder: '' },
        { key: 'channelId', value: '', type: 'string', name: '请输入频道Id', placeholder: '仅对超级群生效,其他类型无需填写' },
    ],
    action: getMessageCount,
}