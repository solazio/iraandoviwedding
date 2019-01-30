<template>
  <v-app >
    <Toolbar/>
    <v-content>
      <v-container column fill-height align-start>
        <v-layout align-start>
          
          <router-view></router-view>

        </v-layout>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>



<script>

  import Toolbar from './components/Toolbar.vue'
  import Footer from './components/Footer.vue'


  export default {

    name: 'app',

    components: {
      Toolbar,
      Footer,
    },

    props: {

      source: String

    },
  }
  
</script>