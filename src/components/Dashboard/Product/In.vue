<template>
    <div class="w-full flex">
        <side-bar/>
        <div class="main-content w-4/5 h-screen">
            <div class="main mx-auto my-auto bg-white mt-12">
                <div class="w-4/5 mx-auto pt-8">
                </div>
                <div class="mx-auto">

                    <table class="table-auto mt-20 bg-white w-full border-4 border-gray-200">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="px-4 w-1/5 py-4">ID</th>
                                <th class="px-4 w-1/5 py-4">Product Id</th>
                                <th class="px-4 w-1/5 py-4">Date</th>
                                <th class="px-4 w-1/5 py-4">Total</th>
                                <th class="px-4 w-1/5 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody v-for="(product, idx) in productsIns" :key="idx">
                            <tr>
                                <td class="px-4 w-1/5 py-4">{{ product.id }}</td>
                                <td class="px-4 w-1/5 py-4">{{ product.Product.id }}</td>
                                <td class="px-4 w-1/5 py-4">{{ product.date }}</td>
                                <td class="px-4 w-1/5 py-4">{{ product.total }}</td>
                                <td class="px-4 w-1/5 py-4">
                                    <button class="mr-2 py-2 px-2 bg-green-500 border rounded-md text-white">
                                        Edit
                                    </button>
                                    <button class="mr-2 py-2 px-2 bg-red-500 border rounded-md text-white">
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

  import { mapActions, mapState } from "vuex";
  export default {
    name: "ProductIn",
    components: { SideBar },
    data() {
      return {};
    },
    methods: {
      ...mapActions(["getProductIn"]),
    },
    computed: {
      ...mapState(["productsIns"]),
    },
    created() {
      this.getProductIn();
    },
  };
</script>
