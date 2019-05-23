<template>
    <ul>
        <li v-for="product in products" :key="product.id">
            {{ product.title }} - {{ product.price }}
            <br>
            <button :disabled="!product.inventory" @click="addProductToCart(product)">
                加入购物车
            </button>
        </li>
    </ul>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
    data() {
        return {};
    },

    components: {},

    //这里的products指的是modules
    computed: mapState({
        products: state => state.products.all
    }),

    // computed: {
    //     products() {
    //         return this.$store.state.products.all;
    //     }
    // },

    created() {
        this.$store.dispatch("products/getAllProducts");
    },
    methods: mapActions("cart", ["addProductToCart"])
    // methods: {
    //     addProductToCart(product) {
    //         this.$store.dispatch("cart/addProductToCart", product);
    //     }
    // }
};
</script>
<style  scoped>
</style>