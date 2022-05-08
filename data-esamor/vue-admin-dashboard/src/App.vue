<template>
  <div id="app">
    <router-view />
    <ToggleButton />
  </div>
</template>

<script>
import ToggleButton from "@/components/Toggle.vue";

export default {
  name: "App",
  components: {
    ToggleButton,
  },
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#2E2E4D" : "#f5f5f5";
  },
};
</script>

<style lang="scss">
@import "@/global-styles/colors.sass";
@import "@/global-styles/typography.sass";

* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

html {
  height: 100%;
}

body {
  background: #f5f5f5;
  margin: 0px;
  height: 100%;
}

#app {
  font-family: $global-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $indigo;
  height: 100%;
}

h1 {
  @include heading-1;
}

h2 {
  @include heading-2;
}

h3 {
  @include heading-3;
}

h4 {
  @include heading-4;
}

p {
  color: $black;
}
</style>
