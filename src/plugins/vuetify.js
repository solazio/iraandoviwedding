import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.green.darken1, // #43A047
    secondary: "#8cdfd6", //#A5D6A7
    accent: "#b2cede" // #90CAF9
    // other colors #6dc0d5  #ad7a99
  }
})
