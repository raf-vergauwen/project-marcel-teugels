<template>
  <header class="c-header">
    <div class="c-header__container">
      <nav class="c-header__nav">
        <nuxt-link
          v-for="navItem in navItems"
          :key="navItem.path"
          :class="{
            'c-header__nav__item': true,
            'c-header__nav__item--active': navItem.path === $route.path,
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
  name: 'Header',
  data() {
    return {
      navItems: [
        { path: '/home-restauratie', label: 'home' },
        { path: '/method', label: 'werkwijze' },
        { path: '/workshops', label: 'workshops' },
        { path: '/contact', label: 'contact' },
        { path: '/login', label: 'login' },
        { path: '/profile', label: 'profile' },
        { path: '/account-creation', label: 'sign up' },
        { path: '/home-store', label: 'store' },
      ],
    };
  },
};
</script>

<style lang="scss">
.c-header {
  background-color: $dark-bg;

  &__container {
    @extend .container;
  }

  &__nav {
    display: flex;
    justify-content: flex-end;
    &__item {
      padding: $s-site-padding $s-site-padding;
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
