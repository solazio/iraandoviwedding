<template>
 
  <v-flex xs12 lg10 offset-lg1 pb-3>
    <v-flex xs12 text-xs-center pb-3 pt-0>
      <v-card flat align-content-start color="grey lighten-5">
        <v-card-text class='pt-0 title'>
          Below you'll find answers to the questions we get asked the most about our wedding
        </v-card-text>
      </v-card>
    <v-divider light></v-divider>
    </v-flex>

    <QACard 
      v-for="item in $store.state.qas"
      v-bind:question="item.question"
      v-bind:answer="item.answer"
      :key="item.id"
    >
    </QACard>

  </v-flex>

</template>

<script>
import QACard from '../cards/QACard'

  export default {
    components: {
      QACard 
    }
  }
</script>





