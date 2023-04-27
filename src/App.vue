<template>
  <div class="app" id="App">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script>

import Header from './components/shop-header.vue';
import Footer from './components/footer-shop.vue';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    ...mapActions(['loadCards'])
  },
  created(){
    this.loadCards()
  },
  data() {return {}},
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
