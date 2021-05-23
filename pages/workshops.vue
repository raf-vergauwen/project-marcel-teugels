<template>
  <main>
    <restauration-header />
    <div
      v-if="Admin === '78b6335f-b448-46d6-8086-65057ba5fae0'"
      class="title-btn__container"
    >
      <h1 class="p-workshop__title">Workshops</h1>
      <button class="p-workshop__btn">
        <a href="/add-workshop">+</a>
      </button>
    </div>

    <div v-else class="title-btn__container">
      <h1 class="p-workshop__title">Workshops</h1>
    </div>

    <div class="p-workshop__product-list">
      <WorkshopItem
        v-for="workshop in workshopData"
        :key="workshop.id"
        class="p-workshops__product-list__item"
        :workshop="workshop"
        v-on:remove-workshop="removeWorkshop($event)"
      />
    </div>
  </main>
</template>

<script>
import RestaurationHeader from '~/components/RestaurationHeader';
import WorkshopItem from '~/components/WorkshopItem';
import axios from 'axios';

export default {
  components: { RestaurationHeader, WorkshopItem },

  data() {
    return {
      workshopData: {},
      Admin: false,
    };
  },
  computed: {
    user_role() {
      return sessionStorage.getItem('user_role');
    },
  },
  mounted() {
    this.fetchWorkshops();
  },
  methods: {
    fetchWorkshops() {
      fetch('http://157.230.126.154/items/workshops?fields=*.*', {
        method: 'GET',
        headers: {},
      })
        .then((response) => {
          if (!response.ok) {
            console.log('fetch workshops did not work');
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          this.workshopData = data.data;
          console.log(this.user_role);
          this.Admin = this.user_role;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    removeWorkshop(workshop) {
      console.log(workshop.id);
      const options = {
        method: 'DELETE',
        url: `http://157.230.126.154/items/workshops/${workshop.id}`,
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
.title-btn__container {
  display: flex;
  justify-content: space-between;
  margin: 2em;
}

.p-workshop__btn {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: $dark-bg;
  border: 0px;
}

a {
  font-size: 20px;
}
</style>
