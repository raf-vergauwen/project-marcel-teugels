<template>
  <header class="c-header">
    <div class="c-header__container">
      <nav class="c-header-nav">
        <nuxt-link
          v-for="navItem in navItems"
          :key="navItem.path"
          :class="{
            'c-header-nav__item': true,
            'c-header-nav__item--active': navItem.path === $route.path,
          }"
          :to="navItem.path"
        >
          {{ navItem.label }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'RestaurationHeader',
  data() {
    return {
      navItems: [
        { path: '/', label: 'home' },

        { path: '/restoration/home-restoration', label: 'overview' },
        { path: '/restoration/methodology', label: 'methodology' },
        { path: '/restoration/workshops', label: 'workshops' },
        { path: '/restoration/contact', label: 'contact' },

        { path: '/accounts/sign-up', label: 'sign up' },
        { path: '/accounts/login', label: 'login' },
        { path: '/accounts/profile', label: 'profile' },
      ],
    };
  },
};
</script>

<style lang="scss">
@include main-header;
</style>
