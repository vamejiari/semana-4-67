<template>
  <v-app id="inspire">
    <menu-bar></menu-bar>
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
import MenuBar from "../components/MenuBar.vue";

export default {
  components: {
    HomeBanner,
    HomeServices,
    HomeFooter,
    MenuBar,
  },
  created(){
    this.$store.dispatch("autoLogin");
    if (this.$store.dispatch("autoLogin")) {
      if (this.$store.state.user.rol === "Administrador") {
        this.$router.push({ path: "/accesshome/profileadm" });
      } else if (this.$store.state.user.rol === "Visitante") {
        this.$router.push({ path: "/homevis" });
      }
    }
  },
};
</script>
