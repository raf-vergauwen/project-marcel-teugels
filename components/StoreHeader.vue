// ! [NAMESPACE]-[PREFIX]-[BLOCK]__[ELEMENT]--[MODIFIER]

<template>
  <header class="sh-l-header" :class="{ 'c-header--hidden': !showNavbar }">
    <div class="sh-l-header__main-container">
      <collapse-transition class="sh-l-header__nav-container sh-c-header-nav">
        <ul v-show="isOpen" class="sh-c-header-nav__list">
          <li
            v-for="navItem in navItems"
            :key="navItem.path"
            class="sh-c-header-nav__item"
          >
            <nuxt-link
              :class="{
                'sh-c-header-nav__link': true,
                'sh-c-header-nav__link--active': navItem.path === $route.path,
              }"
              :to="navItem.path"
            >
              <fa
                class="sh-c-header-nav__link-icon"
                :icon="['fas', navItem.icon]"
              />
              {{ navItem.label }}
            </nuxt-link>
          </li>
        </ul>
      </collapse-transition>
      <div
        class="hamburger"
        :class="hamburgerOpen ? 'hamburger--is-open' : ''"
        @click="hamburgerOpen = !hamburgerOpen"
      >
        <div class="hamburger__item hamburger__item--first"></div>
        <div class="hamburger__item hamburger__item--middle"></div>
        <div class="hamburger__item hamburger__item--last"></div>
      </div>
      <button
        class="sh-l-header__menu-btn-container sh-c-menu-btn"
        @click="isOpen = !isOpen"
      >
        Old button
      </button>
    </div>
  </header>
</template>

<script>
import { CollapseTransition } from '@ivanv/vue-collapse-transition';

export default {
  name: 'StoreHeader',

  components: {
    CollapseTransition,
  },

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
      isOpen: false, // closed by default
      hamburgerOpen: false,
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
