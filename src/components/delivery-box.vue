<template>
    <div class="delivery-box">
      <h2 class="delivery-box__h">Доставка</h2>
    </div>
  </template>
    
  <script>
  
  
  export default {
    name: 'delivery-box',
    components: {
    },
  }
  </script>
    
  <style>
  
  
  .delivery-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 45px 0 320px;
    max-width: 1220px;
    margin: 0 auto;
  }
  
  .delivery-box__h {
    font-size: 24px;
    align-self: start;
    line-height: 150%;
    font-weight: 700;
    color: #343030;
    margin: 0 0 39px;
  }
  
  @media screen and (max-width: 1240px) {
      .delivery-box{
        max-width: 900px;
      }
  }
  @media screen and (max-width: 920px) {
      .delivery-box{
        max-width: 590px;
      }
  }
  @media screen and (max-width: 600px) {
      .delivery-box{
        max-width: 280px;
        padding-bottom: 50px;
      }
  }
  </style>