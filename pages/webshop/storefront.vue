<template>
  <main class="p-store">
    <store-header />
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
  </main>
</template>

<script>
import ProductItem from '~/components/ProductItem';
import StoreHeader from '~/components/StoreHeader';

export default {
  components: { ProductItem, StoreHeader },

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
    /*
    newShoppingCart() {
      fetch('http://157.230.126.154/items/ordered_items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: this.productBody,
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error('Could not create new shopping cart');
          }
          return response.json();
        })
        .then((body) => {
          console.log(body);
          //this.clickCount++;
          console.log('newCart');
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addToShoppingCart(product) {
      fetch('http://157.230.126.154/items/ordered_items/21', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: this.productBody,
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error('Could not add product to shopping cart');
          }
          return response.json();
        })
        .then((body) => {
          console.log(body);
          //this.clickCount++;
          console.log('addToCart');
        })
        .catch((err) => {
          console.error(err);
        });
    },
    */
  },
};
</script>

<style lang="scss">
.p-store {
  &__header-container {
    padding-top: $buffer--xxl;
  }

  &__title {
    padding-top: $buffer--m;
    padding-bottom: 0;
    color: var(--color-text);

    @include breakpoint(m) {
      padding-top: $buffer--m;
    }

    @include breakpoint(l) {
      padding-top: $buffer--l;
    }
  }

  &__btn {
    // ...
  }

  &__product-list {
    display: grid;
    padding: $buffer--m;
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
      padding: $buffer--m;
      gap: $buffer--m;
      grid-template-areas: '. . .';
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
    }

    @include breakpoint(l) {
      padding: $buffer--l;
      gap: $buffer--l;
    }

    @include breakpoint(xl) {
      grid-template-areas: '. . . .';
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
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
