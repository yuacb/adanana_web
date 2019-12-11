<template>
  <CContainer class="min-vh-100 d-flex align-items-center">
    <CRow class="w-100 justify-content-center">
      <CCol md="6" sm="8">
        <CCard class="mx-4 mb-0">
          <CCardBody class="p-4">
            <CForm>
              <h1>Register</h1>
              <p class="text-muted">Create your account</p>
              <CInput  
			    v-on:blur="fx_checkRegiserUserName"
				v-model="userLoginName"
                placeholder="用户名"
                autocomplete="username"
              >
                <template #prepend-content><CIcon name="cil-user"/></template>
              </CInput>
			  <!-- 昵称 -->
			  <CInput
			    v-model="userNickname"
			    placeholder="昵称"
			  >
			    <template #prepend-content><CIcon name="cil-user"/></template>
			  </CInput>
              <CInput
				v-model="email" 
                placeholder="电子邮箱"
                autocomplete="email"
                prepend="@"
              />
              <CInput
				v-model="password"
                placeholder="密码"
                type="password"
                autocomplete="new-password"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CInput
				v-model="passwordRepeat"
                placeholder="Repeat password"
                type="password"
                autocomplete="new-password"
                class="mb-4"
              >
                <template #prepend-content><CIcon name="cil-lock-locked"/></template>
              </CInput>
              <CButton color="success" block v-on:click="fx_register">注&nbsp;&nbsp;&nbsp;&nbsp;册</CButton>
            </CForm>
          </CCardBody>
          <CCardFooter class="p-4">
            <CRow>
				<CCol col="6"> 
				    <CButton block class="btn btn-secondary " v-on:click="fx_loginPage"> 返&nbsp;&nbsp;&nbsp;&nbsp;回 </CButton>
			</CCol>
			
			<!--              <CCol col="6">
                <CButton block color="facebook">
                  Facebook
                </CButton>
              </CCol>
              <CCol col="6">
                <CButton block color="twitter">
                  Twitter
                </CButton>
              </CCol> -->
            </CRow>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </CContainer>
</template>

<script>
export default {
  name: 'Register',
  data:function(){
	  return{
			passwordRepeat:"",
			userNickname:"",
			userLoginName:"",
			password:"",
			email:"",
	  }
  },
  methods :{
	fx_checkRegiserUserName:function(e){
		  console.log("输入的用户名:");
		  console.log("输入的用户名:",this.userLoginName);
		},
	fx_loginPage:function(e){
		  this.$router.push({ name: 'Login'});
		},
	fx_register:function(e){
			console.log("login_btn");
			//发送 post 请求
			this.$http.post("http://127.0.0.1:8080/app/register",this.$data,{emulateJSON:true})
			    .then(function(res){ 
					  this.$router.push({ name: 'Login'});
			        },function(res){
			            console.log(res.status);
			        },function (res) {
			    });
		},
		
	}
}
</script>
