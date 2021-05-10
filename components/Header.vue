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
        { path: '/', label: 'home' },
        { path: '/login', label: 'login' },
        { path: '/profile', label: 'profile' },
        { path: '/storefront', label: 'store' },
      ],
    };
  },
};
</script>

<style lang="scss">
.c-header {
  background-color: $bg-blue;

  &__container {
    @extend .container;
  }

  &__nav {
    display: flex;
    justify-content: flex-end;
    &__item {
      padding: $s-site-padding $s-site-padding;
      text-decoration: none;
      color: $title-blue;

      &--active,
      &:hover {
        background-color: $bg-blue--dark;
        color: $subtitle-blue;
      }
    }
  }
}
</style>
