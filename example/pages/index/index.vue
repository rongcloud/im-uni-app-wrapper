<template>
	<view class="container">
		<uni-collapse accordion>
			<uni-collapse-item :title="item.title + '(' + item.list.length + ')'" v-for="(item, index) in functionList" :key="index">
			    <view class="content">
			    	<view v-for="(inter, _index) in item.list"
			    		:key="_index">
			    		<button type="primary" plain="true" size="mini" class="btn"
							@click="() => { inter.params && inter.params.length ? showForm(inter) : inter.action()}"
			    		>{{inter.name}}</button>
			    	</view>
			    </view>
			</uni-collapse-item>
		</uni-collapse>
		<view class="footer" v-if="resultList.length > 0" >
			<view class="footer-title" :style="{ flex: 1, color: statusColor[resultList[0].status] }">
					{{resultList.length - 1}}. {{resultList[0].title}}
					{{resultList[0].code !== undefined ? '(' : ''}} {{resultList[0].code}} {{resultList[0].code !== undefined ? ')' : ''}}
			</view>
			<view class="footer-right">
				<view class="footer-btn" @click="showDetail">
					详情
				</view>
				<navigator class="footer-btn" url="../resultList/resultList">更多>></navigator>
			</view>
		</view>
		
		<!-- 详情弹窗 -->
		<uni-popup ref="popup" type="dialog">
			<uni-popup-dialog mode="base" type="info"
				:duration="2000" 
				:before-close="true" 
				@close="closeDetail" 
				@confirm="closeDetail()"
				title="详情信息">
				<scroll-view scroll-y="true" style="height: 70vh;" v-if="resultList.length > 0">
					<wg-json-view v-if="getShowDetailState(resultList[0].data)" ref="jsonView" class="uni-border" :collapsable="true"
					            style="padding: 16upx;" :obj="resultList[0].data"></wg-json-view>
					<view v-else>{{resultList[0].data}}</view>
				</scroll-view>
			</uni-popup-dialog>
			
		</uni-popup>
		
		<!-- 参数弹窗 -->
		<uni-popup ref="formPopup" type="dialog">
			<uni-popup-dialog mode="base" type="info"
				:duration="2000" 
				:before-close="true" 
				@close="closeForm" 
				@confirm="runAction"
				:title="curFormInfo.name"
			>
				<scroll-view scroll-y="true" style="height: 70vh;">
					<view  v-if="curFormVisible">
						<view class="" v-for="(item, index) in curFormInfo.params" :key="item.key" style="margin-bottom: 10px;">
							<view class="">
								{{item.name || item.key}}:
							</view>
							<view class="" v-if="item.type === 'boolean'">
								<!-- <checkbox :value="index" :checked="item.value" /> -->
								<switch :checked="item.value" @change="switchChange(item.key, !item.value)" />
							</view>
							<view class="" v-else-if="item.type === 'number'">
								<input  type="number" v-model="item.value" :placeholder="item.placeholder" style="border: 1px solid #999999;padding: 3px"/>
							</view>
							<view class="" v-else-if="item.type === 'textarea'">
								<textarea v-model="item.value" :placeholder="item.placeholder" style="border: 1px solid #999999;padding: 3px"/>
							</view>
							<view class="" v-else-if="item.type === 'picker'">
								<picker @change="(e) => {bindPickerChange(e, item.key)}" :value="item.valueIndex" :range="item.list" range-key="label">
									<view class="uni-input" style="background-color: #C0C0C0;">{{item.list[item.valueIndex].label}}</view>
								</picker>
							</view>
							<view class="" v-else>
								<input  type="text" v-model="item.value" :placeholder="item.placeholder" maxlength="-1" style="border: 1px solid #999999;padding: 3px"/>
							</view>
						</view>
					</view>
				</scroll-view>
			</uni-popup-dialog>
			
		</uni-popup>
	</view>
</template>


<script>
	import functionList from '../../function/index.js'
	import {resultList} from '../../util/common.js'
	import { statusColor, isObject, isArray } from '../../util/utils.js'
	import { addSuccessResult } from '../../util/common.js'
	
	const RCUniPush = uni.requireNativePlugin('RongCloud-Push-RCUniPush')
	
	export default {
		data() {
			return {
				title: 'Hello',
				resultList: resultList,
				statusColor: statusColor,
				// 方法列表
				functionList: functionList,
				// 表单相关字段
				curFormInfo: {},
				curFormVisible: false
			}
		},
		onLoad() {
			console.log('设置 push 事件');
			RCUniPush.setPushEventListener((data) => {
				addSuccessResult({
					title: '点击了推送',
					data
				})
			});
		},
		computed: {},
		methods: {
			showDetail(){
				this.$refs.popup.open()
			},
			closeDetail() {
				this.$refs.popup.close()
			},
			getShowDetailState(val) {
				return isArray(val) || isObject(val) ? true : false
			},
			showForm(info) {
				this.curFormInfo = info
				this.curFormInfo.before && this.curFormInfo.before()
				
				this.curFormVisible = true
				this.$refs.formPopup.open()
			},
			closeForm() {
				this.$refs.formPopup.close()
				this.curFormVisible = false
				// this.curFormInfo = {}
			},
			runAction() {
				const params = {}
				this.curFormInfo.params && this.curFormInfo.params.forEach((item) => {
					params[item.key] = item.value
				})
				console.log(params)
				this.curFormInfo.action && this.curFormInfo.action(params)
				this.$refs.formPopup.close()
				this.curFormVisible = false
				// this.curFormInfo = {}
			},
			switchChange(key, value) {
				this.curFormInfo.params.forEach(item => {
					if (item.key === key) {
						item.value = value
					}
				})
			},
			bindPickerChange(event, key) {
				console.log(key)
				this.curFormInfo.params.forEach(item => {
					if (item.key === key) {
						item.valueIndex = event.detail.value
						item.value = item.list[item.valueIndex].value
					}
				})
			},
		}
	}
</script>

<style>
	.container {
		padding-bottom: 80px;
	}
	.content {
		padding: 10px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: flex-start;
	}
	.btn {
		margin-bottom: 10px;
		margin-right: 10px;
		margin-left: 10px;
	}
	.detail-container {
		max-height: 70vh;
		overflow: scroll;
	}
	.footer {
		padding: 10px 7px;
		display: flex;
		justify-content: space-between;
		align-items: space-between;
		background-color: #c0c0c0;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		color: #fff;
		font-size: 16px;
		padding-bottom: 0;  
  		padding-bottom: constant(safe-area-inset-bottom);  
  		padding-bottom: env(safe-area-inset-bottom);  
	}
	.footer-right {
		width: 65px;
	}
	.footer-btn {
		margin-left: 5px;
		padding: 3px;
		color: #2DB7F5
	}
	.footer-title {
		flex: 1;
		word-break: break-word;
	}
</style>
