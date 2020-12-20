<template>
      <v-app id="inspire">
        <menu-bar></menu-bar>
        <login-form></login-form>
      </v-app>
</template>

<script>
// @ is an alias to /src
import MenuBar from '../components/MenuBar.vue';
import LoginForm from '../components/LoginForm.vue';
export default {
  components: {
    MenuBar,
    LoginForm
  },
};
</script>