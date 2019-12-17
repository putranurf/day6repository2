<template>
  <div>
    <form @submit.prevent="login">
      <input type="text" v-model="form.username" />
      <input type="password" v-model="form.password" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";

export default {
  data: () => ({
    form: {
      username: "putra",
      password: "secret"
    }
  }),

  methods: {
    async login() {
      const response = await axios.post(
        "http://localhost:3001/users/login",
        this.form
      );
      console.log(response.data);
      Cookies.set('auth',response.data)      
      this.$route.push('/admin')
    }
  }
};
</script>