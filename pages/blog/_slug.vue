<template>
  <div class="container">
    <h1>Test</h1>
    <h2>{{ $route.params.slug }}</h2>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container {
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
}

.title {
  display: block;
  color: #35495e;
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 100px;
  font-weight: 300;
  letter-spacing: 1px;
}

.subtitle {
  padding-bottom: 15px;
  color: #526488;
  font-size: 42px;
  font-weight: 300;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
