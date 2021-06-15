<template>
  <header class="c-header">
    <div class="c-header__container">
      <img
        src="http://157.230.126.154/assets/96e3df59-a481-44f6-b979-693df355bf90"
        alt=""
        class="c-header__logo"
      />
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
  name: 'AdminHeader',
  data() {
    return {
      navItems: [
        { path: '/admin/add-product', label: 'Product toevoegen' },
        { path: '/admin/add-workshop', label: 'Workshop toevoegen' },
        { path: '/admin/get-all-request', label: 'Overzicht requests' },
        { path: '/admin/order', label: 'Orders' },
        { path: '/', label: 'Home' },
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

  &__logo {
    width: 35px;
    height: 35px;
    margin: $s-site-padding;
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
