<template>
    <div>{{routerInfo}}</div>
</template>

<script>
export default {
    data() {
        return {};
    },

    components: {},

    computed: {
        routerInfo() {
            const { fullpath, path, name, params, query, meta } = this.$route;
            return {
                fullpath,
                path,
                name,
                params,
                query,
                meta
            };
        }
    },

    created() {},

    methods: {},

    mounted() {}
};
</script>
<style  scoped>
</style>