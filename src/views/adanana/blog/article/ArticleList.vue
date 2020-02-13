<template>
    <div>
        <CRow>
        <CCol md="12">
            <CCard> 
                <CListGroup>
                  <CListGroupItem v-for="article in articles" v-bind:key="article.id"
                    href="#" 
                    class="flex-column align-items-start"
					v-on:click=fx_articleDetails(article.id)
					>
                    <div class="d-flex w-100 justify-content-between">
                      <h5 class="mb-1">{{article.title}}</h5>
                      <small>发布时间：{{article.createTime}}</small>
                    </div>
                    <p class="mb-1">
                      {{article.content}}
                    </p>
                    <small>作者： {{article.createUserName}}</small>
                  </CListGroupItem> 
                </CListGroup>
            </CCard>
        </CCol>    
        </CRow>
        
        <CFooter>
        <CPagination
          :active-page.sync="currentPage"
          :pages="10"
          responsive
        />
        </CFooter>
    </div>
</template>

<script> 
    export default {
        name:'ArticleList',  
        data() {
            return {
				articles:[],
                currentPage: 3,
            }
        },
		mounted:function(){
            this.find();
		},
		methods:{
			//跳转详情页
			fx_articleDetails:function(id){
			//params 不能与 path 同用 
			this.$router.push({
				path: '/blog/ArticleDetails',
				query: {'id':id}
			});	
			},
			 
			find:function(){
                this.axios.post("/app/blogArticle/find",{})
                .then(response => {
					this.articles= response.data.content; 
					
                    })
                .catch(function (error) {
                    console.log(error);
                    });
			}
		}
    }
</script>

<style>
</style>
