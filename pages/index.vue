// ! [NAMESPACE]-[PREFIX]-[BLOCK]__[ELEMENT]--[MODIFIER]

<template>
  <section class="i-l">
    <div class="i-l__main-container">
      <div class="i-l__webshop-container i-c-webshop">
        <div class="i-c-webshop__box-outer box-outer">
          <div class="i-c-webshop__box-inner box-inner">
            <h2 class="i-c-webshop__title">webshop</h2>
            <p class="i-c-webshop__text">
              Ipsum dolor voluptate quis quis dolor mollit id pariatur velit
              enim et irure pariatur. Eiusmod proident id sint irure
              exercitation aliqua est ad officia consequat.
            </p>
            <a
              class="i-c-webshop__link index-link-btn"
              href="/webshop/home-webshop"
            >
              <fa class="i-c-webshop__icon" :icon="['fas', 'tools']" />
              webshop
            </a>
          </div>
        </div>
      </div>
      <div class="i-l__restauration-container i-c-restauration">
        <div class="i-c-restauration__box-outer box-outer">
          <div class="i-c-restauration__box-inner box-inner">
            <h2 class="i-c-restauration__title">restoration</h2>
            <p class="i-c-restauration__text">
              Fugiat ullamco et cillum reprehenderit magna ullamco ipsum sit.
              Quis sunt ullamco ut enim ullamco sit nisi ex velit aliqua id
              cupidatat laborum tempor.
            </p>
            <a
              class="i-c-restauration__link index-link-btn"
              href="/restoration/home-restoration"
            >
              <fa
                class="i-c-restauration__icon"
                :icon="['fas', 'shopping-bag']"
              />
              restoration
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.i-l {
  background-image: linear-gradient(
    180deg,
    var(--color-secondary--lighter) 50%,
    var(--color-primary--darker) 50%
  );

  @include breakpoint(m) {
    background-image: linear-gradient(
      110deg,
      var(--color-secondary--lighter) 50%,
      var(--color-primary--darker) 50%
    );
  }

  &__main-container {
    display: grid;
    min-height: calc(100vh - #{$buffer--l});
    gap: $buffer--l;
    grid-template-areas:
      'home__webshop'
      'home__restoration';
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    @include breakpoint(m) {
      grid-template-areas:
        'home__webshop .'
        '. home__restoration';
      grid-template-columns: 1fr 1fr;
    }

    @include breakpoint(l) {
      min-height: calc(100vh - #{$buffer--xxl});
    }
  }

  &__webshop-container {
    max-width: $large-dimension--xs;
    aspect-ratio: $card--aspect-ratio--landscape;
    grid-area: home__webshop;
    place-self: center;
  }

  &__restauration-container {
    max-width: $large-dimension--xs;
    aspect-ratio: $card--aspect-ratio--landscape;
    grid-area: home__restoration;
    place-self: center;
  }
}

.i-c-webshop {
  &__box-outer {
    background-color: var(--color-primary--darker);
  }

  &__box-inner {
    @include flex-container($justify: space-between);

    padding: $buffer--m;

    @include breakpoint(xs) {
      padding: $buffer--m + $buffer--s $buffer--l;
    }
  }

  &__title {
    padding: 0;
    color: var(--color-background--lightest);
  }

  &__text {
    padding: 0;
    color: var(--color-background--lighter);

    &::first-letter {
      color: var(--color-secondary--lighter);
    }
  }
}

.i-c-restauration {
  &__box-outer {
    border: $buffer--xxs solid var(--color-tertiary--darker);
    background-color: var(--color-secondary--lighter);

    &::before,
    &::after {
      border: $buffer--xxs solid var(--color-tertiary--darker);
      color: var(--color-tertiary--darker);
    }
  }

  &__box-inner {
    @include flex-container($justify: space-between);

    padding: $buffer--m;
    padding: $buffer--s;
    border: $buffer--xxs solid var(--color-tertiary--darker);

    @include breakpoint(xs) {
      padding: $buffer--m + $buffer--s $buffer--l;
    }

    &::before,
    &::after {
      border: $buffer--xxs solid var(--color-tertiary--darker);
      color: var(--color-tertiary--darker);
    }
  }

  &__title {
    padding: 0;
    color: var(--color-primary--darker);
  }

  &__text {
    padding: 0;
    color: var(--color-text--darker);
  }

}

.index-link-btn {
  @include color-link(primary, 'text--darkest', btn);

  padding-right: $buffer--xxxl;
  padding-left: $buffer--xxxl;
  margin: $center-me;
}
</style>
