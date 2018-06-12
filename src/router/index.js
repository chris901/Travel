import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import CalendarPage from '@/pages/calendar/Calendar'
import Order from '@/pages/order/Order'
import Comfirm from '@/pages/comfirmOrder/Comfirm'
// @表示src文件目录下
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
      // 访问根路径/的时候，根路径是home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }, {
      path: '/calendar',
      name: 'Calendar',
      component: CalendarPage
    }, {
      path: '/order',
      name: 'Order',
      component: Order
    }, {
      path: '/comfirmOrder',
      name: 'Comfirm',
      component: Comfirm
    }
  ]
})
