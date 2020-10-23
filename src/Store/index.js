import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import axios from 'axios';

Vue.use(axios)
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      products: [],
      cart:[]
  },
  getters : {
    PRODUCTS: state => {
        return state.products
    },
    CART: state => {
        return state.cart
    }
  },
  mutations: {
    SET_PRODUCTS : (state,payload) => {
        state.products = payload
        // alert(JSON.stringify(state.products))
    },
    ADD_TOCART : (state,payload) => {
        state.cart.push(payload)
        alert(JSON.stringify(state.cart))
      },
  },
  actions : {
    GET_PRODUCTS : async(context,payload) => {
        let {data} = await Axios.get('http://localhost:5000/api/v1/product/show')
        context.commit("SET_PRODUCTS",data)
        // alert(JSON.stringify(data))    
    },
    // SAVE_TOCART : async (context,payload) => {
    //     context.commit('ADD_TOCART',payload)
    //  },
  }  
})