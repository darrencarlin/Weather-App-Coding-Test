import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cork from '@/components/Cork'
import NYC from '@/components/NYC'
import Kathmandu from '@/components/Kathmandu'
import Mumbai from '@/components/Mumbai'
import Ubud from '@/components/Ubud'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/',
    }, {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cork',
      name: 'Cork',
      component: Cork,
      props: true
    },
    {
      path: '/nyc',
      name: 'NYC',
      component: NYC,
      props: true
    },
    {
      path: '/kathmandu',
      name: 'Kathmandu',
      component: Kathmandu,
      props: true
    },
    {
      path: '/mumbai',
      name: 'Mumbai',
      component: Mumbai,
      props: true
    },
    {
      path: '/ubud',
      name: 'Ubud',
      component: Ubud,
      props: true
    }
  ]
})
