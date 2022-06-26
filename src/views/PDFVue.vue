<template>
  <div>
    <div class="pdf_wrap">
      <el-button type="text" :title="'上一页'" @click.stop="prePage" class="mr10"> 上一页</el-button>
      <el-button type="text" :title="'下一页'" @click.stop="nextPage" class="mr10"> 下一页</el-button>
      <div class="page">{{pageNum}}/{{pageTotalNum}} </div>
      <el-button type="text" :title="'顺时针'" @click.stop="clock" class="mr10"> 顺时针</el-button>
      <el-button type="text" :title="'逆时针'" @click.stop="counterClock" class="mr10"> 逆时针</el-button>
      <el-button type="text" :title="'放大'" @click.stop="scaleBig" class="mr10">放大</el-button>
      <el-button type="text" :title="'缩小'" @click.stop="scaleSmall" class="mr10">缩小</el-button>
      <el-button type="text" :title="'打印'" icon="printer" @click="$refs.pdf.print()">保存并打印</el-button>
      <div class="pdf_list">
        <pdf ref="pdf"
             :src="url"
             :page="pageNum"
             :rotate="pageRotate"
             @progress="loadedRatio = $event"
             @page-loaded="pageLoaded($event)"
             @num-pages="pageTotalNum=$event"
             @error="pdfError($event)"
             @link-clicked="page = $event">
        </pdf>
      </div>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: "PDFVue",
  metaInfo: {   //  这里是给页面修改
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=2,user-scalable=yes' }
    ]
  },
  components:{
    pdf
  },
  data() {
    return {
      url: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加载进度
      loadedRatio: 0,
      curPageNum: 0,
      scale: 100
    }
  },
  methods: {
    // 上一页函数，
    prePage() {
      var page = this.pageNum
      page = page > 1 ? page - 1 : this.pageTotalNum
      this.pageNum = page
    },
    // 下一页函数
    nextPage() {
      var page = this.pageNum
      page = page < this.pageTotalNum ? page + 1 : 1
      this.pageNum = page
    },
    // 页面顺时针翻转90度。
    clock() {
      this.pageRotate += 90
    },
    // 页面逆时针翻转90度。
    counterClock() {
      this.pageRotate -= 90
    },
    // 页面加载回调函数，其中e为当前页数
    pageLoaded(e) {
      this.curPageNum = e
    },
    // 其他的一些回调函数。
    pdfError(error) {
      console.error(error)
    },
    scaleBig() {
      this.scale += 10;
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
    },
    scaleSmall() {
      if (this.scale == 100) {
        return;
      }
      this.scale += -10;
      this.$refs.pdf.$el.style.width = parseInt(this.scale) + "%";
      // t
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
