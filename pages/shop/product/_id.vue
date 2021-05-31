<template>
  <main class="p-product-page">
    <div class="p-product__container">
      <img class="p-product__image" :src="src" alt="" />
      <div
        v-if="Admin === '78b6335f-b448-46d6-8086-65057ba5fae0'"
        class="p-product__info"
      >
        <label>
          titel
          <input v-model="name" type="text" />
        </label>
        <label>
          datum
          <input v-model="price" type="text" />
        </label>
        <label>
          organizator
          <input v-model="weight" type="text" />
        </label>
        <label>
          onderwerp
          <input v-model="size" type="text" />
        </label>
        <label>
          onderwerp
          <input v-model="quantity" type="text" />
        </label>
        <label>
          tekst
          <textarea v-model="description"> </textarea>
        </label>
        <button @click="editProduct">edit</button>
      </div>
      <div v-else class="p-product__container">
        <div class="p-product__info">
          <h1>{{ name }}</h1>
          <h3>{{ price }}</h3>
          <p>{{ weight }}</p>
          <p>{{ size }}</p>
          <p>{{ quantity }}</p>
          <p>{{ description }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductPage',
  data() {
    return {
      src: 'http://157.230.126.154/assets/',
      Admin: false,
      productData: null,
      name: '',
      status: 'draft',
      price: '',
      weight: '',
      size: '',
      quantity: '',
      description: '',
    };
  },
  fetch() {
    console.log(this.$route.params.id);
    return this.fetchProduct();
  },
  computed: {
    user_role() {
      return sessionStorage.getItem('user_role');
    },
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  methods: {
    fetchProduct() {
      return fetch(
        'http://157.230.126.154/items/products/' + this.$route.params.id,
        {
          method: 'GET',
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
          this.productData = data.data;
          this.Admin = this.user_role;
          this.name = this.productData.name;
          this.price = this.productData.price;
          this.weight = this.productData.weight;
          this.size = this.productData.size;
          this.quantity = this.productData.quantity_in_stock;
          this.description = this.productData.description;
          this.status = this.productData.status;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    editProduct() {
      const options = {
        method: 'PATCH',
        url: 'http://157.230.126.154/items/products/' + this.productData.id,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.access_token,
        },
        data: {
          name: this.name,
          price: this.price,
          weight: this.weight,
          size: this.size,
          quantity_in_stock: this.quantity,
          description: this.description,
          status: this.status,
        },
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss"></style>
