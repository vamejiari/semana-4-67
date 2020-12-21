<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-text-field
          v-model="login.email"
          label="Correo Electrónico"
        ></v-text-field>
        <v-text-field
          type="password"
          v-model="login.password"
          label="Contraseña"
        ></v-text-field>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!(this.login.password && this.login.email)"
        color="blue darken-1"
        text
        @click.prevent="LoginUser"
      >
        Iniciar Sesión
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import swal from "sweetalert";
export default {
  data: () => ({
      login: {
        email: "",
        password: "",
      },
  }),
  methods: {
      clean(){
        this.login.email="";
        this.login.password="";
  },
    LoginUser() {
      axios
        .post("http://localhost:3000/api/usuario/login", this.login)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          this.$store.dispatch("guardarToken", data.tokenReturn);
          this.$router.push({ path: "/" });
          swal("Great!", "Welcome back :D", "success");
        })
        .catch((error) => {
          console.log(error);
          // return error;
          swal("Oops!", "Incorrect username or password D:", "error");
          this.clean();
        });
    },
  },
};
</script>
