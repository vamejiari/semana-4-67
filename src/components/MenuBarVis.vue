<template>
    <v-card color="cyan" dark flat>
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">EquiPo 67</h1>
      </v-card-title>

      <v-tabs background-color="transparent" color="white" grow>
        <v-tab link to="/homevis">Home</v-tab>
        <v-tab link to="/">Log out</v-tab>
        <v-tab link to="/profilevis">Perfil</v-tab>
      </v-tabs>
    </v-card>
</template>

<script>
export default {
    data() {
      return{

      }
    }
}
</script>
