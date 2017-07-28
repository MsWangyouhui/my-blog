
import Vue from 'vue'
import VueRouter from 'vue-router'
import Footer from '@/components/footer'
import Article from '@/components/article'
import Home from '@/components/Home'
import Login from '@/components/login'
Vue.use(VueRouter);
const loading =  {
      progress: {
        func: [
          {call: 'color', modifier: 'temp', argument: '#ffb000'},
          {call: 'fail', modifier: 'temp', argument: '#6e0000'},
          {call: 'location', modifier: 'temp', argument: 'top'},
          {call: 'transition', modifier: 'temp', argument: {speed: '0.5s', opacity: '0.6s', termination: 300}}
        ]
      }
  }
export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:loading
    },
    {
      path: '/Article/:id',
      name: 'article',
      component: Article,
      meta:loading
    },
    {
      path: '/Footer/:id/:name',
      name: 'Article',
      component: Footer,
      meta:loading
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta:loading
    },
  ]
})
