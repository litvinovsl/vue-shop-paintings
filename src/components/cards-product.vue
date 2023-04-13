<template>
    <section className="elements">
        <Card v-for="product in products" 
        :key="product.id" 
        :product_data="product" 
        @sendIdProduct = "showIdCardOnClick"
        />
    </section>
</template>

<script>
import Card from './card-product.vue'
export default {
    name: "cards-product",
    components: {
        Card
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
  },
  methods: {
    showIdCardOnClick(data){
        console.log(data)
    }
  }
}
</script>

<style>
.elements {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 58px 32px;
  color: black;
  align-content: center;
  justify-content: center;
}
</style>