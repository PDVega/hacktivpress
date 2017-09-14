import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Auth',
      component: Auth
    }
    // },
    // {
    //   path: '/articles',
    //   component: Article,
    //   children: [
    //     {
    //       path: '',
    //       component: MainContent
    //     },
    //     {
    //       path: '/:id',
    //       component: ArticleDetail,
    //       props: true
    //     }
      // ]
    // }
  ]
})
