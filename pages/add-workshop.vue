<template>
  <main class="p-product-page">
    <restoration-header />
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
import RestorationHeader from '~/components/RestorationHeader';

export default {
  components: { RestorationHeader },
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
  },
};
</script>

<style lang="scss" scoped>
.title__container {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
</style>
