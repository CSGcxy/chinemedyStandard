<template>
  <div class="home">
    <div class="wx" @click="centerDialogVisible = true">
      <img src="../assets/wx.jpg" alt="点击分享" title="点击分享"/><br>
      <div>
        <router-link to='/wxShare'>政策文件</router-link><br><br>
      </div>
      <div>
        <router-link to='/pdf'>PDF展示</router-link><br><br>
        <router-link to='/pdfPage'>PDF分页展示</router-link>
      </div>
    </div>
<!--    <el-button type="text" @click="centerDialogVisible = true">点击转发政策</el-button>-->
<!--    <el-button type="primary" @click="testBack">点击测试响应</el-button>-->
    <el-dialog
        title="打开微信扫描如下二维码"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
      <div style="text-align: center">
        <vue-qr :text="downloadData.url" :margin="10" colorDark="#000" colorLight="#fff" :dotScale="1" :logoSrc="downloadData.icon" :logoScale="0.2" :size="200"></vue-qr>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import vueQr from 'vue-qr'
import Pdfpage from "@/views/pdfpage";
export default {
  name: 'qrcode',
  components: {
    Pdfpage,
    vueQr
  },
  data() {
    return {
      centerDialogVisible: false,
      downloadData: {
        // url: 'http://cxyabc.vaiwan.com/to_detail',  //需要转化成二维码的网址
        url: window.location.href.toString(),  //需要转化成二维码的网址
        icon: require('@/assets/img.png')  //二维码中间的图片,可以不设置
      }
    }
  },
  methods: {
    testBack() {
      this.axios.get('/mp/MP_verify_KguGBKmjDHvB2Swj.txt').then(resp => {
        console.log(resp);
      });
    }
  }

}
</script>
