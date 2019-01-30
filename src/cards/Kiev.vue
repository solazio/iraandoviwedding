<template>
    <v-flex xs12 lg10 offset-lg1 pb-3>
        <v-card color="secondary" class="grey--text text--darken-4">
                <v-img
        :src="require('../assets/kiev.jpg')" alt="sunset in kiev"
        aspect-ratio="2.75"
        ></v-img>
            <v-card-text>
                <div>
                    <div class="display-1">Kiev</div>
                    <div class="subheading">Ukraine</div>
                </div>
            </v-card-text>
            <v-divider light></v-divider>
            <v-card-text class="pb-0">
                <v-icon x-large class="material-icons deep-orange--text">thumb_up</v-icon>
            </v-card-text>
            <v-card-text class="text-xs-left">
                <div class="subheading">Kiev is the capital of Ukraine with population of about 3 million citizens. It is situated on the Dnepr River and boasts architectural monuments that are recognized world treasures. Kiev is the largest cultural, scientific and industrial center of Ukraine, the place of religious pilgrimage and a very attractive tourist destination. Its beautiful landscapes, parks and gardens charm and captivate. Hospitable Ukrainians will be delighted to introduce Slavic culture to their foreign guests.
                </div>
             </v-card-text>
            <v-divider light></v-divider>
            <v-card-actions class="pa-3 text-xs-left">
            A city worth visiting
            <v-spacer></v-spacer>
            <v-icon>star</v-icon>
            <v-icon>star</v-icon>
            <v-icon>star</v-icon>
            <v-icon>star</v-icon>
            <v-icon>star</v-icon>
            </v-card-actions>
            <v-divider light></v-divider>
            <v-card-text class="pb-0">
                <v-icon x-large class="material-icons blue--text">home</v-icon>
            </v-card-text>
            <v-card-text class="text-xs-left subheading pt-0">
            We recommend staying in the city center around Golden Gate Monument or Khreshatyk street (metro stations: Khreshatyk, Zolotye Vorota, Maidan Nezalezhnosti). Booking.com and Airbnb have many good options and we will be happy to help with language if needed.   
            </v-card-text>
        </v-card>
        
    </v-flex>
</template>
