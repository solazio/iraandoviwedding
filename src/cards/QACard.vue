<template>
  <v-layout row wrap>
    <v-flex xs11 pb-1 text-xs-left>
      <v-card light align-content-start color="accent">
        <v-card-text class='pa-2'>
          {{question}}
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs11 offset-xs1 pb-3 text-xs-right>
      <v-card light color="secondary">
        <v-card-text class='pa-2' v-html="answer">

        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
    props: ['question', 'answer']
}
</script>
