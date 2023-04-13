import { createApp } from 'vue'
// import Vue, { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'

// createApp(App).mount('#app')

createApp(App,{
    store
        
  }).mount('#app')