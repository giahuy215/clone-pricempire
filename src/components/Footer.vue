<template>
  <footer class="bg-theme-800 py-12">
    <div class="mx-auto max-w-screen-2xl px-4">
      <!-- Statictics -->
      <div class="mb-12 grid md:grid-cols-4 gap-4 grid-cols-2">
        <template v-for="stat in statistics" :key="stat.name">
          <div class="bg-theme-700 p-4 rounded-lg text-center">
            <div class="text-2xl font-bold text-theme-100">
              {{ stat.value }}
            </div>
            <div class="text-sm text-theme-400">{{ stat.name }}</div>
          </div>
        </template>
      </div>
      <!-- Information and Site maps -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
          gap-8"
      >
        <!-- Information -->
        <Information />

        <!-- Features -->
        <SiteNav :listNav="features" navName="Features" />

        <!-- Offers -->
        <SiteNav :listNav="offers" navName="Offers" />

        <!-- Guides -->
        <SiteNav :listNav="guides" navName="Guides" />

        <!-- Company -->
        <SiteNav :listNav="company" navName="Company" />
      </div>
      <!-- Social Media -->
      <div class="mt-8 border-t border-theme-700 pt-8">
        <p class="mb-4 text-lg font-bold text-theme-100">Social Media</p>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-4"
        >
          <template v-for="item in socialMedia" :key="item.name">
            <a
              :href="item.link"
              :aria-label="item.label"
              target="_blank"
              class="flex items-center gap-3 rounded-lg bg-theme-700 p-4
                transition-all hover:bg-theme-700"
            >
              <Icon :icon="item.icon" class="size-6 text-theme-100" />
              <div>
                <p class="font-medium text-theme-100">{{ item.name }}</p>
                <p class="text-sm text-theme-400">
                  {{ item.description }}
                </p>
              </div>
            </a>
          </template>
        </div>
      </div>
      <!-- Copyright -->
      <div class="mt-12 border-t border-theme-700 pt-8">
        <div
          class="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <p class="text-sm text-theme-400">
            <span class="sr-only">Copyright notice:</span> © 2025
            Pricempire.com - All rights reserved
          </p>
          <div
            class="order-last flex items-center gap-2 text-sm text-theme-400
              hover:text-theme-100 md:order-0"
          >
            <span class="text-lg text-theme-500">Clone by HuyNDG</span>
          </div>
          <nav aria-label="Legal links">
            <div class="flex flex-wrap items-center gap-4">
              <a
                href="/privacy"
                class="text-sm text-theme-400 hover:text-theme-100"
                aria-label="View our privacy policy"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                class="text-sm text-theme-400 hover:text-theme-100"
                aria-label="View our terms of service"
              >
                Terms of Service
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { company, features, guides, offers } from "@/data/sites";
import SiteNav from "./footer/SiteNav.vue";
import { socialMedia } from "@/data/social-media";
import Information from "./footer/Information.vue";

// ========== Statictics ==========

const statistics = [
  {
    name: "Marketplaces",
    value: "40+",
  },
  {
    name: "Items Tracked",
    value: "24K+",
  },
  {
    name: "Active Users",
    value: "100K+",
  },
  {
    name: "Daily Updates",
    value: "10M+",
  },
];
</script>

<style scoped></style>
