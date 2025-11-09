<template>
  <div class="mt-24 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-8">
    <template v-for="ser in services" :key="ser.color">
      <CardService
        :color="ser.color"
        :icon="ser.icon"
        :service="ser.service"
        :description="ser.description"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { services } from "@/data/services";
import CardService from "@/components/CardService.vue";
</script>

<style scoped></style>
