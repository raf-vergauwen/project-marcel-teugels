<template>
  <section id="app">
    <div>
        <label>
          voornaam:
            <input type="text" v-model="firstName" />
        </label>
        <label>
          achternaam:
          <input type="text" v-model="lastName" />
      </label>
      <label>
        email:
        <input type="email" v-model="email" />
    </label>
    <label>
      telefoon nummer:
      <input type="tel" v-model="telefoonNummer" />
  </label>
  <label>
    bio
    <textarea v-model="textContent">
      </textarea>
  </label>
    </div>
    <div class="container">
        <button @click="postRequest">Verstuur</button>
    </div>
</section>
</template>

<script>
export default {
  data() {
        return {
            firstName : "",
            lastName : "",
            email: "",
            telefoonNummer: "",
            textContent: "",
            userId: ""
        };
    },
      computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
    methods: {
        postRequest(){
          const body = {
            done: true,
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            telefoon_nummer: this.telefoonNummer,
            status: "draft",
            text_content: this.textContent
        };

            fetch("http://157.230.126.154/items/user_requests/", {
                "method": "POST",
                "headers": {
                  "Content-Type": "application/json",
                  "Authorization": "Bearer " +this.access_token
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