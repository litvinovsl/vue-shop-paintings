<template>
  <div class="app" id="App">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>

import Header from './components/shop-header.vue';
import Main from './components/main-page.vue';
import Footer from './components/footer-shop.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
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
