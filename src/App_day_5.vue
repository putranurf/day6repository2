<template>
  <div>
    <div>
      <Score label="Home" :value="homeScore" @update="updateScore">        
      </Score>
    </div>

    <div>
      <Score label="Away" :value="awayScore" @update="updateAwayScore">        
      </Score>
    </div>


    <aside v-if="$store.state.show_sidebar">
        Sidebar
    </aside>
    <button @click="toggleSidebar">Toggle Off</button>
    <button @click="getUsers">Reload User List</button>

    <ul>
        <li v-for="(user , index) in users" :key="index"> 
        {{ user.name }}
        </li>
    </ul>

    {{ users }}

  </div>



</template>

<script>
import TopBar from "./components/TopBar";
import MyButton from "./components/MyButton";
import MyPrimaryButton from "./components/MyPrimaryButton";
import Score from "./components/Score";
import { mapMutations, mapActions, mapState }  from 'vuex'

export default {
  components: {
    TopBar,
    MyButton,
    MyPrimaryButton,
    Score
  },

  data: () => ({
    homeScore: 0,
    awayScore: 0
  }),
  computed: {
      ...mapState(['users']),
  },
  methods: {
    updateScore(value) {
      this.homeScore = value;
    },
    updateAwayScore(value) {
      this.awayScore = value;
    },
    ...mapMutations(['toggleSidebar']),
    ...mapActions({
        getUsers: 'users/fetchUsers'
    }),
    
  },

};
</script>