import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '../components/goods/goods.vue'
import Store from '../components/store/store.vue'
import Comment from '../components/comment/comment.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/user/goods',
      component: Goods
    },
    {
      path: '/user/comment',
      component: Comment
    },
    {
      path: '/user/store',
      component: Store
    },
    {
      path: '*', redirect: '/user/goods'
    }
  ]
})
