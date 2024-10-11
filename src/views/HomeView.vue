<template>
  <NavigationBar />
  <div class="pt-16">
    <div class="backg">
      <div class="py-16 lg:py-64 text-white px-4 bg-prim">
        <h1 class="font-bold text-[8vw]">OSIS WIN-G</h1>
        <h2 class="text-[2.8vw] font-bold">The Place of Collaboration</h2>
        <p class="text-[2.8vw] font-bold">Selamat datang di Website resmi <br> OSIS SMK Wira Informatika Global</p>
        <p class="text-[#3F4A72] text-[9px] bg-white inline-block px-2 py-1 font-bold rounded-md lg:text-3xl">Periode 2023/2024</p>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<script>
import NavigationBar from "../components/NavigationBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
  name: "HomeView",
  components: {
    NavigationBar,
    FooterBar
  },
};
</script>

<!-- OSIS WING ACTIFITY -->
