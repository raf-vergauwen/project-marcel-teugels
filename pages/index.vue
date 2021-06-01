<template>
  <section class="home">
    <div class="home__webshop">
      <div class="home__webshop--box box">
        <div class="home__webshop--container box-inner">
          <h2 class="home__webshop--title">webshop</h2>
          <p class="home__webshop--text">
            Ipsum dolor voluptate quis quis dolor mollit id pariatur velit enim
            et irure pariatur. Eiusmod proident id sint irure exercitation
            aliqua est ad officia consequat.
          </p>
          <a class="home__webshop--link" href="/webshop/home-webshop"
            >webshop</a
          >
        </div>
      </div>
    </div>
    <div class="home__restoration">
      <div class="home__restoration--box box">
        <div class="home__restoration--container box-inner">
          <h2 class="home__restoration--title">restoration</h2>
          <p class="home__restoration--text">
            Fugiat ullamco et cillum reprehenderit magna ullamco ipsum sit. Quis
            sunt ullamco ut enim ullamco sit nisi ex velit aliqua id cupidatat
            laborum tempor.
          </p>
          <a
            class="home__restoration--link"
            href="/restoration/home-restoration"
            >restoration</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
.home {
  display: grid;
  padding: $buffer--m;
  background-image: linear-gradient(
    180deg,
    var(--color-secondary--lightest) 50%,
    var(--color-primary--darkest) 50%
  );
  gap: $buffer--l;
  grid-template-areas:
    'home__webshop'
    'home__restoration';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  @include breakpoint(s) {
    background-image: linear-gradient(
      110deg,
      var(--color-secondary--lightest) 50%,
      var(--color-primary--darkest) 50%
    );
    grid-template-areas:
      'home__webshop .'
      '. home__restoration';
    grid-template-columns: 1fr 1fr;
  }

  &__webshop {
    grid-area: home__webshop;
  }

  &__webshop--box {
    background-color: var(--color-primary--darkest);
  }

  &__webshop--container {
    @include flex-container($justify: space-evenly);

    padding: $buffer--s;
  }

  &__webshop--title {
    padding: 0;
    color: var(--color-secondary--lightest);
  }

  &__webshop--text {
    padding: 0;
    color: var(--color-background--lightest);
  }

  &__webshop--link {
    overflow: hidden;
    padding-right: $buffer--l;
    padding-left: $buffer--l;
    background-color: var(--color-tertiary);
    border-radius: $small-dimension--m;
  }

  &__restoration {
    grid-area: home__restoration;
  }

  &__restoration--box {
    background-color: var(--color-secondary--lightest);
  }

  &__restoration--container {
    @include flex-container($justify: space-evenly);

    padding: $buffer--s;
  }

  &__restoration--title {
    padding: 0;
    color: var(--color-primary--darkest);
  }

  &__restoration--text {
    padding: 0;
    color: var(--color-text--darkest);
  }

  &__restoration--link {
    overflow: hidden;
    padding-right: $buffer--l;
    padding-left: $buffer--l;
    background-color: var(--color-tertiary);
    border-radius: $small-dimension--m;
  }
}
</style>
