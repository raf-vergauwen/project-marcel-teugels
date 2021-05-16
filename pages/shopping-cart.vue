<template>
  <div class="container">
    <h1 class="title">Shopping cart</h1>
    <button @click="printList">print</button>
    <p v-for="items in productData" :key="items.name">{{ items.name }}</p>
  </div>
</template>

<script>
export default {
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
        fetch(`http://157.230.126.154/items/products/` + this.shoppingList[i], {
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
            this.productData.push(data.data);
            console.log(this.productData);
          })
          .catch((err) => {
            console.error(err);
          });
      }
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
