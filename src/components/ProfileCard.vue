<template>
  <v-app id="inspire">
    <v-card class="mx-auto" max-width="500" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">
            {{$store.state.user.rol}}
          </div>
          <v-list-item-title class="headline mb-1">{{this.usuarios[$store.state.user.id].nombre}}</v-list-item-title>
          <v-list-item-subtitle>{{$store.state.user.email}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-avatar tile size="120" color="grey"></v-list-item-avatar>
      </v-list-item>
    </v-card>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    usuarios: [],
  }),
  created() {
    this.list();
  },
  methods: {
    list() {
      axios
        .get("http://localhost:3000/api/usuario/list")
        .then((response) => {
          this.usuarios = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
