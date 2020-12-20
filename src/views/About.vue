<template>
      <v-app id="inspire">
        <menu-bar></menu-bar>
      </v-app>
</template>

<script>
// @ is an alias to /src
import MenuBar from '../components/MenuBar.vue';
export default {
  components: {
    MenuBar,
  },
};
</script>