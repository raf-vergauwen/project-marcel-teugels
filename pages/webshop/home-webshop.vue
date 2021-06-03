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
  </main>
</template>

<script>
import StoreHeader from '~/components/StoreHeader';
import ProductItem from '~/components/ProductItem';

export default {
  components: { StoreHeader, ProductItem },

  data() {
    return {
      heroImage: {
        backgroundImage:
          'url(http://157.230.126.154/assets/eaad4d0f-f450-47a0-b99a-bd7767111d7d)',
      },
      productData: {},
      src: 'http://157.230.126.154/assets/',
      Admin: false,
      shoppingCart: [],
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

<style lang="scss">
.main {
  max-width: 100%;
}
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
.hot-items {
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

    @include breakpoint(xs) {
      grid-template-areas: '. .';
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(5, 1fr);
    }

    @include breakpoint(m) {
      gap: $buffer--m;
      grid-template-areas: '. . .';
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    @include breakpoint(l) {
      gap: $buffer--l;
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
</style>
