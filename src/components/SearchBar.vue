<template>
<div>
<v-toolbar
    dark
    color= brown
  >
    <v-toolbar-title>Search</v-toolbar-title>
    <v-autocomplete
      v-model="select"
      :loading="loading"
      :items="items"
      :search-input.sync="search"
      cache-items
      class="mx-4"
      flat
      hide-no-data
      hide-details
      label="Search for products"
      solo-inverted
    ></v-autocomplete>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-toolbar>
</div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
  }
}
</script>

<style>
/* div {
  width: 100%;
  height: 50px;
  background-color: #373a40;
  border: 3px #eeeeee
} */

</style>