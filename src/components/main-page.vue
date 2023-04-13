<template>
  <div class="main-page">
    <h2 class="main-page__h">Картины эпохи Возрождения</h2>
    <Cards />
  </div>
</template>
  
<script>

import Cards from './cards-product.vue';

export default {
  name: 'main-page',
  components: {
    Cards,
  },
}
</script>
  
<style>


.main-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 45px 0 320px;
  max-width: 1220px;
  margin: 0 auto;
}

.main-page__h {
  font-size: 24px;
  align-self: start;
  line-height: 150%;
  font-weight: 700;
  color: #343030;
  margin: 0 0 39px;
}

@media screen and (max-width: 1240px) {
    .main-page{
      max-width: 900px;
    }
}
@media screen and (max-width: 920px) {
    .main-page{
      max-width: 590px;
    }
}
@media screen and (max-width: 600px) {
    .main-page{
      max-width: 280px;
      padding-bottom: 50px;
    }
}
</style>