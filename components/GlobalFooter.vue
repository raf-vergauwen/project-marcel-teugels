<template>
  <footer class="c-globalfooter">
    <div class="c-globalfooter__container">
      <div class="c-globalfooter__nav">
        <p class="c-globalfooter__item">Marcel Teugels</p>
        <span class="c-globalfooter__break">•</span>
        <p class="c-globalfooter__item">nep telefoon</p>
        <span class="c-fglobalooter__break">•</span>
        <p class="c-globalfooter__item">nep emailadress</p>
        <span class="c-globalfooter__break">•</span>
        <a class="c-globalfooter__item">instagram</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'globalfooter',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.c-globalfooter {
  background-color: $dark-bg;
  display: flex;
  justify-content: center;
  color: $light-bg;

  &__container {
    padding: 1.5em;
  }

  &__nav {
    display: flex;
    justify-content: center;
    align-items: center;

    &__item {
      padding: $s-site-padding $s-site-padding;
      text-decoration: none;
      color: $light-bg;
    }
  }
  &__break {
    margin: 0em 2em;
  }

  &__item {
    margin: 0em;
    font-size: 1em;
  }
}
</style>
