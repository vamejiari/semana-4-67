<template>
  <v-app id="inspire">
    <menu-bar></menu-bar>
    <login-form></login-form>
  </v-app>
</template>

<script>
// @ is an alias to /src
import MenuBar from "../components/MenuBar.vue";
import LoginForm from "../components/LoginForm.vue";
import store from "../store";
export default {
  components: {
    MenuBar,
    LoginForm,
  },
  created(){
    this.$store.dispatch("autoLogin");
    if (localStorage.getItem('token')) {
      if (this.$store.state.user.rol === "Administrador") {
        this.$router.push({ path: "/" });
      } else if (this.$store.state.user.rol === "Visitante") {
        this.$router.push({ path: "/" });
      }
    }
  },
};
</script>
