<template>
<v-container class="mt-5">
  <v-row >
    <v-col cols="6" md="5">
          <v-card class="pa-2" outlined tile>
          <img src="../../public/resources/login.jpg" width="95%" style="display:block; margin:auto;">
          </v-card>
    </v-col>
    <v-col cols="12" sm="6" md="7" >
          <v-card>
    <v-card-text>
      <v-container>
        <img src="../../public/resources/user.png" width="20%" style="display:block; margin:auto;">
        <h1 class="text-center mt-5" >BIENVENIDO</h1>
        <v-text-field v-model="login.email" label="Correo Electrónico"></v-text-field>
        <v-text-field type="password" v-model="login.password" label="Contraseña"></v-text-field>
      </v-container>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :disabled="!(this.login.password && this.login.email)" color="blue darken-1" text @click.prevent="LoginUser">
        Iniciar Sesión
      </v-btn>
    </v-card-actions>
  </v-card>
    </v-col>
        
  </v-row>
  </v-container>
</template>

<script>
import swal from "sweetalert";
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    LoginUser() {
        axios.post("http://localhost:3000/api/usuario/login", this.login)
        .then(response =>{
            return response.data
        })
        .then(data =>{
            this.$router.push({path: "/accesshome/profileadm"});
            swal("Great!", "Welcome back :D", "success");
        })
        .catch((error) => {
            console.log(error);
            return error;
            swal("Oops!", "Incorrect username or password D:", "error");
        });

        let token = response.data.accessToken;
        let userData = response.data.user;

        localStorage.setItem("jwt", token);
        localStorage.setItem("user", JSON.stringify(userData));
    },
  },
};
</script>
