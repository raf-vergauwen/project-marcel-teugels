<template>
  <main class="p-product-page">
    <section id="new-workshop">
      <FormulateForm v-model="workshopFormData" @submit="postWorkshop">
        <FormulateInput
          name="title"
          type="text"
          label="workshop naam"
          validation-name="titel"
          validation="required"
        />
        <FormulateInput name="date" type="date" label="datum" />
        <FormulateInput name="organizer" type="text" label="naam organisator" />
        <FormulateInput name="subject" type="text" label="onderwerp" />
        <FormulateInput
          name="text_content"
          type="textarea"
          label="uitleg over workshop"
        />
        <FormulateInput
          type="image"
          name="images"
          label="Please select an image"
          validation="mime:image/jpeg,image/png"
          :uploader="uploader"
          multiple
        />
        <FormulateInput type="submit" label="Sign up" />
      </FormulateForm>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AddWorkshopPage',
  layout: 'admin',
  data() {
    return {
      workshopFormData: {
        title: '',
        date: '',
        organizer: '',
        subject: '',
        text_content: '',
        images: [],
      },
      newImage: '',
      images: [
        {
          directus_files_id: '79c4d9ef-cd71-41ed-ae19-87af431bdfa5',
        },
      ],
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  methods: {
    postWorkshop(data) {
      return this.$axios('/items/workshops/', {
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
    uploader(file, progress, error) {
      const formData = new FormData();
      formData.append('file', file);

      return this.$axios('/files', {
        method: 'POST',
        data: formData,
      })
        .then((response) => {
          console.log(response);

          progress(100);

          return {
            directus_files_id: response.data.data.id,
          };
        })
        .catch((e) => {
          console.error(e);
          error('Kan afbeelding niet uploaden, probeer het opnieuw');
        });
    },
  },
};
</script>

<style lang="scss">
.title__container {
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
}
</style>
