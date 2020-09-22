<template>
  <div class="w-full flex">
    <side-bar />

    <div class="main-content w-full h-screen">
      <div class="grid main grid-cols-2 mx-auto my-auto bg-white mt-12">
        <div class="p-5">
          <div class="inline-block border-4 border-blue-500 rounded px-12 py-4 main-color">
            <h3 class="text-2xl">Total All Product</h3>
            <p class="text-2xl font-bold">{{Object.keys(products).length}}</p>
          </div>
        </div>
        <div class="pt-5">
          <div class="inline-block border-4 border-blue-500 rounded px-12 py-4 main-color">
            <h3 class="text-2xl">Total Product IN</h3>
            <p class="text-2xl font-bold">{{Object.keys(productsIns).length}}</p>
          </div>
        </div>
        <div class="pt-5">
          <div class="inline-block border-4 border-blue-500 rounded px-12 py-4 main-color">
            <h3 class="text-2xl">Total Product OUT</h3>
            <p class="text-2xl font-bold">{{Object.keys(productsOuts).length}}</p>
          </div>
        </div>
        <div class="pt-5">
          <div class="inline-block border-4 border-blue-500 rounded px-12 py-4 main-color">
            <h3 class="text-2xl">Total Users</h3>
            <p class="text-2xl font-bold">{{Object.keys(users).length}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar/Index.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Dashboard",
  components: {
    SideBar,
  },
 data() {
      return {};
    },
    methods: {
      ...mapActions(["getProduct"]),
      ...mapActions(["getProductOut"]),
      ...mapActions(["getProductIn"]),
      ...mapActions(["getUser"]),

    },
    computed: {
      ...mapState(["products"]),
      ...mapState(["productsIns"]),
      ...mapState(["productsOuts"]),
      ...mapState(["users"]),
    },
    created() {
      this.getProduct();
      this.getProductIn();
      this.getProductOut();
      this.getUser();
    },
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
