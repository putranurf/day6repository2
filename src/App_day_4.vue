<template>
  <div>
    <form @submit.prevent="save">
      <div>
        <input type="text" v-model="form.name" />
      </div>
      <div>
        <input type="email" v-model="form.email" />
      </div>
      <div>
        <input type="password" v-model="form.password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      password: ""
    }
  }),

  methods: {
    async save() {
      const response = await axios.post(
        "http://localhost:3001/users",
        this.form
      );
      (this.form.name = ""), (this.form.email = ""), (this.form.password = "");
      console.log(response.data.name);
    }
  }
};
</script>
