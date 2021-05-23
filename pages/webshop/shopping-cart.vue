<template>
  <main>
    <store-header />
    <div class="container">
      <h1 class="title">Shopping cart</h1>
      <button @click="printList">print</button>
      <div class="cart-card">
        <shopping-cart-item
          v-for="product in productData"
          :key="product.id"
          class="p-store__product-list__item"
          :product="product"
          @remove-product="removeProduct($event)"
        />
      </div>
    </div>
  </main>
</template>

<script>
import shoppingCartItem from '~/components/shoppingCartItem';
import StoreHeader from '~/components/StoreHeader';

export default {
  components: { StoreHeader, shoppingCartItem },

  data() {
    return {
      shoppingList: sessionStorage.getItem('shopping_cart').split(','),
      productData: [],
    };
  },
  computed: {
    shopping_cart() {
      return sessionStorage.getItem('shopping_cart');
    },
  },
  methods: {
    printList() {
      console.log(this.shoppingList);
      this.fetchItems();
    },
    fetchItems() {
      for (let i = 0; i < this.shoppingList.length; i++) {
        fetch(
          `http://157.230.126.154/items/products/` +
            this.shoppingList[i] +
            '?fields=*%2Cimages.*',
          {
            method: 'GET',
            headers: {},
          },
        )
          .then((response) => {
            if (!response.ok) {
              console.log('Error');
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
            this.productData.push(data.data);
            console.log(this.productData);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },
    removeProduct(product) {
      console.log(product);
      let index = this.productData.indexOf(product);
      this.productData.splice(index, index + 1);
    },
  },
};
</script>

<style lang="scss">
body {
  color: black;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
