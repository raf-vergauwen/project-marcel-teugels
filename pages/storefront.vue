<template>
  <main class="p-storefront">
    <div class="title-btn__container">
      <h1 class="p-product__title">Store</h1>

      <button
        v-if="Admin === '78b6335f-b448-46d6-8086-65057ba5fae0'"
        class="p-product__btn"
      >
        <nuxt-link to="/add-product">+</nuxt-link>
      </button>
    </div>

    <div class="p-storefront__product-list">
      <ProductItem
        v-for="product in productData"
        :key="product.id"
        class="p-storefront__product-list__item"
        :product="product"
        @add-product="addProduct($event)"
      />
    </div>
  </main>
</template>

<script>
import ProductItem from '~/components/ProductItem';

export default {
  name: 'StoreFrontPage',
  components: { ProductItem },
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
  mounted() {
    this.$store.commit('updateCartFromLocalStorage');
  },
  methods: {
    fetchItems() {
      this.$axios('items/products?fields=*,images.*', {
        method: 'GET',
        headers: {},
      })
        .then((response) => {
          console.log(response);
          this.productData = response.data.data;
          this.Admin = this.user_role;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addProduct(product) {
      this.$store.commit('addToCart', product);
      sessionStorage.setItem('shopping_cart', this.shoppingCart);
      console.log(product);
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
body {
  color: black;
}
.p-storefront {
  @extend .container;

  &__product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: $s-site-padding;

    @include md() {
      grid-template-columns: repeat(2, 1fr);
    }

    @include sm() {
      grid-template-columns: 1fr;
    }
  }
}

.title-btn__container {
  display: flex;
  justify-content: space-between;
  margin: 2em;
}

.p-product__btn {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: $dark-bg;
  border: 0;
}

.p-product__title {
  color: $dark-bg;
}

a {
  font-size: 20px;
}
</style>
