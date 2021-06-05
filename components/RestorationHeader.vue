<template>
  <header class="c-header">
    <div
      class="c-header__container"
      :class="{ 'c-header__container--hidden': !showNavbar }"
    >
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
  name: 'RestorationHeader',
  data() {
    return {
      navItems: [
        {
          path: '/',
          label: 'home',
          icon: 'home',
        },
        {
          path: '/restoration/home-restoration',
          label: 'overview',
          icon: 'search',
        },
        {
          path: '/restoration/methodology',
          label: 'methodology',
          icon: 'lightbulb',
        },
        {
          path: '/restoration/workshops',
          label: 'workshops',
          icon: 'users',
        },
        {
          path: '/restoration/contact',
          label: 'contact',
          icon: 'address-card',
        },
        { path: '/accounts/sign-up', label: 'sign up', icon: 'user-plus' },
        { path: '/accounts/login', label: 'login', icon: 'sign-in-alt' },
        { path: '/accounts/profile', label: 'profile', icon: 'user-circle' },
      ],
      showNavbar: true,
      lastScrollPosition: 0,
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
