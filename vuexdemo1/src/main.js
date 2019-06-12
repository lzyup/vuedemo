// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from './min-vuex'
import App from './App.vue'
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        count: 0,
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2;
        }
    }
})



// Vue.prototype.$store = store;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    components: { App },
    // template: '<App/>'
})
