<template>
<div>
  <button @click="showPDF=false">点我1个PDF</button>
  <button @click="showPDF=true">点我2个PDF</button>
  <div class="auto_pdf_box">
    <div class="left_box" >
      <PDFicon></PDFicon>
    </div>
    <div class="right_box" v-if="showPDF">
      <PDFicon></PDFicon>
    </div>
  </div>
</div>
</template>

<script>
import PDFicon from "./PDFicon";
export default {
  name: "PDFAuto",
  components:{PDFicon},
  data(){
    return{
      showPDF:false,
    }
  },
  methods:{
    showOnePdf(){

    }
  }
}
</script>

<style scoped>
.auto_pdf_box{
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  /*justify-content: center;*/
}
.left_box{
  height: 100%;
  width: 48%;
  margin:0 4px;
  flex: 1;
}
.right_box{
  height: 100%;
  width: 48%;
  margin:0 4px;
  /*flex: 1;*/

}
</style>