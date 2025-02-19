import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/homepage.vue'
import about    from '@/components/about.vue'
import menu     from '@/components/menu.vue'
import contact  from '@/components/contact.vue'
import booking  from '@/components/booking.vue'
import feedback from '@/components/feedback.vue'
import restaurantlist from '@/components/restaurantlist.vue'
import order  from '@/components/order.vue'

//route array of objects: path,component
const routes = [
  {
    path:'/',
    component: HomePage
  },
   {
    path:'/about',
    component: about
  }, 
  {
    path:'/contact',
    component: contact
  } ,
  {
    path:'/booking',
    component: booking
  },
  {
    path:'/feedback',
    component: feedback
  },
  {
    path:'/menu',
    component: menu
  },
  {
    path:'/order',
    component: order
  },
  {
    path:'/restaurantlist',
    component: restaurantlist
  }

  
]
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router