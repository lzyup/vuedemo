<template>
    <div class="father">
        <h3>这里是父组件</h3>
        <Children>
            <template slot-scope="user">
                <div class="tmpl">
                    <span v-for="(item,index) in user.data" :key="index">
                        {{item}}
                    </span>
                </div>

            </template>
        </Children>
    </div>
</template>

<script>
import Children from "./children.vue";
export default {
    data() {
        return {
            user: ["zhangsan1", "lisi2", "wangwu3"]
        };
    },

    components: {
        Children
    },

    computed: {},

    created() {
        HLOneApi.registerHandler("firstRequestErrorHandler", function() {});
    },

    methods: {},

    mounted() {}
};
</script>
<style >
</style>