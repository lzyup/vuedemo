// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: { App },
    template: '<App/>'
})

//当vue实例没有el属性时，则该实例尚没有挂载到某个dom中
//假如需要延迟挂载，可以在之后手动调用vm.$mount()方法来挂载

// new Vue({
//     store,
//     render: h => h(App),
// }).$mount('#app')
