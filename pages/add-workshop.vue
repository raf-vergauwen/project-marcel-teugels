<template>
  <main class="p-product-page">
    <restauration-header />
    <section id="app">
      <div>
        <label>
          titel:
          <input v-model="title" type="text" />
        </label>
        <label>
          datum:
          <input v-model="date" type="text" />
        </label>
        <label>
          organisator:
          <input v-model="organizer" type="email" />
        </label>
        <label>
          onderwerp:
          <input v-model="subject" type="tel" />
        </label>
        <label>
          bio
          <textarea v-model="textContent"> </textarea>
        </label>
      </div>
      <div class="container">
        <button @click="postWorkshop">Verstuur</button>
      </div>
    </section>
  </main>
</template>

<script>
import RestaurationHeader from '~/components/RestaurationHeader';

export default {
  components: { RestaurationHeader },
  data() {
    return {
      title: '',
      date: '',
      organizer: '',
      subject: '',
      textContent: '',
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
        images: this.images,
      };

      this.$axios('items/workshops/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.access_token,
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          console.log(response);
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
