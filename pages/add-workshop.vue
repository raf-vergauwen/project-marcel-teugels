<template>
  <main class="p-product-page">
    <restauration-header />
    <section id="app">
      <template>
        <FormulateInput
          v-model="title"
          name="name"
          type="text"
          label="workshop naam"
        />
        <FormulateInput v-model="date" name="date" type="date" label="datum" />
        <FormulateInput
          v-model="organizer"
          name="organizer"
          type="text"
          label="naam organisator"
        />
        <FormulateInput
          v-model="subject"
          name="subject"
          type="text"
          label="onderwerp"
        />
        <FormulateInput
          v-model="textContent"
          name="textContent"
          type="textarea"
          label="uitleg over workshop"
        />
        <FormulateInput
          v-model="newImage"
          type="file"
          name="images"
          label="Please select an image"
          validation="mime:image/jpeg,image/png"
        />
        <FormulateInput type="submit" label="Sign up" @click="postImage" />
      </template>
    </section>
  </main>
</template>

<script>
import RestaurationHeader from '~/components/RestaurationHeader';
import axios from 'axios';

export default {
  components: { RestaurationHeader },
  data() {
    return {
      title: '',
      date: '',
      organizer: '',
      subject: '',
      textContent: '',
      newImage: '',
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
        title: this.title,
        date: this.date,
        organizer: this.organizer,
        subject: this.subject,
        text_content: this.textContent,
        images: this.newImage,
      };

      fetch('http://157.230.126.154/items/workshops/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.access_token,
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          if (!response.ok) {
            console.log('could not post new workshop');
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

    postImage() {
      const options = {
        method: 'POST',
        url: 'http://157.230.126.154/assets/' + this.newImage,
        headers: { 'Content-Type': 'application/json' },
        data: {},
      };

      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .then((data) => {
          console.log(data);
        })
        .catch(function (error) {
          console.error(error);
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
