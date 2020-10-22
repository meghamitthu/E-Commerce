<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">Available Discounts</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img src="https://images.pexels.com/photos/5721/sunglasses-plant-flower-design.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">FLOWERING</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Flowering</h3>
                            <div>Order now and avail 20% off.
                                <v-btn
                                outlined
                                rounded                              
                                color="orange">
                                Avail Offer
                                </v-btn>
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img src="https://images.pexels.com/photos/1856430/pexels-photo-1856430.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline black--text">CACTUS</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Cactus</h3>
                            <div> Use code "AF101010" & get 25% off.
                                <v-btn
                                outlined
                                rounded                              
                                color="orange">
                                Avail Offer
                                </v-btn>
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>

            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-img src="https://images.pexels.com/photos/4503745/pexels-photo-4503745.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" height="500px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline white--text">COMBO</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Tomato - Basil</h3>
                            <div> Buy Tomato & get Basil FREE.
                                <v-btn
                                outlined
                                rounded                              
                                color="orange">
                                Avail Offer
                                </v-btn>
                            </div>
                        </div>
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomePlans'
};
</script>

<style scoped>
</style>