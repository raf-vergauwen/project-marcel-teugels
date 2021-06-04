<template>
  <footer class="c-footer">
    <div class="c-footer__container">
      <nav class="c-footer-store-nav">
        <ul v-for="user in users" :key="user.id">
          <h3>{{ user.title }}</h3>
          <li>
            <fa
              :class="{ 'c-footer-restoration-nav__item--icon': true }"
              :icon="['fas', user.icon[0]]"
              style="width: 1rem"
            />
            {{ user.label[0] }}
          </li>
          <li>
            <fa
              :class="{ 'c-footer-restoration-nav__item--icon': true }"
              :icon="['fas', user.icon[1]]"
              style="width: 1rem"
            />
            {{ user.label[1] }}
          </li>
          <li>
            <fa
              :class="{ 'c-footer-restoration-nav__item--icon': true }"
              :icon="['fas', user.icon[2]]"
              style="width: 1rem"
            />
            {{ user.label[2] }}
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      users: [
        {
          title: 'webshop',
          icon: ['store-alt', 'drafting-compass', 'shopping-basket'],
          label: ['store', 'custom work', 'shopping cart(0)'],
          email: 'frank.murphy@test.com',
          role: 'User',
        },
        {
          title: 'restoration',
          icon: ['lightbulb', 'users', 'address-card'],
          label: ['methodology', 'workshops', 'contact'],
          email: 'vic.reynolds@test.com',
          role: 'Admin',
        },
        {
          title: 'contact info',
          icon: ['map-marker-alt', 'phone', 'envelope'],
          label: ['location', 'phone', 'e-mail'],
          email: 'gina.jabowski@test.com',
          role: 'Admin',
        },
        {
          title: 'accounts',
          icon: ['user-plus', 'sign-in-alt', 'user-circle'],
          label: ['sign up', 'login', 'profile'],
          email: 'jessi.glaser@test.com',
          role: 'User',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@include c-main-footer;

// .demo {
//   padding: 20px 30px;
//   border: 1px solid #eee;
//   margin-top: 1em;
//   margin-bottom: 40px;
//   border-radius: 2px;
//   font-family: sans-serif;
//   overflow-x: auto;
//   user-select: none;
// }
</style>
