<template>
  <div class="main-page">
    <h2 class="main-page__h">Картины эпохи Возрождения</h2>
    <section className="elements">
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    </section>
    

  </div>
</template>
  
<script>

import Cards from './cards-product.vue';

export default {
  name: 'main-page',
  components: {
    Cards,
  }
}
</script>
  
<style>
.elements{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 58px 32px;
    color: black;
    align-content: center;
    min-height: 40vh;
    justify-content: center;
}

.main-page {
  display: flex;
  flex-direction: column;
  padding: 45px 0 320px;
  width: 1220px;
  margin: 0 auto;
}

.main-page__h {
  font-size: 24px;
  line-height: 150%;
  font-weight: 700;
  color: #343030;
  margin: 0 0 39px;

}
</style>