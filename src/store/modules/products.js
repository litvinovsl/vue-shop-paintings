import products from "../../mocks/products"

const loadCardss = (time) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(products)
    }, time)
  })
}

export default {
  actions: {
    async loadCards({ commit }, payloud){
      try {
        const products = await loadCardss(payloud)
        commit('SET_PRODUCTS', products)
        // console.log(products)
      } catch (error) {
        console.error(error)
      }
    },
    // consoleLog(w){
    //   console.log(w)
    // }
  },
  mutations: {
    SET_PRODUCTS(state, payloud){
      state.products = payloud;
      state.filteredProducts = payloud;
    },
    getFilteredText(state, searchText) {
      // console.log(state.searchText)
      state.searchText = searchText
      console.log(state.searchText)
      console.log(state)

      // console.log(state.products)


      return state.filteredProducts = state.products.filter(product => {
        // console.log(product)
        return product.name.toUpperCase().indexOf(searchText.toUpperCase()) !== -1
      })
    },
    getCardData(state, cartProducts){
      if (!cartProducts.isLiked) {
        state.cartProducts.push(cartProducts)
        state.filteredProducts.forEach(item => {
          if (item === cartProducts){
            item.isLiked = true
          }
        });
      } else {
        state.cartProducts.forEach((item, index, object) => {
          if (item === cartProducts){
            object.splice(index, 1);
          }
        });
        state.filteredProducts.forEach((item) => {
          if (item === cartProducts){
            item.isLiked = false
          }
        });
      }
    },
  },
  state() {
    return {
      searchText: '1',
      cardWindow: [],
      filteredProducts: [],
      products: [],
      cartProducts: []
    }
  },
  getters: {
    allProducts(state) {
      return state.filteredProducts
    },
    allCardOnCart(state) {
      return state.cartProducts
    },
  }

}