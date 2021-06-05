<template>
  <footer class="c-footer">
    <div class="c-footer__main-container">
      <article class="c-footer__about-container c-f-about">
        <h3 class="c-f-about__title">About</h3>
        <p class="c-f-about__paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
      </article>
      <nav
        v-for="navItem in navItems"
        :key="navItem.id"
        class="c-footer__nav-container c-f-nav"
      >
        <h3 class="c-f-nav__title">{{ navItem.title }}</h3>
        <ul class="c-f-nav__list">
          <li
            v-for="listItem in navItem.listItems"
            :key="listItem.id"
            class="c-f-nav__list-item"
          >
            <anchor-link-or-nuxt-link
              :to="listItem.path"
              :nuxt="navItem.nuxt"
              class="c-f-nav__link"
            >
              <fa
                class="c-f-nav__icon"
                :icon="['fas', listItem.icon]"
                style="width: 1rem"
              />
              {{ listItem.label }}
            </anchor-link-or-nuxt-link>
          </li>
        </ul>
      </nav>
      <hr class="c-footer__hr-container c-f-hr" />
      <div class="c-footer__social-media-container c-f-sm">
        <a
          v-for="smItem in smItems"
          :key="smItem.id"
          class="c-f-sm__item"
          target="_blank"
          rel="noopener noreferrer nofollow"
          :href="smItem.link"
        >
          <fa class="c-f-sm__icon" :icon="['fab', smItem.icon]" />
        </a>
      </div>
      <div class="c-footer__legal-container c-f-legal">
        <p class="c-f-legal__text">Copyright &copy; 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>
<script>
import AnchorLinkOrNuxtLink from './AnchorLinkOrNuxtLink.vue';

export default {
  components: {
    AnchorLinkOrNuxtLink,
  },

  data() {
    return {
      navItems: [
        {
          nuxt: true,
          title: 'webshop',
          listItems: [
            {
              path: '/webshop/storefront',
              icon: 'store-alt',
              label: 'store',
            },
            {
              path: '/webshop/custom-work',
              icon: 'drafting-compass',
              label: 'custom work',
            },
            {
              path: '/webshop/storefront',
              icon: 'shopping-basket',
              label: 'shopping cart',
            },
          ],
        },
        {
          nuxt: true,
          title: 'restoration',
          listItems: [
            {
              path: '/restoration/methodology',
              icon: 'lightbulb',
              label: 'methodology',
            },
            {
              path: '/restoration/workshops',
              icon: 'users',
              label: 'workshops',
            },
            {
              path: '/restoration/contact',
              icon: 'address-card',
              label: 'contact',
            },
          ],
        },
        {
          nuxt: false,
          title: 'contact info',
          listItems: [
            {
              path: 'https://www.google.com/maps/place/50.867785845595435,%203.8150557738335107',
              icon: 'map-marker-alt',
              label: 'location',
            },
            {
              path: 'tel:+123456789',
              icon: 'phone',
              label: 'phone',
            },
            {
              path: 'mailto:support@company.com',
              icon: 'envelope',
              label: 'e-mail',
            },
          ],
        },
        {
          nuxt: true,
          title: 'accounts',
          listItems: [
            {
              path: '/accounts/sign-up',
              icon: 'user-plus',
              label: 'sign up',
            },
            {
              path: '/accounts/login',
              icon: 'sign-in-alt',
              label: 'login',
            },
            {
              path: '/accounts/profile',
              icon: 'user-circle',
              label: 'profile',
            },
          ],
        },
      ],
      smItems: [
        { link: 'youtube.com', icon: 'youtube' },
        { link: 'facebook.com', icon: 'facebook' },
        { link: 'instagram.com', icon: 'instagram' },
        { link: 'twitter.com', icon: 'twitter' },
        { link: 'pinterest.com', icon: 'pinterest' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.c-footer {
  // ...
  &__main-container {
    // ...
  }

  &__about-container.c-f-about {
    // ...
    &__title {
      // ...
    }

    &__paragraph {
      // ...
    }
  }

  &__nav-container.c-f-nav {
    // ...
    &__title {
      // ...
    }

    &__list {
      // ...
    }

    &__list-item {
      // ...
    }

    &__link {
      // ...
    }

    &__icon {
      // ...
    }
  }

  &____hr-container.c-f-hr {
    // ...
  }

  &__social-media-container.c-f-sm {
    // ...
    &__item {
      // ...
    }

    &__icon {
      // ...
    }
  }

  &__legal-container.c-f-legal {
    // ...
    &__text {
      // ...
    }
  }
}
</style>
