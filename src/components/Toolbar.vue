<template>
  <span>
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <Logo/>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" flat>Home</v-btn>
        <v-btn to="/info" flat>Info</v-btn>
        <v-btn to="/register" flat>Register</v-btn>
        <v-btn to="/FAQ" flat>FAQ</v-btn>
      </v-toolbar-items>
    </v-toolbar>

<!-- Navigation drawer starts here -->
    
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="green darken 1"
      width="200"
      dark
    >
      <v-list class="pa-0">
        <v-list-tile avatar>
          
          <v-list-tile-content>
            <v-list-tile-title class="subheading"><Logo/></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0">
        <v-divider class="pb-2"></v-divider>

        <v-list-tile
          v-for="item in $store.state.drawerItems"
          :key="item.title"
          :to="item.path"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title class="subheading">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </span>   
</template>

<script>
  import Logo from './Logo';
  export default {
    name: "Toolbar",
    components: {
      Logo
    },
    data () {
      return {
        drawer: null,
      }
    }
  }
</script>

