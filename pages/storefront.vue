<template>
  <main class="p-storefront">
    <store-header />
    <div v-if="Admin === 'true'" class="title-btn__container">
      <h1 class="p-product__title">Store</h1>
      <button class="p-product__btn">
        <a href="/add-product">+</a>
      </button>
    </div>

    <div v-else class="title-btn__container">
      <h1 class="p-product__title">Store</h1>
    </div>

    <div class="p-storefront__product-list">
      <ProductItem
        v-for="product in productData"
        :key="product.id"
        class="p-storefront__product-list__item"
        :product="product"
        v-on:add-product="addProduct($event)"
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
  border: 0px;
}

.p-product__title {
  color: $dark-bg;
}

a {
  font-size: 20px;
}
</style>
