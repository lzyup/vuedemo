<template>
    <div class="child">
        <h3>这里是子组件</h3>
        <slot :data="data"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: ["zhangsan", "lisi", "wangwu"]
        };
    },

    components: {},

    computed: {},

    created() {},

    methods: {},

    mounted() {}
};
</script>
<style >
</style>