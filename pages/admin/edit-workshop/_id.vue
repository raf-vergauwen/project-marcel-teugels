<template>
  <main class="p-edit-workshop-page">
    <div class="p-edit-workshop__container">
      <div class="p-edit-workshop__info">
        <FormulateForm
          v-if="workshopLoaded"
          v-model="newWorkshopData"
          class="formulate-container"
          @submit="editWorkshop"
        >
          <FormulateInput
            name="title"
            type="text"
            label="workshop naam"
            validation="required"
          />
          <FormulateInput
            name="date"
            type="date"
            label="datum"
            validation="required"
          />
          <FormulateInput
            name="organizer"
            type="text"
            label="organisator"
            validation="required"
          />
          <FormulateInput
            name="subject"
            type="text"
            label="onderwerp"
            validation="required"
          />
          <FormulateInput
            name="textContent"
            type="textarea"
            label="omschrijving"
            validation="required"
          />
          <FormulateInput
            type="image"
            name="images"
            label="Please select an image"
            validation="required"
            :uploader="uploader"
            multiple
          />
          <FormulateInput type="submit" label="edit" />
        </FormulateForm>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'EditWorkshopPage',
  layout: 'admin',
  data() {
    return {
      workshopLoaded: false,
      src: 'http://157.230.126.154/assets/',
      workshopData: null,
      newWorkshopData: {
        title: '',
        date: '',
        organizer: '',
        subject: '',
        textContent: '',
        images: [],
      },
    };
  },
  fetch() {
    console.log(this.$route.params.id);
    return this.fetchWorkshop();
  },
  computed: {
    user_role() {
      return sessionStorage.getItem('user_role');
    },
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  methods: {
    vueFormulateWorkshopImages() {
      return this.workshopData.images.map((image) => {
        return {
          url: `http://157.230.126.154/assets/${image.directus_files_id}`,
        };
      });
    },

    fetchWorkshop() {
      this.$axios(`items/workshops/${this.$route.params.id}`, {
        method: 'GET',
        headers: {},
        params: {
          fields: '*.*',
        },
      })
        .then((data) => {
          console.log(data);
          this.workshopData = data.data.data;
          this.newWorkshopData.title = this.workshopData.title;
          this.newWorkshopData.date = this.workshopData.date;
          this.newWorkshopData.organizer = this.workshopData.organizer;
          this.newWorkshopData.subject = this.workshopData.subject;
          this.newWorkshopData.textContent = this.workshopData.text_content;
          this.newWorkshopData.status = this.workshopData.status;
          this.newWorkshopData.images = this.vueFormulateWorkshopImages();
          this.workshopLoaded = true;
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
    editWorkshop(data) {
      this.$axios(`items/workshops/${this.workshopData.id}`, {
        method: 'PATCH',
        headers: {},
        data,
      })
        .then((response) => {
          console.log(response);
          console.log(this.workshopData.id);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss"></style>
