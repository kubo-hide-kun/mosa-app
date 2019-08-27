import Vue from 'vue'
import Router from 'vue-router'

//Router機能
Vue.use(Router)

export default new Router({
    mode: 'history',
    //Routerを使用するURL
    base: process.env.BASE_URL,
    //URL一覧
    routes: [
        {//form
            path: '/timeline/:id',
            name: 'preview',
            component: () => import('./views/preview.vue')
        },
        {
            path: '/timeline',
            name: 'timeline',
            component: () => import('./views/timeline.vue')
        },
        {
            path: '/send',
            name: 'send',
            component: () => import('./views/send.vue')
        },
        {
            path: '/touku',
            name: 'touku',
            component: () => import('./views/touku.vue')
        },

    ]
})
