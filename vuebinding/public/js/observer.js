function Observer(data) {
    this.data = data;
    this.walk(data);
}
Observer.prototype = {
    constructor: Observer,
    walk: function (data) {
        var me = this;
        Object.keys(data).forEach(function (key) {
            me.convert(key, data[key]);
        })
    },
    convert: function (key, val) {
        this.defineReactive(this.data, key, val);
    },
    defineReactive: function (data, key, val) {
        var dep = new Dep();
        var childObj = observer(val);

        Object.defineProperty(data, key, {
            enumerable: true,//可枚举
            configurable: false,
            get: function () {
                if (Dep.target) {
                    dep.depend();
                }
                return val;
            },
            set: function (newVal) {
                if (newVal === val) {
                    return;
                }
                val = newVal;
                childObj = observer(newVal);
                //通知订阅者
                dep.notify();
            }
        })

    }
}

function observer(value, vm) {
    if (!value || typeof value !== 'object') {
        return;
    }

    return new Observer(value);
}

var uid = 0


function Dep() {
    this.id = uid++;
    this.subs = [];
}

//通常把订阅者自身当成引用传入发布者对象中，同时订阅者对象还需要提供一个名为诸如updata的方法，供发布者对象在合适的时候调用

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },

    depend: function () {
        Dep.target.addDep(this);
    },
    removeSub: function (sub) {
        var index = this.subs.indexOf(sub);
        if (index != -1) {
            this.subs.splice(index, 1);
        }
    },
    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update();
        })
    }
};

Dep.target = null;