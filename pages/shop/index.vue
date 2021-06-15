<template>
  <main class="p-storehome">
    <section class="p-storehome__hero"></section>
    <div class="p-storehome__product-list">
      <HomeItem
        v-for="product in doneProducts"
        :key="product.id"
        class="p-storefront__product-list__item"
        :product="product"
      />
    </div>
    <section class="p-storehome__about">
      <div class="p-storehome__about__marcel">
        <p class="p-storehome__about__text">
          Ik studeerde af als master in de conservatie en restauratie van hout
          aan de Universiteit van Antwerpen (UA). Tijdens mijn bachelor werkte
          ik hoofdzakelijk rond de restauratie en conservatie van historisch,
          (beschilderd) meubilair. In de master verschoof ik de focus naar de
          restauratie en conservatie van natuurhistorische collecties, en in het
          bijzonder de restauratie van taxidermie (opgezette dieren). Ik liep in
          dit masterjaar stage aan het Koninklijk Belgisch Instituut voor
          Natuurwetenschappen (KBIN) waar ik meewerkte aan de restauratie van de
          collectie jachttrofeeën van het Koninklijk Museum voor Midden-Afrika
          (KMMA) in Tervuren. Om me verder te verdiepen in deze unieke
          discipline reisde ik later ook naar het Verenigd Koninkrijk voor het
          volgen van een “Taxidermy Conservatie Course” van enkele dagen, onder
          leiding van gerenommeerd conservator van natuurhistorische collectie,
          Simon Moore. Na het behalen van mijn masterdiploma begon ik met de
          steun van het Fonds Baillet Latour aan een jaar lange
          vervolmakingsstage in het restauratie en conservatie atelier voor
          polychrome houtsculptuur van het Koninklijk Instituut voor het
          Kunstpatrimonium (KIK) in Brussel. Hier werkte ik samen met de top van
          de Belgische erfgoedwerkers aan houtsnijwerk topstukken uit de lage
          landen. Na de stage in het KIK werkte ik twee en een half jaar lang
          als restaurator van hout en metaal voor de restauratiefirma Remmen bv
          en startte ik een tweejarig Meester-Leerling-Traject als opleiding tot
          kunstsmid met steun van de Vlaamse Overheid, Departement Cultuur,
          Jeugd en Media. In maart 2021 startte ik als zelfstandige restaurator
          en ambachtsman en kan je als klant bij mij terecht voor de conservatie
          en restauratie van houten erfgoed, objecten, meubels,
          (gepolychromeerd) beeldhouwwerk, taxidermie, etnografie en smeedwerk.
          Maar ook voor historische reproducties in hout en smeedwerk en
          hedendaagse creaties op maat in hout en metaal.
        </p>
        <div class="p-storehome__about__img--container">
          <img
            class="p-storehome__about__img--marcel"
            src="http://157.230.126.154/assets/8368132e-0628-432a-bcd1-b9f742b9629c"
            alt=""
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HomeItem from '~/components/HomeItem';

export default {
  name: 'StoreHome',
  components: { HomeItem },
  data() {
    return {
      limiet: 3,
      productData: [],
      doneProducts: [],
    };
  },
  created() {
    this.fetchLimiet();
  },
  methods: {
    fetchLimiet() {
      this.$axios('items/products?fields=*,images.*', {
        method: 'GET',
        headers: {},
        params: {
          sort: '-date_updated',
        },
      })
        .then((response) => {
          this.productData = response.data.data;
          for (let i = 0; i < this.limiet; i++) {
            this.doneProducts.push(this.productData[i]);
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style lang="scss">
.p-storehome {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__hero {
    height: 90vh;
    width: 100vw;
    background-image: linear-gradient(110deg, #b0c4de 85.2%, #132636 85.2%);
  }

  &__product-list {
    width: 100vw;
    padding: 2em 10em;
    display: grid;
    background-color: $light-bg;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: $s-site-padding;

    @include lg() {
      grid-template-columns: 1fr;
    }

    @include md() {
      padding: 2em 3em;
    }

    &__item {
      @include lg() {
        width: 300px;
        color: red;
      }
    }
  }

  &__about {
    background-color: $light-blue;
    width: 100vw;

    &__marcel {
      min-height: 60vh;
      display: flex;
      justify-content: space-between;

      @include xl() {
        flex-direction: column;
        align-items: center;
      }
    }

    &__img--container {
      display: flex;
      align-items: center;

      @include xl() {
        margin: 0px 0px 5vw;
      }
    }

    &__text {
      max-width: 50vw;
      margin-top: 5vw;
      margin-left: 10vw;
      margin-right: 3em;

      @include xl() {
        margin: 5vw 3em;
        max-width: 500px;
      }
    }

    &__img--marcel {
      height: 50vh;
      width: 50vh;
      margin-right: 5vw;

      @include xl() {
        margin: 0px;
      }

      @include sm() {
        width: 300px;
        height: 300px;
      }
    }
  }
}
</style>
