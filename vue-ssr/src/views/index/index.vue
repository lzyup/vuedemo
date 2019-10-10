<template>
    <div class="g-bd">
        <div id="j-bd">
            <div class="g-row m-index">
                <v-header :nav-data="headNavData" />
                <v-banner />
                <v-floor-one />
                <v-bottom-nav :bot-nav-data="botNavData" />
            </div>
        </div>
    </div>
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
    created() {
        this.serviceGet();
    },
    mounted() {},
    watch: {},
    methods: {
        serviceGet() {
            Service.get().then(data => {
                this.headNavData = data;
                console.log(
                    "测试headNavData----->",
                    JSON.stringify(this.headNavData)
                );
            });
            Service.getBottom().then(data => {
                this.botNavData = data;
                console.log(
                    "测试botNavData---->",
                    JSON.stringify(this.botNavData)
                );
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

<style lang="less" scoped>
.mint-field {
    background: #666;
}
</style>
