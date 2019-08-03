function Watcher(vm, expOrFn, cb) {
    this.cb = cb;//当数据更新时想要做的事情
    this.vm = vm;//被订阅的数据一定来自于当前vue实例
    this.expOrFn = expOrFn;//被订阅的数据
    this.depIds = {};//hash存储订阅者的id,避免重复的订阅者

    if (typeof expOrFn === 'function') {
        this.getter = expOrFn;
    } else {
        this.getter = this.parseGetter(expOrFn.trim());
    }

    this.value = this.get();
}

Watcher.prototype = {
    constructor: Wathcher,
    update: function () {
        this.run();
    },
    run: function () {
        var value = this.get();
        var oldValue = this.value;
        if (value !== oldValue) {
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    },
    addDep: function (dep) {
        //如果在depIds的hash中没有当前的id,可以判断是新Watcher,因此可以添加到dep的数组中储存
        //此判断是避免同id的watcher被多次存储
        if (!this.depIds.hasOwnProperty(dep.id)) {
            dep.addSub(this);
            this.depIds[dep.id] = dep;
        }
    },
    get: function () {
        Dep.target = this;
        var value = this.getter.call(this.vm, this.vm);
        Dep.target = null;
        return value;
    },

    parseGetter: function (exp) {
        if (/[^\w.$]/.test(exp)) return;

        var exps = exp.split('.');

        return function (obj) {
            for (var i = 0, len = exps.length; i < len; i++) {
                if (!obj) return;
                obj = obj[exps[i]];
            }
            return obj
        }

    }
}