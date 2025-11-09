<template>
  <div class="mt-28 px-10">
    <Header />
    <HeroSection />
    <ServiceSection />
    <MarketInsight />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import HeroSection from "@/components/trending/HeroSection.vue";
import MarketInsight from "@/components/trending/MarketInsight.vue";
import ServiceSection from "@/components/trending/ServiceSection.vue";
</script>

<style scoped></style>
