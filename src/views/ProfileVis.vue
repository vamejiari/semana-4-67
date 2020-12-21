<template>
      <v-app id="inspire">
        <menu-bar></menu-bar>
        <profile-card></profile-card>
      </v-app>
</template>

<script>
import MenuBar from '../components/MenuBar'
import ProfileCard from '../components/ProfileCard.vue'
// @ is an alias to /src

export default {
    components:{
        MenuBar,
        ProfileCard,
    },
    created(){
    this.$store.dispatch("autoLogin");
  },
}
</script>