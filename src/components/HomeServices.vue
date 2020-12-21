<template>
  <v-container class="grey lighten-4" fluid>
    <v-row>
      <v-spacer></v-spacer>
      <v-col v-for="card in cards" :key="card.id" cols="12" sm="6" md="4">
        <v-card>
          <v-img :src="`https://picsum.photos/200/300?image=${getImage()}`" height="300px">
            <div><span class="headline white--text pl-4 pt-4 d-inline-block" v-text="card.nombre"></span></div>
            <div><span class="subtitle-1 white--text pl-4 d-inline-block" v-text="card.categoria.nombre"></span></div>
          </v-img>
          <v-card-text v-text="card.descripcion"></v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeServices",
  data: () => ({
    cards: [],
  }),
  created() {
    this.list();
  },
  methods: {
    getImage() {
      const min = 550;
      const max = 560;

      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    list() {
      axios
        .get("http://localhost:3000/api/articulo/list")
        .then((response) => {
          this.cards = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
