<template>
  <main>
    <restoration-header />
    <div class="title__container">
      <h1>Under Construction</h1>
    </div>
  </main>
</template>

<script>
import RestorationHeader from '~/components/RestorationHeader';
export default {
  components: { RestorationHeader },
};
</script>

<style lang="scss" scoped>
.title__container {
  display: flex;
  width: 100vw;
  height: 90vh;
  align-items: center;
  justify-content: center;
}
</style>
