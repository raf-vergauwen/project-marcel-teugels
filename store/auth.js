export const state = () => {
  return {
    token: null,
    user: null,
  };
};

export const getters = {
  isLoggedIn(state) {
    return state.token !== null;
  },
  isAdmin(state) {
    if (!state.user) {
      return false;
    }

    return state.user.role === '78b6335f-b448-46d6-8086-65057ba5fae0';
  },
  getUserId(state) {
    return state.user.id;
  },
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER(state, user) {
    state.user = user;
  },
};

export const actions = {
  login(context, loginBody) {
    this.$axios('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: loginBody,
    })
      .then((response) => {
        sessionStorage.setItem('access_token', response.data.data.access_token);
        context.commit('SET_TOKEN', response.data.data.access_token);

        this.$axios.setHeader(
          'Authorization',
          'Bearer ' + response.data.data.access_token,
        );
      })
      .then(() => {
        return this.$axios('/users/me', {
          method: 'GET',
        });
      })
      .then((response) => {
        context.commit('SET_USER', response.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  sessionLogin(context) {
    const token = sessionStorage.getItem('access_token');

    if (!token) {
      return;
    }

    return this.$axios('/users/me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
      .then((response) => {
        context.commit('SET_TOKEN', token);
        context.commit('SET_USER', response.data.data);
      })
      .catch(() => {
        context.dispatch('logout');
      });
  },
  logout(context) {
    context.commit('SET_TOKEN', null);
    context.commit('SET_USER', null);
    sessionStorage.removeItem('access_token');
    this.$axios.setHeader('Authorization');
  },
};
