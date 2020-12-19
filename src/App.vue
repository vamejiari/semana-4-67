<template>
  <v-app id="inspire">
    <v-app-bar app color="cyan" dark flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>¡Bienvenidx!</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary flat>
      <v-card class="mx-auto" width="300" flat>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Menú
            </v-list-item-title>
            <v-list-item-subtitle>
              ¡Bienvenidx!
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list>
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/categoria">
            <v-list-item-icon>
              <v-icon>mdi-table</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Categorías</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/articulo">
            <v-list-item-icon>
              <v-icon>mdi-content-paste</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Artículos</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/usuario">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Usuarios</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-card>
      <!--  -->
    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: null,
  }),
};
</script>
