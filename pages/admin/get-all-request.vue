<template>
  <section class="p-request">
    <div class="p-request-items__list">
      <RequestItem
        v-for="request in requestData.data"
        :key="request.id"
        class="p-request-items"
        :request="request"
        @done-request="doneRequest($event)"
      />
    </div>
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
      this.$axios('items/user_requests', {
        method: 'GET',
        headers: {},
        params: {
          fields: '*.*',
          sort: '-date_created',
          filter: { done: { _neq: true } },
        },
      })
        .then((response) => {
          console.log(response);
          this.requestData = response.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    doneRequest(request) {
      this.$axios(`items/user_requests/${request.id}`, {
        method: 'PATCH',
        headers: {},
        data: {
          done: true,
        },
      })
        .then(() => {
          return this.fetchRequest();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-request {
  &-items {
    width: 50vw;
    padding: 2em;
    margin: 1em;
    background-color: $light-bg;
    color: $dark-blue;
    border-radius: 15px;

    &__list {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
