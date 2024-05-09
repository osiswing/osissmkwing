<script setup lang="ts">
  import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <div id="app">
    <SpeedInsights />
    <router-view/>
  </div>
</template>
