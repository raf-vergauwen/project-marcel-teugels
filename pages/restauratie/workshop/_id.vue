<template>
  <main class="p-product-page">
    <div class="p-workshop__container">
      <img class="p-workshop__image" :src="src + images" alt="" />
    </div>
    <div class="p-workshop__container">
      <div class="p-workshop__info">
        <h1>{{ title }}</h1>
        <h3>{{ date }}</h3>
        <p>{{ organizer }}</p>
        <p>{{ subject }}</p>
        <p>{{ textContent }}</p>
      </div>
    </div>
  </main>
</template>

<script>
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

  computed: {
    user_role() {
      return sessionStorage.getItem('user_role');
    },
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },

  created() {
    this.fetchWorkshop();
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
          this.images = this.workshopData.images[0].directus_files_id;

          console.log(this.workshopData);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-workshop__container {
  display: flex;
  flex-direction: row;

  align-items: center;
  margin: 0em 1em;
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
