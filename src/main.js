import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/main.css'
import VuePaginate from 'vue-paginate'
Vue.use(VuePaginate)

Vue.config.productionTip = false


const auth = {
  login: false,
};

router.beforeEach((to, from, next) => {
  console.log({ to, from, next });
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (auth.login) {
      next();
    } else {
      alert("anda harus login");
      next("/login");
    }
  } else {
    next();
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
