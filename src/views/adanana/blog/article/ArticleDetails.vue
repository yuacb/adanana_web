<template>
	<div>
		<CRow>
		  <CCol md="12" lg="7">
	    <CCard>
	        <CCardHeader>
	            <CRow>
	             <CCol sm="12"> 
	             标题：{{title}}
	             </CCol>
	            </CRow>
	        </CCardHeader>
	        <CCardBody>
				{{content}}
	        </CCardBody>
	        <CFooter> 
	          <CRow class="align-items-center"> 
	            <CCol col="5" sm="3" md="2" xl class="mb-3 mb-xl-0">
					<br />
	              <CButton block variant="outline"   color="primary">返回</CButton>
	            </CCol> 
	          </CRow>
	        </CFooter>
	    </CCard>
		</CCol>
		</CRow>
	</div>
</template>

<script>
	export default {
	  name: 'ArticleDetails',
	  data(){
		  return{
			  title:'',
			  content:''
		  }
	  },
	  mounted:function(){
	      this.findById();
	  },
	  methods:{
		  //获取 路由参数
		findById:function(){
		     this.axios.get("/app/blogArticle/findById",{params:{id:this.$route.query.id}})
			.then(response => {
				this.title=response.data.content.title;
				this.content=response.data.content.content;
				})
			.catch(function (error) {
				console.log(error);
				});
		}  
	  }, 
	}
</script>

<style>
</style>
