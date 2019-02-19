<template>
    <v-flex xs12 lg10 offset-lg1 pb-3>
      <v-card color="secondary" class="grey--text text--darken-4">
        <v-card-text primary-title class="display-1">
            How to get there
        </v-card-text>
        <v-divider light></v-divider>
        <v-card-text class="pb-0">
          <v-icon x-large class="material-icons deep-orange--text">flight_takeoff</v-icon>
        </v-card-text>
        <v-card-text class="text-xs-left subheading pt-0">
          Flying to Kiev is pretty easy from anywhere, but Romania. In Kiev there are two airports, Boryspil (KBP) & Zhuliany (IEV). Both are easy accessible by taxi or uber. If you plan to visit other parts of Ukraine, there is an option to fly to Odessa and either catch a train or drive (approx. 5 hours) to Kiev.    
        </v-card-text>
        <v-divider light></v-divider>
        <v-card-text class="pb-0">
          <v-icon x-large class="material-icons blue--text">airport_shuttle</v-icon>
        </v-card-text>
        <v-card-text class="text-xs-left subheading pt-0">
          If you are planning on travelling by car, it is very likely that you'll drive either from Bucarest or Targu-Mures and you should expect a 13 hours drive which we recommend to be split over two days and visit one of the cities on the way. The best options are Chernivtsi, Chisinau, Odessa & Lviv highlighted in red on the map. Below you can see our recommended routes.       
        </v-card-text>
                <v-img
        :src="require('../assets/driving-map.jpg')" alt=""
        aspect-ratio="2"
        ></v-img>
      </v-card>
    </v-flex>
</template>