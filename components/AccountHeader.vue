<template>
  <header class="c-a-header">
    <div class="c-a-header__container">
      <nav class="c-a-header__nav">
        <nuxt-link
          v-for="navItem in navItems"
          :key="navItem.path"
          :class="{
            'c-a-header__nav__items': true,
            'c-a-header__nav__items--active': navItem.path === $route.path,
          }"
          :to="navItem.path"
        >
          {{ navItem.label }}
          {{ navItem.path === '/shopping-cart' ? '(' + cijfer + ')' : '' }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AccountHeader',
  data() {
    return {
      cijfer: 0,
      navItems: [
        { path: '/login', label: 'login' },
        { path: '/profile', label: 'profiel' },
        { path: '/account-creation', label: 'sign up' },
      ],
    };
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
