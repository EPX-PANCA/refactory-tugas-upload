import Vue from 'vue'
import VueRouter from 'vue-router'
import Post from '../views/Post.vue'
import PostList from '../views/Post/PostList.vue'
import PostDetail from '../views/Post/PostDetail.vue'

import Photo from '../views/Photo.vue'
import PhotoList from '../views/Photo/PhotoList.vue'
import PhotoDetail from '../views/Photo/PhotoDetail.vue'

import Album from '../views/Album.vue'
import AlbumList from '../views/Album/AlbumList.vue'
import AlbumDetail from '../views/Album/AlbumDetail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/post',
    component: Post,
    name: "Post",
    children: [
      {
        path: "",
        name: 'PostList',
        component: PostList,
        
      },
      {
        path: "detail/:id",
        component: PostDetail,
        name: "PostDetail",
      },
    ],
  },
  {
    path: '/photo',
    component: Photo,
    name: "Photo",
    children: [
      {
        path: "",
        name: 'PhotoList',
        component: PhotoList,
        
      },
      {
        path: "detail/:id",
        component: PhotoDetail,
        name: "PhotoDetail",
      },
    ],
  },
  {
    path: '/album',
    component: Album,
    name: "Album",
    children: [
      {
        path: "",
        name: 'AlbumList',
        component: AlbumList,
        
      },
      {
        path: "detail/:id",
        component: AlbumDetail,
        name: "AlbumDetail",
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
