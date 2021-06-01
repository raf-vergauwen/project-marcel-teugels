<template>
  <footer class="c-footer">
    <div class="c-footer__container">
      <div class="c-footer__nav">
        <p class="c-footer__item">Marcel Teugels</p>
        <span class="c-footer__break">•</span>
        <p class="c-footer__item">nep telefoon</p>
        <span class="c-footer__break">•</span>
        <p class="c-footer__item">nep emailadress</p>
        <span class="c-footer__break">•</span>
        <a class="c-footer__item">instagram</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.c-footer {
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
