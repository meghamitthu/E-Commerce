import Vue from 'vue'
import VueRouter from 'vue-router' 
import Home from '../Screens/Home'
import Cart from '../Screens/Cart'
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
  ];
  const router = new VueRouter({routes});
  export default router
