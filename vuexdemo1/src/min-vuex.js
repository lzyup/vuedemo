
let Vue;
function install(_Vue) {
    console.log('测试执行install方法----->')
    Vue = _Vue;
    function vuexInit() {
        // console.log('测试执行vuexInit方法----->')
        console.log('测试this------>', this);
        var options = this.$options;
        // store injection
        if (options.store) {
            //组件内部设定了store，则优先使用组件内部的store
            this.$store = typeof options.store === 'function' ? options.store() : options.store;

        } else if (options.parent && options.parent.$store) {
            // console.log('测试进入else if------>');
            // console.log('测试options.parent--------->', options.parent);
            // console.log('测试options.parent.$store------>', options.parent.$store)
            //组件内部没有设定store,则从根App.vue下继承$store方法
            this.$store = options.parent.$store
        }
    }
    Vue.mixin({ beforeCreate: vuexInit })
}

const Store = function Store(options = {}) {
    const { state = {}, mutations = {}, getters = {} } = options
    const computed = {}
    const store = this;
    store.getters = {};
    for (let [key, fn] of Object.entries(getters)) {
        computed[key] = function () { return fn(store.state, store.getters); }
        Object.defineProperty(store.getters, key, {
            get: function () { return store._vm[key]; },
        });
    }
    this._vm = new Vue({
        data: {
            $$state: state
        },
        computed,
    })
    this._mutations = mutations
}


Store.prototype.commit = function (type, payload) {
    if (this._mutations[type]) {
        this._mutations[type](this.state, payload)
    }
}
Object.defineProperties(Store.prototype, {
    state: {
        get: function () {
            return this._vm.$data.$$state
        }
    }
});
export default { Store, install }

