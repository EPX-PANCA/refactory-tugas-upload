<template>
  <div class="mx-auto bottom-0 right-0 left-0 text-center pb-12 pt-10">
    <router-link to="/">
      <button
        class="text-red-500 hover:text-red-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Sign Out
      </button>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Signout",
  };
</script>
