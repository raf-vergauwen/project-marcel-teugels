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
            <a class="i-c-webshop__link" href="/webshop/home-webshop"
              >webshop
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
              class="i-c-restoration__link"
              href="/restoration/home-restoration"
              >restoration
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
    var(--color-secondary--lightest) 50%,
    var(--color-primary--darkest) 50%
  );

  @include breakpoint(m) {
    background-image: linear-gradient(
      110deg,
      var(--color-secondary--lightest) 50%,
      var(--color-primary--darkest) 50%
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
    background-color: var(--color-primary--darkest);
  }

  &__box-inner {
    @include flex-container;

    padding: $buffer--s;
  }

  &__title {
    padding: 0;
    color: var(--color-secondary--lightest);
  }

  &__text {
    // @include flex-items;

    // display: flex;
    padding: 0;
    color: var(--color-background--lightest);

    &::first-letter {
      color: var(--color-secondary--lightest);
    }
  }

  &__link {
    @include box-shadow(1);

    overflow: hidden;
    padding-right: $buffer--l;
    padding-left: $buffer--l;
    background-color: var(--color-tertiary);
    border-radius: $small-dimension--m;

    &::after {
      background: var(--color-text);
    }

    &:hover {
      @include box-shadow(3);

      color: var(--color-text);
    }

    &:hover::before {
      background: var(--color-text);
    }
  }
}

.i-c-restauration {
  &__box-outer {
    border: $buffer--xxs solid var(--color-tertiary--darkest);
    background-color: var(--color-secondary--lightest);

    &::before,
    &::after {
      border: $buffer--xxs solid var(--color-tertiary--darkest);
      color: var(--color-tertiary--darkest);
    }
  }

  &__box-inner {
    @include flex-container;

    padding: $buffer--s;
    border: $buffer--xxs solid var(--color-tertiary--darkest);

    &::before,
    &::after {
      border: $buffer--xxs solid var(--color-tertiary--darkest);
      color: var(--color-tertiary--darkest);
    }
  }

  &__title {
    padding: 0;
    color: var(--color-primary--darkest);
  }

  &__text {
    padding: 0;
    color: var(--color-text--darkest);
  }

  &__link {
    @include box-shadow(1);

    overflow: hidden;
    padding-right: $buffer--l;
    padding-left: $buffer--l;
    background-color: var(--color-tertiary);
    border-radius: $small-dimension--m;

    &::after {
      background: var(--color-text);
    }

    &:hover {
      @include box-shadow(3);

      color: var(--color-text);
    }

    &:hover::before {
      background: var(--color-text);
    }
  }
}
</style>
