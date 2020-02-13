<template>
    <div>
        <CCard>
            <CCardHeader>
                <CRow>
                 <CCol sm="12"> 
                 <input type="text" v-model.trim="title" class="form-control" placeholder="请输入标题" />
                 </CCol>
                </CRow>
            </CCardHeader>
            <CCardBody>
            <!-- bidirectional data binding（双向数据绑定） -->
            <quill-editor v-model="content"
                ref="myQuillEditor"
                :options="editorOption"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)">
            </quill-editor>
            </CCardBody>
            <footer> 
              <CRow class="align-items-center"> 
                <CCol col="5" sm="3" md="2" xl class="mb-3 mb-xl-0">
                  <CButton block variant="outline"  v-on:click="fx_submit" color="primary">发布</CButton>
                </CCol>
                <CCol col="5" sm="3" md="2" xl class="mb-3 mb-xl-0">
                  <CButton block variant="outline" color="info">暂存</CButton>
                </CCol> 
              </CRow>
            </footer>
        </CCard>
    </div>
</template>


<script>
    import Quill from 'quill'
    // import {
    //     someModule
    // } from '../yourModulePath/someQuillModule.js'
    //Quill.register('modules/someModule', someModule)
    export default {
        name: 'ArticleAdd',
        data() {
            return {
                content: '',
				title:"",
                editorOption: {
					placeholder: '请输入内容.......',
                    // some quill options
                    //VueQuillEditor 配置文件
                    readOnly: true,
                    //modules:{toolbar: [{ 'color': [] }, { 'background': [] }]}
                }
            }
        },
        // manually control the data synchronization
        // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
        methods: { 
            onEditorBlur(quill) {
                console.log('editor blur!', quill)
            },
            onEditorFocus(quill) {
                console.log('editor focus!', quill)
            },
            onEditorReady(quill) {
                console.log('editor ready!', quill)
            },
            onEditorChange({
                quill,
                html,
                text
            }) {
                console.log('editor change!', quill, html, text)
                //this.content = html
            },
			//提交内容
			fx_submit(){ 
				const blogArticle ={};
				const quill = this.$refs.myQuillEditor.quill;
				const delta =quill.getText(); 
				blogArticle.title = this.$data.title;
				blogArticle.content = delta;
				this.axios.post("/app/blogArticle/release",blogArticle)
				.then(function (response) {
					//提交成功跳转
					if(response.data.code=="S")
					{
						this.$router.push({name:"/blog/blogIndex"});
					}
					console.log(response);
					})
				.catch(function (error) {
					console.log(error);
					});
				// this.$http.post(process.env.VUE_APP_HOST+"/app/blogArticle/release",blogArticle,{
				// 		emulateJSON: true
				// 	}).then(function(res) {
						
				// 	});
			},
        },
        computed: {
            editor() {
                return this.$refs.myQuillEditor.quill
            }
        },
        mounted() {
            console.log('this is current quill instance object', this.editor)
        }, 
    }
</script>
<style>
.ql-editor{
    height:400px;
}
.editor {
  line-height: normal !important;
  height: 500px;
}
.ql-snow .ql-tooltip[data-mode=link]::before {
  content: "请输入链接地址:";
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: '保存';
    padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode=video]::before {
    content: "请输入视频地址:";
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: '14px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=small]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=small]::before {
  content: '10px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=large]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=large]::before {
  content: '18px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value=huge]::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value=huge]::before {
  content: '32px';
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: '文本';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="1"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before {
  content: '标题1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="2"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before {
  content: '标题2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="3"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before {
  content: '标题3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="4"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before {
  content: '标题4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="5"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="5"]::before {
  content: '标题5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value="6"]::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value="6"]::before {
  content: '标题6';
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: '标准字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=serif]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=serif]::before {
  content: '衬线字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=monospace]::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value=monospace]::before {
  content: '等宽字体';
}
</style> 