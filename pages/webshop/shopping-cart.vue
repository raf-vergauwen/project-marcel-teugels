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
import ShoppingCartItem from '~/components/ShoppingCartItem';
import StoreHeader from '~/components/StoreHeader';

export default {
  components: { StoreHeader, ShoppingCartItem },

  data() {
    return {
      // shoppingList: sessionStorage.getItem('shopping_cart').split(','),
      shoppingList: (sessionStorage.getItem('shopping_cart') || '').split(','),
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
      const index = this.productData.indexOf(product);
      this.productData.splice(index, index + 1);
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  color: #526488;
  font-size: 42px;
  font-weight: 300;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
