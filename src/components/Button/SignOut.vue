<template>
  <div class="mx-auto bottom-0 right-0 left-0 absolute text-center pb-12">
    <router-link to="/login">
      <button
        class="text-red-500 hover:text-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
