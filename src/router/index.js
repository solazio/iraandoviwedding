import Vue from "vue";
import VueRouter from "vue-router";
import AppHome from "../components/AppHome.vue";
import AppRegister from "../components/AppRegister.vue";
import AppInfo from "../components/AppInfo.vue";
import AppFAQ from "../components/AppFAQ.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "AppHome",
      component: AppHome
    },
    {
      path: "/register",
      name: "AppRegister",
      component: AppRegister
    },
    {
      path: "/info",
      name: "AppInfo",
      component: AppInfo
    },
    {
      path: "/FAQ",
      name: "AppFAQ",
      component: AppFAQ
    }
  ]
});
