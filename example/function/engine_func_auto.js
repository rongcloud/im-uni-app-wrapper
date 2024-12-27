import RCIMIWEngine from '@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMEngine';
import { addSuccessResult, addErrorResult, addWarnResult, addPrimaryResult } from '../util/common.js';
import initListener from './listener.js';
import helper from '../common/helper.js';
import config from '../config/config.js';

/*
//fun_registerNativeCustomMessage_call
let code = await engine.registerNativeCustomMessage(messageIdentifier, persistentFlag);
//fun_registerNativeCustomMessage_call
*/
export async function registerNativeCustomMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messageIdentifier.length === 0) {
            uni.showToast({
                title: 'messageIdentifier 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.persistentFlag.length === 0) {
            uni.showToast({
                title: 'persistentFlag 为空',
                icon: 'error',
            });
            return;
        }
        let messageIdentifier = arg.messageIdentifier;
        let persistentFlag = parseInt(arg.persistentFlag);
        let res = await helper.RCIMIWEngineInstance.registerNativeCustomMessage(messageIdentifier, persistentFlag);

        addPrimaryResult({
            title: 'registerNativeCustomMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_registerNativeCustomMediaMessage_call
let code = await engine.registerNativeCustomMediaMessage(messageIdentifier, persistentFlag);
//fun_registerNativeCustomMediaMessage_call
*/
export async function registerNativeCustomMediaMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messageIdentifier.length === 0) {
            uni.showToast({
                title: 'messageIdentifier 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.persistentFlag.length === 0) {
            uni.showToast({
                title: 'persistentFlag 为空',
                icon: 'error',
            });
            return;
        }
        let messageIdentifier = arg.messageIdentifier;
        let persistentFlag = parseInt(arg.persistentFlag);
        let res = await helper.RCIMIWEngineInstance.registerNativeCustomMediaMessage(messageIdentifier, persistentFlag);

        addPrimaryResult({
            title: 'registerNativeCustomMediaMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_connect_call
let callback = {
onDatabaseOpened:(res) => {
    //...
},
onConnected:(res) => {
    //...
}};
let code = await engine.connect(token, timeout, callback);
//fun_connect_call
*/
export async function connect(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.token.length === 0) {
            uni.showToast({
                title: 'token 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timeout.length === 0) {
            uni.showToast({
                title: 'timeout 为空',
                icon: 'error',
            });
            return;
        }
        let token = arg.token;
        let timeout = parseInt(arg.timeout);
        let callback = {
            onDatabaseOpened: (res) => {
                addPrimaryResult({
                    title: 'connect_onDatabaseOpened',
                    data: res,
                });
            },
            onConnected: (res) => {
                addPrimaryResult({
                    title: 'connect_onConnected',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.connect(token, timeout, callback);

        addPrimaryResult({
            title: 'connect',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_disconnect_call
let code = await engine.disconnect(receivePush);
//fun_disconnect_call
*/
export async function disconnect(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.receivePush.length === 0) {
            uni.showToast({
                title: 'receivePush 为空',
                icon: 'error',
            });
            return;
        }
        let receivePush = arg.receivePush;
        let res = await helper.RCIMIWEngineInstance.disconnect(receivePush);

        addPrimaryResult({
            title: 'disconnect',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_createTextMessage_call
let code = await engine.createTextMessage(type, targetId, channelId, text);
//fun_createTextMessage_call
*/
/*
//fun_createImageMessage_call
let code = await engine.createImageMessage(type, targetId, channelId, path);
//fun_createImageMessage_call
*/
/*
//fun_createFileMessage_call
let code = await engine.createFileMessage(type, targetId, channelId, path);
//fun_createFileMessage_call
*/
/*
//fun_createSightMessage_call
let code = await engine.createSightMessage(type, targetId, channelId, path, duration);
//fun_createSightMessage_call
*/
/*
//fun_createVoiceMessage_call
let code = await engine.createVoiceMessage(type, targetId, channelId, path, duration);
//fun_createVoiceMessage_call
*/
/*
//fun_createReferenceMessage_call
let code = await engine.createReferenceMessage(type, targetId, channelId, referenceMessage, text);
//fun_createReferenceMessage_call
*/
/*
//fun_createGIFMessage_call
let code = await engine.createGIFMessage(type, targetId, channelId, path);
//fun_createGIFMessage_call
*/
/*
//fun_createCustomMessage_call
let code = await engine.createCustomMessage(type, targetId, channelId, policy, messageIdentifier, fields);
//fun_createCustomMessage_call
*/
/*
//fun_createLocationMessage_call
let code = await engine.createLocationMessage(type, targetId, channelId, longitude, latitude, poiName, thumbnailPath);
//fun_createLocationMessage_call
*/
/*
//fun_createNativeCustomMessage_call
let code = await engine.createNativeCustomMessage(type, targetId, channelId, messageIdentifier, fields);
//fun_createNativeCustomMessage_call
*/
export async function createNativeCustomMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.messageIdentifier.length === 0) {
            uni.showToast({
                title: 'messageIdentifier 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keys.length === 0) {
            uni.showToast({ title: 'keys 为空', icon: 'error' });
            return;
        }
        if (arg.values.length === 0) {
            uni.showToast({ title: 'values 为空', icon: 'error' });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let messageIdentifier = arg.messageIdentifier;

        let fields = {};
        let keys = arg.keys.split(',');
        let values = arg.values.split(',');
        for (let i = 0; i < keys.length; i++) {
            fields[keys[i]] = values[i];
        }
        let res = await helper.RCIMIWEngineInstance.createNativeCustomMessage(
            type,
            targetId,
            channelId,
            messageIdentifier,
            fields,
        );

        addPrimaryResult({
            title: 'createNativeCustomMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_createNativeCustomMediaMessage_call
let code = await engine.createNativeCustomMediaMessage(type, targetId, channelId, messageIdentifier, path, fields);
//fun_createNativeCustomMediaMessage_call
*/
export async function createNativeCustomMediaMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.messageIdentifier.length === 0) {
            uni.showToast({
                title: 'messageIdentifier 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.path.length === 0) {
            uni.showToast({
                title: 'path 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keys.length === 0) {
            uni.showToast({ title: 'keys 为空', icon: 'error' });
            return;
        }
        if (arg.values.length === 0) {
            uni.showToast({ title: 'values 为空', icon: 'error' });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let messageIdentifier = arg.messageIdentifier;
        let path = arg.path;

        let fields = {};
        let keys = arg.keys.split(',');
        let values = arg.values.split(',');
        for (let i = 0; i < keys.length; i++) {
            fields[keys[i]] = values[i];
        }
        let res = await helper.RCIMIWEngineInstance.createNativeCustomMediaMessage(
            type,
            targetId,
            channelId,
            messageIdentifier,
            path,
            fields,
        );

        addPrimaryResult({
            title: 'createNativeCustomMediaMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_sendMessage_call
let callback = {
onMessageSaved:(res) => {
    //...
},
onMessageSent:(res) => {
    //...
}};
let code = await engine.sendMessage(message, callback);
//fun_sendMessage_call
*/
/*
//fun_sendMediaMessage_call
let listener = {
onMediaMessageSaved:(res) => {
    //...
},
onMediaMessageSending:(res) => {
    //...
},
onSendingMediaMessageCanceled:(res) => {
    //...
},
onMediaMessageSent:(res) => {
    //...
}};
let code = await engine.sendMediaMessage(message, listener);
//fun_sendMediaMessage_call
*/
/*
//fun_cancelSendingMediaMessage_call
let callback = {
onCancelSendingMediaMessageCalled:(res) => {
    //...
}};
let code = await engine.cancelSendingMediaMessage(message, callback);
//fun_cancelSendingMediaMessage_call
*/
/*
//fun_downloadMediaMessage_call
let listener = {
onMediaMessageDownloading:(res) => {
    //...
},
onDownloadingMediaMessageCanceled:(res) => {
    //...
},
onMediaMessageDownloaded:(res) => {
    //...
}};
let code = await engine.downloadMediaMessage(message, listener);
//fun_downloadMediaMessage_call
*/
/*
//fun_cancelDownloadingMediaMessage_call
let callback = {
onCancelDownloadingMediaMessageCalled:(res) => {
    //...
}};
let code = await engine.cancelDownloadingMediaMessage(message, callback);
//fun_cancelDownloadingMediaMessage_call
*/
/*
//fun_loadConversation_call
let code = await engine.loadConversation(type, targetId, channelId);
//fun_loadConversation_call
*/
export async function loadConversation(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadConversation(type, targetId, channelId);

        addPrimaryResult({
            title: 'loadConversation',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getConversation_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getConversation(type, targetId, channelId, callback);
//fun_getConversation_call
*/
export async function getConversation(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getConversation_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getConversation_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getConversation(type, targetId, channelId, callback);

        addPrimaryResult({
            title: 'getConversation',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadConversations_call
let code = await engine.loadConversations(conversationTypes, channelId, startTime, count);
//fun_loadConversations_call
*/
export async function loadConversations(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.startTime.length === 0) {
            uni.showToast({
                title: 'startTime 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.count.length === 0) {
            uni.showToast({
                title: 'count 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let channelId = arg.channelId;
        let startTime = parseInt(arg.startTime);
        let count = parseInt(arg.count);
        let res = await helper.RCIMIWEngineInstance.loadConversations(conversationTypes, channelId, startTime, count);

        addPrimaryResult({
            title: 'loadConversations',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getConversations_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getConversations(conversationTypes, channelId, startTime, count, callback);
//fun_getConversations_call
*/
export async function getConversations(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.startTime.length === 0) {
            uni.showToast({
                title: 'startTime 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.count.length === 0) {
            uni.showToast({
                title: 'count 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let channelId = arg.channelId;
        let startTime = parseInt(arg.startTime);
        let count = parseInt(arg.count);
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getConversations_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getConversations_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getConversations(
            conversationTypes,
            channelId,
            startTime,
            count,
            callback,
        );

        addPrimaryResult({
            title: 'getConversations',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUnreadConversations_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUnreadConversations(conversationTypes, callback);
//fun_getUnreadConversations_call
*/
export async function getUnreadConversations(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUnreadConversations_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUnreadConversations_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUnreadConversations(conversationTypes, callback);

        addPrimaryResult({
            title: 'getUnreadConversations',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeConversation_call
let callback = {
onConversationRemoved:(res) => {
    //...
}};
let code = await engine.removeConversation(type, targetId, channelId, callback);
//fun_removeConversation_call
*/
export async function removeConversation(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onConversationRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeConversation_onConversationRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeConversation(type, targetId, channelId, callback);

        addPrimaryResult({
            title: 'removeConversation',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeConversations_call
let callback = {
onConversationsRemoved:(res) => {
    //...
}};
let code = await engine.removeConversations(conversationTypes, channelId, callback);
//fun_removeConversations_call
*/
export async function removeConversations(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let channelId = arg.channelId;
        let callback = {
            onConversationsRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeConversations_onConversationsRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeConversations(conversationTypes, channelId, callback);

        addPrimaryResult({
            title: 'removeConversations',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadUnreadCount_call
let code = await engine.loadUnreadCount(type, targetId, channelId);
//fun_loadUnreadCount_call
*/
export async function loadUnreadCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadUnreadCount(type, targetId, channelId);

        addPrimaryResult({
            title: 'loadUnreadCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUnreadCount_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUnreadCount(type, targetId, channelId, callback);
//fun_getUnreadCount_call
*/
export async function getUnreadCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUnreadCount_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUnreadCount_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUnreadCount(type, targetId, channelId, callback);

        addPrimaryResult({
            title: 'getUnreadCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadTotalUnreadCount_call
let code = await engine.loadTotalUnreadCount(channelId);
//fun_loadTotalUnreadCount_call
*/
export async function loadTotalUnreadCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadTotalUnreadCount(channelId);

        addPrimaryResult({
            title: 'loadTotalUnreadCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getTotalUnreadCount_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getTotalUnreadCount(channelId, callback);
//fun_getTotalUnreadCount_call
*/
export async function getTotalUnreadCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getTotalUnreadCount_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getTotalUnreadCount_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getTotalUnreadCount(channelId, callback);

        addPrimaryResult({
            title: 'getTotalUnreadCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadUnreadMentionedCount_call
let code = await engine.loadUnreadMentionedCount(type, targetId, channelId);
//fun_loadUnreadMentionedCount_call
*/
export async function loadUnreadMentionedCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadUnreadMentionedCount(type, targetId, channelId);

        addPrimaryResult({
            title: 'loadUnreadMentionedCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUnreadMentionedCount_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUnreadMentionedCount(type, targetId, channelId, callback);
//fun_getUnreadMentionedCount_call
*/
export async function getUnreadMentionedCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUnreadMentionedCount_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUnreadMentionedCount_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUnreadMentionedCount(type, targetId, channelId, callback);

        addPrimaryResult({
            title: 'getUnreadMentionedCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadUltraGroupAllUnreadCount_call
let code = await engine.loadUltraGroupAllUnreadCount();
//fun_loadUltraGroupAllUnreadCount_call
*/
export async function loadUltraGroupAllUnreadCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let res = await helper.RCIMIWEngineInstance.loadUltraGroupAllUnreadCount();

        addPrimaryResult({
            title: 'loadUltraGroupAllUnreadCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUltraGroupAllUnreadCount_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUltraGroupAllUnreadCount(callback);
//fun_getUltraGroupAllUnreadCount_call
*/
export async function getUltraGroupAllUnreadCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupAllUnreadCount_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupAllUnreadCount_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUltraGroupAllUnreadCount(callback);

        addPrimaryResult({
            title: 'getUltraGroupAllUnreadCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadUltraGroupAllUnreadMentionedCount_call
let code = await engine.loadUltraGroupAllUnreadMentionedCount();
//fun_loadUltraGroupAllUnreadMentionedCount_call
*/
export async function loadUltraGroupAllUnreadMentionedCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let res = await helper.RCIMIWEngineInstance.loadUltraGroupAllUnreadMentionedCount();

        addPrimaryResult({
            title: 'loadUltraGroupAllUnreadMentionedCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUltraGroupAllUnreadMentionedCount_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUltraGroupAllUnreadMentionedCount(callback);
//fun_getUltraGroupAllUnreadMentionedCount_call
*/
export async function getUltraGroupAllUnreadMentionedCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupAllUnreadMentionedCount_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupAllUnreadMentionedCount_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUltraGroupAllUnreadMentionedCount(callback);

        addPrimaryResult({
            title: 'getUltraGroupAllUnreadMentionedCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadUltraGroupUnreadCount_call
let code = await engine.loadUltraGroupUnreadCount(targetId);
//fun_loadUltraGroupUnreadCount_call
*/
export async function loadUltraGroupUnreadCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let res = await helper.RCIMIWEngineInstance.loadUltraGroupUnreadCount(targetId);

        addPrimaryResult({
            title: 'loadUltraGroupUnreadCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUltraGroupUnreadCount_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUltraGroupUnreadCount(targetId, callback);
//fun_getUltraGroupUnreadCount_call
*/
export async function getUltraGroupUnreadCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupUnreadCount_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupUnreadCount_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUltraGroupUnreadCount(targetId, callback);

        addPrimaryResult({
            title: 'getUltraGroupUnreadCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadUltraGroupUnreadMentionedCount_call
let code = await engine.loadUltraGroupUnreadMentionedCount(targetId);
//fun_loadUltraGroupUnreadMentionedCount_call
*/
export async function loadUltraGroupUnreadMentionedCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let res = await helper.RCIMIWEngineInstance.loadUltraGroupUnreadMentionedCount(targetId);

        addPrimaryResult({
            title: 'loadUltraGroupUnreadMentionedCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUltraGroupUnreadMentionedCount_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUltraGroupUnreadMentionedCount(targetId, callback);
//fun_getUltraGroupUnreadMentionedCount_call
*/
export async function getUltraGroupUnreadMentionedCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupUnreadMentionedCount_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupUnreadMentionedCount_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUltraGroupUnreadMentionedCount(targetId, callback);

        addPrimaryResult({
            title: 'getUltraGroupUnreadMentionedCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadUnreadCountByConversationTypes_call
let code = await engine.loadUnreadCountByConversationTypes(conversationTypes, channelId, contain);
//fun_loadUnreadCountByConversationTypes_call
*/
export async function loadUnreadCountByConversationTypes(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.contain.length === 0) {
            uni.showToast({
                title: 'contain 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let channelId = arg.channelId;
        let contain = arg.contain;
        let res = await helper.RCIMIWEngineInstance.loadUnreadCountByConversationTypes(
            conversationTypes,
            channelId,
            contain,
        );

        addPrimaryResult({
            title: 'loadUnreadCountByConversationTypes',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUnreadCountByConversationTypes_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUnreadCountByConversationTypes(conversationTypes, channelId, contain, callback);
//fun_getUnreadCountByConversationTypes_call
*/
export async function getUnreadCountByConversationTypes(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.contain.length === 0) {
            uni.showToast({
                title: 'contain 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let channelId = arg.channelId;
        let contain = arg.contain;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUnreadCountByConversationTypes_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUnreadCountByConversationTypes_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUnreadCountByConversationTypes(
            conversationTypes,
            channelId,
            contain,
            callback,
        );

        addPrimaryResult({
            title: 'getUnreadCountByConversationTypes',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_clearUnreadCount_call
let callback = {
onUnreadCountCleared:(res) => {
    //...
}};
let code = await engine.clearUnreadCount(type, targetId, channelId, timestamp, callback);
//fun_clearUnreadCount_call
*/
export async function clearUnreadCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timestamp.length === 0) {
            uni.showToast({
                title: 'timestamp 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let timestamp = parseInt(arg.timestamp);
        let callback = {
            onUnreadCountCleared: (res) => {
                addPrimaryResult({
                    title: 'clearUnreadCount_onUnreadCountCleared',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.clearUnreadCount(type, targetId, channelId, timestamp, callback);

        addPrimaryResult({
            title: 'clearUnreadCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_saveDraftMessage_call
let callback = {
onDraftMessageSaved:(res) => {
    //...
}};
let code = await engine.saveDraftMessage(type, targetId, channelId, draft, callback);
//fun_saveDraftMessage_call
*/
export async function saveDraftMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.draft.length === 0) {
            uni.showToast({
                title: 'draft 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let draft = arg.draft;
        let callback = {
            onDraftMessageSaved: (res) => {
                addPrimaryResult({
                    title: 'saveDraftMessage_onDraftMessageSaved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.saveDraftMessage(type, targetId, channelId, draft, callback);

        addPrimaryResult({
            title: 'saveDraftMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadDraftMessage_call
let code = await engine.loadDraftMessage(type, targetId, channelId);
//fun_loadDraftMessage_call
*/
export async function loadDraftMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadDraftMessage(type, targetId, channelId);

        addPrimaryResult({
            title: 'loadDraftMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getDraftMessage_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getDraftMessage(type, targetId, channelId, callback);
//fun_getDraftMessage_call
*/
export async function getDraftMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getDraftMessage_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getDraftMessage_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getDraftMessage(type, targetId, channelId, callback);

        addPrimaryResult({
            title: 'getDraftMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_clearDraftMessage_call
let callback = {
onDraftMessageCleared:(res) => {
    //...
}};
let code = await engine.clearDraftMessage(type, targetId, channelId, callback);
//fun_clearDraftMessage_call
*/
export async function clearDraftMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onDraftMessageCleared: (res) => {
                addPrimaryResult({
                    title: 'clearDraftMessage_onDraftMessageCleared',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.clearDraftMessage(type, targetId, channelId, callback);

        addPrimaryResult({
            title: 'clearDraftMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadBlockedConversations_call
let code = await engine.loadBlockedConversations(conversationTypes, channelId);
//fun_loadBlockedConversations_call
*/
export async function loadBlockedConversations(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadBlockedConversations(conversationTypes, channelId);

        addPrimaryResult({
            title: 'loadBlockedConversations',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getBlockedConversations_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getBlockedConversations(conversationTypes, channelId, callback);
//fun_getBlockedConversations_call
*/
export async function getBlockedConversations(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getBlockedConversations_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getBlockedConversations_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getBlockedConversations(conversationTypes, channelId, callback);

        addPrimaryResult({
            title: 'getBlockedConversations',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changeConversationTopStatus_call
let callback = {
onConversationTopStatusChanged:(res) => {
    //...
}};
let code = await engine.changeConversationTopStatus(type, targetId, channelId, top, callback);
//fun_changeConversationTopStatus_call
*/
export async function changeConversationTopStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.top.length === 0) {
            uni.showToast({
                title: 'top 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let top = arg.top;
        let callback = {
            onConversationTopStatusChanged: (res) => {
                addPrimaryResult({
                    title: 'changeConversationTopStatus_onConversationTopStatusChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changeConversationTopStatus(
            type,
            targetId,
            channelId,
            top,
            callback,
        );

        addPrimaryResult({
            title: 'changeConversationTopStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadConversationTopStatus_call
let code = await engine.loadConversationTopStatus(type, targetId, channelId);
//fun_loadConversationTopStatus_call
*/
export async function loadConversationTopStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadConversationTopStatus(type, targetId, channelId);

        addPrimaryResult({
            title: 'loadConversationTopStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getConversationTopStatus_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getConversationTopStatus(type, targetId, channelId, callback);
//fun_getConversationTopStatus_call
*/
export async function getConversationTopStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getConversationTopStatus_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getConversationTopStatus_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getConversationTopStatus(type, targetId, channelId, callback);

        addPrimaryResult({
            title: 'getConversationTopStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_syncConversationReadStatus_call
let callback = {
onConversationReadStatusSynced:(res) => {
    //...
}};
let code = await engine.syncConversationReadStatus(type, targetId, channelId, timestamp, callback);
//fun_syncConversationReadStatus_call
*/
export async function syncConversationReadStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timestamp.length === 0) {
            uni.showToast({
                title: 'timestamp 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let timestamp = parseInt(arg.timestamp);
        let callback = {
            onConversationReadStatusSynced: (res) => {
                addPrimaryResult({
                    title: 'syncConversationReadStatus_onConversationReadStatusSynced',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.syncConversationReadStatus(
            type,
            targetId,
            channelId,
            timestamp,
            callback,
        );

        addPrimaryResult({
            title: 'syncConversationReadStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_sendTypingStatus_call
let code = await engine.sendTypingStatus(type, targetId, channelId, currentType);
//fun_sendTypingStatus_call
*/
export async function sendTypingStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.currentType.length === 0) {
            uni.showToast({
                title: 'currentType 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let currentType = arg.currentType;
        let res = await helper.RCIMIWEngineInstance.sendTypingStatus(type, targetId, channelId, currentType);

        addPrimaryResult({
            title: 'sendTypingStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadMessages_call
let code = await engine.loadMessages(type, targetId, channelId, sentTime, order, policy, count);
//fun_loadMessages_call
*/
export async function loadMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.sentTime.length === 0) {
            uni.showToast({
                title: 'sentTime 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.order.length === 0) {
            uni.showToast({
                title: 'order 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.policy.length === 0) {
            uni.showToast({
                title: 'policy 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.count.length === 0) {
            uni.showToast({
                title: 'count 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let sentTime = parseInt(arg.sentTime);
        let order = parseInt(arg.order);
        let policy = parseInt(arg.policy);
        let count = parseInt(arg.count);
        let res = await helper.RCIMIWEngineInstance.loadMessages(
            type,
            targetId,
            channelId,
            sentTime,
            order,
            policy,
            count,
        );

        addPrimaryResult({
            title: 'loadMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getMessages_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getMessages(type, targetId, channelId, sentTime, order, policy, count, callback);
//fun_getMessages_call
*/
export async function getMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.sentTime.length === 0) {
            uni.showToast({
                title: 'sentTime 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.order.length === 0) {
            uni.showToast({
                title: 'order 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.policy.length === 0) {
            uni.showToast({
                title: 'policy 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.count.length === 0) {
            uni.showToast({
                title: 'count 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let sentTime = parseInt(arg.sentTime);
        let order = parseInt(arg.order);
        let policy = parseInt(arg.policy);
        let count = parseInt(arg.count);
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getMessages_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getMessages_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getMessages(
            type,
            targetId,
            channelId,
            sentTime,
            order,
            policy,
            count,
            callback,
        );

        addPrimaryResult({
            title: 'getMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getMessageById_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getMessageById(messageId, callback);
//fun_getMessageById_call
*/
export async function getMessageById(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messageId.length === 0) {
            uni.showToast({
                title: 'messageId 为空',
                icon: 'error',
            });
            return;
        }
        let messageId = parseInt(arg.messageId);
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getMessageById_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getMessageById_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getMessageById(messageId, callback);

        addPrimaryResult({
            title: 'getMessageById',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getMessageByUId_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getMessageByUId(messageUId, callback);
//fun_getMessageByUId_call
*/
export async function getMessageByUId(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messageUId.length === 0) {
            uni.showToast({
                title: 'messageUId 为空',
                icon: 'error',
            });
            return;
        }
        let messageUId = arg.messageUId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getMessageByUId_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getMessageByUId_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getMessageByUId(messageUId, callback);

        addPrimaryResult({
            title: 'getMessageByUId',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadFirstUnreadMessage_call
let code = await engine.loadFirstUnreadMessage(type, targetId, channelId);
//fun_loadFirstUnreadMessage_call
*/
export async function loadFirstUnreadMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadFirstUnreadMessage(type, targetId, channelId);

        addPrimaryResult({
            title: 'loadFirstUnreadMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getFirstUnreadMessage_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getFirstUnreadMessage(type, targetId, channelId, callback);
//fun_getFirstUnreadMessage_call
*/
export async function getFirstUnreadMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getFirstUnreadMessage_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getFirstUnreadMessage_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getFirstUnreadMessage(type, targetId, channelId, callback);

        addPrimaryResult({
            title: 'getFirstUnreadMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadUnreadMentionedMessages_call
let code = await engine.loadUnreadMentionedMessages(type, targetId, channelId);
//fun_loadUnreadMentionedMessages_call
*/
export async function loadUnreadMentionedMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadUnreadMentionedMessages(type, targetId, channelId);

        addPrimaryResult({
            title: 'loadUnreadMentionedMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUnreadMentionedMessages_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUnreadMentionedMessages(type, targetId, channelId, callback);
//fun_getUnreadMentionedMessages_call
*/
export async function getUnreadMentionedMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUnreadMentionedMessages_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUnreadMentionedMessages_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUnreadMentionedMessages(type, targetId, channelId, callback);

        addPrimaryResult({
            title: 'getUnreadMentionedMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_insertMessage_call
let callback = {
onMessageInserted:(res) => {
    //...
}};
let code = await engine.insertMessage(message, callback);
//fun_insertMessage_call
*/
/*
//fun_insertMessages_call
let callback = {
onMessagesInserted:(res) => {
    //...
}};
let code = await engine.insertMessages(messages, callback);
//fun_insertMessages_call
*/
/*
//fun_clearMessages_call
let callback = {
onMessagesCleared:(res) => {
    //...
}};
let code = await engine.clearMessages(type, targetId, channelId, timestamp, policy, callback);
//fun_clearMessages_call
*/
export async function clearMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timestamp.length === 0) {
            uni.showToast({
                title: 'timestamp 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.policy.length === 0) {
            uni.showToast({
                title: 'policy 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let timestamp = parseInt(arg.timestamp);
        let policy = parseInt(arg.policy);
        let callback = {
            onMessagesCleared: (res) => {
                addPrimaryResult({
                    title: 'clearMessages_onMessagesCleared',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.clearMessages(
            type,
            targetId,
            channelId,
            timestamp,
            policy,
            callback,
        );

        addPrimaryResult({
            title: 'clearMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_deleteLocalMessages_call
let callback = {
onLocalMessagesDeleted:(res) => {
    //...
}};
let code = await engine.deleteLocalMessages(messages, callback);
//fun_deleteLocalMessages_call
*/
export async function deleteLocalMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messages.length === 0) {
            uni.showToast({
                title: 'messages 为空',
                icon: 'error',
            });
            return;
        }
        let messages = arg.messages;
        let callback = {
            onLocalMessagesDeleted: (res) => {
                addPrimaryResult({
                    title: 'deleteLocalMessages_onLocalMessagesDeleted',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.deleteLocalMessages(messages, callback);

        addPrimaryResult({
            title: 'deleteLocalMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_deleteMessages_call
let callback = {
onMessagesDeleted:(res) => {
    //...
}};
let code = await engine.deleteMessages(type, targetId, channelId, messages, callback);
//fun_deleteMessages_call
*/
/*
//fun_recallMessage_call
let callback = {
onMessageRecalled:(res) => {
    //...
}};
let code = await engine.recallMessage(message, callback);
//fun_recallMessage_call
*/
/*
//fun_sendPrivateReadReceiptMessage_call
let callback = {
onPrivateReadReceiptMessageSent:(res) => {
    //...
}};
let code = await engine.sendPrivateReadReceiptMessage(targetId, channelId, timestamp, callback);
//fun_sendPrivateReadReceiptMessage_call
*/
export async function sendPrivateReadReceiptMessage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timestamp.length === 0) {
            uni.showToast({
                title: 'timestamp 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let timestamp = parseInt(arg.timestamp);
        let callback = {
            onPrivateReadReceiptMessageSent: (res) => {
                addPrimaryResult({
                    title: 'sendPrivateReadReceiptMessage_onPrivateReadReceiptMessageSent',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.sendPrivateReadReceiptMessage(
            targetId,
            channelId,
            timestamp,
            callback,
        );

        addPrimaryResult({
            title: 'sendPrivateReadReceiptMessage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_sendGroupReadReceiptRequest_call
let callback = {
onGroupReadReceiptRequestSent:(res) => {
    //...
}};
let code = await engine.sendGroupReadReceiptRequest(message, callback);
//fun_sendGroupReadReceiptRequest_call
*/
/*
//fun_sendGroupReadReceiptResponse_call
let callback = {
onGroupReadReceiptResponseSent:(res) => {
    //...
}};
let code = await engine.sendGroupReadReceiptResponse(targetId, channelId, messages, callback);
//fun_sendGroupReadReceiptResponse_call
*/
/*
//fun_updateMessageExpansion_call
let callback = {
onMessageExpansionUpdated:(res) => {
    //...
}};
let code = await engine.updateMessageExpansion(messageUId, expansion, callback);
//fun_updateMessageExpansion_call
*/
export async function updateMessageExpansion(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messageUId.length === 0) {
            uni.showToast({
                title: 'messageUId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keys.length === 0) {
            uni.showToast({ title: 'keys 为空', icon: 'error' });
            return;
        }
        if (arg.values.length === 0) {
            uni.showToast({ title: 'values 为空', icon: 'error' });
            return;
        }
        let messageUId = arg.messageUId;

        let expansion = {};
        let keys = arg.keys.split(',');
        let values = arg.values.split(',');
        for (let i = 0; i < keys.length; i++) {
            expansion[keys[i]] = values[i];
        }
        let callback = {
            onMessageExpansionUpdated: (res) => {
                addPrimaryResult({
                    title: 'updateMessageExpansion_onMessageExpansionUpdated',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.updateMessageExpansion(messageUId, expansion, callback);

        addPrimaryResult({
            title: 'updateMessageExpansion',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeMessageExpansionForKeys_call
let callback = {
onMessageExpansionForKeysRemoved:(res) => {
    //...
}};
let code = await engine.removeMessageExpansionForKeys(messageUId, keys, callback);
//fun_removeMessageExpansionForKeys_call
*/
export async function removeMessageExpansionForKeys(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messageUId.length === 0) {
            uni.showToast({
                title: 'messageUId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keys.length === 0) {
            uni.showToast({
                title: 'keys 为空',
                icon: 'error',
            });
            return;
        }
        let messageUId = arg.messageUId;
        let keys = arg.keys.split(',');
        let callback = {
            onMessageExpansionForKeysRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeMessageExpansionForKeys_onMessageExpansionForKeysRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeMessageExpansionForKeys(messageUId, keys, callback);

        addPrimaryResult({
            title: 'removeMessageExpansionForKeys',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changeMessageSentStatus_call
let callback = {
onMessageSentStatusChanged:(res) => {
    //...
}};
let code = await engine.changeMessageSentStatus(messageId, sentStatus, callback);
//fun_changeMessageSentStatus_call
*/
export async function changeMessageSentStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messageId.length === 0) {
            uni.showToast({
                title: 'messageId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.sentStatus.length === 0) {
            uni.showToast({
                title: 'sentStatus 为空',
                icon: 'error',
            });
            return;
        }
        let messageId = parseInt(arg.messageId);
        let sentStatus = parseInt(arg.sentStatus);
        let callback = {
            onMessageSentStatusChanged: (res) => {
                addPrimaryResult({
                    title: 'changeMessageSentStatus_onMessageSentStatusChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changeMessageSentStatus(messageId, sentStatus, callback);

        addPrimaryResult({
            title: 'changeMessageSentStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changeMessageReceiveStatus_call
let callback = {
onMessageReceiveStatusChanged:(res) => {
    //...
}};
let code = await engine.changeMessageReceiveStatus(messageId, receivedStatus, callback);
//fun_changeMessageReceiveStatus_call
*/
export async function changeMessageReceiveStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messageId.length === 0) {
            uni.showToast({
                title: 'messageId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.receivedStatus.length === 0) {
            uni.showToast({
                title: 'receivedStatus 为空',
                icon: 'error',
            });
            return;
        }
        let messageId = parseInt(arg.messageId);
        let receivedStatus = parseInt(arg.receivedStatus);
        let callback = {
            onMessageReceiveStatusChanged: (res) => {
                addPrimaryResult({
                    title: 'changeMessageReceiveStatus_onMessageReceiveStatusChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changeMessageReceiveStatus(messageId, receivedStatus, callback);

        addPrimaryResult({
            title: 'changeMessageReceiveStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_joinChatRoom_call
let callback = {
onChatRoomJoined:(res) => {
    //...
}};
let code = await engine.joinChatRoom(targetId, messageCount, autoCreate, callback);
//fun_joinChatRoom_call
*/
export async function joinChatRoom(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.messageCount.length === 0) {
            uni.showToast({
                title: 'messageCount 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.autoCreate.length === 0) {
            uni.showToast({
                title: 'autoCreate 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let messageCount = parseInt(arg.messageCount);
        let autoCreate = arg.autoCreate;
        let callback = {
            onChatRoomJoined: (res) => {
                addPrimaryResult({
                    title: 'joinChatRoom_onChatRoomJoined',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.joinChatRoom(targetId, messageCount, autoCreate, callback);

        addPrimaryResult({
            title: 'joinChatRoom',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_leaveChatRoom_call
let callback = {
onChatRoomLeft:(res) => {
    //...
}};
let code = await engine.leaveChatRoom(targetId, callback);
//fun_leaveChatRoom_call
*/
export async function leaveChatRoom(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let callback = {
            onChatRoomLeft: (res) => {
                addPrimaryResult({
                    title: 'leaveChatRoom_onChatRoomLeft',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.leaveChatRoom(targetId, callback);

        addPrimaryResult({
            title: 'leaveChatRoom',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadChatRoomMessages_call
let code = await engine.loadChatRoomMessages(targetId, timestamp, order, count);
//fun_loadChatRoomMessages_call
*/
export async function loadChatRoomMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timestamp.length === 0) {
            uni.showToast({
                title: 'timestamp 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.order.length === 0) {
            uni.showToast({
                title: 'order 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.count.length === 0) {
            uni.showToast({
                title: 'count 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let timestamp = parseInt(arg.timestamp);
        let order = parseInt(arg.order);
        let count = parseInt(arg.count);
        let res = await helper.RCIMIWEngineInstance.loadChatRoomMessages(targetId, timestamp, order, count);

        addPrimaryResult({
            title: 'loadChatRoomMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getChatRoomMessages_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getChatRoomMessages(targetId, timestamp, order, count, callback);
//fun_getChatRoomMessages_call
*/
export async function getChatRoomMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timestamp.length === 0) {
            uni.showToast({
                title: 'timestamp 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.order.length === 0) {
            uni.showToast({
                title: 'order 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.count.length === 0) {
            uni.showToast({
                title: 'count 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let timestamp = parseInt(arg.timestamp);
        let order = parseInt(arg.order);
        let count = parseInt(arg.count);
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getChatRoomMessages_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getChatRoomMessages_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getChatRoomMessages(targetId, timestamp, order, count, callback);

        addPrimaryResult({
            title: 'getChatRoomMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_addChatRoomEntry_call
let callback = {
onChatRoomEntryAdded:(res) => {
    //...
}};
let code = await engine.addChatRoomEntry(targetId, key, value, deleteWhenLeft, overwrite, callback);
//fun_addChatRoomEntry_call
*/
export async function addChatRoomEntry(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.key.length === 0) {
            uni.showToast({
                title: 'key 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.value.length === 0) {
            uni.showToast({
                title: 'value 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.deleteWhenLeft.length === 0) {
            uni.showToast({
                title: 'deleteWhenLeft 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.overwrite.length === 0) {
            uni.showToast({
                title: 'overwrite 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let key = arg.key;
        let value = arg.value;
        let deleteWhenLeft = arg.deleteWhenLeft;
        let overwrite = arg.overwrite;
        let callback = {
            onChatRoomEntryAdded: (res) => {
                addPrimaryResult({
                    title: 'addChatRoomEntry_onChatRoomEntryAdded',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.addChatRoomEntry(
            targetId,
            key,
            value,
            deleteWhenLeft,
            overwrite,
            callback,
        );

        addPrimaryResult({
            title: 'addChatRoomEntry',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_addChatRoomEntries_call
let callback = {
onChatRoomEntriesAdded:(res) => {
    //...
}};
let code = await engine.addChatRoomEntries(targetId, entries, deleteWhenLeft, overwrite, callback);
//fun_addChatRoomEntries_call
*/
export async function addChatRoomEntries(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keys.length === 0) {
            uni.showToast({ title: 'keys 为空', icon: 'error' });
            return;
        }
        if (arg.values.length === 0) {
            uni.showToast({ title: 'values 为空', icon: 'error' });
            return;
        }
        if (arg.deleteWhenLeft.length === 0) {
            uni.showToast({
                title: 'deleteWhenLeft 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.overwrite.length === 0) {
            uni.showToast({
                title: 'overwrite 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;

        let entries = {};
        let keys = arg.keys.split(',');
        let values = arg.values.split(',');
        for (let i = 0; i < keys.length; i++) {
            entries[keys[i]] = values[i];
        }
        let deleteWhenLeft = arg.deleteWhenLeft;
        let overwrite = arg.overwrite;
        let callback = {
            onChatRoomEntriesAdded: (res) => {
                addPrimaryResult({
                    title: 'addChatRoomEntries_onChatRoomEntriesAdded',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.addChatRoomEntries(
            targetId,
            entries,
            deleteWhenLeft,
            overwrite,
            callback,
        );

        addPrimaryResult({
            title: 'addChatRoomEntries',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadChatRoomEntry_call
let code = await engine.loadChatRoomEntry(targetId, key);
//fun_loadChatRoomEntry_call
*/
export async function loadChatRoomEntry(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.key.length === 0) {
            uni.showToast({
                title: 'key 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let key = arg.key;
        let res = await helper.RCIMIWEngineInstance.loadChatRoomEntry(targetId, key);

        addPrimaryResult({
            title: 'loadChatRoomEntry',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getChatRoomEntry_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getChatRoomEntry(targetId, key, callback);
//fun_getChatRoomEntry_call
*/
export async function getChatRoomEntry(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.key.length === 0) {
            uni.showToast({
                title: 'key 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let key = arg.key;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getChatRoomEntry_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getChatRoomEntry_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getChatRoomEntry(targetId, key, callback);

        addPrimaryResult({
            title: 'getChatRoomEntry',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadChatRoomAllEntries_call
let code = await engine.loadChatRoomAllEntries(targetId);
//fun_loadChatRoomAllEntries_call
*/
export async function loadChatRoomAllEntries(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let res = await helper.RCIMIWEngineInstance.loadChatRoomAllEntries(targetId);

        addPrimaryResult({
            title: 'loadChatRoomAllEntries',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getChatRoomAllEntries_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getChatRoomAllEntries(targetId, callback);
//fun_getChatRoomAllEntries_call
*/
export async function getChatRoomAllEntries(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getChatRoomAllEntries_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getChatRoomAllEntries_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getChatRoomAllEntries(targetId, callback);

        addPrimaryResult({
            title: 'getChatRoomAllEntries',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeChatRoomEntry_call
let callback = {
onChatRoomEntryRemoved:(res) => {
    //...
}};
let code = await engine.removeChatRoomEntry(targetId, key, force, callback);
//fun_removeChatRoomEntry_call
*/
export async function removeChatRoomEntry(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.key.length === 0) {
            uni.showToast({
                title: 'key 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.force.length === 0) {
            uni.showToast({
                title: 'force 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let key = arg.key;
        let force = arg.force;
        let callback = {
            onChatRoomEntryRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeChatRoomEntry_onChatRoomEntryRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeChatRoomEntry(targetId, key, force, callback);

        addPrimaryResult({
            title: 'removeChatRoomEntry',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeChatRoomEntries_call
let callback = {
onChatRoomEntriesRemoved:(res) => {
    //...
}};
let code = await engine.removeChatRoomEntries(targetId, keys, force, callback);
//fun_removeChatRoomEntries_call
*/
export async function removeChatRoomEntries(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keys.length === 0) {
            uni.showToast({
                title: 'keys 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.force.length === 0) {
            uni.showToast({
                title: 'force 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let keys = arg.keys.split(',');
        let force = arg.force;
        let callback = {
            onChatRoomEntriesRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeChatRoomEntries_onChatRoomEntriesRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeChatRoomEntries(targetId, keys, force, callback);

        addPrimaryResult({
            title: 'removeChatRoomEntries',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_addToBlacklist_call
let callback = {
onBlacklistAdded:(res) => {
    //...
}};
let code = await engine.addToBlacklist(userId, callback);
//fun_addToBlacklist_call
*/
export async function addToBlacklist(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.userId.length === 0) {
            uni.showToast({
                title: 'userId 为空',
                icon: 'error',
            });
            return;
        }
        let userId = arg.userId;
        let callback = {
            onBlacklistAdded: (res) => {
                addPrimaryResult({
                    title: 'addToBlacklist_onBlacklistAdded',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.addToBlacklist(userId, callback);

        addPrimaryResult({
            title: 'addToBlacklist',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeFromBlacklist_call
let callback = {
onBlacklistRemoved:(res) => {
    //...
}};
let code = await engine.removeFromBlacklist(userId, callback);
//fun_removeFromBlacklist_call
*/
export async function removeFromBlacklist(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.userId.length === 0) {
            uni.showToast({
                title: 'userId 为空',
                icon: 'error',
            });
            return;
        }
        let userId = arg.userId;
        let callback = {
            onBlacklistRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeFromBlacklist_onBlacklistRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeFromBlacklist(userId, callback);

        addPrimaryResult({
            title: 'removeFromBlacklist',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadBlacklistStatus_call
let code = await engine.loadBlacklistStatus(userId);
//fun_loadBlacklistStatus_call
*/
export async function loadBlacklistStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.userId.length === 0) {
            uni.showToast({
                title: 'userId 为空',
                icon: 'error',
            });
            return;
        }
        let userId = arg.userId;
        let res = await helper.RCIMIWEngineInstance.loadBlacklistStatus(userId);

        addPrimaryResult({
            title: 'loadBlacklistStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getBlacklistStatus_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getBlacklistStatus(userId, callback);
//fun_getBlacklistStatus_call
*/
export async function getBlacklistStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.userId.length === 0) {
            uni.showToast({
                title: 'userId 为空',
                icon: 'error',
            });
            return;
        }
        let userId = arg.userId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getBlacklistStatus_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getBlacklistStatus_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getBlacklistStatus(userId, callback);

        addPrimaryResult({
            title: 'getBlacklistStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadBlacklist_call
let code = await engine.loadBlacklist();
//fun_loadBlacklist_call
*/
export async function loadBlacklist(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let res = await helper.RCIMIWEngineInstance.loadBlacklist();

        addPrimaryResult({
            title: 'loadBlacklist',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getBlacklist_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getBlacklist(callback);
//fun_getBlacklist_call
*/
export async function getBlacklist(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getBlacklist_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getBlacklist_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getBlacklist(callback);

        addPrimaryResult({
            title: 'getBlacklist',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_searchMessages_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.searchMessages(type, targetId, channelId, keyword, startTime, count, callback);
//fun_searchMessages_call
*/
export async function searchMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keyword.length === 0) {
            uni.showToast({
                title: 'keyword 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.startTime.length === 0) {
            uni.showToast({
                title: 'startTime 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.count.length === 0) {
            uni.showToast({
                title: 'count 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let keyword = arg.keyword;
        let startTime = parseInt(arg.startTime);
        let count = parseInt(arg.count);
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'searchMessages_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'searchMessages_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.searchMessages(
            type,
            targetId,
            channelId,
            keyword,
            startTime,
            count,
            callback,
        );

        addPrimaryResult({
            title: 'searchMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_searchMessagesByTimeRange_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.searchMessagesByTimeRange(type, targetId, channelId, keyword, startTime, endTime, offset, count, callback);
//fun_searchMessagesByTimeRange_call
*/
export async function searchMessagesByTimeRange(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keyword.length === 0) {
            uni.showToast({
                title: 'keyword 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.startTime.length === 0) {
            uni.showToast({
                title: 'startTime 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.endTime.length === 0) {
            uni.showToast({
                title: 'endTime 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.offset.length === 0) {
            uni.showToast({
                title: 'offset 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.count.length === 0) {
            uni.showToast({
                title: 'count 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let keyword = arg.keyword;
        let startTime = parseInt(arg.startTime);
        let endTime = parseInt(arg.endTime);
        let offset = parseInt(arg.offset);
        let count = parseInt(arg.count);
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'searchMessagesByTimeRange_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'searchMessagesByTimeRange_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.searchMessagesByTimeRange(
            type,
            targetId,
            channelId,
            keyword,
            startTime,
            endTime,
            offset,
            count,
            callback,
        );

        addPrimaryResult({
            title: 'searchMessagesByTimeRange',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_searchMessagesByUserId_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.searchMessagesByUserId(userId, type, targetId, channelId, startTime, count, callback);
//fun_searchMessagesByUserId_call
*/
export async function searchMessagesByUserId(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.userId.length === 0) {
            uni.showToast({
                title: 'userId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.startTime.length === 0) {
            uni.showToast({
                title: 'startTime 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.count.length === 0) {
            uni.showToast({
                title: 'count 为空',
                icon: 'error',
            });
            return;
        }
        let userId = arg.userId;
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let startTime = parseInt(arg.startTime);
        let count = parseInt(arg.count);
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'searchMessagesByUserId_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'searchMessagesByUserId_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.searchMessagesByUserId(
            userId,
            type,
            targetId,
            channelId,
            startTime,
            count,
            callback,
        );

        addPrimaryResult({
            title: 'searchMessagesByUserId',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_searchConversations_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.searchConversations(conversationTypes, channelId, messageTypes, keyword, callback);
//fun_searchConversations_call
*/
export async function searchConversations(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.messageTypes.length === 0) {
            uni.showToast({
                title: 'messageTypes 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keyword.length === 0) {
            uni.showToast({
                title: 'keyword 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let channelId = arg.channelId;
        let messageTypes = arg.messageTypes.split(',').map((i) => parseInt(i));
        let keyword = arg.keyword;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'searchConversations_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'searchConversations_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.searchConversations(
            conversationTypes,
            channelId,
            messageTypes,
            keyword,
            callback,
        );

        addPrimaryResult({
            title: 'searchConversations',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changeNotificationQuietHours_call
let callback = {
onNotificationQuietHoursChanged:(res) => {
    //...
}};
let code = await engine.changeNotificationQuietHours(startTime, spanMinutes, level, callback);
//fun_changeNotificationQuietHours_call
*/
export async function changeNotificationQuietHours(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.startTime.length === 0) {
            uni.showToast({
                title: 'startTime 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.spanMinutes.length === 0) {
            uni.showToast({
                title: 'spanMinutes 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.level.length === 0) {
            uni.showToast({
                title: 'level 为空',
                icon: 'error',
            });
            return;
        }
        let startTime = arg.startTime;
        let spanMinutes = parseInt(arg.spanMinutes);
        let level = parseInt(arg.level);
        let callback = {
            onNotificationQuietHoursChanged: (res) => {
                addPrimaryResult({
                    title: 'changeNotificationQuietHours_onNotificationQuietHoursChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changeNotificationQuietHours(
            startTime,
            spanMinutes,
            level,
            callback,
        );

        addPrimaryResult({
            title: 'changeNotificationQuietHours',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeNotificationQuietHours_call
let callback = {
onNotificationQuietHoursRemoved:(res) => {
    //...
}};
let code = await engine.removeNotificationQuietHours(callback);
//fun_removeNotificationQuietHours_call
*/
export async function removeNotificationQuietHours(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let callback = {
            onNotificationQuietHoursRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeNotificationQuietHours_onNotificationQuietHoursRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeNotificationQuietHours(callback);

        addPrimaryResult({
            title: 'removeNotificationQuietHours',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadNotificationQuietHours_call
let code = await engine.loadNotificationQuietHours();
//fun_loadNotificationQuietHours_call
*/
export async function loadNotificationQuietHours(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let res = await helper.RCIMIWEngineInstance.loadNotificationQuietHours();

        addPrimaryResult({
            title: 'loadNotificationQuietHours',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getNotificationQuietHours_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getNotificationQuietHours(callback);
//fun_getNotificationQuietHours_call
*/
export async function getNotificationQuietHours(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getNotificationQuietHours_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getNotificationQuietHours_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getNotificationQuietHours(callback);

        addPrimaryResult({
            title: 'getNotificationQuietHours',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changeConversationNotificationLevel_call
let callback = {
onConversationNotificationLevelChanged:(res) => {
    //...
}};
let code = await engine.changeConversationNotificationLevel(type, targetId, channelId, level, callback);
//fun_changeConversationNotificationLevel_call
*/
export async function changeConversationNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.level.length === 0) {
            uni.showToast({
                title: 'level 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let level = parseInt(arg.level);
        let callback = {
            onConversationNotificationLevelChanged: (res) => {
                addPrimaryResult({
                    title: 'changeConversationNotificationLevel_onConversationNotificationLevelChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changeConversationNotificationLevel(
            type,
            targetId,
            channelId,
            level,
            callback,
        );

        addPrimaryResult({
            title: 'changeConversationNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadConversationNotificationLevel_call
let code = await engine.loadConversationNotificationLevel(type, targetId, channelId);
//fun_loadConversationNotificationLevel_call
*/
export async function loadConversationNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadConversationNotificationLevel(type, targetId, channelId);

        addPrimaryResult({
            title: 'loadConversationNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getConversationNotificationLevel_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getConversationNotificationLevel(type, targetId, channelId, callback);
//fun_getConversationNotificationLevel_call
*/
export async function getConversationNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getConversationNotificationLevel_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getConversationNotificationLevel_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getConversationNotificationLevel(
            type,
            targetId,
            channelId,
            callback,
        );

        addPrimaryResult({
            title: 'getConversationNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changeConversationTypeNotificationLevel_call
let callback = {
onConversationTypeNotificationLevelChanged:(res) => {
    //...
}};
let code = await engine.changeConversationTypeNotificationLevel(type, level, callback);
//fun_changeConversationTypeNotificationLevel_call
*/
export async function changeConversationTypeNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.level.length === 0) {
            uni.showToast({
                title: 'level 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let level = parseInt(arg.level);
        let callback = {
            onConversationTypeNotificationLevelChanged: (res) => {
                addPrimaryResult({
                    title: 'changeConversationTypeNotificationLevel_onConversationTypeNotificationLevelChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changeConversationTypeNotificationLevel(type, level, callback);

        addPrimaryResult({
            title: 'changeConversationTypeNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadConversationTypeNotificationLevel_call
let code = await engine.loadConversationTypeNotificationLevel(type);
//fun_loadConversationTypeNotificationLevel_call
*/
export async function loadConversationTypeNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let res = await helper.RCIMIWEngineInstance.loadConversationTypeNotificationLevel(type);

        addPrimaryResult({
            title: 'loadConversationTypeNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getConversationTypeNotificationLevel_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getConversationTypeNotificationLevel(type, callback);
//fun_getConversationTypeNotificationLevel_call
*/
export async function getConversationTypeNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getConversationTypeNotificationLevel_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getConversationTypeNotificationLevel_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getConversationTypeNotificationLevel(type, callback);

        addPrimaryResult({
            title: 'getConversationTypeNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changeUltraGroupDefaultNotificationLevel_call
let callback = {
onUltraGroupDefaultNotificationLevelChanged:(res) => {
    //...
}};
let code = await engine.changeUltraGroupDefaultNotificationLevel(targetId, level, callback);
//fun_changeUltraGroupDefaultNotificationLevel_call
*/
export async function changeUltraGroupDefaultNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.level.length === 0) {
            uni.showToast({
                title: 'level 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let level = parseInt(arg.level);
        let callback = {
            onUltraGroupDefaultNotificationLevelChanged: (res) => {
                addPrimaryResult({
                    title: 'changeUltraGroupDefaultNotificationLevel_onUltraGroupDefaultNotificationLevelChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changeUltraGroupDefaultNotificationLevel(targetId, level, callback);

        addPrimaryResult({
            title: 'changeUltraGroupDefaultNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadUltraGroupDefaultNotificationLevel_call
let code = await engine.loadUltraGroupDefaultNotificationLevel(targetId);
//fun_loadUltraGroupDefaultNotificationLevel_call
*/
export async function loadUltraGroupDefaultNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let res = await helper.RCIMIWEngineInstance.loadUltraGroupDefaultNotificationLevel(targetId);

        addPrimaryResult({
            title: 'loadUltraGroupDefaultNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUltraGroupDefaultNotificationLevel_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUltraGroupDefaultNotificationLevel(targetId, callback);
//fun_getUltraGroupDefaultNotificationLevel_call
*/
export async function getUltraGroupDefaultNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupDefaultNotificationLevel_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupDefaultNotificationLevel_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUltraGroupDefaultNotificationLevel(targetId, callback);

        addPrimaryResult({
            title: 'getUltraGroupDefaultNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changeUltraGroupChannelDefaultNotificationLevel_call
let callback = {
onUltraGroupChannelDefaultNotificationLevelChanged:(res) => {
    //...
}};
let code = await engine.changeUltraGroupChannelDefaultNotificationLevel(targetId, channelId, level, callback);
//fun_changeUltraGroupChannelDefaultNotificationLevel_call
*/
export async function changeUltraGroupChannelDefaultNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.level.length === 0) {
            uni.showToast({
                title: 'level 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let level = parseInt(arg.level);
        let callback = {
            onUltraGroupChannelDefaultNotificationLevelChanged: (res) => {
                addPrimaryResult({
                    title: 'changeUltraGroupChannelDefaultNotificationLevel_onUltraGroupChannelDefaultNotificationLevelChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changeUltraGroupChannelDefaultNotificationLevel(
            targetId,
            channelId,
            level,
            callback,
        );

        addPrimaryResult({
            title: 'changeUltraGroupChannelDefaultNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadUltraGroupChannelDefaultNotificationLevel_call
let code = await engine.loadUltraGroupChannelDefaultNotificationLevel(targetId, channelId);
//fun_loadUltraGroupChannelDefaultNotificationLevel_call
*/
export async function loadUltraGroupChannelDefaultNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadUltraGroupChannelDefaultNotificationLevel(targetId, channelId);

        addPrimaryResult({
            title: 'loadUltraGroupChannelDefaultNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUltraGroupChannelDefaultNotificationLevel_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUltraGroupChannelDefaultNotificationLevel(targetId, channelId, callback);
//fun_getUltraGroupChannelDefaultNotificationLevel_call
*/
export async function getUltraGroupChannelDefaultNotificationLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupChannelDefaultNotificationLevel_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUltraGroupChannelDefaultNotificationLevel_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUltraGroupChannelDefaultNotificationLevel(
            targetId,
            channelId,
            callback,
        );

        addPrimaryResult({
            title: 'getUltraGroupChannelDefaultNotificationLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changePushContentShowStatus_call
let callback = {
onPushContentShowStatusChanged:(res) => {
    //...
}};
let code = await engine.changePushContentShowStatus(showContent, callback);
//fun_changePushContentShowStatus_call
*/
export async function changePushContentShowStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.showContent.length === 0) {
            uni.showToast({
                title: 'showContent 为空',
                icon: 'error',
            });
            return;
        }
        let showContent = arg.showContent;
        let callback = {
            onPushContentShowStatusChanged: (res) => {
                addPrimaryResult({
                    title: 'changePushContentShowStatus_onPushContentShowStatusChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changePushContentShowStatus(showContent, callback);

        addPrimaryResult({
            title: 'changePushContentShowStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changePushLanguage_call
let callback = {
onPushLanguageChanged:(res) => {
    //...
}};
let code = await engine.changePushLanguage(language, callback);
//fun_changePushLanguage_call
*/
export async function changePushLanguage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.language.length === 0) {
            uni.showToast({
                title: 'language 为空',
                icon: 'error',
            });
            return;
        }
        let language = arg.language;
        let callback = {
            onPushLanguageChanged: (res) => {
                addPrimaryResult({
                    title: 'changePushLanguage_onPushLanguageChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changePushLanguage(language, callback);

        addPrimaryResult({
            title: 'changePushLanguage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changePushReceiveStatus_call
let callback = {
onPushReceiveStatusChanged:(res) => {
    //...
}};
let code = await engine.changePushReceiveStatus(receive, callback);
//fun_changePushReceiveStatus_call
*/
export async function changePushReceiveStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.receive.length === 0) {
            uni.showToast({
                title: 'receive 为空',
                icon: 'error',
            });
            return;
        }
        let receive = arg.receive;
        let callback = {
            onPushReceiveStatusChanged: (res) => {
                addPrimaryResult({
                    title: 'changePushReceiveStatus_onPushReceiveStatusChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changePushReceiveStatus(receive, callback);

        addPrimaryResult({
            title: 'changePushReceiveStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_sendGroupMessageToDesignatedUsers_call
let callback = {
onMessageSaved:(res) => {
    //...
},
onMessageSent:(res) => {
    //...
}};
let code = await engine.sendGroupMessageToDesignatedUsers(message, userIds, callback);
//fun_sendGroupMessageToDesignatedUsers_call
*/
/*
//fun_loadMessageCount_call
let code = await engine.loadMessageCount(type, targetId, channelId);
//fun_loadMessageCount_call
*/
export async function loadMessageCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadMessageCount(type, targetId, channelId);

        addPrimaryResult({
            title: 'loadMessageCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getMessageCount_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getMessageCount(type, targetId, channelId, callback);
//fun_getMessageCount_call
*/
export async function getMessageCount(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getMessageCount_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getMessageCount_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getMessageCount(type, targetId, channelId, callback);

        addPrimaryResult({
            title: 'getMessageCount',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadTopConversations_call
let code = await engine.loadTopConversations(conversationTypes, channelId);
//fun_loadTopConversations_call
*/
export async function loadTopConversations(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let channelId = arg.channelId;
        let res = await helper.RCIMIWEngineInstance.loadTopConversations(conversationTypes, channelId);

        addPrimaryResult({
            title: 'loadTopConversations',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getTopConversations_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getTopConversations(conversationTypes, channelId, callback);
//fun_getTopConversations_call
*/
export async function getTopConversations(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.conversationTypes.length === 0) {
            uni.showToast({
                title: 'conversationTypes 为空',
                icon: 'error',
            });
            return;
        }
        let conversationTypes = arg.conversationTypes.split(',').map((i) => parseInt(i));
        let channelId = arg.channelId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getTopConversations_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getTopConversations_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getTopConversations(conversationTypes, channelId, callback);

        addPrimaryResult({
            title: 'getTopConversations',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_syncUltraGroupReadStatus_call
let callback = {
onUltraGroupReadStatusSynced:(res) => {
    //...
}};
let code = await engine.syncUltraGroupReadStatus(targetId, channelId, timestamp, callback);
//fun_syncUltraGroupReadStatus_call
*/
export async function syncUltraGroupReadStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timestamp.length === 0) {
            uni.showToast({
                title: 'timestamp 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let timestamp = parseInt(arg.timestamp);
        let callback = {
            onUltraGroupReadStatusSynced: (res) => {
                addPrimaryResult({
                    title: 'syncUltraGroupReadStatus_onUltraGroupReadStatusSynced',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.syncUltraGroupReadStatus(targetId, channelId, timestamp, callback);

        addPrimaryResult({
            title: 'syncUltraGroupReadStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadConversationsForAllChannel_call
let code = await engine.loadConversationsForAllChannel(type, targetId);
//fun_loadConversationsForAllChannel_call
*/
export async function loadConversationsForAllChannel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let res = await helper.RCIMIWEngineInstance.loadConversationsForAllChannel(type, targetId);

        addPrimaryResult({
            title: 'loadConversationsForAllChannel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getConversationsForAllChannel_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getConversationsForAllChannel(type, targetId, callback);
//fun_getConversationsForAllChannel_call
*/
export async function getConversationsForAllChannel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getConversationsForAllChannel_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getConversationsForAllChannel_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getConversationsForAllChannel(type, targetId, callback);

        addPrimaryResult({
            title: 'getConversationsForAllChannel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_modifyUltraGroupMessage_call
let callback = {
onUltraGroupMessageModified:(res) => {
    //...
}};
let code = await engine.modifyUltraGroupMessage(messageUId, message, callback);
//fun_modifyUltraGroupMessage_call
*/
/*
//fun_recallUltraGroupMessage_call
let callback = {
onUltraGroupMessageRecalled:(res) => {
    //...
}};
let code = await engine.recallUltraGroupMessage(message, deleteRemote, callback);
//fun_recallUltraGroupMessage_call
*/
/*
//fun_clearUltraGroupMessages_call
let callback = {
onUltraGroupMessagesCleared:(res) => {
    //...
}};
let code = await engine.clearUltraGroupMessages(targetId, channelId, timestamp, policy, callback);
//fun_clearUltraGroupMessages_call
*/
export async function clearUltraGroupMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timestamp.length === 0) {
            uni.showToast({
                title: 'timestamp 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.policy.length === 0) {
            uni.showToast({
                title: 'policy 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let timestamp = parseInt(arg.timestamp);
        let policy = parseInt(arg.policy);
        let callback = {
            onUltraGroupMessagesCleared: (res) => {
                addPrimaryResult({
                    title: 'clearUltraGroupMessages_onUltraGroupMessagesCleared',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.clearUltraGroupMessages(
            targetId,
            channelId,
            timestamp,
            policy,
            callback,
        );

        addPrimaryResult({
            title: 'clearUltraGroupMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_sendUltraGroupTypingStatus_call
let callback = {
onUltraGroupTypingStatusSent:(res) => {
    //...
}};
let code = await engine.sendUltraGroupTypingStatus(targetId, channelId, typingStatus, callback);
//fun_sendUltraGroupTypingStatus_call
*/
export async function sendUltraGroupTypingStatus(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.typingStatus.length === 0) {
            uni.showToast({
                title: 'typingStatus 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let channelId = arg.channelId;
        let typingStatus = parseInt(arg.typingStatus);
        let callback = {
            onUltraGroupTypingStatusSent: (res) => {
                addPrimaryResult({
                    title: 'sendUltraGroupTypingStatus_onUltraGroupTypingStatusSent',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.sendUltraGroupTypingStatus(
            targetId,
            channelId,
            typingStatus,
            callback,
        );

        addPrimaryResult({
            title: 'sendUltraGroupTypingStatus',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_clearUltraGroupMessagesForAllChannel_call
let callback = {
onUltraGroupMessagesClearedForAllChannel:(res) => {
    //...
}};
let code = await engine.clearUltraGroupMessagesForAllChannel(targetId, timestamp, callback);
//fun_clearUltraGroupMessagesForAllChannel_call
*/
export async function clearUltraGroupMessagesForAllChannel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timestamp.length === 0) {
            uni.showToast({
                title: 'timestamp 为空',
                icon: 'error',
            });
            return;
        }
        let targetId = arg.targetId;
        let timestamp = parseInt(arg.timestamp);
        let callback = {
            onUltraGroupMessagesClearedForAllChannel: (res) => {
                addPrimaryResult({
                    title: 'clearUltraGroupMessagesForAllChannel_onUltraGroupMessagesClearedForAllChannel',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.clearUltraGroupMessagesForAllChannel(targetId, timestamp, callback);

        addPrimaryResult({
            title: 'clearUltraGroupMessagesForAllChannel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_loadBatchRemoteUltraGroupMessages_call
let code = await engine.loadBatchRemoteUltraGroupMessages(messages);
//fun_loadBatchRemoteUltraGroupMessages_call
*/
export async function loadBatchRemoteUltraGroupMessages(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messages.length === 0) {
            uni.showToast({
                title: 'messages 为空',
                icon: 'error',
            });
            return;
        }
        let messages = arg.messages;
        let res = await helper.RCIMIWEngineInstance.loadBatchRemoteUltraGroupMessages(messages);

        addPrimaryResult({
            title: 'loadBatchRemoteUltraGroupMessages',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getBatchRemoteUltraGroupMessages_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getBatchRemoteUltraGroupMessages(messages, callback);
//fun_getBatchRemoteUltraGroupMessages_call
*/
/*
//fun_updateUltraGroupMessageExpansion_call
let callback = {
onUltraGroupMessageExpansionUpdated:(res) => {
    //...
}};
let code = await engine.updateUltraGroupMessageExpansion(messageUId, expansion, callback);
//fun_updateUltraGroupMessageExpansion_call
*/
export async function updateUltraGroupMessageExpansion(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messageUId.length === 0) {
            uni.showToast({
                title: 'messageUId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keys.length === 0) {
            uni.showToast({ title: 'keys 为空', icon: 'error' });
            return;
        }
        if (arg.values.length === 0) {
            uni.showToast({ title: 'values 为空', icon: 'error' });
            return;
        }
        let messageUId = arg.messageUId;

        let expansion = {};
        let keys = arg.keys.split(',');
        let values = arg.values.split(',');
        for (let i = 0; i < keys.length; i++) {
            expansion[keys[i]] = values[i];
        }
        let callback = {
            onUltraGroupMessageExpansionUpdated: (res) => {
                addPrimaryResult({
                    title: 'updateUltraGroupMessageExpansion_onUltraGroupMessageExpansionUpdated',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.updateUltraGroupMessageExpansion(messageUId, expansion, callback);

        addPrimaryResult({
            title: 'updateUltraGroupMessageExpansion',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeUltraGroupMessageExpansionForKeys_call
let callback = {
onUltraGroupMessageExpansionForKeysRemoved:(res) => {
    //...
}};
let code = await engine.removeUltraGroupMessageExpansionForKeys(messageUId, keys, callback);
//fun_removeUltraGroupMessageExpansionForKeys_call
*/
export async function removeUltraGroupMessageExpansionForKeys(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.messageUId.length === 0) {
            uni.showToast({
                title: 'messageUId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.keys.length === 0) {
            uni.showToast({
                title: 'keys 为空',
                icon: 'error',
            });
            return;
        }
        let messageUId = arg.messageUId;
        let keys = arg.keys.split(',');
        let callback = {
            onUltraGroupMessageExpansionForKeysRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeUltraGroupMessageExpansionForKeys_onUltraGroupMessageExpansionForKeysRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeUltraGroupMessageExpansionForKeys(messageUId, keys, callback);

        addPrimaryResult({
            title: 'removeUltraGroupMessageExpansionForKeys',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changeLogLevel_call
let code = await engine.changeLogLevel(level);
//fun_changeLogLevel_call
*/
export async function changeLogLevel(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.level.length === 0) {
            uni.showToast({
                title: 'level 为空',
                icon: 'error',
            });
            return;
        }
        let level = parseInt(arg.level);
        let res = await helper.RCIMIWEngineInstance.changeLogLevel(level);

        addPrimaryResult({
            title: 'changeLogLevel',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getDeltaTime_call
let code = await engine.getDeltaTime();
//fun_getDeltaTime_call
*/
export async function getDeltaTime(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let res = await helper.RCIMIWEngineInstance.getDeltaTime();

        addPrimaryResult({
            title: 'getDeltaTime',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_createTag_call
let callback = {
onTagCreated:(res) => {
    //...
}};
let code = await engine.createTag(tagId, tagName, callback);
//fun_createTag_call
*/
export async function createTag(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.tagName.length === 0) {
            uni.showToast({
                title: 'tagName 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let tagName = arg.tagName;
        let callback = {
            onTagCreated: (res) => {
                addPrimaryResult({
                    title: 'createTag_onTagCreated',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.createTag(tagId, tagName, callback);

        addPrimaryResult({
            title: 'createTag',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeTag_call
let callback = {
onTagRemoved:(res) => {
    //...
}};
let code = await engine.removeTag(tagId, callback);
//fun_removeTag_call
*/
export async function removeTag(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let callback = {
            onTagRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeTag_onTagRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeTag(tagId, callback);

        addPrimaryResult({
            title: 'removeTag',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_updateTagNameById_call
let callback = {
onTagNameByIdUpdated:(res) => {
    //...
}};
let code = await engine.updateTagNameById(tagId, newName, callback);
//fun_updateTagNameById_call
*/
export async function updateTagNameById(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.newName.length === 0) {
            uni.showToast({
                title: 'newName 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let newName = arg.newName;
        let callback = {
            onTagNameByIdUpdated: (res) => {
                addPrimaryResult({
                    title: 'updateTagNameById_onTagNameByIdUpdated',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.updateTagNameById(tagId, newName, callback);

        addPrimaryResult({
            title: 'updateTagNameById',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getTags_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getTags(callback);
//fun_getTags_call
*/
export async function getTags(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getTags_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getTags_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getTags(callback);

        addPrimaryResult({
            title: 'getTags',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_addConversationToTag_call
let callback = {
onConversationToTagAdded:(res) => {
    //...
}};
let code = await engine.addConversationToTag(tagId, type, targetId, callback);
//fun_addConversationToTag_call
*/
export async function addConversationToTag(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let callback = {
            onConversationToTagAdded: (res) => {
                addPrimaryResult({
                    title: 'addConversationToTag_onConversationToTagAdded',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.addConversationToTag(tagId, type, targetId, callback);

        addPrimaryResult({
            title: 'addConversationToTag',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeConversationFromTag_call
let callback = {
onConversationFromTagRemoved:(res) => {
    //...
}};
let code = await engine.removeConversationFromTag(tagId, type, targetId, callback);
//fun_removeConversationFromTag_call
*/
export async function removeConversationFromTag(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let callback = {
            onConversationFromTagRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeConversationFromTag_onConversationFromTagRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeConversationFromTag(tagId, type, targetId, callback);

        addPrimaryResult({
            title: 'removeConversationFromTag',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_removeTagsFromConversation_call
let callback = {
onTagsFromConversationRemoved:(res) => {
    //...
}};
let code = await engine.removeTagsFromConversation(type, targetId, tagIds, callback);
//fun_removeTagsFromConversation_call
*/
export async function removeTagsFromConversation(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.tagIds.length === 0) {
            uni.showToast({
                title: 'tagIds 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let tagIds = arg.tagIds.split(',');
        let callback = {
            onTagsFromConversationRemoved: (res) => {
                addPrimaryResult({
                    title: 'removeTagsFromConversation_onTagsFromConversationRemoved',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.removeTagsFromConversation(type, targetId, tagIds, callback);

        addPrimaryResult({
            title: 'removeTagsFromConversation',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getTagsFromConversation_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getTagsFromConversation(type, targetId, callback);
//fun_getTagsFromConversation_call
*/
export async function getTagsFromConversation(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getTagsFromConversation_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getTagsFromConversation_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getTagsFromConversation(type, targetId, callback);

        addPrimaryResult({
            title: 'getTagsFromConversation',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getConversationsFromTagByPage_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getConversationsFromTagByPage(tagId, timestamp, count, callback);
//fun_getConversationsFromTagByPage_call
*/
export async function getConversationsFromTagByPage(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.timestamp.length === 0) {
            uni.showToast({
                title: 'timestamp 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.count.length === 0) {
            uni.showToast({
                title: 'count 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let timestamp = parseInt(arg.timestamp);
        let count = parseInt(arg.count);
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getConversationsFromTagByPage_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getConversationsFromTagByPage_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getConversationsFromTagByPage(tagId, timestamp, count, callback);

        addPrimaryResult({
            title: 'getConversationsFromTagByPage',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getUnreadCountByTag_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getUnreadCountByTag(tagId, contain, callback);
//fun_getUnreadCountByTag_call
*/
export async function getUnreadCountByTag(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.contain.length === 0) {
            uni.showToast({
                title: 'contain 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let contain = arg.contain;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getUnreadCountByTag_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getUnreadCountByTag_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getUnreadCountByTag(tagId, contain, callback);

        addPrimaryResult({
            title: 'getUnreadCountByTag',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_changeConversationTopStatusInTag_call
let callback = {
onConversationTopStatusInTagChanged:(res) => {
    //...
}};
let code = await engine.changeConversationTopStatusInTag(tagId, type, targetId, top, callback);
//fun_changeConversationTopStatusInTag_call
*/
export async function changeConversationTopStatusInTag(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.top.length === 0) {
            uni.showToast({
                title: 'top 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let top = arg.top;
        let callback = {
            onConversationTopStatusInTagChanged: (res) => {
                addPrimaryResult({
                    title: 'changeConversationTopStatusInTag_onConversationTopStatusInTagChanged',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.changeConversationTopStatusInTag(
            tagId,
            type,
            targetId,
            top,
            callback,
        );

        addPrimaryResult({
            title: 'changeConversationTopStatusInTag',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_getConversationTopStatusInTag_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.getConversationTopStatusInTag(tagId, type, targetId, callback);
//fun_getConversationTopStatusInTag_call
*/
export async function getConversationTopStatusInTag(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.type.length === 0) {
            uni.showToast({
                title: 'type 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.targetId.length === 0) {
            uni.showToast({
                title: 'targetId 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let type = parseInt(arg.type);
        let targetId = arg.targetId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'getConversationTopStatusInTag_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'getConversationTopStatusInTag_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.getConversationTopStatusInTag(tagId, type, targetId, callback);

        addPrimaryResult({
            title: 'getConversationTopStatusInTag',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_clearMessagesUnreadStatusByTag_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.clearMessagesUnreadStatusByTag(tagId, callback);
//fun_clearMessagesUnreadStatusByTag_call
*/
export async function clearMessagesUnreadStatusByTag(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'clearMessagesUnreadStatusByTag_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'clearMessagesUnreadStatusByTag_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.clearMessagesUnreadStatusByTag(tagId, callback);

        addPrimaryResult({
            title: 'clearMessagesUnreadStatusByTag',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}

/*
//fun_clearConversationsByTag_call
let callback = {
onSuccess:(res) => {
    //...
},
onError:(res) => {
    //...
}};
let code = await engine.clearConversationsByTag(tagId, deleteMessage, callback);
//fun_clearConversationsByTag_call
*/
export async function clearConversationsByTag(arg) {
    try {
        if (!helper.engineInited()) {
            return;
        }

        if (arg.tagId.length === 0) {
            uni.showToast({
                title: 'tagId 为空',
                icon: 'error',
            });
            return;
        }
        if (arg.deleteMessage.length === 0) {
            uni.showToast({
                title: 'deleteMessage 为空',
                icon: 'error',
            });
            return;
        }
        let tagId = arg.tagId;
        let deleteMessage = arg.deleteMessage;
        let callback = {
            onSuccess: (res) => {
                addPrimaryResult({
                    title: 'clearConversationsByTag_onSuccess',
                    data: res,
                });
            },
            onError: (res) => {
                addPrimaryResult({
                    title: 'clearConversationsByTag_onError',
                    data: res,
                });
            },
        };
        let res = await helper.RCIMIWEngineInstance.clearConversationsByTag(tagId, deleteMessage, callback);

        addPrimaryResult({
            title: 'clearConversationsByTag',
            data: res,
        });
    } catch (e) {
        console.log(e);
    }
}
