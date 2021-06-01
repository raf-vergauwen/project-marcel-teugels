<template>
  <article class="c-workshop-item">
    <div class="c-workshop-item__image-container">
      <img
        class="c-workshop-item__image"
        :src="src + workshop.images[0].directus_files_id"
        alt=""
      />
    </div>
    <div class="c-workshop-item__container">
      <div v-if="isAdmin === true" class="c-workshop-itmes__admin-btn">
        <NuxtLink :to="`/restauratie/workshop/${workshop.id}`">
          <h2 class="c-workshop-item__title">
            {{ workshop.title }}
          </h2>
        </NuxtLink>
        <button
          class="c-workshop__btn admin-btn"
          @click="$emit('remove-workshop', workshop)"
        >
          x
        </button>
      </div>

      <div v-else>
        <NuxtLink :to="`/restauratie/workshop/${workshop.id}`">
          <h2 class="c-workshop-item__title">
            {{ workshop.title }}
          </h2>
        </NuxtLink>
      </div>

      <div class="c-workshop-item__content">
        <p>{{ workshop.organizer }}</p>
        <p>{{ workshop.date }}</p>
        <p>{{ workshop.text_content }}</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'WorkshopItem',
  props: {
    workshop: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      src: 'http://157.230.126.154/assets/',
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
};
</script>

<style lang="scss">
.c-workshop-item {
  display: flex;
  margin: 2em 4em;

  &__image {
    width: 400px;

    &-container {
      width: 400px;
    }
  }

  &__container {
    margin-left: 2em;
    width: 60%;
  }

  &__title {
    color: $dark-bg;
  }

  &__btn {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    background-color: $dark-bg;
    color: $light-bg;
    border: 0px;
  }

  &__admin-btn {
    display: flex;
    justify-content: space-between;
  }
}
</style>
