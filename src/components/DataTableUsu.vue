<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="usuarios"
        sort-by="id"
        class="elevation-1"
        :loading="cargando"
        loading-text="Cargando... por favor espere"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Categorías</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-bind="attrs"
                  v-on="on"
                >
                  Agregar
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-text-field
                      v-model="editedItem.nombre"
                      label="Nombre"
                    ></v-text-field>

                    <v-text-field
                      v-model="editedItem.email"
                      label="Correo Electrónico"
                    ></v-text-field>

                    <v-text-field
                      v-model="editedItem.rol"
                      label="Rol"
                    ></v-text-field>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialogStateChange" max-width="500px">
              <v-card>
                <v-card-title class="headline">Cambio de Estado</v-card-title>
                <v-card-text>
                  ¿Está seguro que desea cambiar el estado de este usuario?
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeStateChange"
                    >Cancelar</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="stateChangeConfirm"
                    >Ok</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>

        <template v-slot:item.activo="{ item }">
          <v-switch
            :input-value="item.estado"
            @change="stateChangeItem(item)"
            class="pa-3"
          ></v-switch>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon medium class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
        </template>

        <template v-slot:no-data>
          <v-btn color="primary" @click="list"> Reset </v-btn>
        </template>
      </v-data-table>
    </v-app>
    <pre>{{ $data.usuarios }}</pre>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialog: false,
    dialogStateChange: false,
    cargando: true,
    headers: [
      { text: "Activo", value: "activo", sortable: false },
      {
        text: "Usuario",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Correo Electrónico", value: "email" },
      { text: "Rol", value: "rol" },
      { text: "Editar", value: "actions", sortable: false },
    ],
    usuarios: [],
    editedIndex: -1,
    editedItem: {
      nombre: "",
      email: "",
      password: "",
      rol: "",
    },
    defaultItem: {
      nombre: "",
      email: "",
      password: "",
      rol: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Usuario" : "Editar Usuario";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogStateChange(val) {
      val || this.closeStateChange();
    },
  },

  created() {
    this.list();
  },

  methods: {
    list() {
      axios
        .get("http://localhost:3000/api/usuario/list")
        .then((response) => {
          this.usuarios = response.data;
          this.cargando = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editItem(item) {
      // this.editedIndex = this.usuarios[indexOf(item)].id;
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    stateChangeItem(item) {
      // this.editedIndex = this.usuarios[indexOf(item)].id;
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogStateChange = true;
    },

    stateChangeConfirm() {
      if (this.editedItem.estado === 1) {
        axios
          .put("http://localhost:3000/api/usuario/deactivate", {
            email: this.editedItem.email,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .put("http://localhost:3000/api/usuario/activate", {
            email: this.editedItem.email,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.closeStateChange();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeStateChange() {
      this.dialogStateChange = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        axios
          .put("http://localhost:3000/api/usuario/update", {
            email: this.editedItem.email,
            password: this.editedItem.password,
            nombre: this.editedItem.nombre,
            rol: this.editedItem.rol,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:3000/api/usuario/add", {
            email: this.editedItem.email,
            password: this.editedItem.password,
            nombre: this.editedItem.nombre,
            rol: this.editedItem.rol,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
          });
      }
      this.close();
    },
  },
};
</script>
