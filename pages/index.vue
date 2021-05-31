<template>
  <section class="home">
    <div class="home__webshop">
      <div class="home__webshop--container">
        <h1 class="home__webshop--title">webshop</h1>
        <p class="home__webshop--text">
          Ipsum dolor voluptate quis quis dolor mollit id pariatur velit enim et
          irure pariatur. Eiusmod proident id sint irure exercitation aliqua est
          ad officia consequat. Sunt eu incididunt nulla mollit officia do nisi
          esse do nisi. Esse aliqua velit exercitation irure non eu dolore
          mollit pariatur ut sit.
        </p>
        <a class="home__webshop--link" href="/webshop/home-webshop">webshop</a>
      </div>
    </div>
    <div class="home__restoration">
      <div class="home__restoration--container">
        <h2 class="home__restoration--title">restoration</h2>
        <p class="home__restoration--text">
          Fugiat ullamco et cillum reprehenderit magna ullamco ipsum sit. Quis
          sunt ullamco ut enim ullamco sit nisi ex velit aliqua id cupidatat
          laborum tempor. Excepteur sit exercitation incididunt incididunt dolor
          adipisicing tempor deserunt.
        </p>
        <a class="home__webshop--link" href="/restoration/home-restoration">restoration</a>
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang="scss">
.home {
  display: flex;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(110deg, #b0c4de 50%, #132636 50%);

  &__webshop {
    width: 50vw;
    height: 100vh;
  }

  &__webshop--container {
    margin: 5em;
  }

  &__webshop--text {
    width: 500px;
  }

  &__restoration {
    display: flex;
    width: 50vw;
    height: 100vh;
    align-items: flex-end;
    justify-content: flex-end;
  }

  &__restoration--text {
    width: 500px;
    text-align: end;
  }

  &__restoration--container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin: 5em;
  }
}
</style>
