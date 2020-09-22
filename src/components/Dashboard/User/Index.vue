<template>
    <div class="w-full flex">
        <side-bar/>
        <div class="main-content w-4/5 h-screen">
            <div class="main mx-auto my-auto bg-white mt-12">
                <div class="w-4/5 mx-auto pt-8">
                    <product-user/>
                </div>
                <div class="mx-auto">

                    <table class="table-auto mt-20 bg-white w-full border-4 border-gray-200">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="px-4 w-1/5 py-4">ID</th>
                                <th class="px-4 w-1/5 py-4">Name</th>
                                <th class="px-4 w-1/5 py-4">Role</th>
                                <th class="px-4 w-1/5 py-4">Phone Number</th>

                                <th class="px-4 w-1/5 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody v-for="(user, idx) in users" :key="idx">
                            <tr>
                                <td class="px-4 w-1/5 py-4">{{ user.id }}</td>
                                <td class="px-4 w-1/5 py-4">{{ user.full_name }}</td>
                                <td class="px-4 w-1/5 py-4">{{ user.role }}</td>
                                <th class="px-4 w-1/5 py-4">{{ user.phone_number }}</th>
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
import ProductUser from "@/components/Modal/ProductUser.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "User",
  components: {
    SideBar,
    ProductUser,
  },
  data() {
      return {};
    },
    methods: {
      ...mapActions(["getUser"]),
    },
    computed: {
      ...mapState(["users"]),
    },
    created() {
      this.getUser();
    },
};
</script>