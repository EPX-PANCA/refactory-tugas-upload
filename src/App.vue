<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  import { mapState } from "vuex";
  export default {
    computed: {
      ...mapState(["users"]),
    },
  };
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav a {
    font-weight: bold;
    @apply text-blue-500;
    @apply bg-white;
    @apply py-6;
  }

  #nav a.router-link-exact-active {
    @apply text-white;
    @apply bg-blue-500;
    @apply py-6;
  }

  .main-color {
    color: #4a5568;
  }
</style>
