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
      redirect: '/Weather-App-Coding-Test/',
    }, {
      path: '/Weather-App-Coding-Test/',
      name: 'Home',
      component: Home
    },
    {
      path: 'Weather-App-Coding-Test/cork',
      name: 'Cork',
      component: Cork,
      props: true
    },
    {
      path: 'Weather-App-Coding-Test/nyc',
      name: 'NYC',
      component: NYC,
      props: true
    },
    {
      path: 'Weather-App-Coding-Test/kathmandu',
      name: 'Kathmandu',
      component: Kathmandu,
      props: true
    },
    {
      path: 'Weather-App-Coding-Test/mumbai',
      name: 'Mumbai',
      component: Mumbai,
      props: true
    },
    {
      path: 'Weather-App-Coding-Test/ubud',
      name: 'Ubud',
      component: Ubud,
      props: true
    }
  ]
})
