<template>
  <main class="p-shopping-cart">
    <h1 class="p-shopping-cart__title">Shopping cart</h1>
    <div class="p-shopping-cart__container">
      <div class="p-shopping-cart__product-list">
        <ShoppingCartItem
          v-for="product in shoppingList"
          :key="product.id"
          class="p-shopping-cart__product-list__item"
          :product="product"
          @remove-product="removeProduct(product)"
        />
      </div>
      <div class="p-shopping-cart__total">
        <h3>Rekening</h3>
        <h5 v-for="product in shoppingList" :key="product.id">
          {{ product.quantity }} x {{ product.price }} =
          {{ product.quantity * product.price }}
        </h5>
        <h3>Totaal: € {{ calculate_Total }}</h3>
        <button>
          <nuxt-link class="place-order-link" to="/shop/place-order">
            Afrekenen
          </nuxt-link>
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import ShoppingCartItem from '~/components/ShoppingCartItem';

export default {
  name: 'ShoppingCartPage',
  components: { ShoppingCartItem },
  computed: {
    shoppingList() {
      return this.$store.state.shoppingCart;
    },
    calculate_Total() {
      return this.shoppingList.reduce((acc, product) => {
        return (
          acc +
          parseFloat(product.price) *
            this.$store.getters.productQuantity(product)
        );
      }, 0);
    },
  },
  created() {
    this.$store.dispatch('updateCartFromLocalStorage');
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch('removeFromCart', product);
      // this.shoppingList = this.$store.state.shoppingCart;
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
    getQuantity(product) {
      return this.$store.getters.productQuantity(product);
    },
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
