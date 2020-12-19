<template>
  <div>
    <div id="nomenu">
      <v-app id="inspire">
      <home-banner></home-banner>
      <home-services></home-services>
      <home-footer></home-footer>
      </v-app>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBanner from "../components/HomeBanner.vue";
import HomeServices from "../components/HomeServices.vue";
import HomeFooter from "../components/HomeFooter.vue";

export default {
  components: {
    HomeBanner,
    HomeServices,
    HomeFooter,
  },
};
</script>