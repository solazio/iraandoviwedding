<template>
    <v-flex xs12 lg10 offset-lg1 pb-3>
      <v-card color="accent" class="grey--text text--darken-4">
        <v-img
        :src="require('../assets/got-real.jpg')" alt=""
        aspect-ratio="4"
        ></v-img>
        <v-card-text primary-title class="display-1 pb-1 pt-1">
            <span class="pink--text">{{calculateDate()}}</span><br/>
            <span class="subheading ">{{dayText(calculateDate())}}</span>
        </v-card-text>
        <v-divider light></v-divider>
        <v-card-actions class="subheading pa-3 text-xs-left">
        Remember the date
        <v-spacer></v-spacer>
        <v-icon class="material-icons indigo--text">calendar_today</v-icon> 
          <div class="indigo--text">July 13th 2019</div>
        </v-card-actions>
        <v-divider light></v-divider>
        <v-card-actions class="subheading pa-3 text-xs-left">
        Please confirm your attendance before May 13th
        <v-spacer></v-spacer>
        <v-btn to="/register" color="primary">Confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>

<script>
export default {
    name: 'Info',
    methods: {
    calculateDate(){
      const currentDate = new Date()
      const weddingDate = new Date('July 13, 2019 17:00:00')
      const daysLeft = Math.floor((Date.UTC(weddingDate.getFullYear(), weddingDate.getMonth(), weddingDate.getDate()) - Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) ) /(1000 * 60 * 60 * 24))
      return daysLeft
    },
    dayText(d){
      let text = ''
      if (d<=1) {
        text = 'day left'
      } else {
        text = 'days left'
      }
      return text
    } 
  }
}
</script>
