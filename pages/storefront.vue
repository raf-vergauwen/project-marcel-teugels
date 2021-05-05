<template>
  <div class="container">
    <h1 class="title">Store</h1>
    <button @click="fetchItems">Fetch</button>
    <div class="product-container">
      <ul class="product-list">
        <li
          class="product-item"
          v-for="product in productData.data"
          :key="product.name"
          style="list-style-type: none"
        >
          {{ product.name }}
          <ul style="list-style-type: none">
            <li>
              <img :src="src + product.images[0].directus_files_id" alt="" />
            </li>
            <li>{{ product.name }}</li>
            <li>{{ product.id }}</li>
            <li>{{ product.description }}</li>
            <li>Quantity: {{ product.quantity_in_stock }}</li>
            <li>Price: € {{ product.price }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productData: {},
      src: 'http://157.230.126.154/assets/',
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  methods: {
    fetchItems() {
      fetch('http://157.230.126.154/items/products?fields=*.*', {
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
          this.productData = data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.product-container {
  margin: 1em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1em;
}

.product-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.product-item {
  margin: 1em;
  background-color: lightblue;
  width: 45%;
  height: 500px;
  text-align: left;
  padding: 0.5em;
}

img {
  width: 200px;
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
