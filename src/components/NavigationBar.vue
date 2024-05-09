<template>
  <div>
    <input type="checkbox" id="menu" class="hidden nav-input">

    <header
      class="bg-white flex items-center justify-between h-[70px] px-4 fixed w-[100%] shadow-[0px 0px 20px rgba(0, 0, 0, 0.01)] z-[100]"
    >
      <div class="flex items-center gap-4">
        <img src="../assets/osis-wing.png" alt="" class="w-12" />
        <div class="text-[#3F4A72]">
          <h1 class="font-bold text-xs">OSIS SMK WIN-G</h1>
          <p class="font-bold text-[9px]">The Place of Collaboration</p>
        </div>
      </div>

      <label for="menu" class="nav-label">
        <div></div>
        <div></div>
        <div></div>
      </label>

      <nav class="flex gap-12 font-semibold navigation">
        <router-link class="nav-menu" to="/">Home</router-link>
        <router-link class="nav-menu" to="/sekbid">Sekbid</router-link>
        <router-link class="nav-menu" to="/gallery">Gallery</router-link>
        <router-link class="nav-menu" to="/about">About</router-link>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>
