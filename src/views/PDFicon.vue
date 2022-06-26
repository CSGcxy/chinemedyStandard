<template>
<div>
  <div class="pdf_wrap">
<!--    上部功能按钮-->
    <div class="top_tool">
      <el-button title="逆时针" icon="el-icon-refresh-left" circle @click.stop="counterClock"></el-button>
      <el-button title="顺时针" icon="el-icon-refresh-right" circle @click.stop="clock"></el-button>
      <el-button title="缩小" icon="el-icon-remove-outline" circle @click.stop="scaleSmall"></el-button>
      <el-button title="放大" icon="el-icon-circle-plus-outline" circle @click.stop="scaleBig"></el-button>
    </div>
<!--中部展示区-->
    <div class="pdf_list">
      <pdf ref="pdf"
           class="pdf_content"
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
<!--    下部功能按钮-->
    <div class="bottom_tool">
      <el-button  title="上一页" icon="el-icon-back" circle @click.stop="prePage"> </el-button>
      <div class="pageStyle">{{pageNum}}/{{pageTotalNum}} </div>
      <el-button  title="下一页" icon="el-icon-right" circle @click.stop="nextPage"> </el-button>
    </div>

  </div>
</div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: "PDFicon",
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
      console.log(e)
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
  background-color: rgb(234, 234, 235);
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
.top_tool{
  height:8%;
  display: flex;
  justify-content: center;
}
/deep/ .top_tool>.el-button, /deep/ .bottom_tool>.el-button {
  border:1px solid rgb(234, 234, 235);
  background-color: rgb(234, 234, 235);
}
.pdf_list {
  height: 86vh;
  overflow: scroll;
  background-color: rgb(217, 217, 217);
}
.pdf_content{
  width:98%;
  margin:2px auto;

}
.bottom_tool{
  height:8%;
  display: flex;
  justify-content: center;
}

.pageStyle{
  width: 30px;
  padding: 12px 1px;
  margin: 0 5px;
  font-size: 14px;
}

/* 滚动条宽高，横向滚动条的高，纵向滚动条的宽 */
::-webkit-scrollbar {
  width: 2px;
  height: 4px;
}

/*滚动轨道 */
::-webkit-scrollbar-track {
  border-radius: 2px;
}

/* 滚动条 */
::-webkit-scrollbar-thumb {
  /*background: #cccccc;*/
  background-color:rgb(100, 100, 100) ;
  border-radius: 2px;
}
</style>