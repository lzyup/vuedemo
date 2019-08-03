function MVVM(options) {
    this.$options = options || {};
    var data = this._data = this.$options.data;
    var me = this;
}

//数据代理
//实现vm.xxx->vm.data.xxx
Object.keys(data).forEach(function (key) {
    me._proxyData(key);
});

this._initComputed();

observe(data, this);

this.$compile = new Compile(options.el || documennt.body, this)

MVVM.prototype = {

}