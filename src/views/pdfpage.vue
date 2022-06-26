<template>
  <div class="pdf_wrap">
    <H3>PDF展示</H3>
    <div class="pdf_list">
      <pdf v-for="page in pdfPages" :key="page" :page="page" :src="pdfSrc"/>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: "pdfpage",
  components:{
    pdf
  },
  data() {
    return {
      pdfSrc: '',
      pdfPages: 1
    }
  },
  mounted() {
    this.getNumPages("http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf")
  },
  methods:{
    getNumPages(url) {
      var loadingTask = pdf.createLoadingTask(url)
      loadingTask.promise.then(pdf => {
        this.pdfSrc = loadingTask
        this.pdfPages = pdf.numPages
      }).catch((err) => {
        console.error('pdf加载失败')
      })
    },
  }
}
</script>

<style scoped>
.pdf_wrap {
  background: #fff;
  height: 100vh;
  width: 80%;
  margin: 1px auto;
}
.pdf_list {
  height: 80vh;
  overflow: scroll;
}
</style>
