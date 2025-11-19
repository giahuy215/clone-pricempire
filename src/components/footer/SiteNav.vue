<template>
  <div class="flex flex-col">
    <h2 class="mb-4 text-lg font-bold text-theme-100">
      {{ navName }}
    </h2>
    <ul class="space-y-2" role="list">
      <template v-for="site in listNav">
        <li>
          <a
            :to="site.link"
            :href="site.link"
            class="flex items-center text-theme-400 transition-colors
              hover:text-theme-100 focus:outline-none gap-2"
          >
            <Icon
              :icon="site.icon"
              class="size-5"
              :class="addClassStyle(site.icon)"
            />
            <span>{{ site.name }}</span>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { computed } from "vue";

const props = defineProps(["listNav", "navName"]);

const listNav = computed(() => props.listNav);
const navName = computed(() => props.navName);

const addClassStyle = (icon: string) => {
  if (icon == "heroicons:signal") {
    return "text-green-500 animate-pulse";
  }

  return "";
};
</script>

<style scoped></style>
