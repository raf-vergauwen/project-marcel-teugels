<template>
  <main>
    <section id="app">
      <div>
        <FormulateInput
          v-model="firstName"
          name="firstName"
          type="text"
          label="voornaam:"
        />
        <FormulateInput
          v-model="lastName"
          name="lastName"
          type="text"
          label="achternaam:"
        />
        <FormulateInput
          v-model="email"
          name="email"
          type="email"
          label="email"
        />
        <FormulateInput
          v-model="telefoonNummer"
          name="telefoon"
          type="number"
          label="telefoon nummer"
        />
        <FormulateInput
          v-model="textContent"
          name="textContent"
          type="textarea"
          label="Waarmee kunnen wij u helpen?"
        />
      </div>
      <div class="container">
        <button @click="postRequest">Verstuur</button>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      telefoonNummer: '',
      textContent: '',
    };
  },
  methods: {
    postRequest() {
      const body = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        telefoon_nummer: this.telefoonNummer,
        status: 'draft',
        text_content: this.textContent,
      };
            fetch("http://157.230.126.154/items/user_requests/", {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer "
                },
                "body":  JSON.stringify(body),
              })
              .then((response) => {
                if (!response.ok) {
                    console.log('could not post user requests');
                }
                return response.json();
            })
              .then((data) => {
                this.requestData = data
              })
              .catch(err => {
                console.error(err);
              });
        }
}}
</script>

<style>
</style>
 154  pages/order.vue
Viewed

    },
  },
};
</script>

<style></style>
