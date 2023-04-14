import 
    // Vue , 
{   createApp} 
from 'vue'
import App from './App.vue'
import store from './store';

const app = createApp(App)

app.use(store);
app.mount('#app');
// Vue.config.prodactionTip = false;

// new Vue({
//     // store,
//     render: h => h(App)
// }).$maunt('#App')

// createApp(App,{
//     store
        
//   }).mount('#app')