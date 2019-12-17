import axios from "axios";

export default {
  namespaced: true,
  state: {
      users: [],
      show_sidebar: true
  },
  mutations: {
    toggleSidebar(state) {
      state.show_sidebar = !state.show_sidebar;
    },
    updateUserList(state, value){
        state.users = value
    }
  },
  actions: {
      async fetchUsers({commit}){
        const response = await axios.get('http://localhost:3001/users')
        commit('updateUserList', response.data)
      }

  }
};
