import Vue from 'vue'
//引入 路由 的文件
import VueRouter from 'vue-router'
import Movie from '../views/home/Movie.vue'

//使用插件
Vue.use(VueRouter)

//定义路由表
const routes = [
  {
    path: '/',
    name: 'Movie',
    component: Movie,
    redirect: 'Hotfilm',
    children: [
      {path: 'Hotfilm', name: 'Hotfilm', component: () => import('../views/home/HotFilm.vue')},
      {path: 'Cinema', name: 'Cinema', component: () => import('../views/home/Cinema.vue')},
      {path: 'Tobeshow', name: 'Tobeshow', component: () => import('../views/home/Tobeshow.vue')},
      {path: 'Classic', name: 'Classic', component: () => import('../views/home/Classic.vue')}
    ]
  },
  {
    path: '/video',
    name: 'Video',
    //路由懒加载 当触发点击跳转到这一页时，才加载这一页的组件 
    component: () => import('../views/Video.vue')
  },
  {
    path: '/minivideo',
    name: 'MiniVideo',
    component: () => import( '../views/MiniVideo.vue')
  },
  {
    path: '/show',
    name: 'Show',
    component: () => import( '../views/Show.vue')
  },
  {
    path: '/mine',
    name: 'Mine',
    component: () => import( '../views/Mine.vue')
  },
  {
    path: '/item/:id',//需要传递参数
    name: 'Item',
    component: () => import('../views/Item.vue')
  },
  {
    path: '/citylist',
    name: 'Citylist',
    component: () => import('../views/Citylist.vue')
  },
  {
    path: '*',
    component: () => import('../views/Page404.vue')
  }
]

//创建 路由对象
const router = new VueRouter({
  routes
})

//将路由对象输出
export default router
