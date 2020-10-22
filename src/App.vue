<template>
<v-app>
  <v-content>
<div>
  <div>
      <Screens/>
  </div>
  <div>
      <Home/>
  </div>
</div>
  </v-content>
  </v-app>
</template>

<script>
import Home from './Screens/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
