<template>
  <header class="c-a-header">
    <div class="c-a-header__container">
      <nav class="c-a-header__nav">
        <nuxt-link
          v-if="isAdmin"
          :class="{
            'c-a-header__nav__items': true,
            'c-a-header__nav__items--active': '/admin' === $route.path,
          }"
          to="/admin/add-product"
        >
          Admin
        </nuxt-link>
        <nuxt-link
          v-if="!isLoggedIn"
          :class="{
            'c-a-header__nav__items': true,
            'c-a-header__nav__items--active': '/login' === $route.path,
          }"
          to="/login"
        >
          Login
        </nuxt-link>
        <a
          v-if="isLoggedIn"
          :class="{
            'c-a-header__nav__items': true,
          }"
          @click="logout"
        >
          Logout
        </a>
        <nuxt-link
          v-if="isLoggedIn"
          :class="{
            'c-a-header__nav__items': true,
            'c-a-header__nav__items--active': '/profile' === $route.path,
          }"
          to="/profile"
        >
          {{ userName }}
        </nuxt-link>
        <nuxt-link
          v-if="!isLoggedIn"
          :class="{
            'c-a-header__nav__items': true,
            'c-a-header__nav__items--active':
              '/account-creation' === $route.path,
          }"
          to="/account-creation"
        >
          Registreer
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AccountHeader',
  data() {
    return {};
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn'];
    },
    isAdmin() {
      return this.$store.getters['auth/isAdmin'];
    },
    userName() {
      if (this.$store.getters['auth/getUser'] !== null) {
        return this.$store.getters['auth/getUser'].first_name;
      } else {
        return null;
      }
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">
.c-a-header {
  background-color: $almost-dark-bg;

  &__container {
    @extend .container;
  }

  &__nav {
    display: flex;
    justify-content: flex-end;
    &__items {
      padding: $xs-site-padding $xs-site-padding;
      text-decoration: none;
      color: $light-bg;

      &--active,
      &:hover {
        background-color: $light-bg;
        color: $dark-bg;
      }
    }
  }
}
</style>
