// ! [NAMESPACE]-[PREFIX]-[BLOCK]__[ELEMENT]--[MODIFIER]

<template>
  <section class="i-l">
    <div class="i-l__main-container">
      <div
        v-for="indexItem in indexItems"
        :key="indexItem.id"
        :class="[
          `i-l__${indexItem.container}-container i-c-${indexItem.container}`,
        ]"
      >
        <div :class="[`i-c-${indexItem.container}__box-outer box-outer`]">
          <div :class="[`i-c-${indexItem.container}__box-inner box-inner`]">
            <h2 :class="[`i-c-${indexItem.container}__title`]">
              {{ indexItem.title }}
            </h2>
            <p :class="[`i-c-${indexItem.container}__text`]">
              {{ indexItem.text }}
            </p>
            <anchor-link-or-nuxt-link
              :to="indexItem.path"
              :nuxt="indexItem.nuxt"
              :class="[`i-c-${indexItem.container}__link index-link-btn`]"
            >
              <fa
                :class="[`i-c-${indexItem.container}__icon`]"
                :icon="['fas', indexItem.icon]"
              />
              {{ indexItem.label }}
            </anchor-link-or-nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AnchorLinkOrNuxtLink from '~/components/AnchorLinkOrNuxtLink.vue';

export default {
  components: { AnchorLinkOrNuxtLink },

  data() {
    return {
      indexItems: [
        {
          nuxt: true,
          container: 'webshop',
          title: 'webshop',
          text: 'Elit enim duis irure do ex voluptate. Ut sit sint exercitation excepteur id irure cillum duis ex reprehenderit qui amet enim. Non occaecat enim reprehenderit magna cillum ea fugiat reprehenderit ex enim incididunt.',
          path: '/webshop/home-webshop',
          icon: 'shopping-bag',
          label: 'webstore',
        },
        {
          nuxt: true,
          container: 'restoration',
          title: 'restoration',
          text: 'Aliquip et exercitation minim laboris culpa irure incididunt fugiat. Ut in sunt aliqua aliqua enim consectetur sunt elit laborum anim mollit. Fugiat est sit laborum nostrud incididunt culpa sunt qui laboris excepteur commodo.',
          path: '/restoration/home-restoration',
          icon: 'tools',
          label: 'restoration',
        },
      ],
    };
  },
};
</script>

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
      'i-c-webshop'
      'i-c-restoration';
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);

    @include breakpoint(m) {
      grid-template-areas:
        'i-c-webshop .'
        '. i-c-restoration';
      grid-template-columns: repeat(2, 1fr);
    }

    @include breakpoint(l) {
      min-height: calc(100vh - #{$buffer--xxl});
    }
  }

  &__webshop-container {
    max-width: $large-dimension--xs;
    aspect-ratio: $card--aspect-ratio--landscape;
    grid-area: i-c-webshop;
    place-self: center;
  }

  &__restauration-container {
    max-width: $large-dimension--xs;
    aspect-ratio: $card--aspect-ratio--landscape;
    grid-area: i-c-restoration;
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
  background-color: rgb(230, 6, 6);

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
