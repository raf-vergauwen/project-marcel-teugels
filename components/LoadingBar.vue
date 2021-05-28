<template>
  <div v-if="loading" class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: sans-serif;
  font-size: 3rem;
  text-align: center;
}

.loading {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
  border-radius: 50%;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
