<template>
  <div class="bg-gray-200">
    <NavBar/>
    <Index />
    <Footer/>
  </div>
</template>

<script>
import Index from "@/components/Register/Index";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default {
  name: "Register",
  components: {
    Index,
    NavBar,
    Footer
  },
};
</script>
