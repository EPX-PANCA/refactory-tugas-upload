<template>
  <div class="sider-bar w-1/5 h-screen relative">
    <h2 class="mt-12">Vuex</h2>
    <div>
      <img
        src="@/assets/icon/profile.svg"
        alt="profile"
        class="rounded-full border border-gray-500 mx-auto mt-2"
      />
    </div>
    <!-- Button Dashboard -->
    <div id="nav" class="w-full pt-16">
      <router-link to="/dashboard">
        <button class="color-primary w-full py-5">
          <p class="text-left text-base pl-6">Dashboard</p>
        </button>
      </router-link>
      <!-- Button Product -->
      <router-link to="/dashboard-product">
        <button class="color-primary w-full py-5">
          <p class="text-left text-base pl-6">Product</p>
        </button>
      </router-link>

      <!-- Button User -->
      <router-link to="/dashboard-user">
        <button class="color-primary w-full py-5">
          <p class="text-left text-base pl-6">User</p>
        </button>
      </router-link>
    </div>
    <sign-out />
  </div>
</template>

<script>
import SignOut from "@/components/Button/SignOut.vue";
export default {
  name: "SideBar",
  components: { SignOut },
};
</script>

<style scoped>
</style>