function updateLocalStorage(cart) {
  localStorage.setItem('cart', cart);
}

export const state = () => ({
  shoppingCart: [],
});

export const getters = {};

export const mutations = {
  addToCart(state, product) {
    state.shoppingCart.push(product.id);
    console.log(state.shoppingCart);

    updateLocalStorage(state.shoppingCart);
  },
};

export const actions = {};
