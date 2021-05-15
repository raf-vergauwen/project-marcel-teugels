<template>
  <main>
    <restauration-header />
    <h1 class="p-workshop__title">Store</h1>
    <div class="p-workshop__product-list">
      <WorkshopItem
        v-for="workshop in workshopData"
        :key="workshop.id"
        class="p-workshops__product-list__item"
        :workshop="workshop"
      />
    </div>
  </main>
</template>

<script>
import RestaurationHeader from '~/components/RestaurationHeader';
import WorkshopItem from '~/components/WorkshopItem';

export default {
  components: { RestaurationHeader, WorkshopItem },

  data() {
    return {
      workshopData: {},
    };
  },
  created() {
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
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
