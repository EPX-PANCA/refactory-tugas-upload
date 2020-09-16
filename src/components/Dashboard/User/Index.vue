<template>
  <div class="w-full flex">
    <side-bar />
    <div class="main-content w-4/5 h-screen">
      <div class="main mx-auto my-auto bg-white mt-12">
        <div class="w-4/5 mx-auto pt-8">
          <product-user />

          <table class="table-auto mt-20 w-full">
            <thead class="bg-gray-200">
              <tr>
                <th class="px-4 w-1/5 py-4">No</th>
                <th class="px-4 w-1/5 py-4">Product Name</th>
                <th class="px-4 w-1/5 py-4">Stock</th>
                <th class="px-4 w-1/5 py-4">Price</th>
                <th class="px-4 w-1/5 py-4"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="px-4 w-1/5 py-4">1</td>
                <td class="px-4 w-1/5 py-4">Bawang</td>
                <td class="px-4 w-1/5 py-4">4</td>
                <td class="px-4 w-1/5 py-4">Rp 14.500</td>
                <td class="px-4 w-1/5 py-4">
                  <button class="mr-2 py-2 px-2 bg-green-500 border rounded-md text-white">Edit</button>
                  <button class="mr-2 py-2 px-2 bg-red-500 border rounded-md text-white">Hapus</button>
                </td>
              </tr>
              <tr class="bg-gray-100">
                <td class="px-4 w-1/5 py-4">2</td>
                <td class="px-4 w-1/5 py-4">Rinso</td>
                <td class="px-4 w-1/5 py-4">5</td>
                <td class="px-4 w-1/5 py-4">Rp 15.500</td>
                <td class="px-4 w-1/5 py-4">
                  <button class="mr-2 py-2 px-2 bg-green-500 border rounded-md text-white">Edit</button>
                  <button class="mr-2 py-2 px-2 bg-red-500 border rounded-md text-white">Hapus</button>
                </td>
              </tr>
              <tr>
                <td class="px-4 w-1/5 py-4">3</td>
                <td class="px-4 w-1/5 py-4">Bluband</td>
                <td class="px-4 w-1/5 py-4">-2</td>
                <td class="px-4 w-1/5 py-4">Rp 36.500</td>
                <td class="px-4 w-1/5 py-4">
                  <button class="mr-2 py-2 px-2 bg-green-500 border rounded-md text-white">Edit</button>
                  <button class="mr-2 py-2 px-2 bg-red-500 border rounded-md text-white">Hapus</button>
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
import ProductUser from "@/components/Modal/ProductUser.vue";

export default {
  name: "User",
  components: {
    SideBar,
    ProductUser,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>