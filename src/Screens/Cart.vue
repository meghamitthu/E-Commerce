<template>
<div>
    <div>
        <Navigation :msg="childData"/>
    </div>
    <div>
        <SearchBar/>
    </div>
    <div>
        <AddToCart/>
    </div>
    <div>
        <Footer/>
    </div>
    <div>
        <components/>
    </div>
</div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import SearchBar from '../components/SearchBar.vue'
import AddToCart from '../components/AddToCart.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Navigation, SearchBar, AddToCart, Footer
  },
  data() {
   return {
     childData :[]
   }
 },
//  methods: {
//     updateCart(variable) {
//       this.childData= variable;
//     }
//   }
}
</script>

<style>

</style>
