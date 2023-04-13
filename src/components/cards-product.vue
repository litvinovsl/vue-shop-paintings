<template>
    <section className="elements">
        <Card v-for="product in products" :key="product.id" :product_data="product" />
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
          oldprice: 3000000,
          newprice: 2000000,
          availability: true,
          id: 1
        },
        {
          image: "vechere.png",
          name: "«Тайная вечеря»  Леонардо да Винчи",
          oldprice: 4000000,
          newprice: 3500000,
          availability: true,
          id: 2
        },
        {
          image: "adam.png",
          name: "«Сотворение Адама» Микеланджело",
          oldprice: 800000,
          newprice: 700000,
          availability: true,
          id: 3
        },
        {
          image: "urok.png",
          name: "«Урок анатомии»  Рембрандт",
          oldprice: 30000000,
          newprice: 28000000,
          availability: false,
          id: 4
        },
      ]
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
  min-height: 40vh;
  justify-content: center;
}
</style>