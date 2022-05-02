<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.background = isDarkMode ? "#282828" : "#whitesmoke";
  },
};
</script>

<style lang="scss">
@import "@/global-styles/colors.sass";
@import "@/global-styles/typography.sass";

* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  background-color: whitesmoke;
}

#app {
  font-family: $global-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $indigo;
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

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $black;

    &.router-link-exact-active {
      color: $gold;
    }
  }
}
</style>
