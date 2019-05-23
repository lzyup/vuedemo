<template>
    <div id="app">
        <h1>购物车示例</h1>
        <p>账号：{{email}}</p>
        <hr>
        <h2>产品</h2>
        <product-list></product-list>
        <hr>
        <shopping-cart></shopping-cart>

    </div>
</template>

<script>
import { mapState } from "vuex";
import ProductList from "./components/product-list";
import ShoppingCart from "./components/shoppingcart";

export default {
    name: "App",
    components: {
        ProductList,
        ShoppingCart
    },
    computed: mapState({
        email: state => state.userInfo.email
    })
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
