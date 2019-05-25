import Vue from 'vue'
import Router from 'vue-router'
import RouterDemo from '../components/router-demo.vue'
import RouterChildrenDemo from '../components/router-children-demo.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/foo', component: RouterDemo, name: '1'
        },
        {
            path: '/bar', component: RouterDemo, name: '2'
        },
        {
            path: '/user/:id',
            component: RouterDemo,
            name: '3',
            props: true,
            children: [
                {
                    // 当 /user/:id/profile 匹配成功，
                    // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
                    path: 'profile',
                    component: RouterChildrenDemo,
                    name: '3-1'
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
                    path: 'posts',
                    components: RouterChildrenDemo
                }
            ]
        },
        {
            path: './a', redirect: '/bar'
        },
        {
            path: '*', component: RouterDemo, name: '404'
        }
    ]
})
