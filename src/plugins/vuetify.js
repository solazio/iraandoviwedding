import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: colors.green.darken1, // #43A047
    secondary: colors.green.lighten3, //#A5D6A7
    accent: colors.blue.lighten3 // #90CAF9
  }
})
