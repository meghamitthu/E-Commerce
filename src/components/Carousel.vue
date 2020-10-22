<template>
<div>
<v-carousel
    light
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(items, i) in items"
      :key="i"
      :src="items.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <!-- <v-sheet>
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        </v-row>
      </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
</div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
      return {
        items: [
          {
            src: 'https://cdn.shopify.com/s/files/1/0150/6262/articles/the-sill_mini-succulents-assorted-plants_6.jpg?v=1574358444',
          },
          {
            src: 'https://diy.sndimg.com/content/dam/images/diy/fullset/2017/11/26/0/CI_Costa_Farms-Succulents-Kalanchoe-Crassula-Aloe-Echeveria.jpg.rend.hgtvcom.1280.640.suffix/1511744456336.jpeg'
            
          },
          {
            src: 'https://www.proflowers.com/blog/wp-content/uploads/2019/07/top-plant-care-tips-9-1.jpg'
            
          },
          {
            src: 'https://www.anthura.nl/wp-content/uploads/2019/10/Anthura_Spirit_pot12-2-aspect-ratio-350x210-1.jpg',
          
          },
        ],
      }
    },
  props: {
  }
}

</script>

<style>
/* div {
  width: 100%;
  height: 250px;
  background-color: #686d76;
  border: 3px #19d3da
} */

</style>