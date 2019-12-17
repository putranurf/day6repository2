<template>
  <div style="background: #cecece; padding: 10px; margin: 20px;">
      <slot></slot>
    <h1>{{ label }}</h1>
    {{ value }}
    <div>
      <MyButton @click="plus">+</MyButton>
      <MyButton @click="minus">-</MyButton>
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton";

export default {
  components: {
    MyButton
  },
  props: ["value", "label"],
  methods: {
    plus() {
      //Jika value langsung diubah tanpa menggunakan $emit maka akan
      //error di console.log avoid mutating a prop

      // this.value++
      this.$emit("update", this.value + 1);
    },
    minus() {
      this.$emit("update", this.value - 1);
    }
  }
};
</script>