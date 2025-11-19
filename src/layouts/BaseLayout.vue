<template>
  <div>
    <Header />
    <div class="h-16" aria-hidden="true"></div>
    <div class="mx-auto flex flex-wrap items-center px-2 py-4 lg:px-6">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<style scoped></style>
