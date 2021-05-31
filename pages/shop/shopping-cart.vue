<template>
  <main class="p-shopping-cart">
    <h1 class="p-shopping-cart__title">Shopping cart</h1>
    <div class="p-shopping-cart__container">
      <div class="p-shopping-cart__product-list">
        <ShoppingCartItem
          v-for="product in productData"
          :key="product.id"
          class="p-shopping-cart__product-list__item"
          :product="product"
          @remove-product="removeProduct($event)"
        />
      </div>
      <div class="p-shopping-cart__total">
        <h2>Total:</h2>
        <h3>€ {{ calculate_Total }}</h3>
        <button @click="createOrderedItems">Afrekenen</button>
      </div>
    </div>
  </main>
</template>

<script>
import ShoppingCartItem from '~/components/ShoppingCartItem';

export default {
  name: 'ShoppingCartPage',
  components: { ShoppingCartItem },

  data() {
    return {
      shoppingList: [],
      productData: [],
      orderedItemId: null,
      orderId: null,
    };
  },
  fetch() {
    return this.fetchItems();
  },
  computed: {
    shopping_cart() {
      return this.$store.state.shoppingCart;
    },
    calculate_Total() {
      return this.productData.reduce((acc, product) => {
        return acc + parseInt(product.price);
      }, 0);
    },
  },
  created() {
    if (localStorage.getItem('cart')) {
      this.shoppingList = localStorage.getItem('cart').split(',');
    }
  },
  methods: {
    fetchItems() {
      for (let i = 0; i < this.shoppingList.length; i++) {
        this.$axios(
          `items/products/` + this.shoppingList[i] + '?fields=*%2Cimages.*',
          {
            method: 'GET',
            headers: {},
          },
        )
          .then((response) => {
            console.log(response);
            this.productData.push(response.data.data);
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
      this.$store.commit('removeFromCart', product);
    },
    createOrderedItems() {
      this.$axios('items/ordered_items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
          quantity: this.shoppingList.length,
          total_price: this.calculate_Total,
          products: this.shoppingList,
        },
      })
        .then((response) => {
          console.log(response);
          this.orderedItemId = response.data.data.id;
          console.log(this.orderedItemId);
          this.createOrders();
        })
        .catch((err) => {
          console.error(err);
        });
    },
    createOrders() {
      this.$axios('items/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        data: {
          total_price: this.calculate_Total,
          notes: 'test1234',
          ordered_items: [this.orderedItemId],
        },
      })
        .then((response) => {
          console.log(response);
          this.orderId = response.data.data.id;
          console.log(this.orderId);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    linkIds() {},
  },
};
</script>

<style lang="scss">
.p-shopping-cart__title {
  margin: 1em;
}

.p-shopping-cart__container {
  display: flex;
}

.p-shopping-cart__product-list {
  width: 70%;
}

.p-shopping-cart__product-list__item {
  margin-bottom: 1em;
  margin-left: 2em;
}

.p-shopping-cart__total {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
