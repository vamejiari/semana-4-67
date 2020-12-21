<template>
  <v-card color="cyan" dark flat>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold display-3 basil--text">EquiPo 67</h1>
    </v-card-title>

    <v-tabs background-color="transparent" color="white" grow>
      <v-tab link to="/">Home</v-tab>
      <v-tab link to="/about">About</v-tab>
      <v-tab link to="/profilevis" v-if="validationRol() === false">Perfil</v-tab>
      <v-tab link to="/accesshome/profileadm" v-if="validationRol() === true">Perfil</v-tab>
      <v-tab link to="/login" v-if="validationLogin() === false">Log in</v-tab>
      <v-tab @click="salir" v-if="validationLogin() === true" >Log out</v-tab>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
  created(){
    this.$store.dispatch("autoLogin")
  },
  methods: {
    salir() {
      this.$store.dispatch("salir");
    },
    validationLogin() {
      if (localStorage.getItem("token")){
        return true
      }else{
        return false
      }
    },
    validationRol() {
      if(localStorage.getItem("token")){
        if(this.$store.state.user.rol === "Administrador"){
          return true
        }else if(this.$store.state.user.rol === "Visitante"){
          return false
        }
      }
    },
  },
};
</script>
