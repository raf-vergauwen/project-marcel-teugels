<template>
  <article class="c-workshop-item">
    <div class="c-workshop-item__image">
      <img :src="src + workshop.images[0].directus_files_id" alt="" />
    </div>
    <div class="c-workshop-item__container">
      <div
        v-if="Admin === '78b6335f-b448-46d6-8086-65057ba5fae0'"
        class="c-workshop-itmes__admin-btn"
      >
        <NuxtLink :to="`/restauratie/workshop/${workshop.id}`">
          <h2 class="c-workshop-item__title">
            {{ workshop.title }}
          </h2>
        </NuxtLink>
        <button
          class="c-workshop__btn"
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
  },
  created() {
    this.isAdmin();
  },
  methods: {
    isAdmin() {
      this.Admin = this.user_role;
    },
  },
};
</script>

<style lang="scss">
.c-workshop-item__container {
  margin-left: 2em;
  width: 60%;
}

.c-workshop-item__title {
  color: $dark-bg;
}

.c-workshop__btn {
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: $dark-bg;
  color: $light-bg;
  border: 0px;
}

.c-workshop-itmes__admin-btn {
  display: flex;
  justify-content: space-between;
}

.c-workshop-item {
  display: flex;
  margin: 2em 4em;
}

.c-workshop-item__image {
  width: 400px;
}
</style>
