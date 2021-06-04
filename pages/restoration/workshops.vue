<template>
  <main class="p-workshop">
    <restoration-header />
    <div
      v-if="Admin === '78b6335f-b448-46d6-8086-65057ba5fae0'"
      class="p-workshop__header-container"
    >
      <h1 class="p-workshop__title">Workshops</h1>
      <button class="p-workshop__btn">
        <a href="/add-workshop">+</a>
      </button>
    </div>

    <div v-else class="p-workshop__header-container">
      <h1 class="p-workshop__title">Workshops</h1>
    </div>

    <div class="p-workshop__product-list">
      <workshop-item
        v-for="workshop in workshopData"
        :key="workshop.id"
        :workshop="workshop"
        class="p-workshops__product-list--item"
      />
    </div>
  </main>
</template>

<script>
import RestorationHeader from '~/components/RestorationHeader';
import WorkshopItem from '~/components/WorkshopItem';

export default {
  components: { RestorationHeader, WorkshopItem },

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
          console.log(this.user_role);
          this.Admin = this.user_role;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.p-workshop {
  @include block-container;

  &__header-container {
    // ...
  }

  &__title {
    color: $dark-bg;
  }

  &__btn {
    width: 40px;
    height: 40px;
    border: 0;
    background-color: $dark-bg;
    border-radius: 50px;
  }

  &__product-list {
    display: grid;
    grid-gap: $s-site-padding;
    grid-template-columns: repeat(3, 1fr);

    @include md() {
      grid-template-columns: repeat(2, 1fr);
    }

    @include sm() {
      grid-template-columns: 1fr;
    }
  }

  &__product-list--item {
    // ...
  }
}
</style>
