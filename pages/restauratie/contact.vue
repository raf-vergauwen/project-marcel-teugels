<template>
  <main>
    <section class="contact">
      <FormulateForm
        v-model="contactData"
        @submit="postRequest"
        class="contact__inputs"
      >
        <FormulateInput name="first_name" type="text" label="voornaam:" />
        <FormulateInput name="last_name" type="text" label="achternaam:" />
        <FormulateInput name="email" type="email" label="email" />
        <FormulateInput
          name="telefoon_nummer"
          type="number"
          label="telefoon nummer"
        />
        <FormulateInput
          name="text-content"
          type="textarea"
          label="Waarmee kunnen wij u helpen?"
        />
        <FormulateInput type="submit" label="verstuur" />
      </FormulateForm>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ContactPage',
  layout: 'restauratie',
  data() {
    return {
      contactData: {
        first_name: '',
        last_name: '',
        email: '',
        telefoon_nummer: '',
        text_content: '',
      },
    };
  },
  methods: {
    postRequest(data) {
      return this.$axios('/items/user_requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data,
      })
        .then((response) => {
          console.log(response);
          return response.data.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.contact {
  display: flex;
  align-items: center;
  height: 80vh;

  &__inputs {
    width: 70vw;
  }
}
</style>
