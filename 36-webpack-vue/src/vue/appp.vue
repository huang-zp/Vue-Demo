<template>
  <div>
  <h2>{{message}}</h2>
  <Cpn></Cpn>
  </div>
</template>

<script>
import Cpn from "./Cpn";
export default {
  name: "app",
  components: {
    Cpn
  },
  data() {
    return {
      message: 'hello lalaya'
    }
  }
}
</script>

<style scoped>
  h2 {
    color: chartreuse;
  }
</style>