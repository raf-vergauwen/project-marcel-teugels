<template>
  <header class="c-header" :class="{ 'c-header--hidden': !showNavbar }">
    <div class="c-header__main-container">
      <nav class="c-header-nav">
        <ul class="c-header-nav__list">
          <li
            v-for="navItem in navItems"
            :key="navItem.path"
            class="c-header-nav__item"
          >
            <nuxt-link
              :class="{
                'c-header-nav__link': true,
                'c-header-nav__link--active': navItem.path === $route.path,
              }"
              :to="navItem.path"
            >
              <fa
                class="c-header-nav__link-icon"
                :icon="['fas', navItem.icon]"
              />
              {{ navItem.label }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'StoreHeader',
  data() {
    return {
      navItems: [
        {
          path: '/',
          label: 'home',
          icon: 'home',
        },
        {
          path: '/webshop/home-webshop',
          label: 'overview',
          icon: 'search',
        },
        {
          path: '/webshop/storefront',
          label: 'store',
          icon: 'store-alt',
        },
        {
          path: '/webshop/custom-work',
          label: 'custom work',
          icon: 'drafting-compass',
        },
        {
          path: '/webshop/shopping-cart',
          label: 'shopping-cart',
          icon: 'shopping-basket',
        },
        { path: '/accounts/sign-up', label: 'sign up', icon: 'user-plus' },
        { path: '/accounts/login', label: 'login', icon: 'sign-in-alt' },
        { path: '/accounts/profile', label: 'profile', icon: 'user-circle' },
      ],
      showNavbar: true,
      lastScrollPosition: -100,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll() {
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 0) {
        return;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 64) {
        return;
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style lang="scss" scoped>
@include main-header;
</style>
