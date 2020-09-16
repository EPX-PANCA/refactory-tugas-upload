<template>
  <div class="w-full flex">
    <side-bar />
    <div class="main-content w-4/5 h-screen">
      <div class="main mx-auto my-auto bg-white mt-12">
        <div class="w-4/5 mx-auto pt-8">
          <product-all />
          <button
            class="float-right text-base rounded-md bg-blue-500 text-white py-2 px-4"
          >
            Report All
          </button>

          <table class="table-auto mt-20 w-full">
            <thead class="bg-gray-200">
              <tr>
                <th class="px-4 w-1/5 py-4">ID</th>
                <th class="px-4 w-1/5 py-4">Product Name</th>
                <th class="px-4 w-1/5 py-4">Stock</th>
                <th class="px-4 w-1/5 py-4">Price</th>
                <th class="px-4 w-1/5 py-4"></th>
              </tr>
            </thead>
            <tbody v-for="(product, idx) in products" :key="idx">
              <tr>
                <td class="px-4 w-1/5 py-4">{{ product.id }}</td>
                <td class="px-4 w-1/5 py-4">{{ product.name }}</td>
                <td class="px-4 w-1/5 py-4">{{ product.stock }}</td>
                <td class="px-4 w-1/5 py-4">{{ product.price }}</td>
                <td class="px-4 w-1/5 py-4">
                  <button
                    class="mr-2 py-2 px-2 bg-green-500 border rounded-md text-white"
                  >
                    Edit
                  </button>
                  <button
                    class="mr-2 py-2 px-2 bg-red-500 border rounded-md text-white"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SideBar from "@/components/SideBar/Index.vue";
  import ProductAll from "@/components/Modal/ProductAll.vue";

  import { mapActions, mapState } from "vuex";
  export default {
    name: "Product",
    components: { SideBar, ProductAll },
    data() {
      return {};
    },
    methods: {
      ...mapActions(["getProduct"]),
    },
    computed: {
      ...mapState(["products"]),
    },
    created() {
      this.getProduct();
    },
  };
</script>
