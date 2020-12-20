<template>
      <v-app id="inspire">
        <menu-bar-vis></menu-bar-vis>
        <profile-card></profile-card>
      </v-app>
</template>

<script>
import MenuBarVis from '../components/MenuBarVis.vue'
import ProfileCard from '../components/ProfileCard.vue'
// @ is an alias to /src

export default {
    components:{
        ProfileCard,
        MenuBarVis,
    }
}
</script>