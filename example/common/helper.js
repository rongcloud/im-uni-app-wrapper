import helper from '../common/helper.js'; 
let RCIMIWEngineInstance = null;  
function engineInited() {
    console.log('调用engineInited方法')
    if (helper.RCIMIWEngineInstance == null) {
		console.log('engineInited方法:false')
    	uni.showToast({
    		title: '引擎未初始化',
    		icon: 'error'
    	})
    	return false
    }
	return true
}
export default {  
    RCIMIWEngineInstance,
	engineInited,
}