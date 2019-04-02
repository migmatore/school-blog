import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import PostDetail from './views/PostDetail.vue';
import CreatePost from "@/views/CreatePost.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/blog/post/:id',
            name: 'post_detail',
            component: PostDetail
        },
        {
            path: '/blog/create',
            name: 'create_post',
            component: CreatePost
        }
    ]
})
