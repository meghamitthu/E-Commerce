<template>
<div>
    <div>
        <Navigation :msg="childData"/>
    </div>
    <div>
        <Description/>
    </div>
    <div>
        <Order/>
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
import Description from '../components/Description.vue'
import Order from '../components/Order.vue'
import Footer from '../components/Footer.vue'


export default {
  name: 'Home',
  components: {
    Navigation, Description, Order, Footer
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
