import Vue from 'vue'
import Router from 'vue-router'
import Discount from '@/components/Tasks/discount/discount'
import Signed from '@/components/Tasks/signed/signed'
import MyTickets from '@/components/myTickets/myTickets'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/discount',
      component:Discount
    },
    {
      path: '/myTickets',
      component:MyTickets
    },
    {
      path: '/signed',
      component:Signed
    }
  ]
})
