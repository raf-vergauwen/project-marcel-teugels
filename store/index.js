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
  removeFromCart(state, product) {
    const index = state.shoppingCart.indexOf(product.id);
    state.shoppingCart.splice(index, index + 1);

    updateLocalStorage(state.shoppingCart);
  },
  updateCartFromLocalStorage(state) {
    const cart = localStorage.getItem('cart');
    if (cart) {
      state.shoppingCart = cart.split(',');
    }
  },
};

export const actions = {};
