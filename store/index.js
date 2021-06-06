function updateLocalStorage(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export const state = () => ({
  shoppingCart: [],
});

export const getters = {
  productQuantity: (state) => (product) => {
    const item = state.shoppingCart.find((i) => i.id === product.id);

    if (item) {
      return item.quantity;
    } else {
      return null;
    }
  },
};

export const mutations = {
  addToCart(state, product) {
    const item = state.shoppingCart.find((i) => i.id === product.id);

    if (item) {
      item.quantity++;
    } else {
      state.shoppingCart.push({ ...product, quantity: 1 });
    }

    updateLocalStorage(state.shoppingCart);
  },
  removeFromCart(state, product) {
    const item = state.shoppingCart.find((i) => i.id === product.id);

    if (item.quantity > 1) {
      item.quantity--;
    } else {
      state.shoppingCart = state.shoppingCart.filter(
        (i) => i.id !== product.id,
      );
    }

    updateLocalStorage(state.shoppingCart);
  },
  updateCartFromLocalStorage(state) {
    const cart = localStorage.getItem('cart');
    if (cart) {
      state.shoppingCart = JSON.parse(cart);
    }
  },
};

export const actions = {};
