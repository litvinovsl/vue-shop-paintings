<template>
    <div class="about-box">
      <h2 class="about-box__h">О компании</h2>
    </div>
  </template>
    
  <script>
  
  
  export default {
    name: 'about-box',
    components: {
    },
  }
  </script>
    
  <style>
  
  
  .about-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 45px 0 320px;
    max-width: 1220px;
    margin: 0 auto;
  }
  
  .about-box__h {
    font-size: 24px;
    align-self: start;
    line-height: 150%;
    font-weight: 700;
    color: #343030;
    margin: 0 0 39px;
  }
  
  @media screen and (max-width: 1240px) {
      .about-box{
        max-width: 900px;
      }
  }
  @media screen and (max-width: 920px) {
      .about-box{
        max-width: 590px;
      }
  }
  @media screen and (max-width: 600px) {
      .about-box{
        max-width: 280px;
        padding-bottom: 50px;
      }
  }
  </style>