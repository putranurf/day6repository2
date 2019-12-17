import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import users from './users'

export default new Vuex.Store({
  //Daftar State terhadap Components
  modules: {
    users
  }
});

//Perbedaan penggunaan actions dan mutations yaitu 
//actions   = untuk asyncronous
//mutations = untuk syncronous