<template>
  <div class="container">
    <h1 class="title">Shopping cart</h1>
    <button @click="printList">print</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ShoppingList: null,
    };
  },
  computed: {
    shopping_cart() {
      return sessionStorage.getItem('shopping_cart');
    },
  },
  methods: {
    printList() {
      console.log(JSON.stringify(this.shopping_cart));
    },
  },
};
</script>

<style>
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
