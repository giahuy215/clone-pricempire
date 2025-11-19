<template>
  <div
    class="flex items-center gap-4 rounded-lg bg-theme-800 p-4 backdrop-blur-sm"
  >
    <div class="rounded-lg bg-sky-500/10 p-3">
      <Icon :icon="icon" class="size-6 text-sky-400" />
    </div>
    <div>
      <div class="text-2xl font-bold text-theme-100">{{ title }}</div>
      <div class="text-sm text-theme-400">{{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const props = defineProps(["title", "description", "icon"]);
const title = computed(() => props.title);
const description = computed(() => props.description);
const icon = computed(() => props.icon);
</script>

<style scoped></style>
