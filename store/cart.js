const initialDuration = {time: '1 month', saving: 0, month: 1}
export const state = () => ({
    cart: null,
    selectedDuration: initialDuration
})

export const mutations = {
    SET_CART_ITEM: (state, item) => {
        state.cart = item
    },
    RESET_CART: (state) => {
        state.cart = null
    },
    SET_SELECTED_DURATION: (state, item) => {
        state.selectedDuration = item
    },
    RESET_SELECTED_DURATION: (state) => {
        state.selectedDuration = initialDuration
    }
}

export const getters = {
    cart: (state) => state.cart,
    selectedDuration: (state) => state.selectedDuration
}
