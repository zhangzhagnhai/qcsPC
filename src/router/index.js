import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageTransition from '@/components/PageTransition'
import home from '@/page/home.vue'
import secrecy from '@/page/secrecy.vue'
import about from '@/page/about.vue'

Vue.use(Router)

export default new Router({
 /* mode:"history",
  scrollBehavior(to, from, savedPosition) {
    if (!savedPosition) {
      savedPosition = { x: 0, y: 0 }
    }

    return savedPosition
  },*/
  routes: [
    {
      path: '/',
      name: 'PageTransition',
      component: PageTransition,
      children: [
          {
          path: '/',
          name: 'home1',
          component: home
        },
        {
          path: '/home',
          name: 'home',
          component: home
        },{
          path: '/secrecy',
          name: 'secrecy',
          component: secrecy
        },{
          path: '/about',
          name: 'about',
          component: about
        },
        {
          path: '/*',
          name: 'home2',
          component: home
        }
      ]
    }
  ]
})
