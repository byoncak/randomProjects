<template>
  <div class="home">
    <HeaderMain />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome, Legend!" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HeaderMain from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    HeaderMain,
    HelloWorld,
  },
};
</script>
