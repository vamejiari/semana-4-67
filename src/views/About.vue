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
    this.$store.dispatch("autoLogin")
  },
};
</script>