<template>

</template>

<script>
import "@/assets/views/index.css";
import vHeader from "@/components/Header.vue";
import vBanner from "@/components/Banner.vue";
import vFloorOne from "@/components/FloorOne.vue";
import vBottomNav from "@/components/BottomNav.vue";
import Service from "./service.js";

export default {
    name: "Index",
    components: {
        vHeader,
        vBanner,
        vFloorOne,
        vBottomNav
    },
    data() {
        return {
            headNavData: [],
            botNavData: []
        };
    },
    created() {},
    mounted() {},
    watch: {},
    methods: {
        serviceGet() {
            Service.get().then(data => {
                this.headNavData = data;
            });
            Service.getBottom().then(data => {
                this.botNavData = data;
            });
        },
        asyncData({ store, route }) {
            const promise = new Promise((resolve, reject) => {
                setTimeout(() => {
                    store.dispatch("getData", {
                        data: "异步数据"
                    });
                    resolve();
                }, 1000);
            });
            return promise;
        }
    }
};
</script>

<style>
</style>
