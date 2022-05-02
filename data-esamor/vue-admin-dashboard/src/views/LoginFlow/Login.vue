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
    <div class="toggle-button">
      <button v-on:click="toggleDarkMode()">Toggle Dark Mode</button>
    </div>
    <div class="login-container">
      <div class="login">
        <img id="logo" src="@/assets/datamoreWordmark.png" />
        <div class="header">
          <h5>Please Log Into Your Account</h5>
        </div>
        <form class="login-form">
          <div class="input-label">
            <input
              type="text"
              id="username"
              placeholder="Username"
              class="form-control"
            />
          </div>
          <div class="input-label">
            <input
              type="password"
              placeholder="Password"
              id="password"
              class="form-control"
            />
          </div>
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
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.sass";
@import "@/global-styles/typography.sass";

.light-background {
  color: $black;
  background: whitesmoke;
}
.dark-background {
  color: whitesmoke;
  background: #282828;
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
  margin-top: 2em;
  margin-bottom: 2em;
  max-height: 60vh;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;
  width: 72vw;
  max-width: 30em;
}

.request-block {
  display: flex;
  margin-bottom: 0em;
  margin-right: 2em;
  align-items: center;
  justify-content: right;
}

.recover-block {
  margin-top: 1em;
}

::placeholder {
  color: rgba(whitesmoke, 0.6);
  font-weight: 100;
}

input[type="submit"] {
  border-radius: 4px;
  padding: 12px 12px;
  margin-top: 4px;
  margin-bottom: 0.4em;
  @include medium-text(whitesmoke);
  background-color: $indigo;
  border: 1px solid $indigo;
  font-weight: 600;
  width: 100%;
}

#username,
#password {
  padding-left: 32px;
}

h5 {
  font-weight: 400;
  margin: 0.4em;
  margin-bottom: 1.2em;
  font-size: 1.2em;
}

.toggle-button {
  display: flex;
  justify-content: flex-end;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 12px 4px;
  margin-right: 3.2em;
  font-size: 10px;
  background-color: $gold;
  border: 1px solid $gold;
  font-weight: 600;
  width: 14em;
  color: $black;
  letter-spacing: 1px;
  cursor: pointer;
}

.form-control {
  display: flex;
  max-width: 24em;
  width: 62.6vw;
  padding: 12px 12px;
  margin: 1px 0;
  border: 1px solid $indigo;
  border-radius: 4px;
  background-color: rgba($indigo, 0.6);
  font-weight: 600;
  @include medium-text(whitesmoke);
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
