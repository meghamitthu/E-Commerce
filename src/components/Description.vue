<template>
    <v-container fluid fill-height class="description">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black white--text text-xs-center">POTTED PLANTS</div>
            <div class="display-4 font-weight-black white--text text-xs-center mb-3">FOR YOUR HOME</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Finally create a meadow with carefully nurtured plants delivered to your door.</div>
            <v-btn fab class="mt-5 brown">
            <v-icon large color="white">mdi-menu-down</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Description'
};
</script>

<style scoped>
.description {
    background: url('https://images.unsplash.com/photo-1500829243541-74b677fecc30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>