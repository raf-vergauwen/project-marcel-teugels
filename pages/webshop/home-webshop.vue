<template>
  <main class="main">
    <!-- * ------------------------------------------------------------------>
    <store-header />
    <section class="hero" :style="heroImage">
      <!-- * -------------------------------------------------------------->
      <div class="hero__container">
        <svg
          class="hero__visual"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            d="M376.7.1 255.8 121 135 .1h-52.9v343.4h53V219.1h94.3v291.3h52.8V219.1h94.3v124.5h53V.1h-52.8zM135.4 167.4v-94l94 94h-94zm240.9 0h-94l94-94v94z"
          />
        </svg>
        <h1 class="hero__subject">Marcel Teugels</h1>
        <h2 class="hero__title">Webshop Homepage</h2>
      </div>
    </section>
    <section class="hot-items">
      <h2 class="hot-items__title">Hot Items</h2>
      <div class="hot-items__container">
        <product-item
          v-for="product in productData"
          :key="product.id"
          :product="product"
          class="hot-items__item"
          @add-product="addProduct($event)"
        />
      </div>
    </section>
    <div class="intermezzo intermezzo--1 full-width" :style="intermezzo1">
      <div class="intermezzo__container"></div>
    </div>
    <footer class="main-footer">
      <!-- * ------------------------------------------------------------------>
      <div class="main-footer__container">
        <!-- - ---------------------------------------------------------------->
        <div class="main-footer__container--nav">
          <!-- # -------------------------------------------------------------->
          <article class="foot-nav-text">
            <div class="foot-nav-text__container">
              <!----------------------------------------------------------------->
              <h3 class="foot-nav-text__title">About</h3>
              <p class="foot-nav-text__paragraph">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam,
                feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                libero sit amet quam egestas semper. Aenean ultricies mi vitae
                est. Mauris placerat eleifend leo.
              </p>
            </div>
          </article>
          <!-- # -------------------------------------------------------------->
          <div class="foot-nav-links">
            <!----------------------------------------------------------------->
            <nav class="foot-nav-links__container">
              <h3 class="foot-nav-links__title">Webshop</h3>
              <ul class="foot-nav-links__list">
                <li class="foot-nav-links__link">
                  <a href="#hero">
                    <fa class="item-icon" icon="home" />Home Page
                  </a>
                </li>
                <li class="foot-nav-links__link">
                  <a href="#hot-items">
                    <fa class="item-icon" icon="shopping-basket" />Webshop
                  </a>
                </li>
                <li class="foot-nav-links__link">
                  <a href="#about">
                    <fa class="item-icon" icon="drafting-compass" />Custom Work
                  </a>
                </li>
              </ul>
            </nav>
            <!----------------------------------------------------------------->
            <nav class="foot-nav-links__container">
              <h3 class="foot-nav-links__title">Contact Info</h3>
              <ul class="foot-nav-links__list">
                <li class="foot-nav-links__link">
                  <a
                    href="http://www.google.com/maps/place/50.867785845595435,%203.8150557738335107"
                  >
                    <fa class="item-icon" icon="map-marker-alt" />Location
                  </a>
                </li>
                <li class="foot-nav-links__link">
                  <a href="tel:+123456789">
                    <fa class="item-icon" icon="phone" />+32 470 32 45 20
                  </a>
                </li>
                <li class="foot-nav-links__link">
                  <a href="mailto:support@company.com">
                    <fa class="item-icon" icon="envelope" />support@company.com
                  </a>
                </li>
              </ul>
            </nav>
            <!----------------------------------------------------------------->
            <nav class="foot-nav-links__container">
              <h3 class="foot-nav-links__title">Restoration</h3>
              <ul class="foot-nav-links__list">
                <li class="foot-nav-links__link">
                  <a href="#restoration-hero">
                    <fa class="item-icon" icon="home" />Home Page
                  </a>
                </li>
                <li class="foot-nav-links__link">
                  <a href="#restoration">
                    <fa class="item-icon" icon="house-damage" />Restoration
                  </a>
                </li>
                <li class="foot-nav-links__link">
                  <a href="#workshops">
                    <fa class="item-icon" icon="store-alt" />Workshops
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <!-- - ---------------------------------------------------------------->
        <hr class="main-footer__hr" />
        <!-- - ---------------------------------------------------------------->
        <div class="main-footer__container--contact">
          <!------------------------------------------------------------------->
          <div class="foot-copyright__container">
            <p class="foot-copyright__text">
              Copyright &copy; 2021 All Rights Reserved
            </p>
          </div>
          <!------------------------------------------------------------------->
          <div class="foot-social-media__container">
            <a
              class="foot-social-media__link"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <fa
                :class="{ 'link-icon': true }"
                :icon="['fab', 'youtube']"
                :style="{
                  width: iconWidth + 'rem',
                  height: iconHeight + 'rem',
                }"
              />
            </a>
            <a
              class="foot-social-media__link"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <fa
                :class="{ 'link-icon': true }"
                :icon="['fab', 'facebook']"
                :style="{
                  width: iconWidth + 'rem',
                  height: iconHeight + 'rem',
                }"
              />
            </a>
            <a
              class="foot-social-media__link"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <fa
                :class="{ 'link-icon': true }"
                :icon="['fab', 'instagram']"
                :style="{
                  width: iconWidth + 'rem',
                  height: iconHeight + 'rem',
                }"
              />
            </a>
            <a
              class="foot-social-media__link"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <fa
                :class="{ 'link-icon': true }"
                :icon="['fab', 'twitter']"
                :style="{
                  width: iconWidth + 'rem',
                  height: iconHeight + 'rem',
                }"
              />
            </a>
            <a
              class="foot-social-media__link"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              <fa
                :class="{ 'link-icon': true }"
                :icon="['fab', 'pinterest']"
                :style="{
                  width: iconWidth + 'rem',
                  height: iconHeight + 'rem',
                }"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
    <main-footer />
  </main>
</template>

<script>
import StoreHeader from '~/components/StoreHeader';
import ProductItem from '~/components/ProductItem';
import MainFooter from '~/components/MainFooter';

export default {
  components: { StoreHeader, ProductItem, MainFooter },

  data() {
    return {
      heroImage: {
        backgroundImage:
          'url(http://157.230.126.154/assets/eaad4d0f-f450-47a0-b99a-bd7767111d7d)',
      },
      intermezzo1: {
        backgroundImage:
          'url(http://157.230.126.154/assets/e75be596-13cf-4527-8254-6423c5880acf)',
      },
      productData: {},
      src: 'http://157.230.126.154/assets/',
      Admin: false,
      shoppingCart: [],
      iconWidth: 3,
      iconHeight: 3,
    };
  },

  fetch() {
    return this.fetchItems();
  },

  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
    user_role() {
      return sessionStorage.getItem('user_role');
    },
  },

  methods: {
    fetchItems() {
      return fetch('http://157.230.126.154/items/products?fields=*,images.*', {
        method: 'GET',
        headers: {},
      })
        .then((response) => {
          if (!response.ok) {
            console.log('Error');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.productData = data.data;
          this.Admin = this.user_role;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addProduct(product) {
      this.shoppingCart.push(product.id);
      sessionStorage.setItem('shopping_cart', this.shoppingCart);
      console.log(this.shoppingCart);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  max-width: 100%;
}

/* -------------------------------------------------------------------------- *\
-  SECTION 1: hero
\* -------------------------------------------------------------------------- */
.hero {
  @include flex-container($justify: center);

  max-width: 100%;
  padding: 0;
  background: center center / cover fixed;

  &__container {
    @include box-dimensions($height: 100vh);
    @include flex-container($justify: center);

    background-color: $bg-color--transparant-black---level-2;
  }

  &__visual {
    max-height: 35vh;
    fill: var(--color-tertiary);
    filter: drop-shadow(0 0 0.1em var(--color-text));
  }

  &__subject {
    color: var(--color-background);
    filter: drop-shadow(0 0 0.1em var(--color-text));
  }

  &__title {
    color: var(--color-secondary);
    filter: drop-shadow(0 0 0.1em var(--color-text));
    font-family: $font-family--component;
  }
}

/* -------------------------------------------------------------------------- *\
-  SECTION 2: Hot Items
\* -------------------------------------------------------------------------- */
.hot-items {
  // background-color: var(--color-secondary);
  &__title {
    margin-bottom: $buffer--m;
    color: var(--color-text);

    @include breakpoint(l) {
      margin-bottom: $buffer--l;
    }
  }

  &__container {
    display: grid;
    gap: $buffer--m;
    grid-template-areas: '.';
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
    place-items: center;
    transition: $transition--default;

    @include breakpoint(s) {
      grid-template-areas: '. .';
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }

    @include breakpoint(l) {
      gap: $buffer--l;
      grid-template-areas: '. . .';
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    @include breakpoint(xl) {
      grid-template-areas: '. . . .';
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(2, 1fr);
    }
  }

  &__item {
    @include card;

    &:hover {
      transform: translate3d(0, -$buffer--xxs, 0);

      @include breakpoint(m) {
        transform: translate3d(0, -$buffer--xs, 0);
      }

      @include breakpoint(l) {
        transform: translate3d(0, -$buffer--s, 0);
      }
    }
  }
}

/* -------------------------------------------------------------------------- *\
-  FOOTER-MAIN: Footer
\* -------------------------------------------------------------------------- */

.main-footer {
  display: flex;
  width: 100vw;
  max-width: 100vw;
  justify-content: center;
  padding-right: $buffer--l;
  margin: 0;
  background-color: var(--color-primary--darker);

  @include breakpoint(xl) {
    padding-right: $buffer--xl;
  }

  &__container {
    max-width: $max-width--root;
  }

  &__hr {
    // ...
  }
}

.main-footer__container--nav {
  .foot-nav-text {
    // ...

    &__container {
      // ...
    }

    &__title {
      padding: $buffer--m 0;
      // ...
    }

    &__paragraph {
      // ...
    }
  }

  .foot-nav-links {
    @include flex-container;

    @include breakpoint(s) {
      flex-direction: row;
    }

    &__container {
      // ...
    }

    &__title {
      padding: $buffer--m 0;
      // ...
    }

    &__list {
      // ...
    }

    &__link {
      // ...
      color: var(--color-secondary);
    }
  }
}

.main-footer__container--contact {
  @include breakpoint(xs) {
    @include flex-container(nowrap, row, space-evenly, center);
  }
}

.foot-copyright {
  // ...
  &__container {
    @include flex-container;

    flex-direction: row;
    padding: $buffer--s;

    @include breakpoint(xs) {
      // @include flex-items(2);

      // justify-content: flex-start;
    }
  }

  &__link {
    // ...
  }
}

.foot-social-media {
  // ...

  &__container {
    @include flex-container($direction: row);

    justify-content: space-between;
    // justify-content: space-evenly;
    // padding: 0 $buffer--s;

    @include breakpoint(xs) {
      justify-content: space-around;
      // @include flex-items(8);
    }

    @include breakpoint(s) {
      justify-content: space-evenly;
    }
  }

  &__link {
    padding: 0;
  }
}

/* -------------------------------------------------------------------------- *\
-  INTERMEZZO
\* -------------------------------------------------------------------------- */

.intermezzo {
  height: 100vh;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;

  &__container {
    height: 100vh;
    background-color: $bg-color--transparant-black---level-2;
  }
}

.intermezzo--1 {
  background-image: url('/assets/media/images/marcel-teugels/favorites/sculpture--07.jpg');
}

.intermezzo--2 {
  background-image: url('/assets/media/images/marcel-teugels/favorites/construction-work--05.jpg');
}
</style>
