<template>
  <div>
    <button
      class="float-left text-base rounded-md border-2 border-blue-500 text-blue-500 py-2 px-4"
      type="button"
      style="transition: all .15s ease"
      v-on:click="toggleModal()"
    >Add Product</button>

    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <!-- a -->
      <div class="mx-auto">
        <div class="w-full max-w-xs mx-auto mt-8">
          <h4 v-if="postLoading">Loading ....</h4>
          <h5>{{message}}</h5>
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit="kirimData">
            <h1 class="text-gray-700 font-bold mt-4 mb-8 text-xl">Add Product</h1>

            <!-- Product Name -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="productname"
              >Product Name</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="productname"
                type="text"
                v-model="data.productname"
              />
            </div>

            <!-- Stock -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="stock"
              >Stock</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="stock"
                type="text"
                v-model="data.productstock"
              />
            </div>

            <!-- Price -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="price"
              >Price</label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                v-model="data.productprice"
                type="text"
              />
            </div>

            <!-- Photo -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="username"
              >Photo</label>
              <input type="file" @change="previewFiles" />
              <!-- <button
                class="bg-white border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >+</button>-->
            </div>

            <div class="flex items-center justify-between">
              <!-- <router-link to="/dashboard" class="w-full"> -->
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                @click="kirimData"
              >Add</button>
              <!-- </router-link> -->
            </div>
            <div class="mt-4">
              <button
                class="text-blue-500 text-center font-bold"
                style="transition: all .15s ease"
                v-on:click="toggleModal()"
              >Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <!-- b -->
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "ProductAll",
  components: {},
  data() {
    return {
      showModal: false,
      data: {
        productname: "",
        productprice: 0,
        productstock: 0,
        productFoto: null,
      },
    };
  },
  computed: {
    ...mapState(["postLoading"]),
    message() {
      // if (this.$store.state.productMessage !== "") {
      //   setTimeout(() => {
      //     this.toggleModal();
      //     this.setData("productMessage", "");
      //   }, 3000);
      // }
      return this.$store.state.productMessage;
    },
  },

  watch: {
    message: function () {
      if (this.$store.state.productMessage !== "") {
        setTimeout(() => {
          this.toggleModal();
          this.getProduct();
          this.setData("productMessage", "");
        }, 3000);
      }
      return this.$store.state.productMessage;
    },
  },

  methods: {
    previewFiles(event) {
      // this.file = this.$refs.file.files[0]
      // console.log({ ref: this.$refs.file });
      this.data.productFoto = event.target.files[0];
      // console.log({ event: event.target.files[0] });
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    kirimData() {
      const form = new FormData();

      form.append("name", this.data.productname);
      form.append("stock", this.data.productstock);
      form.append("price", this.data.productprice);
      form.append("photo", this.data.productFoto);
      // console.log({ form });

      this.addProduct(form);
    },
    ...mapActions(["addProduct", "getProduct"]),
    ...mapMutations(["setData"]),
  },
  created() {
    this.setData("productMessage", "");
  },
};
</script>
