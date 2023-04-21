<template>
    <div class="cart-box">
      <h2 class="cart-box__h">Корзина товаров</h2>
      <Cards />
    </div>
  </template>
    
  <script>
  
  import Cards from './cards-product.vue';
  
  export default {
    name: 'cart-box',
    components: {
      Cards,
    },
  }
  </script>
    
  <style>
  
  
  .cart-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 45px 0 320px;
    max-width: 1220px;
    margin: 0 auto;
  }
  
  .cart-box__h {
    font-size: 24px;
    align-self: start;
    line-height: 150%;
    font-weight: 700;
    color: #343030;
    margin: 0 0 39px;
  }
  
  @media screen and (max-width: 1240px) {
      .cart-box{
        max-width: 900px;
      }
  }
  @media screen and (max-width: 920px) {
      .cart-box{
        max-width: 590px;
      }
  }
  @media screen and (max-width: 600px) {
      .cart-box{
        max-width: 280px;
        padding-bottom: 50px;
      }
  }
  </style>