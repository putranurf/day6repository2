<template>
  <div>
    <h1>Training</h1>
    <h1>vue</h1>
    <div>
      <input type="text" v-model="form.name" />
    </div>
    <div>
      <input type="number" v-model.number="form.price" />
    </div>
    <button @click="addToCart">Add</button>
    <button @click="pop">Pop</button>
    <button @click="shift">Shift</button>
    <ul>
      <li v-for="(cart, index) in carts" :key="index">
        {{ cart.name }}
        <input type="number" v-model.number="cart.price" />

        <button @click="remove(cart)">Remove Splice</button>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data: () => ({
    users: [],
    carts: [
      { id: 1, name: "pintu", price: 10000 },
      { id: 2, name: "lemari", price: 10000 },
      { id: 3, name: "kaca", price: 20000 },
      { id: 4, name: "daun", price: 130000 },
      { id: 5, name: "ikan", price: 40000 }
    ],
    total: 0,
    form: [
      {
        name: "",
        price: 0
      }
    ]
  }),
  // async mounted() {
  //   const response = await axios.get("http://localhost:3001/users");
  //   this.users = response.data;
  // },
  computed: {
    grandTotal() {
      return this.carts.map(cart => cart.price).reduce((a, b) => a + b, 0);
    }
  },
  methods: {
    addToCart() {
      this.carts.push({
        name: this.form.name,
        price: this.form.price
      });
      this.form.name = "";
      this.form.price = 0;
    },

    pop() {
      this.carts.pop();
    },
    shift() {
      this.carts.shift();
    },
    remove(cart) {
      const index = this.carts.indexOf(cart)
      this.carts.splice(index, 1)
    }
  }
};
</script>