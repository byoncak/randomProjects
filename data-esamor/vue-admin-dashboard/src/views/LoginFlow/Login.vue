<template>
  <div
    class="login-view"
    :class="{
      'light-background': !isDarkMode,
      'dark-background': isDarkMode,
    }"
  >
    <div class="request-block">
      <p
        :class="{
          'light-background': !isDarkMode,
          'dark-background': isDarkMode,
        }"
      >
        Don't have an account?
      </p>
      <router-link to="/request" class="r-link"
        >Request an account.</router-link
      >
    </div>
    <div class="login-container">
      <div class="login">
        <img id="logo" src="@/assets/datamoreWordmark.png" />
        <div class="header">
          <h5>Please Log Into Your Account.</h5>
        </div>
        <form @submit.prevent="onSubmit" class="login-form">
          <input
            type="text"
            id="username"
            placeholder="Username"
            class="form-control"
            autocomplete="off"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            class="form-control"
            autocomplete="off"
          />
          <input type="submit" value="Log In" />
        </form>
      </div>
    </div>

    <div class="recover-block">
      <router-link to="/recover" class="r-link"
        >Forget your password?</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.sass";
@import "@/global-styles/typography.sass";

.togglebutton {
  display: flex;
}

.login-view {
  height: 90%;
}

.light-background {
  color: $black;
  background: whitesmoke;
}
.dark-background {
  color: whitesmoke;
  background: #2e2e4d;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0em;
  margin-bottom: 2em;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 64vw;
  max-width: 24em;
}

.request-block {
  display: flex;
  margin-right: 1em;
  align-items: center;
  justify-content: right;
}

.recover-block {
  margin-top: 0.4em;
}

::placeholder {
  color: rgba(whitesmoke, 0.6);
  font-weight: 100;
}

input[type="submit"] {
  border-radius: 4px;
  padding: 12px 12px;
  margin-top: 4px;
  @include medium-text(whitesmoke);
  background: linear-gradient(
    180deg,
    rgba(177, 133, 255, 1) 0%,
    rgba(120, 140, 255, 1) 63%
  );
  border: 1px solid $indigo;
  font-weight: 600;
  width: 98.8%;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: linear-gradient(
    180deg,
    rgba(80, 96, 212, 1) 0%,
    rgba(142, 102, 213, 1) 88%
  );
}

#username,
#password {
  padding-left: 16px;
}

h5 {
  font-weight: 400;
  margin: 0.4em;
  margin-bottom: 1.2em;
  font-size: 1.1em;
}

.form-control {
  margin-bottom: 0.4em;
  display: flex;
  width: 90%;
  padding: 12px 12px;
  border: 1px solid $indigo;
  border-radius: 4px;
  background-color: rgba($indigo, 0.6);
  font-weight: 600;
  @include medium-text(whitesmoke);
}

.form-control:focus {
  outline: none !important;
  background-color: rgba($indigo, 0.6);
  border: 2.4px solid $mint;
}

#logo {
  display: flex;
  max-height: 28vw;
  max-width: 20em;
  margin-top: 2em;
  padding-top: 2em;
}

a {
  color: $indigo;
}

p {
  font-weight: 100;
  margin-right: 0.6em;
}

.r-link {
  text-decoration: none;
}
</style>
