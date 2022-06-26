import Vue from 'vue'
import VueRouter from 'vue-router'
import qrcode from "@/views/qrcode";
import wxShare from "@/views/wxShare";
import pdfpage from "@/views/pdfpage";
import PDFVue from "@/views/PDFVue";
import PDFicon from "../views/PDFicon";
import PDFiconTwo from "../views/PDFiconTwo";
import PDFAuto from "../views/PDFAuto";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'qrcode',
    component: qrcode
  },
  {
    path: '/qr',
    name: 'qrcode',
    component: qrcode
  },
  {
    path: '/wxShare',
    name: 'wxShare',
    component: wxShare
  },
  {
    path: '/pdf',
    name: 'pdfpage',
    component: pdfpage
  },
  {
    path: '/pdfPage',
    name: 'PDFVue',
    component: PDFVue
  },
  {
    path: '/pdfIcon',
    name: 'PDFicon',
    component: PDFicon
  },
  {
    path: '/pdfIconTwo',
    name: 'PDFiconTwo',
    component: PDFiconTwo
  },
  {
    path: '/autoPDF',
    name: 'PDFAuto',
    component: PDFAuto
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
