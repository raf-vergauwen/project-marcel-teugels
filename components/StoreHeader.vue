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
          {{ navItem.path === '/shopping-cart' ? '(' + cijfer + ')' : '' }}
        </nuxt-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'StoreHeader',
  data() {
    return {
      cijfer: 0,
      navItems: [
        { path: '/shop', label: 'Home' },
        { path: '/shop/storefront', label: 'Winkel' },
        { path: '/shop/shopping-cart', label: `Winkelwagen` },
        { path: '/restauratie', label: 'Restauratie' },
      ],
    };
  },
  mounted() {
    this.$root.$on('g-add-product', () => {
      this.cijfer++;
    });
  },
};
</script>

<style lang="scss">
.c-header {
  background-color: $dark-bg;

  &__container {
    @extend .container;
    display: flex;
    justify-content: space-between;

    @include sm() {
      flex-direction: column;
    }
  }

  &__logo {
    width: 35px;
    height: 35px;
    margin: $s-site-padding;
  }

  &__nav {
    display: flex;
    justify-content: flex-end;

    @include sm() {
      flex-direction: column;
    }

    &__item {
      padding: $s-site-padding $s-site-padding;
      text-decoration: none;
      color: $light-bg;

      @include sm() {
        padding: 0em;
      }

      &--active,
      &:hover {
        background-color: $light-bg;
        color: $dark-bg;
      }
    }
  }
}
</style>
