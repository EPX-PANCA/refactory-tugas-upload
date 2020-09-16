<template>
  <div class="mx-auto">
    <div class="w-full max-w-xs mx-auto mt-8">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        @submit.prevent="registerForm"
      >
        <h1 class="text-gray-700 font-bold mt-4 mb-8 text-xl">Register</h1>
        <!-- Username -->
        <div class="mb-4">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="username"
            >Username</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            v-model="username"
          />
        </div>
        <!-- Password -->
        <div class="mb-4">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="password"
            >Password</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            v-model="password"
          />
        </div>
        <!-- Full Name -->
        <div class="mb-4">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="fullname"
            >Full Name</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullname"
            type="text"
            v-model="full_name"
          />
        </div>
        <!-- Phone Number -->
        <div class="mb-4">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="phonenumber"
            >Phone Number</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phonenumber"
            type="text"
            v-model="phone_number"
          />
        </div>
        <!-- Email -->
        <div class="mb-6">
          <label
            class="text-left block text-gray-700 text-base font-bold mb-2"
            for="email"
            >Email</label
          >
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            v-model="email"
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
        <div class="mt-4">
          <router-link to="/login" class="text-blue-500 font-bold"
            >Cancel</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    name: "Register",
    data() {
      return {
        full_name: "",
        username: "",
        password: "",
        email: "",
        phone_number: "",
      };
    },
    methods: {
      registerForm() {
        const payload = {
          full_name: this.full_name,
          username: this.username,
          password: this.password,
          email: this.email,
          phone_number: this.phone_number,
        };
        this.registerAction(payload);
        return false;
      },
      ...mapActions(["registerAction"]),
    },
  };
</script>
