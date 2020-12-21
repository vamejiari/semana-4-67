<template>
  <v-app id="inspire">
    <menu-bar-vis></menu-bar-vis>
    <home-banner></home-banner>
    <home-services></home-services>
    <home-footer></home-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src
import HomeBanner from "../components/HomeBanner.vue";
import HomeServices from "../components/HomeServices.vue";
import HomeFooter from "../components/HomeFooter.vue";
import MenuBarVis from "../components/MenuBarVis.vue";

export default {
  components: {
    HomeBanner,
    HomeServices,
    HomeFooter,
    MenuBarVis,
  },
  created(){
    this.$store.dispatch("autoLogin");
  },
};
</script>
