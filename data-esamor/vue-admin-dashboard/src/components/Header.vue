<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: "HeaderMain",
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.sass";
@import "@/global-styles/typography.sass";

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
