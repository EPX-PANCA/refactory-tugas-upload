import Vue from "vue";
import Vuex from "vuex";
import Api from "../service/api";
import router from "../router";

Vue.use(Vuex);

const token = localStorage.getItem("token") || "";

export default new Vuex.Store({
  state: {
    users: [],
    products: [],
    productsIns:[],
    productsOuts:[],
    token: "",
    userData: "",
    postLoading: false,
    productMessage: "",
  },
  mutations: {
    setProductList(state, payload) {
      state.products = payload;
    },

    setProductListIn(state, payload) {
      state.productsIns = payload;
    },

    setProductListOut(state, payload) {
      state.productsOuts = payload;
    },

    setUserList(state, payload) {
      state.users = payload;
    },
    setToken(state, payload) {
      state.token = payload.data;
    },
    setUserData(state, payload) {
      state.userData = payload.data;
    },
    setBoolean(state, payload) {
      state[payload.key] = payload.value;
    },
    setData(state, payload) {
      state[payload.key] = payload.value;
    },
  },
  actions: {
    async getProduct({ commit }) {

      const { data } = await Api.get(
        "/product"
      );
      commit("setProductList", data.data.data);
    },

    async getProductIn({ commit }) {

      const { data } = await Api.get(
        "/in"
      );
      commit("setProductListIn", data.data.data);
    },

    async getProductOut({ commit }) {

      const { data } = await Api.get(
        "/out"
      );
      commit("setProductListOut", data.data.data);
    },

    async getUser({ commit }) {

      const { data } = await Api.get(
        "/user"
      );
      commit("setUserList", data.data.data);
    },

    async registerAction({ commit }, payload) {
      commit("setBoolean", { key: "postLoading", value: true });
      Api.post("/auth/signup", JSON.stringify({ data: payload }))
        .then((res) => {
          console.log({ res });
        })
        .catch((errr) => {
          console.log({ errr: errr.message });
        });
      commit("setBoolean", { key: "postLoading", value: false });
    },
    async LogIn({ commit }, payload) {
      Api.post("/auth/login", JSON.stringify({ data: payload }))
        .then((res) => {
          const {
            data: { data },
          } = res;
          commit("setToken", data.token);
          commit("setUserData", data.id);
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", data.id);
          router.push({ name: "Dashboard" });
        })
        .catch((err) => {
          console.log({ err: err.message });
        });
    },

    //add product
    async addProduct({ commit }, payload) {
      console.log({ payload });
      commit("setBoolean", { key: "postLoading", value: true });
      Api.post("/product", payload, {
        headers: {
          Authorization: `bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
        .then((result) => {
          const { data } = result;
          console.log({ data });
          commit("setData", { key: "productMessage", value: data.message });
        })
        .then((error) => {
          console.log({ error });
        });

      commit("setBoolean", { key: "postLoading", value: false });
    },
  },
  modules: {},
});
