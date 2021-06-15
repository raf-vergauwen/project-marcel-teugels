<template>
  <main>
    <section class="contact">
      <div class="contact-image"></div>
      <section class="contact-data__container">
        <p class="contact-data">
          Via dit formulier kunt u ons berijken met je vragen. Wij bekijken uw
          formulier en nemen vervolgens contact met u op. Dit formulier kan voor
          veel verschillende dingen dienen bv. texidermi of restauratie van hout
          of metaal.
        </p>
      </section>
      <section class="contact-form">
        <h1>Contact</h1>
        <FormulateForm
          v-model="contactData"
          class="contact-form__inputs"
          @submit="postRequest"
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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &-image {
    height: 20vh;
    width: 100vw;
    background-image: url('http://157.230.126.154/assets/87d1edd8-c8a7-4da1-9bff-f46d6716db3c');
    background-size: cover;
    background-position: 0% -300px;
  }

  &-data {
    width: 70vw;
    margin-right: 1em;

    &__container {
      height: 100px;
      width: 100vw;
      background-color: $dark-blue;
      color: $light-bg;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    margin-top: $m-site-padding;

    &__inputs {
      width: 40vw;
    }
  }
}
</style>
