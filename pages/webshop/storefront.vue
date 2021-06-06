<template>
  <main>
    <store-header />
    <section class="p-store">
      <div
        v-if="Admin === '78b6335f-b448-46d6-8086-65057ba5fae0'"
        class="p-store__header-container"
      >
        <h1 class="p-store__title">Store</h1>
        <button class="p-store__btn">
          <a href="/add-product">+</a>
        </button>
      </div>

      <div v-else class="p-store__header-container">
        <h1 class="p-store__title">Store</h1>
      </div>

      <div class="p-store__product-list">
        <product-item
          v-for="product in productData"
          :key="product.id"
          :product="product"
          class="p-store__product-list--item"
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

<style lang="scss" scoped>
.p-store {
  padding-top: $buffer--xxl;

  &__header-container {
    @include breakpoint(l) {
      padding: $buffer--m;
    }
  }

  &__title {
    // margin-bottom: $buffer--m;
    // color: var(--color-text);

    // @include breakpoint(l) {
    //   margin-bottom: $buffer--l;
    // }
  }

  &__btn {
    // ...
  }

  &__product-list {
    display: grid;
    gap: $buffer--l;
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

  &__product-list--item {
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
