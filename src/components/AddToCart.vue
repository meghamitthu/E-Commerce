<template>
<v-row width="100%">
        <v-col cols="12" md="3" justify-center v-for="product in pros" :key="product.product_name">
            <img height="200px" width="230px" :src="product.product_image"/>
            <v-card-title><h1>{{product.product_name}}</h1></v-card-title>
            <v-card-subtitle><p><h1>{{product.product_price}}</h1></v-card-subtitle>
            <v-card>
              <v-card-actions>
                <v-btn
                outlined
                text
                @click ="remove(product)">
                Remove
                </v-btn>
                <v-btn
                outlined
                rounded
                text
                color="orange">
                Checkout
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-col>
</v-row>
</template>

<script>

import axios from 'axios';
import Vue from 'vue';
import Axios from 'axios';

Vue.use(axios)
export default {
  name: 'AddToCart',
    data(){
        return{
            carts : [],
            wishlist: [],
            pros : [],
        }
    },
    async mounted ()
    {
      let{data}=await axios.get('http://localhost:5000/api/v1/product/show')
        this.pros=data;
        console.log=data
    },
    methods : {
        remove(product){
            this.carts.splice(this.carts.indexOf(cart), 1);
            // console.log(JSON.stringify(this.cart));
            alert("Product added to Cart")
            alert(JSON.stringify(this.carts))
            // this.$emit("cartData", this.carts);
        },
    }
}
</script>

<style>
/* div {
  width: 100%;
  height: 300px;
  background-color: #686d76;
  border: 3px #19d3da
}*/
</style>