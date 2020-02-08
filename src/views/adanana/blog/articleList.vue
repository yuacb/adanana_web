<template>
    <div>
        <CCard>
            <CCardHeader>
                <CIcon name="cil-drop" /> 标题:
            </CCardHeader>
            <CCardBody>
            <div id="editor">
              <p>Hello World!</p>
              <p>Some initial <strong>bold</strong> text</p>
              <p><br></p>
            </div>
            </CCardBody>
        </CCard> 
    </div>
</template>

<script>
    //引入富文本
    import Quill from 'quill'
    import 'quill/dist/quill.snow.css'
    var options = {
      debug: 'info',
      modules: {
        toolbar: '#toolbar'
      },
      placeholder: 'Compose an epic...',
      readOnly: true,
      theme: 'snow'
    };
    var quill = new Quill('#editor',options);
    export default {
        name:'articleList',  
    }
</script>

<style>
</style>
