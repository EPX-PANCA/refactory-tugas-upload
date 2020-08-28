import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/post',
    name:'Post',
    meta: { requiresAuth: false },
    components: {
      default:()=>import(/* webpackChunkName: "PostIndex" */'../views/Post/Post'),
      'sidebar':()=>import(/* webpackChunkName: "SidebarPost" */'../components/Sidebar/SidebarPost')
    },
    children:[
      {
      path:'',
      name:'PostList',
      component:()=>import (/* webpackChunkName: "PostList" */'../views/Post/PostList'),
    },
    {
      path:'detail/:id',
      name:'PostDetail',
      props:true,
      component:()=>import (/* webpackChunkName: "PostDetail" */'../views/Post/PostDetail')
    }
  ],
  },

  {
    path: '/photo',
    name:'Photo',
    components: {
      default:()=> import(/* webpackChunkName: "PhotoIndex" */'../views/Photo/Photo'),
      'sidebar':()=>import(/* webpackChunkName: "SidebarPhoto" */'../components/Sidebar/SidebarPhoto')
    },
    children:[
      {
      path:'',
      name:'PhotoList',
      component:()=>import (/* webpackChunkName: "PhotoList" */'../views/Photo/PhotoList')
    },
    {
      path:'detail/:id',
      name:'PhotoDetail',
      component:()=>import (/* webpackChunkName: "PhotoDetail" */'../views/Photo/PhotoDetail')
    }
  ],
  },
  {
    path: '/album',
    name:'Album',
    components: {
      default:()=>import(/* webpackChunkName: "AlbumIndex" */'../views/Album/Album'),
      'sidebar':()=>import(/* webpackChunkName: "SidebarAlbum" */'../components/Sidebar/SidebarAlbum')
    },
    children:[
      {
      path:'',
      name:'AlbumList',
      component:()=>import (/* webpackChunkName: "AlbumList" */'../views/Album/AlbumList')
    },
    {
      path:'detail/:id',
      name:'AlbumDetail',
      component:()=> import (/* webpackChunkName: "AlbumDetail" */'../views/Album/AlbumDetail')
    }
  ],
  },
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
