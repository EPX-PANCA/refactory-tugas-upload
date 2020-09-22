import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "../views/Register"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard"),
  },
  {
    path: "/dashboard/user",
    name: "User",
    component: () =>
      import(
        /* webpackChunkName: "data-user" */ "../components/Dashboard/User/Index.vue"
      ),
  },
  {
    path: "/dashboard/product",
    name: "product",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "data-produk" */ "../components/Dashboard/Product/Index.vue"
      ),
  },
  {
    path: "/dashboard/productin",
    name: "productin",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "data-produk-in" */ "../components/Dashboard/Product/In.vue"
      ),
  },
  {
    path: "/dashboard/productout",
    name: "productout",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "data-produk-out" */ "../components/Dashboard/Product/Out.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // if route if requiresAuth
  console.log({ to, from });
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // if don't have token
    if (localStorage.getItem("token") == null) {
      next({
        path: "/login",
        params: { nextUrl: to.fullPath },
      });
    } else {
      // check by role
      // let user = JSON.parse(localStorage.getItem("user"));
      // if (to.matched.some((record) => record.meta.is_admin)) {
      //   if (user.role == "super_admin") {
      //     next();
      //   } else {
      //     alert("anda bukan super admin");
      //     localStorage.removeItem("user");
      //     localStorage.removeItem("token");
      //     next("/login");
      //   }
      // } else {
      //   next();
      // }
      next();
    }
  } else {
    next();
  }
});

export default router;
