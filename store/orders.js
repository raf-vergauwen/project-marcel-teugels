export const state = () => {
  return {
    order: null,
  };
};

export const getters = {};

export const mutations = {
  SET_ORDER(state, order) {
    state.order = order;
  },
};

export const actions = {
  getOrder(context, orderId) {},
};
