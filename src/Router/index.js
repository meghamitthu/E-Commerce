import Vue from 'vue'
import VueRouter from 'vue-router' 
import Home from '../Screens/Home'
import Cart from '../Screens/Cart'
import Checkout from '../Screens/Checkout'
Vue.use(VueRouter) 
const routes =
 [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
  ];
  const router = new VueRouter({routes});
  export default router
