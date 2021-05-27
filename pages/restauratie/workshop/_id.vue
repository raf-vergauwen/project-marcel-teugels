<template>
  <main class="p-product-page">
    <div class="p-workshop__container">
      <img class="p-workshop__image" :src="src" alt="" />
      <div
        v-if="Admin === '78b6335f-b448-46d6-8086-65057ba5fae0'"
        class="p-workshop__info"
      >
        <label>
          titel
          <input v-model="title" type="text" />
        </label>
        <label>
          datum
          <input v-model="date" type="text" />
        </label>
        <label>
          organizator
          <input v-model="organizer" type="text" />
        </label>
        <label>
          onderwerp
          <input v-model="subject" type="text" />
        </label>
        <label>
          tekst
          <textarea v-model="textContent"> </textarea>
        </label>
        <button @click="editWorkshop">edit</button>
      </div>
      <div v-else class="p-workshop__container">
        <div class="p-workshop__info">
          <h1>{{ title }}</h1>
          <h3>{{ date }}</h3>
          <p>{{ organizer }}</p>
          <p>{{ subject }}</p>
          <p>{{ textContent }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'WorkShopDetailsPage',
  layout: 'restauratie',

  data() {
    return {
      src: 'http://157.230.126.154/assets/',
      Admin: false,
      workshopData: {},
      title: '',
      date: '',
      organizer: '',
      subject: '',
      textContent: '',
    };
  },
  fetch() {
    return this.fetchWorkshop();
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
    fetchWorkshop() {
      return fetch(
        'http://157.230.126.154/items/workshops/' +
          this.$route.params.id +
          '?fields=*.*',
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
          this.workshopData = data.data;
          this.Admin = this.user_role;
          this.title = this.workshopData.title;
          this.date = this.workshopData.date;
          this.organizer = this.workshopData.organizer;
          this.subject = this.workshopData.subject;
          this.textContent = this.workshopData.text_content;

          console.log(data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    editWorkshop() {
      console.log(this.workshopData.id);
      const options = {
        method: 'PATCH',
        url: 'http://157.230.126.154/items/workshops/' + this.workshopData.id,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.access_token,
        },
        data: {
          title: this.title,
          date: this.date,
          organizer: this.organizer,
          subject: this.subject,
          textContent: this.textContent,
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

<style lang="scss">
.p-workshop__container {
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
}

.p-workshop__info {
  display: flex;
  flex-direction: column;
}

.p-workshop__image {
  height: 300px;
}

label {
  display: flex;
  flex-direction: column;
}
</style>
