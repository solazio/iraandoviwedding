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
        <v-card-text class='pa-2 links' v-html="answer">

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


<style>
.links a {
  text-decoration: none;
}
/* unvisited link */
.links a:link {
  color: #b46494;
}

/* visited link */
.links a:visited {
  color: #b46494;
}

/* mouse over link */
.links a:hover {
  color: #F50057;
}

/* selected link */
.links a:active {
  color: #b46494;
}
</style>