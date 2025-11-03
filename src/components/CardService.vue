<template>
  <div class="rounded-xl bg-theme-800 p-6 shadow-xl overflow-hidden">
    <div class="flex flex-col gap-4">
      <div :class="cn('rounded-lg p-3 w-fit', bgColor)">
        <Icon :icon="icon" :class="cn('size-6', iconColor)" />
      </div>
      <div class="flex flex-col gap-2">
        <div class="text-xl font-semibold text-theme-100">
          {{ service }}
        </div>
        <p class="text-theme-400">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/vue";
import { computed, onMounted, ref } from "vue";

const props = defineProps(["color", "icon", "service", "description"]);

const bgColor = ref("");
const iconColor = ref("");

const color = computed(() => props.color);
const icon = computed(() => props.icon);
const service = computed(() => props.service);
const description = computed(() => props.description);

onMounted(() => {
  switch (color.value) {
    case "sky":
      bgColor.value = "bg-sky-500/10";
      iconColor.value = "text-sky-400";
      break;
    case "purple":
      bgColor.value = "bg-purple-500/10";
      iconColor.value = "text-purple-400";
      break;
    case "emerald":
      bgColor.value = "bg-emerald-500/10";
      iconColor.value = "text-emerald-400";
      break;
    case "amber":
      bgColor.value = "bg-amber-500/10";
      iconColor.value = "text-amber-400";
      break;
    case "rose":
      bgColor.value = "bg-rose-500/10";
      iconColor.value = "text-rose-400";
      break;
    default:
      bgColor.value = "bg-lime-500/10";
      iconColor.value = "text-lime-400";
      break;
  }
});
</script>

<style scoped></style>
