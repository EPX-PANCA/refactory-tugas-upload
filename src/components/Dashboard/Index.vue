<template>
  <div class="w-full flex">
    <side-bar />

    <!-- Tab -->
    <div class="main-content w-4/5 h-screen">
      <div class="main mx-auto my-auto bg-white mt-12">
        <div class="pt-12">
          <div class="inline-block border-4 border-blue-500 rounded px-12 py-4 main-color">
            <h3 class="text-2xl">Total All Product</h3>
            <p class="text-2xl font-bold">18</p>
          </div>
        </div>
        <div class="pt-4">
          <div class="inline-block border-4 border-blue-500 rounded px-12 py-4 main-color">
            <h3 class="text-2xl">Total Product IN</h3>
            <p class="text-2xl font-bold">24</p>
          </div>
        </div>
        <div class="pt-4">
          <div class="inline-block border-4 border-blue-500 rounded px-12 py-4 main-color">
            <h3 class="text-2xl">Total Product OUT</h3>
            <p class="text-2xl font-bold">43</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar/Index.vue";
export default {
  name: "Dashboard",
  components: {
    SideBar,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.color-tab-navigation {
  color: #4299e1;
}

.main-content {
  background-color: #f6f6f6;
}

.main {
  margin-top: 8%;
  height: 80%;
  width: 90%;
}

.icon-dashboard:hover {
  fill: #4299e1;
}
</style>
