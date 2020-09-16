import Vue from "vue";
import VueRouter from "vue-router";
import Login from "@/views/Login.view";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.view"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Dashboard.view"),
  },
  {
    path: "/dashboard-user",
    name: "User",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Dashboard/User/Index.vue"
      ),
  },
  {
    path: "/dashboard-product",
    name: "product",
    meta: {
      requiresAuth: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/Dashboard/Product/Index.vue"
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
