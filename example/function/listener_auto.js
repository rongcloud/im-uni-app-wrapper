import { addSuccessResult, addErrorResult, addWarnResult, addPrimaryResult } from '../util/common.js';
import helper from '../common/helper.js';

const initListener = function () {
    console.log('初始化监听');
    if (!helper.engineInited()) {
        return;
    }
    let engine = helper.RCIMIWEngineInstance;

    /*
    //callback_onMessageReceived_call
    engine.setOnMessageReceivedListener((res) => {
        //...
    });
    //callback_onMessageReceived_call
    */
    engine.setOnMessageReceivedListener((res) => {
        addPrimaryResult({
            title: 'onMessageReceived',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConnectionStatusChanged_call
    engine.setOnConnectionStatusChangedListener((res) => {
        //...
    });
    //callback_onConnectionStatusChanged_call
    */
    engine.setOnConnectionStatusChangedListener((res) => {
        addPrimaryResult({
            title: 'onConnectionStatusChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationTopStatusSynced_call
    engine.setOnConversationTopStatusSyncedListener((res) => {
        //...
    });
    //callback_onConversationTopStatusSynced_call
    */
    engine.setOnConversationTopStatusSyncedListener((res) => {
        addPrimaryResult({
            title: 'onConversationTopStatusSynced',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationNotificationLevelSynced_call
    engine.setOnConversationNotificationLevelSyncedListener((res) => {
        //...
    });
    //callback_onConversationNotificationLevelSynced_call
    */
    engine.setOnConversationNotificationLevelSyncedListener((res) => {
        addPrimaryResult({
            title: 'onConversationNotificationLevelSynced',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onRemoteMessageRecalled_call
    engine.setOnRemoteMessageRecalledListener((res) => {
        //...
    });
    //callback_onRemoteMessageRecalled_call
    */
    engine.setOnRemoteMessageRecalledListener((res) => {
        addPrimaryResult({
            title: 'onRemoteMessageRecalled',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onPrivateReadReceiptReceived_call
    engine.setOnPrivateReadReceiptReceivedListener((res) => {
        //...
    });
    //callback_onPrivateReadReceiptReceived_call
    */
    engine.setOnPrivateReadReceiptReceivedListener((res) => {
        addPrimaryResult({
            title: 'onPrivateReadReceiptReceived',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onRemoteMessageExpansionUpdated_call
    engine.setOnRemoteMessageExpansionUpdatedListener((res) => {
        //...
    });
    //callback_onRemoteMessageExpansionUpdated_call
    */
    engine.setOnRemoteMessageExpansionUpdatedListener((res) => {
        addPrimaryResult({
            title: 'onRemoteMessageExpansionUpdated',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onRemoteMessageExpansionForKeyRemoved_call
    engine.setOnRemoteMessageExpansionForKeyRemovedListener((res) => {
        //...
    });
    //callback_onRemoteMessageExpansionForKeyRemoved_call
    */
    engine.setOnRemoteMessageExpansionForKeyRemovedListener((res) => {
        addPrimaryResult({
            title: 'onRemoteMessageExpansionForKeyRemoved',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomMemberChanged_call
    engine.setOnChatRoomMemberChangedListener((res) => {
        //...
    });
    //callback_onChatRoomMemberChanged_call
    */
    engine.setOnChatRoomMemberChangedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomMemberChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onTypingStatusChanged_call
    engine.setOnTypingStatusChangedListener((res) => {
        //...
    });
    //callback_onTypingStatusChanged_call
    */
    engine.setOnTypingStatusChangedListener((res) => {
        addPrimaryResult({
            title: 'onTypingStatusChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationReadStatusSyncMessageReceived_call
    engine.setOnConversationReadStatusSyncMessageReceivedListener((res) => {
        //...
    });
    //callback_onConversationReadStatusSyncMessageReceived_call
    */
    engine.setOnConversationReadStatusSyncMessageReceivedListener((res) => {
        addPrimaryResult({
            title: 'onConversationReadStatusSyncMessageReceived',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomEntriesSynced_call
    engine.setOnChatRoomEntriesSyncedListener((res) => {
        //...
    });
    //callback_onChatRoomEntriesSynced_call
    */
    engine.setOnChatRoomEntriesSyncedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomEntriesSynced',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomEntriesChanged_call
    engine.setOnChatRoomEntriesChangedListener((res) => {
        //...
    });
    //callback_onChatRoomEntriesChanged_call
    */
    engine.setOnChatRoomEntriesChangedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomEntriesChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onRemoteUltraGroupMessageExpansionUpdated_call
    engine.setOnRemoteUltraGroupMessageExpansionUpdatedListener((res) => {
        //...
    });
    //callback_onRemoteUltraGroupMessageExpansionUpdated_call
    */
    engine.setOnRemoteUltraGroupMessageExpansionUpdatedListener((res) => {
        addPrimaryResult({
            title: 'onRemoteUltraGroupMessageExpansionUpdated',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onRemoteUltraGroupMessageModified_call
    engine.setOnRemoteUltraGroupMessageModifiedListener((res) => {
        //...
    });
    //callback_onRemoteUltraGroupMessageModified_call
    */
    engine.setOnRemoteUltraGroupMessageModifiedListener((res) => {
        addPrimaryResult({
            title: 'onRemoteUltraGroupMessageModified',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onRemoteUltraGroupMessageRecalled_call
    engine.setOnRemoteUltraGroupMessageRecalledListener((res) => {
        //...
    });
    //callback_onRemoteUltraGroupMessageRecalled_call
    */
    engine.setOnRemoteUltraGroupMessageRecalledListener((res) => {
        addPrimaryResult({
            title: 'onRemoteUltraGroupMessageRecalled',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupReadTimeReceived_call
    engine.setOnUltraGroupReadTimeReceivedListener((res) => {
        //...
    });
    //callback_onUltraGroupReadTimeReceived_call
    */
    engine.setOnUltraGroupReadTimeReceivedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupReadTimeReceived',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupTypingStatusChanged_call
    engine.setOnUltraGroupTypingStatusChangedListener((res) => {
        //...
    });
    //callback_onUltraGroupTypingStatusChanged_call
    */
    engine.setOnUltraGroupTypingStatusChangedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupTypingStatusChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessageBlocked_call
    engine.setOnMessageBlockedListener((res) => {
        //...
    });
    //callback_onMessageBlocked_call
    */
    engine.setOnMessageBlockedListener((res) => {
        addPrimaryResult({
            title: 'onMessageBlocked',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomStatusChanged_call
    engine.setOnChatRoomStatusChangedListener((res) => {
        //...
    });
    //callback_onChatRoomStatusChanged_call
    */
    engine.setOnChatRoomStatusChangedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomStatusChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onGroupMessageReadReceiptRequestReceived_call
    engine.setOnGroupMessageReadReceiptRequestReceivedListener((res) => {
        //...
    });
    //callback_onGroupMessageReadReceiptRequestReceived_call
    */
    engine.setOnGroupMessageReadReceiptRequestReceivedListener((res) => {
        addPrimaryResult({
            title: 'onGroupMessageReadReceiptRequestReceived',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onGroupMessageReadReceiptResponseReceived_call
    engine.setOnGroupMessageReadReceiptResponseReceivedListener((res) => {
        //...
    });
    //callback_onGroupMessageReadReceiptResponseReceived_call
    */
    engine.setOnGroupMessageReadReceiptResponseReceivedListener((res) => {
        addPrimaryResult({
            title: 'onGroupMessageReadReceiptResponseReceived',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConnected_call
    engine.setOnConnectedListener((res) => {
        //...
    });
    //callback_onConnected_call
    */
    engine.setOnConnectedListener((res) => {
        addPrimaryResult({
            title: 'onConnected',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onDatabaseOpened_call
    engine.setOnDatabaseOpenedListener((res) => {
        //...
    });
    //callback_onDatabaseOpened_call
    */
    engine.setOnDatabaseOpenedListener((res) => {
        addPrimaryResult({
            title: 'onDatabaseOpened',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationLoaded_call
    engine.setOnConversationLoadedListener((res) => {
        //...
    });
    //callback_onConversationLoaded_call
    */
    engine.setOnConversationLoadedListener((res) => {
        addPrimaryResult({
            title: 'onConversationLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationsLoaded_call
    engine.setOnConversationsLoadedListener((res) => {
        //...
    });
    //callback_onConversationsLoaded_call
    */
    engine.setOnConversationsLoadedListener((res) => {
        addPrimaryResult({
            title: 'onConversationsLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationRemoved_call
    engine.setOnConversationRemovedListener((res) => {
        //...
    });
    //callback_onConversationRemoved_call
    */
    engine.setOnConversationRemovedListener((res) => {
        addPrimaryResult({
            title: 'onConversationRemoved',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationsRemoved_call
    engine.setOnConversationsRemovedListener((res) => {
        //...
    });
    //callback_onConversationsRemoved_call
    */
    engine.setOnConversationsRemovedListener((res) => {
        addPrimaryResult({
            title: 'onConversationsRemoved',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onTotalUnreadCountLoaded_call
    engine.setOnTotalUnreadCountLoadedListener((res) => {
        //...
    });
    //callback_onTotalUnreadCountLoaded_call
    */
    engine.setOnTotalUnreadCountLoadedListener((res) => {
        addPrimaryResult({
            title: 'onTotalUnreadCountLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUnreadCountLoaded_call
    engine.setOnUnreadCountLoadedListener((res) => {
        //...
    });
    //callback_onUnreadCountLoaded_call
    */
    engine.setOnUnreadCountLoadedListener((res) => {
        addPrimaryResult({
            title: 'onUnreadCountLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUnreadCountByConversationTypesLoaded_call
    engine.setOnUnreadCountByConversationTypesLoadedListener((res) => {
        //...
    });
    //callback_onUnreadCountByConversationTypesLoaded_call
    */
    engine.setOnUnreadCountByConversationTypesLoadedListener((res) => {
        addPrimaryResult({
            title: 'onUnreadCountByConversationTypesLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUnreadMentionedCountLoaded_call
    engine.setOnUnreadMentionedCountLoadedListener((res) => {
        //...
    });
    //callback_onUnreadMentionedCountLoaded_call
    */
    engine.setOnUnreadMentionedCountLoadedListener((res) => {
        addPrimaryResult({
            title: 'onUnreadMentionedCountLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupAllUnreadCountLoaded_call
    engine.setOnUltraGroupAllUnreadCountLoadedListener((res) => {
        //...
    });
    //callback_onUltraGroupAllUnreadCountLoaded_call
    */
    engine.setOnUltraGroupAllUnreadCountLoadedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupAllUnreadCountLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupAllUnreadMentionedCountLoaded_call
    engine.setOnUltraGroupAllUnreadMentionedCountLoadedListener((res) => {
        //...
    });
    //callback_onUltraGroupAllUnreadMentionedCountLoaded_call
    */
    engine.setOnUltraGroupAllUnreadMentionedCountLoadedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupAllUnreadMentionedCountLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupConversationsSynced_call
    engine.setOnUltraGroupConversationsSyncedListener((res) => {
        //...
    });
    //callback_onUltraGroupConversationsSynced_call
    */
    engine.setOnUltraGroupConversationsSyncedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupConversationsSynced',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUnreadCountCleared_call
    engine.setOnUnreadCountClearedListener((res) => {
        //...
    });
    //callback_onUnreadCountCleared_call
    */
    engine.setOnUnreadCountClearedListener((res) => {
        addPrimaryResult({
            title: 'onUnreadCountCleared',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onDraftMessageSaved_call
    engine.setOnDraftMessageSavedListener((res) => {
        //...
    });
    //callback_onDraftMessageSaved_call
    */
    engine.setOnDraftMessageSavedListener((res) => {
        addPrimaryResult({
            title: 'onDraftMessageSaved',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onDraftMessageCleared_call
    engine.setOnDraftMessageClearedListener((res) => {
        //...
    });
    //callback_onDraftMessageCleared_call
    */
    engine.setOnDraftMessageClearedListener((res) => {
        addPrimaryResult({
            title: 'onDraftMessageCleared',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onDraftMessageLoaded_call
    engine.setOnDraftMessageLoadedListener((res) => {
        //...
    });
    //callback_onDraftMessageLoaded_call
    */
    engine.setOnDraftMessageLoadedListener((res) => {
        addPrimaryResult({
            title: 'onDraftMessageLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onBlockedConversationsLoaded_call
    engine.setOnBlockedConversationsLoadedListener((res) => {
        //...
    });
    //callback_onBlockedConversationsLoaded_call
    */
    engine.setOnBlockedConversationsLoadedListener((res) => {
        addPrimaryResult({
            title: 'onBlockedConversationsLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationTopStatusChanged_call
    engine.setOnConversationTopStatusChangedListener((res) => {
        //...
    });
    //callback_onConversationTopStatusChanged_call
    */
    engine.setOnConversationTopStatusChangedListener((res) => {
        addPrimaryResult({
            title: 'onConversationTopStatusChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationTopStatusLoaded_call
    engine.setOnConversationTopStatusLoadedListener((res) => {
        //...
    });
    //callback_onConversationTopStatusLoaded_call
    */
    engine.setOnConversationTopStatusLoadedListener((res) => {
        addPrimaryResult({
            title: 'onConversationTopStatusLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationReadStatusSynced_call
    engine.setOnConversationReadStatusSyncedListener((res) => {
        //...
    });
    //callback_onConversationReadStatusSynced_call
    */
    engine.setOnConversationReadStatusSyncedListener((res) => {
        addPrimaryResult({
            title: 'onConversationReadStatusSynced',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessageAttached_call
    engine.setOnMessageAttachedListener((res) => {
        //...
    });
    //callback_onMessageAttached_call
    */
    engine.setOnMessageAttachedListener((res) => {
        addPrimaryResult({
            title: 'onMessageAttached',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessageSent_call
    engine.setOnMessageSentListener((res) => {
        //...
    });
    //callback_onMessageSent_call
    */
    engine.setOnMessageSentListener((res) => {
        addPrimaryResult({
            title: 'onMessageSent',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMediaMessageAttached_call
    engine.setOnMediaMessageAttachedListener((res) => {
        //...
    });
    //callback_onMediaMessageAttached_call
    */
    engine.setOnMediaMessageAttachedListener((res) => {
        addPrimaryResult({
            title: 'onMediaMessageAttached',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMediaMessageSending_call
    engine.setOnMediaMessageSendingListener((res) => {
        //...
    });
    //callback_onMediaMessageSending_call
    */
    engine.setOnMediaMessageSendingListener((res) => {
        addPrimaryResult({
            title: 'onMediaMessageSending',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onSendingMediaMessageCanceled_call
    engine.setOnSendingMediaMessageCanceledListener((res) => {
        //...
    });
    //callback_onSendingMediaMessageCanceled_call
    */
    engine.setOnSendingMediaMessageCanceledListener((res) => {
        addPrimaryResult({
            title: 'onSendingMediaMessageCanceled',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMediaMessageSent_call
    engine.setOnMediaMessageSentListener((res) => {
        //...
    });
    //callback_onMediaMessageSent_call
    */
    engine.setOnMediaMessageSentListener((res) => {
        addPrimaryResult({
            title: 'onMediaMessageSent',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMediaMessageDownloading_call
    engine.setOnMediaMessageDownloadingListener((res) => {
        //...
    });
    //callback_onMediaMessageDownloading_call
    */
    engine.setOnMediaMessageDownloadingListener((res) => {
        addPrimaryResult({
            title: 'onMediaMessageDownloading',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMediaMessageDownloaded_call
    engine.setOnMediaMessageDownloadedListener((res) => {
        //...
    });
    //callback_onMediaMessageDownloaded_call
    */
    engine.setOnMediaMessageDownloadedListener((res) => {
        addPrimaryResult({
            title: 'onMediaMessageDownloaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onDownloadingMediaMessageCanceled_call
    engine.setOnDownloadingMediaMessageCanceledListener((res) => {
        //...
    });
    //callback_onDownloadingMediaMessageCanceled_call
    */
    engine.setOnDownloadingMediaMessageCanceledListener((res) => {
        addPrimaryResult({
            title: 'onDownloadingMediaMessageCanceled',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessagesLoaded_call
    engine.setOnMessagesLoadedListener((res) => {
        //...
    });
    //callback_onMessagesLoaded_call
    */
    engine.setOnMessagesLoadedListener((res) => {
        addPrimaryResult({
            title: 'onMessagesLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUnreadMentionedMessagesLoaded_call
    engine.setOnUnreadMentionedMessagesLoadedListener((res) => {
        //...
    });
    //callback_onUnreadMentionedMessagesLoaded_call
    */
    engine.setOnUnreadMentionedMessagesLoadedListener((res) => {
        addPrimaryResult({
            title: 'onUnreadMentionedMessagesLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onFirstUnreadMessageLoaded_call
    engine.setOnFirstUnreadMessageLoadedListener((res) => {
        //...
    });
    //callback_onFirstUnreadMessageLoaded_call
    */
    engine.setOnFirstUnreadMessageLoadedListener((res) => {
        addPrimaryResult({
            title: 'onFirstUnreadMessageLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessageInserted_call
    engine.setOnMessageInsertedListener((res) => {
        //...
    });
    //callback_onMessageInserted_call
    */
    engine.setOnMessageInsertedListener((res) => {
        addPrimaryResult({
            title: 'onMessageInserted',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessagesInserted_call
    engine.setOnMessagesInsertedListener((res) => {
        //...
    });
    //callback_onMessagesInserted_call
    */
    engine.setOnMessagesInsertedListener((res) => {
        addPrimaryResult({
            title: 'onMessagesInserted',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessagesCleared_call
    engine.setOnMessagesClearedListener((res) => {
        //...
    });
    //callback_onMessagesCleared_call
    */
    engine.setOnMessagesClearedListener((res) => {
        addPrimaryResult({
            title: 'onMessagesCleared',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onLocalMessagesDeleted_call
    engine.setOnLocalMessagesDeletedListener((res) => {
        //...
    });
    //callback_onLocalMessagesDeleted_call
    */
    engine.setOnLocalMessagesDeletedListener((res) => {
        addPrimaryResult({
            title: 'onLocalMessagesDeleted',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessagesDeleted_call
    engine.setOnMessagesDeletedListener((res) => {
        //...
    });
    //callback_onMessagesDeleted_call
    */
    engine.setOnMessagesDeletedListener((res) => {
        addPrimaryResult({
            title: 'onMessagesDeleted',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessageRecalled_call
    engine.setOnMessageRecalledListener((res) => {
        //...
    });
    //callback_onMessageRecalled_call
    */
    engine.setOnMessageRecalledListener((res) => {
        addPrimaryResult({
            title: 'onMessageRecalled',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onPrivateReadReceiptMessageSent_call
    engine.setOnPrivateReadReceiptMessageSentListener((res) => {
        //...
    });
    //callback_onPrivateReadReceiptMessageSent_call
    */
    engine.setOnPrivateReadReceiptMessageSentListener((res) => {
        addPrimaryResult({
            title: 'onPrivateReadReceiptMessageSent',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessageExpansionUpdated_call
    engine.setOnMessageExpansionUpdatedListener((res) => {
        //...
    });
    //callback_onMessageExpansionUpdated_call
    */
    engine.setOnMessageExpansionUpdatedListener((res) => {
        addPrimaryResult({
            title: 'onMessageExpansionUpdated',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessageExpansionForKeysRemoved_call
    engine.setOnMessageExpansionForKeysRemovedListener((res) => {
        //...
    });
    //callback_onMessageExpansionForKeysRemoved_call
    */
    engine.setOnMessageExpansionForKeysRemovedListener((res) => {
        addPrimaryResult({
            title: 'onMessageExpansionForKeysRemoved',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessageReceiveStatusChanged_call
    engine.setOnMessageReceiveStatusChangedListener((res) => {
        //...
    });
    //callback_onMessageReceiveStatusChanged_call
    */
    engine.setOnMessageReceiveStatusChangedListener((res) => {
        addPrimaryResult({
            title: 'onMessageReceiveStatusChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessageSentStatusChanged_call
    engine.setOnMessageSentStatusChangedListener((res) => {
        //...
    });
    //callback_onMessageSentStatusChanged_call
    */
    engine.setOnMessageSentStatusChangedListener((res) => {
        addPrimaryResult({
            title: 'onMessageSentStatusChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomJoined_call
    engine.setOnChatRoomJoinedListener((res) => {
        //...
    });
    //callback_onChatRoomJoined_call
    */
    engine.setOnChatRoomJoinedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomJoined',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomJoining_call
    engine.setOnChatRoomJoiningListener((res) => {
        //...
    });
    //callback_onChatRoomJoining_call
    */
    engine.setOnChatRoomJoiningListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomJoining',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomLeft_call
    engine.setOnChatRoomLeftListener((res) => {
        //...
    });
    //callback_onChatRoomLeft_call
    */
    engine.setOnChatRoomLeftListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomLeft',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomMessagesLoaded_call
    engine.setOnChatRoomMessagesLoadedListener((res) => {
        //...
    });
    //callback_onChatRoomMessagesLoaded_call
    */
    engine.setOnChatRoomMessagesLoadedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomMessagesLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomEntryAdded_call
    engine.setOnChatRoomEntryAddedListener((res) => {
        //...
    });
    //callback_onChatRoomEntryAdded_call
    */
    engine.setOnChatRoomEntryAddedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomEntryAdded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomEntriesAdded_call
    engine.setOnChatRoomEntriesAddedListener((res) => {
        //...
    });
    //callback_onChatRoomEntriesAdded_call
    */
    engine.setOnChatRoomEntriesAddedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomEntriesAdded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomEntryLoaded_call
    engine.setOnChatRoomEntryLoadedListener((res) => {
        //...
    });
    //callback_onChatRoomEntryLoaded_call
    */
    engine.setOnChatRoomEntryLoadedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomEntryLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomAllEntriesLoaded_call
    engine.setOnChatRoomAllEntriesLoadedListener((res) => {
        //...
    });
    //callback_onChatRoomAllEntriesLoaded_call
    */
    engine.setOnChatRoomAllEntriesLoadedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomAllEntriesLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomEntryRemoved_call
    engine.setOnChatRoomEntryRemovedListener((res) => {
        //...
    });
    //callback_onChatRoomEntryRemoved_call
    */
    engine.setOnChatRoomEntryRemovedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomEntryRemoved',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onChatRoomEntriesRemoved_call
    engine.setOnChatRoomEntriesRemovedListener((res) => {
        //...
    });
    //callback_onChatRoomEntriesRemoved_call
    */
    engine.setOnChatRoomEntriesRemovedListener((res) => {
        addPrimaryResult({
            title: 'onChatRoomEntriesRemoved',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onBlacklistAdded_call
    engine.setOnBlacklistAddedListener((res) => {
        //...
    });
    //callback_onBlacklistAdded_call
    */
    engine.setOnBlacklistAddedListener((res) => {
        addPrimaryResult({
            title: 'onBlacklistAdded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onBlacklistRemoved_call
    engine.setOnBlacklistRemovedListener((res) => {
        //...
    });
    //callback_onBlacklistRemoved_call
    */
    engine.setOnBlacklistRemovedListener((res) => {
        addPrimaryResult({
            title: 'onBlacklistRemoved',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onBlacklistStatusLoaded_call
    engine.setOnBlacklistStatusLoadedListener((res) => {
        //...
    });
    //callback_onBlacklistStatusLoaded_call
    */
    engine.setOnBlacklistStatusLoadedListener((res) => {
        addPrimaryResult({
            title: 'onBlacklistStatusLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onBlacklistLoaded_call
    engine.setOnBlacklistLoadedListener((res) => {
        //...
    });
    //callback_onBlacklistLoaded_call
    */
    engine.setOnBlacklistLoadedListener((res) => {
        addPrimaryResult({
            title: 'onBlacklistLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessagesSearched_call
    engine.setOnMessagesSearchedListener((res) => {
        //...
    });
    //callback_onMessagesSearched_call
    */
    engine.setOnMessagesSearchedListener((res) => {
        addPrimaryResult({
            title: 'onMessagesSearched',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessagesSearchedByTimeRange_call
    engine.setOnMessagesSearchedByTimeRangeListener((res) => {
        //...
    });
    //callback_onMessagesSearchedByTimeRange_call
    */
    engine.setOnMessagesSearchedByTimeRangeListener((res) => {
        addPrimaryResult({
            title: 'onMessagesSearchedByTimeRange',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessagesSearchedByUserId_call
    engine.setOnMessagesSearchedByUserIdListener((res) => {
        //...
    });
    //callback_onMessagesSearchedByUserId_call
    */
    engine.setOnMessagesSearchedByUserIdListener((res) => {
        addPrimaryResult({
            title: 'onMessagesSearchedByUserId',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationsSearched_call
    engine.setOnConversationsSearchedListener((res) => {
        //...
    });
    //callback_onConversationsSearched_call
    */
    engine.setOnConversationsSearchedListener((res) => {
        addPrimaryResult({
            title: 'onConversationsSearched',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onGroupReadReceiptRequestSent_call
    engine.setOnGroupReadReceiptRequestSentListener((res) => {
        //...
    });
    //callback_onGroupReadReceiptRequestSent_call
    */
    engine.setOnGroupReadReceiptRequestSentListener((res) => {
        addPrimaryResult({
            title: 'onGroupReadReceiptRequestSent',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onGroupReadReceiptResponseSent_call
    engine.setOnGroupReadReceiptResponseSentListener((res) => {
        //...
    });
    //callback_onGroupReadReceiptResponseSent_call
    */
    engine.setOnGroupReadReceiptResponseSentListener((res) => {
        addPrimaryResult({
            title: 'onGroupReadReceiptResponseSent',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onNotificationQuietHoursChanged_call
    engine.setOnNotificationQuietHoursChangedListener((res) => {
        //...
    });
    //callback_onNotificationQuietHoursChanged_call
    */
    engine.setOnNotificationQuietHoursChangedListener((res) => {
        addPrimaryResult({
            title: 'onNotificationQuietHoursChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onNotificationQuietHoursRemoved_call
    engine.setOnNotificationQuietHoursRemovedListener((res) => {
        //...
    });
    //callback_onNotificationQuietHoursRemoved_call
    */
    engine.setOnNotificationQuietHoursRemovedListener((res) => {
        addPrimaryResult({
            title: 'onNotificationQuietHoursRemoved',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onNotificationQuietHoursLoaded_call
    engine.setOnNotificationQuietHoursLoadedListener((res) => {
        //...
    });
    //callback_onNotificationQuietHoursLoaded_call
    */
    engine.setOnNotificationQuietHoursLoadedListener((res) => {
        addPrimaryResult({
            title: 'onNotificationQuietHoursLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationNotificationLevelChanged_call
    engine.setOnConversationNotificationLevelChangedListener((res) => {
        //...
    });
    //callback_onConversationNotificationLevelChanged_call
    */
    engine.setOnConversationNotificationLevelChangedListener((res) => {
        addPrimaryResult({
            title: 'onConversationNotificationLevelChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationNotificationLevelLoaded_call
    engine.setOnConversationNotificationLevelLoadedListener((res) => {
        //...
    });
    //callback_onConversationNotificationLevelLoaded_call
    */
    engine.setOnConversationNotificationLevelLoadedListener((res) => {
        addPrimaryResult({
            title: 'onConversationNotificationLevelLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationTypeNotificationLevelChanged_call
    engine.setOnConversationTypeNotificationLevelChangedListener((res) => {
        //...
    });
    //callback_onConversationTypeNotificationLevelChanged_call
    */
    engine.setOnConversationTypeNotificationLevelChangedListener((res) => {
        addPrimaryResult({
            title: 'onConversationTypeNotificationLevelChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationTypeNotificationLevelLoaded_call
    engine.setOnConversationTypeNotificationLevelLoadedListener((res) => {
        //...
    });
    //callback_onConversationTypeNotificationLevelLoaded_call
    */
    engine.setOnConversationTypeNotificationLevelLoadedListener((res) => {
        addPrimaryResult({
            title: 'onConversationTypeNotificationLevelLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupDefaultNotificationLevelChanged_call
    engine.setOnUltraGroupDefaultNotificationLevelChangedListener((res) => {
        //...
    });
    //callback_onUltraGroupDefaultNotificationLevelChanged_call
    */
    engine.setOnUltraGroupDefaultNotificationLevelChangedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupDefaultNotificationLevelChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupDefaultNotificationLevelLoaded_call
    engine.setOnUltraGroupDefaultNotificationLevelLoadedListener((res) => {
        //...
    });
    //callback_onUltraGroupDefaultNotificationLevelLoaded_call
    */
    engine.setOnUltraGroupDefaultNotificationLevelLoadedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupDefaultNotificationLevelLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupChannelDefaultNotificationLevelChanged_call
    engine.setOnUltraGroupChannelDefaultNotificationLevelChangedListener((res) => {
        //...
    });
    //callback_onUltraGroupChannelDefaultNotificationLevelChanged_call
    */
    engine.setOnUltraGroupChannelDefaultNotificationLevelChangedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupChannelDefaultNotificationLevelChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupChannelDefaultNotificationLevelLoaded_call
    engine.setOnUltraGroupChannelDefaultNotificationLevelLoadedListener((res) => {
        //...
    });
    //callback_onUltraGroupChannelDefaultNotificationLevelLoaded_call
    */
    engine.setOnUltraGroupChannelDefaultNotificationLevelLoadedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupChannelDefaultNotificationLevelLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onPushContentShowStatusChanged_call
    engine.setOnPushContentShowStatusChangedListener((res) => {
        //...
    });
    //callback_onPushContentShowStatusChanged_call
    */
    engine.setOnPushContentShowStatusChangedListener((res) => {
        addPrimaryResult({
            title: 'onPushContentShowStatusChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onPushLanguageChanged_call
    engine.setOnPushLanguageChangedListener((res) => {
        //...
    });
    //callback_onPushLanguageChanged_call
    */
    engine.setOnPushLanguageChangedListener((res) => {
        addPrimaryResult({
            title: 'onPushLanguageChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onPushReceiveStatusChanged_call
    engine.setOnPushReceiveStatusChangedListener((res) => {
        //...
    });
    //callback_onPushReceiveStatusChanged_call
    */
    engine.setOnPushReceiveStatusChangedListener((res) => {
        addPrimaryResult({
            title: 'onPushReceiveStatusChanged',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onMessageCountLoaded_call
    engine.setOnMessageCountLoadedListener((res) => {
        //...
    });
    //callback_onMessageCountLoaded_call
    */
    engine.setOnMessageCountLoadedListener((res) => {
        addPrimaryResult({
            title: 'onMessageCountLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onTopConversationsLoaded_call
    engine.setOnTopConversationsLoadedListener((res) => {
        //...
    });
    //callback_onTopConversationsLoaded_call
    */
    engine.setOnTopConversationsLoadedListener((res) => {
        addPrimaryResult({
            title: 'onTopConversationsLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onGroupMessageToDesignatedUsersAttached_call
    engine.setOnGroupMessageToDesignatedUsersAttachedListener((res) => {
        //...
    });
    //callback_onGroupMessageToDesignatedUsersAttached_call
    */
    engine.setOnGroupMessageToDesignatedUsersAttachedListener((res) => {
        addPrimaryResult({
            title: 'onGroupMessageToDesignatedUsersAttached',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onGroupMessageToDesignatedUsersSent_call
    engine.setOnGroupMessageToDesignatedUsersSentListener((res) => {
        //...
    });
    //callback_onGroupMessageToDesignatedUsersSent_call
    */
    engine.setOnGroupMessageToDesignatedUsersSentListener((res) => {
        addPrimaryResult({
            title: 'onGroupMessageToDesignatedUsersSent',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupReadStatusSynced_call
    engine.setOnUltraGroupReadStatusSyncedListener((res) => {
        //...
    });
    //callback_onUltraGroupReadStatusSynced_call
    */
    engine.setOnUltraGroupReadStatusSyncedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupReadStatusSynced',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onConversationsLoadedForAllChannel_call
    engine.setOnConversationsLoadedForAllChannelListener((res) => {
        //...
    });
    //callback_onConversationsLoadedForAllChannel_call
    */
    engine.setOnConversationsLoadedForAllChannelListener((res) => {
        addPrimaryResult({
            title: 'onConversationsLoadedForAllChannel',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupUnreadMentionedCountLoaded_call
    engine.setOnUltraGroupUnreadMentionedCountLoadedListener((res) => {
        //...
    });
    //callback_onUltraGroupUnreadMentionedCountLoaded_call
    */
    engine.setOnUltraGroupUnreadMentionedCountLoadedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupUnreadMentionedCountLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupUnreadCountLoaded_call
    engine.setOnUltraGroupUnreadCountLoadedListener((res) => {
        //...
    });
    //callback_onUltraGroupUnreadCountLoaded_call
    */
    engine.setOnUltraGroupUnreadCountLoadedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupUnreadCountLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupMessageModified_call
    engine.setOnUltraGroupMessageModifiedListener((res) => {
        //...
    });
    //callback_onUltraGroupMessageModified_call
    */
    engine.setOnUltraGroupMessageModifiedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupMessageModified',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupMessageRecalled_call
    engine.setOnUltraGroupMessageRecalledListener((res) => {
        //...
    });
    //callback_onUltraGroupMessageRecalled_call
    */
    engine.setOnUltraGroupMessageRecalledListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupMessageRecalled',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupMessagesCleared_call
    engine.setOnUltraGroupMessagesClearedListener((res) => {
        //...
    });
    //callback_onUltraGroupMessagesCleared_call
    */
    engine.setOnUltraGroupMessagesClearedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupMessagesCleared',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupMessagesClearedForAllChannel_call
    engine.setOnUltraGroupMessagesClearedForAllChannelListener((res) => {
        //...
    });
    //callback_onUltraGroupMessagesClearedForAllChannel_call
    */
    engine.setOnUltraGroupMessagesClearedForAllChannelListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupMessagesClearedForAllChannel',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupTypingStatusSent_call
    engine.setOnUltraGroupTypingStatusSentListener((res) => {
        //...
    });
    //callback_onUltraGroupTypingStatusSent_call
    */
    engine.setOnUltraGroupTypingStatusSentListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupTypingStatusSent',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onBatchRemoteUltraGroupMessagesLoaded_call
    engine.setOnBatchRemoteUltraGroupMessagesLoadedListener((res) => {
        //...
    });
    //callback_onBatchRemoteUltraGroupMessagesLoaded_call
    */
    engine.setOnBatchRemoteUltraGroupMessagesLoadedListener((res) => {
        addPrimaryResult({
            title: 'onBatchRemoteUltraGroupMessagesLoaded',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupMessageExpansionUpdated_call
    engine.setOnUltraGroupMessageExpansionUpdatedListener((res) => {
        //...
    });
    //callback_onUltraGroupMessageExpansionUpdated_call
    */
    engine.setOnUltraGroupMessageExpansionUpdatedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupMessageExpansionUpdated',
            data: res,
            code: res.code,
        });
    });

    /*
    //callback_onUltraGroupMessageExpansionForKeysRemoved_call
    engine.setOnUltraGroupMessageExpansionForKeysRemovedListener((res) => {
        //...
    });
    //callback_onUltraGroupMessageExpansionForKeysRemoved_call
    */
    engine.setOnUltraGroupMessageExpansionForKeysRemovedListener((res) => {
        addPrimaryResult({
            title: 'onUltraGroupMessageExpansionForKeysRemoved',
            data: res,
            code: res.code,
        });
    });
};

export default initListener;
