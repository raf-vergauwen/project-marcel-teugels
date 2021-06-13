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
          @remove-product="removeProduct($event)"
        />
      </div>
      <div class="p-shopping-cart__total">
        <h3>Rekening</h3>
        <h5 v-for="product in shoppingList" :key="product.id">
          {{ getQuantity(product) }} x {{ product.price }} =
          {{ getQuantity(product) * product.price }}
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

  data() {
    return {
      shoppingList: [],
    };
  },
  computed: {
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
    if (localStorage.getItem('cart')) {
      const stringObject = localStorage.getItem('cart');
      this.shoppingList = JSON.parse(stringObject);
    }

  },
  methods: {
    removeProduct(product) {
      const index = this.shoppingList.indexOf(product);

      if (this.$store.getters.productQuantity(product) === 1) {
        this.shoppingList.splice(index, index + 1);
      }
      this.$store.commit('removeFromCart', product);
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
.p-shopping-cart {
  &__title {
    margin: 1em;
  }

  &__container {
    display: flex;
  }

  &__product-list {
    width: 70%;

    &__item {
      margin-bottom: 1em;
      margin-left: 2em;
    }
  }

  &__total {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
