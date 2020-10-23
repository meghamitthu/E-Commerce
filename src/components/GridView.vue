<template>
<v-row width="100%">
        <v-col cols="12" md="3" justify-center v-for="product in PRODUCTS" :key="product.product_name">
            <img height="200px" width="230px" :src="product.product_image"/>
            <v-card-title><h1>{{product.product_name}}</h1></v-card-title>
            <v-card-subtitle><p><h1>{{product.product_price}}</h1></v-card-subtitle>
            <v-card>
              <v-card-actions>
                <v-btn
                outlined
                text
                @click ="addToCart(product)">
                Add to Cart
                </v-btn>
                <v-btn
                outlined
                rounded
                text
                color="orange">
                Buy Now
                </v-btn>
                <v-btn
                icon
                dark
                color="red"
                @click="addToWishlist(product)">
                <v-icon>mdi-heart</v-icon>
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
import {mapGetters} from 'vuex';

Vue.use(axios)
export default {
  name: 'GridView',
    data(){
        return{
            wishlist: [],
        }
    },
    async mounted ()
    {
      this.$store.dispatch("GET_PRODUCTS")
    },
    computed : {
    ...mapGetters(['PRODUCTS']),
    ...mapGetters(['CART'])
  },
    methods : {
        addToCart(product){
          this.$store.commit("ADD_TOCART",product)
          alert(JSON.stringify(product))
        },
        addToWishlist(product){
            this.wishlist.push(product)
            alert("Product added to Wishlist")
            alert(JSON.stringify(this.wishlist))
        }
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