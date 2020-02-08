<template>
	<div>
		<CContainer class="d-flex align-items-center min-vh-100">
			<CRow class="justify-content-center">
				<CCol md="8">
					<CCardGroup>
						<CCard class="p-4">
							<CCardBody>
								<CForm>
									<h1>登陆</h1>
									<p v-if="loginFail == 'true'" class="text-danger">账号或者密码错误!请检查!</p>
									<p v-else class="text-muted">Sign In to your account</p>
									<CInput v-model="userLoginName" placeholder="用户名" >
										<template #prepend-content>
											<CIcon name="cil-user" /></template>
									</CInput>
									<CInput v-model="password" placeholder="密码" type="password">
										<template #prepend-content>
											<CIcon name="cil-lock-locked" /></template>
									</CInput>
									<CRow>
										<CCol col="6">
											<CButton color="primary" class="px-4" v-on:click="fx_login">登 录</CButton>
										</CCol>
										<CCol col="6" class="text-right">
											<CButton color="link" class="px-0">忘记密码?</CButton>
										</CCol>
									</CRow>
								</CForm>
							</CCardBody>

						</CCard>
						<CCard color="primary" text-color="white" class="text-center py-5 d-md-down-none" style="width:44%" body-wrapper>
							<h2>说明</h2>
							<p>
								现在还是模板,coreUI - vue,
								注册登陆的话
								密码随便填一下 123456 就行了.....不要用自己的常用密码
								别注册了...账号 account.....密码123456.............
								vue 头大.....................................................................................................................................................</p>
							<CButton v-on:click="fx_register_btn" color="primary" class="active mt-3">
								注 册!
							</CButton>
						</CCard>
					</CCardGroup>
				</CCol>
			</CRow> 
		</CContainer>
		<TheFooter />
	</div>
</template>

<script>
	import TheFooter from '../../containers/TheFooter.vue'

	export default {
		components: {
			TheFooter
		},
		name: 'Login',
		data() {
			return {
				loginFail:"false",
				userLoginName: "", 
				password: "",
			}
		},
		methods: {
			//注册 页面跳转
			fx_register_btn: function(e) {
				this.$router.push({
					name: 'Register'
				});
			},
			//登陆
			fx_login: function(e) {
				//发送 post 请求
				this.axios.post("/app/login",this.$data)
				.then(response => { 
				if(response.data.code == "S"){
					debugger;
					this.$router.push({name:"/dashboard"});
				}else{
					//登陆错误
					//this.loginFail = "true";
				} 
					// if(response.data.code == "S"){
					// 	debugger;
					// 	this.$router.push({name:"/dashboard"});
					// }else{
					// 	//登陆错误
					// 	//this.loginFail = "true";
					// } 
					}) 
				// this.$http.post(process.env.VUE_APP_HOST+"/app/login", this.$data, {
				// 		emulateJSON: true
				// 	})
				// 	.then(function(res) {
				// 		debugger
				// 		if(res.body.code == "S"){
				// 			this.$router.push({name:"Dashboard"});
				// 		}else{
				// 			//登陆错误
				// 			this.loginFail = "true";
				// 		} 
				// 	}, function(res) {
				// 		console.log(res.status);
				// 	}, function(res) {});
			}
		}
	}
</script>
