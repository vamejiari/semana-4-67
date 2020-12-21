import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      public: true,
    },
  },
  {
    path: "/login",
    name: "LogIn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/LogIn.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      public: true,
    },
  },
  {
    path: "/profilevis",
    name: "ProfileVis",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "profilevis" */ "../views/ProfileVis.vue"),
    meta: {
      Visitante: true,
    },
  },
  {
    path: "/accesshome",
    name: "AccessHome",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "accesshome" */ "../views/AccessHome.vue"),
    meta: {
      Administrador: true,
    },
    children: [
      {
        path: "profileadm",
        name: "ProfileAdm",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(
            /* webpackChunkName: "profileadm" */ "../views/ProfileAdm.vue"
          ),
        meta: {
          Administrador: true,
        },
      },
      {
        path: "categoria",
        name: "Categoría",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "categoria" */ "../views/Categoria.vue"),
        meta: {
          Administrador: true,
        },
      },
      {
        path: "articulo",
        name: "Artículo",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "articulo" */ "../views/Articulo.vue"),
        meta: {
          Administrador: true,
        },
      },
      {
        path: "usuario",
        name: "Usuario",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "usuario" */ "../views/Usuario.vue"),
        meta: {
          Administrador: true,
        },
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.public)) {
    next();
  } else if (to.matched.some((record) => record.meta.Administrador)) {
    if (store.state.user && store.state.user.rol === "Administrador") {
      next();
    } else if (store.state.user) {
      next({ path: "/" });
    }else{
      next({ path: "/login" });
    }
  } else if(to.matched.some((record) => record.meta.Visitante)){
    if (store.state.user && store.state.user.rol === "Visitante") {
      next();
    }else if(store.state.user){
      next({ path: "/accesshome/profileadm" });
    }else{
      next({ path: "/login" });
    }
  }
});
export default router;
