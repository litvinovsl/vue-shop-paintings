import { createRouter, createWebHistory } from 'vue-router';
import 
    // Vue , 
{   createApp} 
from 'vue'
import App from './App.vue'
import store from './store';

import Main from './components/main-page.vue';
import Cart from './components/cart-box.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [{
        name: 'Main',
        path: '',
        component: Main
    },{
        name: 'Cart',
        path: '/cart',
        component: Cart
    },{
        name: 'About',
        path: '/about',
        component: () => import('./components/about-box.vue')
    },{
        name: 'Contacts',
        path: '/contacts',
        component: () => import('./components/contacts-box.vue')
    },{
        name: 'Delivery',
        path: '/delivery',
        component: () => import('./components/delivery-box.vue')
    }]
})
const app = createApp(App)
app.use(router);
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