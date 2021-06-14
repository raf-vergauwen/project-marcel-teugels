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
  updateCartItemQuantity(state, payload) {
    state.shoppingCart[payload.index].quantity = payload.quantity;
  },
  addProductToCart(state, product) {
    state.shoppingCart.push(product);
  },
  setShoppingCart(state, shoppingCart) {
    state.shoppingCart = shoppingCart;
  },
  removeProductFromCart(state, index) {
    state.shoppingCart.splice(index, 1);
  },
};

export const actions = {
  addToCart(context, product) {
    const existingProductIndex = context.state.shoppingCart.findIndex(
      (i) => i.id === product.id,
    );

    if (existingProductIndex >= 0) {
      const curQuantity =
        context.state.shoppingCart[existingProductIndex].quantity;
      context.commit('updateCartItemQuantity', {
        index: existingProductIndex,
        quantity: curQuantity + 1,
      });
    } else {
      context.commit('addProductToCart', { ...product, quantity: 1 });
    }

    updateLocalStorage(context.state.shoppingCart);
  },
  removeFromCart(context, product) {
    const itemIndex = context.state.shoppingCart.findIndex(
      (i) => i.id === product.id,
    );

    if (itemIndex >= 0) {
      const item = context.state.shoppingCart[itemIndex];

      if (item.quantity > 1) {
        context.commit('updateCartItemQuantity', {
          index: itemIndex,
          quantity: item.quantity - 1,
        });
      } else {
        context.commit('removeProductFromCart', itemIndex);
      }
      updateLocalStorage(context.state.shoppingCart);
    }
  },
  updateCartFromLocalStorage(context) {
    const cart = localStorage.getItem('cart');
    if (cart) {
      context.commit('setShoppingCart', JSON.parse(cart));
    }
  },
};
