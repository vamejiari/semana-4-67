<template>

    <v-app id="inspire">
      <v-data-table
        :headers="headers"
        :items="articulos"
        sort-by="id"
        class="elevation-1"
        :loading="cargando"
        loading-text="Cargando... por favor espere"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Artículos</v-toolbar-title>
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
                      v-model="editedItem.codigo"
                      label="Código"
                    ></v-text-field>

                    <v-select
                      v-model="categoria"
                      label="Seleccionar Categoría"
                      :items="categorias"
                      item-text="nombre"
                      item-value="id"
                      return-object
                    ></v-select>

                    <v-textarea
                      outlined
                      counter
                      maxlength="254"
                      hint="Por favor utilice un máximo de 254 palabras en su descripción"
                      v-model="editedItem.descripcion"
                      label="Descripción"
                    ></v-textarea>
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
                  ¿Está seguro que desea cambiar el estado de este artículo?
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
      <!-- <pre>{{ $data.articulos }}</pre> -->
    </v-app>

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
        text: "Artículo",
        align: "start",
        sortable: true,
        value: "nombre",
      },
      { text: "Código", value: "codigo" },
      { text: "Categoría", value: "categoria.nombre" },
      { text: "Descripción", value: "descripcion", sortable: false },
      { text: "Editar", value: "actions", sortable: false },
    ],
    articulos: [],
    categorias: [],
    categoria: "",
    editedIndex: -1,
    editedItem: {
      nombre: "",
      codigo: "",
      categoria: {
        id: 0,
        nombre: "",
      },
      descripcion: "",
    },
    defaultItem: {
      nombre: "",
      codigo: "",
      categoria: {
        id: 0,
        nombre: "",
      },
      descripcion: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Nuevo Artículo" : "Editar Artículo";
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
    this.listc();
  },

  methods: {
    list() {
      axios
        .get("http://localhost:3000/api/articulo/list")
        .then((response) => {
          this.articulos = response.data;
          this.cargando = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    listc() {
      axios
        .get("http://localhost:3000/api/categoria/list")
        .then((response) => {
          this.categorias = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editItem(item) {
      // this.editedIndex = this.articulos[indexOf(item)].id;
      this.editedIndex = item.id;
      this.categoria = item ? item.categoria:"";
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    stateChangeItem(item) {
      // this.editedIndex = this.articulos[indexOf(item)].id;
      this.editedIndex = item.id;
      this.editedItem = Object.assign({}, item);
      this.dialogStateChange = true;
    },

    stateChangeConfirm() {
      if (this.editedItem.estado === 1) {
        axios
          .put("http://localhost:3000/api/articulo/deactivate", {
            id: this.editedItem.id,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .put("http://localhost:3000/api/articulo/activate", {
            id: this.editedItem.id,
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
        this.categoria= "";
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
          .put("http://localhost:3000/api/articulo/update", {
            id: this.editedItem.id,
            nombre: this.editedItem.nombre,
            codigo: this.editedItem.codigo,
            categoriaId: this.categoria.id,
            descripcion: this.editedItem.descripcion,
          })
          .then((response) => {
            this.list();
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        axios
          .post("http://localhost:3000/api/articulo/add", {
            nombre: this.editedItem.nombre,
            codigo: this.editedItem.codigo,
            categoriaId: this.categoria.id,
            descripcion: this.editedItem.descripcion,
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
