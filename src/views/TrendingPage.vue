<template>
  <BaseLayout>
    <div class="container mx-auto px-4 py-8">
      <HeroSection />
      <ServiceSection />
      <MarketInsight />
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import HeroSection from "@/components/trending/HeroSection.vue";
import MarketInsight from "@/components/trending/MarketInsight.vue";
import ServiceSection from "@/components/trending/ServiceSection.vue";
import BaseLayout from "@/layouts/BaseLayout.vue";
</script>

<style scoped></style>
