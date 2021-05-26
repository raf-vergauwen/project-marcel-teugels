<template>
  <main>
    <restauration-header />
    <section id="app">
      <div>
        <label>
          voornaam:
          <input v-model="firstName" type="text" />
        </label>
        <label>
          achternaam:
          <input v-model="lastName" type="text" />
        </label>
        <label>
          email:
          <input v-model="email" type="email" />
        </label>
        <label>
          telefoon nummer:
          <input v-model="telefoonNummer" type="tel" />
        </label>
        <label>
          bio
          <textarea v-model="textContent"> </textarea>
        </label>
      </div>
      <div class="container">
        <button @click="postRequest">Verstuur</button>
      </div>
    </section>
  </main>
</template>

<script>
import RestaurationHeader from '~/components/RestaurationHeader';

export default {
  components: { RestaurationHeader },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      telefoonNummer: '',
      textContent: '',
      userId: '',
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  methods: {
    postRequest() {
      const body = {
        done: true,
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        telefoon_nummer: this.telefoonNummer,
        status: 'draft',
        text_content: this.textContent,
      };

      this.$axios('items/user_requests/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.access_token,
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          console.log(response);
          this.requestData = response.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style></style>
