<template>
      <v-app id="inspire">
        <menu-bar></menu-bar>
      </v-app>
</template>

<script>
// @ is an alias to /src
import MenuBar from '../components/MenuBar.vue';
import store from "../store"
export default {
  components: {
    MenuBar,
  },
  created(){
    this.$store.dispatch("autoLogin");
    if (localStorage.getItem('token')) {
      if (this.$store.state.user.rol === "Administrador") {
        this.$router.push({ path: "/accesshome/profileadm" });
      } else if (this.$store.state.user.rol === "Visitante") {
        this.$router.push({ path: "/homevis" });
      }
    }
  },
};
</script>