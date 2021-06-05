<template>
  <footer class="c-footer">
    <div class="c-footer__main-container">
      <article class="c-footer__about-container c-foot-about">
        <h3 class="c-foot-about__title">About</h3>
        <p class="c-foot-about__paragraph">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
          ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
          egestas semper. Aenean ultricies mi vitae est. Mauris placerat
          eleifend leo.
        </p>
      </article>
      <nav class="c-footer__nav-container c-foot-nav">
        <div
          v-for="navItem in navItems"
          :key="navItem.id"
          class="c-footer-nav__sub-container"
        >
          <h3 class="c-foot-nav__title">{{ navItem.title }}</h3>
          <ul class="c-foot-nav__list">
            <li
              v-for="listItem in navItem.listItems"
              :key="listItem.id"
              class="c-foot-nav__item"
            >
              <anchor-link-or-nuxt-link
                :to="listItem.path"
                :nuxt="navItem.nuxt"
                class="c-foot-nav__link"
              >
                <fa
                  class="c-foot-nav__link-icon"
                  :icon="['fas', listItem.icon]"
                  style="width: 1rem"
                />
                {{ listItem.label }}
              </anchor-link-or-nuxt-link>
            </li>
          </ul>
        </div>
      </nav>
      <hr class="c-footer__hr-container c-foot-hr" />
      <div class="c-footer__social-media-container c-foot-sm">
        <a
          v-for="smItem in smItems"
          :key="smItem.id"
          class="c-foot-sm__item"
          target="_blank"
          rel="noopener noreferrer nofollow"
          :href="smItem.link"
        >
          <fa class="c-foot-sm__icon" :icon="['fab', smItem.icon]" />
        </a>
      </div>
      <div class="c-footer__legal-container c-foot-legal">
        <p class="c-foot-legal__text">
          Copyright &copy; 2021 All Rights Reserved
        </p>
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
  &__main-container {
    padding: $buffer--s;
  }

  &__about-container {
    padding: 0;

    .c-foot-about {
      &__title {
        // ...
      }

      &__paragraph {
        // ...
      }
    }
  }

  &__nav-container {
    padding: 0;

    .c-foot-nav {
      &__sub-container {
        // ...
      }

      &__title {
        // ...
      }

      &__list {
        // ...
      }

      &__item {
        // ...
      }

      &__link {
        // ...
      }

      &__link-icon {
        // ...
      }
    }
  }

  &____hr-container .c-foot-hr {
    padding: 0;
  }

  &__social-media-container {
    @include flex-container(nowrap, row);

    padding: 0;

    .c-foot-sm {
      &__item {
        // ...
      }

      &__icon {
        // ...
      }
    }
  }

  &__legal-container {
    padding: 0;

    .c-foot-legal {
      &__text {
        padding: $buffer--s 0;
        font-family: $font-family--text-bigger;
        font-size: $font-family--text-bigger;
        text-align: center;
      }
    }
  }
}
</style>
