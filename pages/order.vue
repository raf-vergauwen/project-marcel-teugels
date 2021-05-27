<template>
  <section id="app">
    <ul class="product-list">
      <li
        v-for="product in productData"
        :key="product.name"
        class="product-item"
        style="list-style-type: none;"
      >
        {{ product.name }}
        <ul style="list-style-type: none;">
          <li>
            <img class="image" src="" />
          </li>
          <li><span>ID:</span> {{ product.id }}</li>
          <li><span>Price:</span> € {{ product.price }}</li>
          <li>{{ product.description }}</li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      photoData: {},

      orderProductData: {},

      imageCodeList: {},

      imageUrlList: {},

      productData: {
        data: {},
      },

      allProductData: {},
    };
  },
  computed: {
    access_token() {
      return sessionStorage.getItem('access_token');
    },
  },
  created() {
    this.fetchOrder();
  },
  methods: {
    fetchOrder() {
      fetch('http://157.230.126.154/items/products?fields=*.*', {
        method: 'GET',
      })
        .then((response) => {
          if (!response.ok) {
            console.log('could not fetch ordered items');
          }

          return response.json();
        })
        .then((data) => {
          this.allProductData = data;
          this.productArrayInit();
          this.initImageCodeArray();
        })
        .catch((err) => {
          console.error(err);
        });

      fetch('http://157.230.126.154/items/orders?=*.*', {
        method: 'GET',
      })
        .then((response) => {
          if (!response.ok) {
            console.log('could not fetch ordered items');
          }

          return response.json();
        })
        .then((data) => {
          this.orderProductData = data;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    initImageCodeArray() {
      for (let i = 0; i < this.allProductData.data.length; i++) {
        const temp = JSON.parse(
          JSON.stringify(
            this.allProductData.data[i].images[0].directus_files_id,
          ),
        );
        this.imageCodeList.push(temp);
        if (
          this.orderProductData.data[0].ordered_items[0] ===
          this.allProductData.data[i].images[0].id
        ) {
          this.fetchImage(
            this.allProductData.data[i].images[0].directus_files_id,
          );
        }
      }
    },

    fetchImage(imageCode) {
      fetch(`http://157.230.126.154/assets/${imageCode}`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + this.access_token,
        },
      })
        .then((response) => {
          console.log(response);
          //console.log($image[0].src)
        })
        .then((image) => {
          this.imageUrlList.push(URL.createObjectURL(image));
        })
        .then((data) => {
          this.photoData = data;
          //$image.src = data.url;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    productArrayInit() {
      for (let i = 0; i < this.allProductData.data.length; i++) {
        if (
          this.orderProductData.data[0].ordered_items[0] ===
          this.allProductData.data[i].id
        ) {
          this.productData.data = this.allProductData.data[i];
        }
      }
    },
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif, monospace;
}

#app {
  margin: 6em;
}
</style>
