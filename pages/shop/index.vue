<template>
  <main class="p-storehome">
    <section class="p-storehome__hero"></section>
    <div class="p-storehome__product-list">
      <HomeItem
        v-for="product in productData"
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
          ik hoofdzakelijk rond de restauratie van historisch, (beschilderd)
          meubilair. In de master verschoof ik de focus naar de restauratie en
          conservatie van natuurhistorische collecties, en in het bijzonder de
          restauratie van taxidermie (opgezette dieren). Ik liep in dit
          masterjaar stage aan het Koninklijk Belgisch Instituut voor
          Natuurwetenschappen (KBIN) waar ik meewerkte aan de restauratie van de
          collectie jachttrofeeën van het Koninklijk Museum voor Midden-Afrika
          (KMMA) in Tervuren. Om me verder te verdiepen in deze unieke
          discipline reisde ik naar het Verenigd Koninkrijk voor het volgen van
          een “Taxidermy Conservatie Course” van enkele dagen, onder leiding van
          gerenommeerd conservator van natuurhistorische collectie, Simon
          Moore.<br />
          Na het behalen van mijn masterdiploma begon ik met de steun van het
          Fonds Baillet Latour aan een jaar lange vervolmakingsstage in het
          restauratie-conservatie atelier voor polychrome houtsculptuur van het
          Koninklijk Instituut voor het Kunstpatrimonium (KIK) in Brussel. Hier
          werkte ik samen met de top van de Belgische erfgoedwerkers aan
          houtsnijwerk topstukken uit de lage landen.
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
      for (let i = 0; i < this.limiet; i++) {
        this.$axios('items/products?fields=*,images.*', {
          method: 'GET',
          headers: {},
        })
          .then((response) => {
            // this.productData = response.data.data;
            const randomNumber = Math.floor(
              Math.random() * response.data.data.length,
            );
            if (this.doneProducts.includes(randomNumber)) {
              i--;
              console.log(i);
            } else {
              this.doneProducts.push(randomNumber);
              this.productData.push(response.data.data[randomNumber]);
            }

            console.log(randomNumber);
            console.log(this.productData);
          })
          .catch((err) => {
            console.error(err);
          });
      }
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
  }

  &__about {
    background-color: $light-blue;
    width: 100vw;

    &__marcel {
      height: 60vh;
      display: flex;
      justify-content: space-between;
    }

    &__img--container {
      display: flex;
      align-items: center;
    }

    &__text {
      width: 50vw;
      margin-top: 5vw;
      margin-left: 10vw;
      margin-right: 3em;
    }

    &__img--marcel {
      height: 50vh;
      margin-right: 5vw;
    }
  }
}
</style>
