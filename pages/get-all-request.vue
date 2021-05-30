<template>
  <section id="app">
    <ul class="request-list">
      <li
        v-for="request in requestData.data"
        :key="request.name"
        class="request-item"
        style="list-style-type: none;"
      >
        {{ request.name }}
        <ul style="list-style-type: none;">
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
      fetch('http://157.230.126.154/items/user_requests?=*.*', {
        method: 'GET',
      })
        .then((response) => {
          if (!response.ok) {
            console.log('could not fetch user requests');
          }

          return response.json();
        })
        .then((data) => {
          this.requestData = data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
body {
  display: flex;
  width: 100vw;
  justify-content: center;
  background-color: var(--color-background--darkest);
}

.request-item {
  width: 50vw;
  padding: 2em;
  margin: 1em;
  background-color: var(--color-background);
  border-radius: 15px;
  color: var(--color-text);
}
</style>
