<template>
    <v-main
    style="
    background: #3A1C71;
    background: -webkit-linear-gradient(to right, #EEEDF3,#5A6891);
    background: linear-gradient(to right, #EEEDF3, #5A6891);
    "
    >
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
</template>

<script>
export default {
  name: "App",
  data: () => ({
  }),
};
</script>
