<template>
    <div id="app">
        {{count}}
        <button @click="$store.commit('increment')"></button>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    computed: {
        count() {
            return this.$store.state.count;
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
