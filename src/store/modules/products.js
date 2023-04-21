export default {
  action: {},
  mutations: {
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
      // console.log('tyt v products.js')
      // state.cartProducts = cartProducts;
      // console.log('router: ', $router.name)
      state.cartProducts.push(cartProducts)
      console.log('state.cartProducts: ', state.cartProducts)
    }
  },
  state() {
    return {
      searchText: '1',
      cardWindow: [],
      filteredProducts: [
        {
          image: "venera.png",
          slider: [
            {img: "venera-1.jpeg", id: "img-1"},
            {img: "venera-2.jpeg", id: "img-2"},
            {img: "venera-3.jpg", id: "img-3"},
          ],
          name: "«Рождение Венеры» Сандро Боттичелли",
          oldprice: "3 000 000",
          newprice: "2 000 000",
          description: "Картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция.",
          availability: true,
          id: 1
        },
        {
          image: "vechere.png",
          slider: [
            {img: "vechere-1.jpeg", id: "img-4"},
            {img: "vechere-2.jpeg", id: "img-5"},
          ],
          name: "«Тайная вечеря»  Леонардо да Винчи",
          newprice: "3 500 000",
          description: "Монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495—1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане. Ранее ошибочно называлась фреской, однако было установлено, что роспись выполнена не фреской, и не «а-секко», а в особой технике, придуманной художником: яичной темперой по масляному грунту из свинцовых белил.",
          availability: true,
          id: 2
        },
        {
          image: "adam.png",
          slider: [
            {img: "adam-1.jpeg", id: "img-6"},
            {img: "adam-2.jpeg", id: "img-7"},
            {img: "adam-3.jpeg", id: "img-8"},
          ],
          name: "«Сотворение Адама» Микеланджело",
          oldprice: "800 000",
          newprice: "700 000",
          description: "Одна из самых выдающихся композиций росписи Сикстинской капеллы. В бесконечном пространстве летит Бог-Отец, окружённый бескрылыми ангелами, с реющей белой туникой. Правая рука вытянута навстречу руке Адама и почти касается её. Лежащее на зелёной скале тело Адама постепенно приходит в движение, пробуждается к жизни. Вся композиция сконцентрирована на жесте двух рук. Рука Бога даёт импульс, а рука Адама принимает его, давая всему телу жизненную энергию. Тем, что их руки не соприкасаются, Микеланджело подчеркнул невозможность соединения божественного и человеческого. В образе Бога, по замыслу художника, преобладает не чудесное начало, а гигантская творческая энергия. В образе Адама Микеланджело воспевает силу и красоту человеческого тела. Фактически, перед нами предстаёт не само сотворение человека, а момент, в который тот получает душу, страстное искание божественного, жажду познания.",
          availability: true,
          id: 3
        },
        {
          image: "urok.png",
          slider: [
            {img: "urok-1.jpeg", id: "img-9"},
            {img: "urok-2.jpeg", id: "img-10"},
            {img: "urok-3.jpeg", id: "img-11"},
          ],
          name: "«Урок анатомии»  Рембрандт",
          oldprice: "30 000 000",
          newprice: "28 000 000",
          description: "Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека. Труп — Адриаан Адриаанс по прозвищу Арис Киндт (Малыш). В своё время он тяжело ранил в Утрехте тюремного охранника и в Амстердаме избил и ограбил человека. За это 31 января 1632 года он был повешен и передан для публичной аутопсии амстердамской гильдии хирургов. Также на картине присутствуют старшины Адриан Слабран (Adraen Slabran) (второй слева), Якоб де Витт (Jacob de Witt) (склонился над трупом, вглядываясь в мышцы руки); лекари Якоб Колевелт (Jacob Koolvelt) (первый слева), Маттейс Калкун (Mathijs Kalkoen) (рядом с Витом), Франс ван Лунен (Frans van Loenen) (наверху), Якоб Блок (Jacob Blok) (перед ним), Харман Харманс (Hartman Hartmansz.) (с листком в руке). Подобные открытые анатомические уроки были обычным явлением не только в Нидерландах, но и по всей Европе. Они проходили только раз в году, обычно в зимние месяцы, чтобы тело лучше сохранялось, носили торжественный характер и длились, как правило, несколько дней. Зрителями были коллеги по цеху, студенты, уважаемые граждане и простые горожане.",
          availability: false,
          id: 4
        },
      ],
      products: [
        {
          image: "venera.png",
          slider: [
            {img: "venera-1.jpeg", id: "img-1"},
            {img: "venera-2.jpeg", id: "img-2"},
            {img: "venera-3.jpg", id: "img-3"},
          ],
          name: "«Рождение Венеры» Сандро Боттичелли",
          oldprice: "3 000 000",
          newprice: "2 000 000",
          description: "Картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция.",
          availability: true,
          id: 1
        },
        {
          image: "vechere.png",
          slider: [
            {img: "vechere-1.jpeg", id: "img-4"},
            {img: "vechere-2.jpeg", id: "img-5"},
          ],
          name: "«Тайная вечеря»  Леонардо да Винчи",
          newprice: "3 500 000",
          description: "Монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495—1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане. Ранее ошибочно называлась фреской, однако было установлено, что роспись выполнена не фреской, и не «а-секко», а в особой технике, придуманной художником: яичной темперой по масляному грунту из свинцовых белил.",
          availability: true,
          id: 2
        },
        {
          image: "adam.png",
          slider: [
            {img: "adam-1.jpeg", id: "img-6"},
            {img: "adam-2.jpeg", id: "img-7"},
            {img: "adam-3.jpeg", id: "img-8"},
          ],
          name: "«Сотворение Адама» Микеланджело",
          oldprice: "800 000",
          newprice: "700 000",
          description: "Одна из самых выдающихся композиций росписи Сикстинской капеллы. В бесконечном пространстве летит Бог-Отец, окружённый бескрылыми ангелами, с реющей белой туникой. Правая рука вытянута навстречу руке Адама и почти касается её. Лежащее на зелёной скале тело Адама постепенно приходит в движение, пробуждается к жизни. Вся композиция сконцентрирована на жесте двух рук. Рука Бога даёт импульс, а рука Адама принимает его, давая всему телу жизненную энергию. Тем, что их руки не соприкасаются, Микеланджело подчеркнул невозможность соединения божественного и человеческого. В образе Бога, по замыслу художника, преобладает не чудесное начало, а гигантская творческая энергия. В образе Адама Микеланджело воспевает силу и красоту человеческого тела. Фактически, перед нами предстаёт не само сотворение человека, а момент, в который тот получает душу, страстное искание божественного, жажду познания.",
          availability: true,
          id: 3
        },
        {
          image: "urok.png",
          slider: [
            {img: "urok-1.jpeg", id: "img-9"},
            {img: "urok-2.jpeg", id: "img-10"},
            {img: "urok-3.jpeg", id: "img-11"},
          ],
          name: "«Урок анатомии»  Рембрандт",
          oldprice: "30 000 000",
          newprice: "28 000 000",
          description: "Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека. Труп — Адриаан Адриаанс по прозвищу Арис Киндт (Малыш). В своё время он тяжело ранил в Утрехте тюремного охранника и в Амстердаме избил и ограбил человека. За это 31 января 1632 года он был повешен и передан для публичной аутопсии амстердамской гильдии хирургов. Также на картине присутствуют старшины Адриан Слабран (Adraen Slabran) (второй слева), Якоб де Витт (Jacob de Witt) (склонился над трупом, вглядываясь в мышцы руки); лекари Якоб Колевелт (Jacob Koolvelt) (первый слева), Маттейс Калкун (Mathijs Kalkoen) (рядом с Витом), Франс ван Лунен (Frans van Loenen) (наверху), Якоб Блок (Jacob Blok) (перед ним), Харман Харманс (Hartman Hartmansz.) (с листком в руке). Подобные открытые анатомические уроки были обычным явлением не только в Нидерландах, но и по всей Европе. Они проходили только раз в году, обычно в зимние месяцы, чтобы тело лучше сохранялось, носили торжественный характер и длились, как правило, несколько дней. Зрителями были коллеги по цеху, студенты, уважаемые граждане и простые горожане.",
          availability: false,
          id: 4
        },
      ],
      cartProducts: []
    }
  },
  getters: {
    allProducts(state) {
      return state.filteredProducts
    },
    allCardOnCart(state) {
      return state.cartProducts
    }
  }

}