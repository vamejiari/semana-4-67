import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
      public: true,
    },
  },
    {
      path: "/homevis",
      name: "HomeVis",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "homevis" */ "../views/HomeVis.vue"),
      meta: {
        auth: true,
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
      auth: true,
    },
    children: [
      {
        path: "profileadm",
        name: "ProfileAdm",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "profileadm" */ "../views/ProfileAdm.vue"),
        meta: {
          auth: true,
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
          auth: true,
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
          auth: true,
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
          auth: true,
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

export default router;
