<template>
<div id="nav">
    <span>
     <v-navigation-drawer app v-model="drawer" class="brown lighten-2" dark disable-resize-watcher>
            <v-list z-index="5">
                <v-list-tile>
                    <v-list-title><h1>MENU</h1></v-list-title>
                    <v-list-tile-content>
                        <v-btn block elevation="6" rounded color= #d68910 @click="goHome()">Home</v-btn>
                    </v-list-tile-content>
                    <v-list-tile-content>
                        <v-btn block elevation="6" rounded color= #d68910 @click="goCart()">Cart</v-btn>
                    </v-list-tile-content>
                    <v-list-tile-content>
                        <v-btn block elevation="6" rounded color= #d68910>Wishlist</v-btn>
                    </v-list-tile-content>
                    <v-list-tile-content>
                        <v-btn block elevation="6" rounded color= #d68910>Notification</v-btn>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    <v-toolbar app color= #c5c330 dark>
    <v-toolbar-side-icon class="hidden-md-and-up" ></v-toolbar-side-icon>
    <v-spacer class="hidden-md-and-up"></v-spacer>
    <v-btn flat rounded class="hidden-sm-and-down" @click="drawer = !drawer">Menu</v-btn>
    <v-toolbar-title class="display-1 font-weight-bold" >{{appTitle}}</v-toolbar-title>
    <v-icon x-large>mdi-leaf</v-icon>
    
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-btn flat rounded class="hidden-sm-and-down">SIGN IN</v-btn>
    <v-btn rounded color="red" class="hidden-sm-and-down">NEW ACCOUNT</v-btn>
    <v-btn icon class="hidden-sm-and-down" ><v-badge
        :content="CART.length"
        color="red"
        overlap
      >
        <v-icon large>
          mdi-cart
        </v-icon>
      </v-badge></v-btn>
</v-toolbar>
    </span>     
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'Navigation',
  data() {
        return {
            appTitle: 'Bio Sphere  ',
            drawer: false,
            number: 0,
            show: false,
        };
    },
    methods:{
        goHome(){
            this.$router.push({name:'Home'})
        },
        goCart(){
            this.$router.push({name:'Cart'})
        }
    },
     async mounted ()
    {
      this.$store.getters.CART
    },
     computed : {
    ...mapGetters(['CART'])
  },
}


</script>

<style>
div.nav { 
    border: 3px #eeeeee
}
</style>