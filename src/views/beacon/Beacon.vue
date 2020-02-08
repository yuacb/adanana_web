<template>
	<div>
		<CCard>
			<CCardHeader>
				<CIcon name="cil-drop" /> 设备添加，对比，统计
			</CCardHeader>
			<CCardBody>
				<CRow>
					<textarea v-model.trim="beacons" rows="5" cols="100"></textarea>
					<button v-on:click="fx_insert_beacon">提交</button>
				</CRow>
			</CCardBody>
		</CCard>
		<CCard>
			<CCardHeader>
				<CIcon name="cil-drop" /> 已配设备
			</CCardHeader>
			<CCardBody>
				<CRow> 
				</CRow>
			</CCardBody>
		</CCard>
	</div>
</template>

<script>
	export default {
		name: 'Beacon',
		data() {
			return {
				beacons: "",
			}
		},
		methods: {
			//注册 页面跳转
			fx_insert_beacon: function() {
				if(""== this.$data.beacons){
					console.log("不提交");
					return; 
				}
				this.$http.post("http://127.0.0.1:8080/app/beacon/insert",{beacons:this.$data.beacons}  , {
					emulateJSON: true
				}).then(function(res) {  });
			},
		}
	}
</script>

<style>
</style>
