import Vue from 'vue'
import VueRouter from 'vue-router'
import qrcode from "@/views/qrcode";
import wxShare from "@/views/wxShare";
import pdfpage from "@/views/pdfpage";
import PDFVue from "@/views/PDFVue";

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
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
