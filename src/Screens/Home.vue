<template>
<div>
    <div>
        <Navigation :msg="childData"/>
    </div>
    <div>
        <SearchBar/>
    </div>
    <div>
        <Description/>
    </div>
    <div>
        <Carousel/>
    </div>
    <div>
        <GridView @cartData="updateCart" />
    </div>
    <div>
        <DiscountsView/>
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
import Description from '../components/Description.vue'
import Carousel from '../components/Carousel.vue'
import GridView from '../components/GridView.vue'
import DiscountsView from '../components/DiscountsView.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Navigation, SearchBar, Description, Carousel, GridView, DiscountsView, Footer
  },
  data() {
   return {
     childData: []
   }
 },
 methods: {
    updateCart(variable) {
      this.childData= variable;
    }
  }
}
</script>

<style>

</style>
