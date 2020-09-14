import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'
import dataDummy from '@/dummy/dataDummy.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:dataDummy,
    datafilter:"",
    keyword:'',
  },
  mutations: {
    // setData(state, payload){
    //   state.data = payload
    // },

    // setFilterData(state, payload){
    //   state.data = payload
    // },

    updateSearching(state, searching){
      state.keyword = searching
    },
  },
  actions: {
    // async setData({commit}){
    //   const {data} = dummy;
    //   commit("setData", data);
    // }

    filterData({commit}){
      const data = 0; 
      commit("setFilterData", data);
    }
  },
  modules: {
  },

  getters:{
    
  }
})
