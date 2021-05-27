<template>
  <section id="app">
    <ul class="request-list">
      <li
        v-for="request in requestData.data"
        :key="request.name"
        class="request-item"
        style="list-style-type: none"
      >
        {{ request.name }}
        <ul style="list-style-type: none">
          <li>id: {{ request.id }}</li>
          <li>voornaam: {{ request.first_name }}</li>
          <li>achternaam: {{ request.last_name }}</li>
          <li>email: {{ request.email }}</li>
          <li>telefoon nummer: {{ request.telefoon_nummer }}</li>
          <li>tekst: {{ request.text_content }}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'GetAllRequestsPage',
  layout: 'admin',
  data() {
    return {
      requestData: {},
    };
  },
  created() {
    this.fetchRequest();
  },
  methods: {
    fetchRequest() {
      this.$axios('items/user_requests?=*.*', {
        method: 'GET',
        headers: {},
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

<style>
body {
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: silver;
}

.request-item {
  width: 50vw;
  padding: 2em;
  margin: 1em;
  background-color: white;
  color: black;
  border-radius: 15px;
}
</style>
