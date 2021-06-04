<template>
  <footer class="c-footer">
    <div class="c-footer__container">
      <nav class="c-footer-store-nav">
        <ul v-for="navItem in navItems" :key="navItem.id">
          <h3>{{ navItem.title }}</h3>
          <li>
            <fa
              :class="{ 'c-footer-restoration-nav__item--icon': true }"
              :icon="['fas', navItem.icon[0]]"
              style="width: 1rem"
            />
            {{ navItem.label[0] }}
          </li>
          <li>
            <fa
              :class="{ 'c-footer-restoration-nav__item--icon': true }"
              :icon="['fas', navItem.icon[1]]"
              style="width: 1rem"
            />
            {{ navItem.label[1] }}
          </li>
          <li>
            <fa
              :class="{ 'c-footer-restoration-nav__item--icon': true }"
              :icon="['fas', navItem.icon[2]]"
              style="width: 1rem"
            />
            {{ navItem.label[2] }}
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
import AnchorLinkOrNuxtLink from './AnchorLinkOrNuxtLink.vue';

export default {
  components: {
    AnchorLinkOrNuxtLink,
  },
  props: ['brandIsNuxtLink', 'navbar'],
  data() {
    return {
      navItems: [
        {
          title: 'webshop',
          icon: ['store-alt', 'drafting-compass', 'shopping-basket'],
          label: ['store', 'custom work', 'shopping cart(0)'],
          nuxt: true,
          path: [
            '/webshop/storefront',
            '/webshop/custom-work',
            '/webshop/shopping-cart',
          ],
        },
        {
          title: 'restoration',
          icon: ['lightbulb', 'users', 'address-card'],
          label: ['methodology', 'workshops', 'contact'],
          nuxt: true,
          path: [
            '/restoration/methodology',
            '/restoration/workshops',
            '/restoration/contact',
          ],
        },
        {
          title: 'contact info',
          icon: ['map-marker-alt', 'phone', 'envelope'],
          label: ['location', 'phone', 'e-mail'],
          nuxt: false,
          path: [
            'http://www.google.com/maps/place/50.867785845595435,%203.8150557738335107',
            'tel:+123456789',
            'mailto:support@company.com',
          ],
        },
        {
          title: 'accounts',
          icon: ['user-plus', 'sign-in-alt', 'user-circle'],
          label: ['sign up', 'login', 'profile'],
          nuxt: true,
          path: ['/accounts/sign-up', '/accounts/login', '/accounts/profile'],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@include c-main-footer;
</style>
