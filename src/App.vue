<template>
  <div class="app" id="App">
    <Header />
    <RouterView />
    <!-- <Main />
    <Cart /> -->
    <Footer />
  </div>
</template>

<script>

import Header from './components/shop-header.vue';
// import Main from './components/main-page.vue';
// import Cart from './components/cart-box.vue'
import Footer from './components/footer-shop.vue'

export default {
  name: 'App',
  components: {
    Header,
    // Main,
    // Cart,
    Footer
  },
  data() {
    return {
      products: [
        {
          image: "venera.png",
          name: "«Рождение Венеры» Сандро Боттичелли",
          oldprice: "3 000 000",
          newprice: "2 000 000",
          availability: true,
          id: 1
        },
        {
          image: "vechere.png",
          name: "«Тайная вечеря»  Леонардо да Винчи",
          newprice: "3 500 000",
          availability: true,
          id: 2
        },
        {
          image: "adam.png",
          name: "«Сотворение Адама» Микеланджело",
          oldprice: "800 000",
          newprice: "700 000",
          availability: true,
          id: 3
        },
        {
          image: "urok.png",
          name: "«Урок анатомии»  Рембрандт",
          oldprice: "30 000 000",
          newprice: "28 000 000",
          availability: false,
          id: 4
        },
      ]
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Merriweather";
  src: local("Merriweather"),
   url(./vendor/fonts/Merriweather/MerriweatherRegular/MerriweatherRegular.woff) format("truetype");
}
html{
  font-family: "Merriweather", Arial, Helvetica, sans-serif;
  background-color:#F6F3F3;
  height: 100%;
}
body{
  margin: 0 ;
  /* max-width: 1220px; */
  
}
</style>
