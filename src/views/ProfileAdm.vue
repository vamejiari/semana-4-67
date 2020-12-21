<template>
      <v-app id="inspire">
        <profile-card></profile-card>
      </v-app>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue'
// @ is an alias to /src

export default {
    components:{
        ProfileCard,
    },
    created(){
    this.$store.dispatch("autoLogin");
  },
}
</script>