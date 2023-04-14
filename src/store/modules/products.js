export default {
    action: {},
    mutations: {
        getFilteredText(state, searchText){
            // console.log(state.searchText)
            state.searchText = searchText
            console.log(state.searchText)
            // console.log(state.products)

            
            return state.filteredProducts = state.products.filter(product => {
                // console.log(product)
                return product.name.indexOf(searchText) !== -1
            })
        },
    },
    state () {
        return {
        searchText: '1',
        filteredProducts: [
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
          ],
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
    getters: {
        allProducts(state){
            return state.filteredProducts
        }

        // allProducts(state){
        //     if (state.filteredProducts.length === 0){
        //         return state.products
        //     } else {
        //         return state.filteredProducts
        //     }
            
        // }
    }

}