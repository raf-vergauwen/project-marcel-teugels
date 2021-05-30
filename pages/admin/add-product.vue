<template>
  <main class="p-product-page">
    <section id="app">
      <div>
        <label>
          naam:
          <input v-model="name" type="text" />
        </label>
        <label>
          omschrijving:
          <textarea v-model="description"> </textarea>
        </label>
        <label>
          prijs:
          <input v-model="price" type="number" />
        </label>
        <label>
          grootte:
          <input v-model="size" type="number" />
        </label>
        <label>
          gewicht:
          <input v-model="weight" type="number" />
        </label>
      </div>

      <div class="container">
        <button @click="postWorkshop">Verstuur</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AddProductPage',
  layout: 'admin',
  data() {
    return {
      name: '',
      description: '',
      price: '',
      size: '',
      weight: '',
      status: 'draft',
      images: [
        {
          directus_files_id: '79c4d9ef-cd71-41ed-ae19-87af431bdfa5',
        },
      ],
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  methods: {
    postWorkshop() {
      const body = {
        name: this.name,
        description: this.description,
        price: this.price,
        size: this.size,
        weight: this.weight,
        text_content: this.textContent,
        images: this.images,
      };

      fetch('http://157.230.126.154/items/products/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.access_token,
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response.ok) {
            console.log('could not post new product');
          }

          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.title__container {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
</style>
