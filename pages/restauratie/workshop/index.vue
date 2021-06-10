<template>
  <main>
    <div v-if="isAdmin === true" class="title-btn__container">
      <h1 class="p-workshop__title">Workshops</h1>
      <button class="p-workshop__btn admin-btn">
        <a href="/admin/add-workshop">+</a>
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
        @remove-workshop="removeWorkshop($event)"
      />
    </div>
  </main>
</template>

<script>
import WorkshopItem from '~/components/WorkshopItem';

export default {
  name: 'WordShopsPage',
  components: { WorkshopItem },
  layout: 'restauratie',
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
    isAdmin() {
      return this.$store.getters['auth/isAdmin'];
    },
  },
  mounted() {
    this.fetchWorkshops();
  },
  methods: {
    fetchWorkshops() {
      this.$axios('items/workshops?fields=*.*', {
        method: 'GET',
        headers: {},
        params: {
          fields: '*,images.*',
          filter: { status: { _neq: 'archived' } },
        },
      })
        .then((response) => {
          console.log(response);
          this.workshopData = response.data.data;
          console.log(this.user_role);
          this.Admin = this.user_role;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    removeWorkshop(workshop) {
      this.$axios(`/items/workshops/${workshop.id}`, {
        method: 'DELETE',
      })
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

a {
  font-size: 20px;
}
</style>
