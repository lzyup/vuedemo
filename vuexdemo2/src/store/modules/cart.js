import shop from '../../api/shop'
import { CART, PRODUCTS } from '../mutation-types'

const state = {
    items: [],
    checkoutStatus: null
}

const getters = {
    cartProducts: (state, getters, rootState) => {
        return state.items.map(({ id, quantity }) => {
            const product = rootState.products.all.find(product => product.id === id)
            return {
                title: product.title,
                price: product.price,
                quantitiy
            }
        })
    },
    carTotalPrice: (state, getters) => {
        return getters.cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity
        })
    }
}

const actions = {
    checkout({ commit, state }, products) {
        const savedCartItems = [...state.items]
        commit(CART.SET_CHECKOUT_STATUS, null)
        // empty cart
        commit(CART.SET_CART_ITEMS, { items: [] })
        shop.buyProducts(
            products,
            () => commit(CART.SET_CHECKOUT_STATUS, 'successful'),
            () => {
                commit(CART.SET_CHECKOUT_STATUS, 'fail')
                commit(CART.SET_CART_ITEMS, { items: savedCartItems })
            }
        )
    },

    addProductToCart({ state, commit }, product) {
        commit(CART.SET_CHECKOUT_STATUS, null)
        if (product.inventory > 0) {
            const cartItem = state.items.find(item => item.id === product.id);
            if (!cartItem) {
                commit(CART.PUSH_PRODUCT_TO_CART, { id: product.id })
            } else {
                commit(CART.INCREMENT_ITEM_QUANTITY, cartItem)
            }
            commit(`product/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`, { id: product.id }, { root: true })
        }
    }
},

const mutations = {
    [CART.PUSH_PRODUCT_TO_CART](state, { id }) {
        state.items.push({
            id,
            quantitiy: 1
        })
    },
    [CART.INCREMENT_ITEM_QUANTITY](state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++;

    },
    [CART.SET_CART_ITEMS](state, { items }) {
        state.items = items
    },
    [CART.SET_CHECKOUT_STATUS](state, status) {
        state.checkoutStatus = status;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}


