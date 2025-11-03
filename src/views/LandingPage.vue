<template>
  <div class="mt-28 px-10">
    <Navbar></Navbar>
    <!-- Heroes -->
    <div
      class="rounded-2xl shadow-xl bg-linear-to-br from-theme-900 to-theme-800
        overflow-hidden p-8"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 opacity-5">
        <div
          class="bg-grid-slate-700/[0.05] absolute inset-0
            mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
        ></div>
      </div>
      <div
        class="flex lg:flex-row flex-col-reverse gap-8 items-center
          lg:justify-between"
      >
        <div class="flex flex-col lg:items-start items-center">
          <!-- Title -->
          <h1
            class="text-4xl font-bold tracking-tight text-theme-100 md:text-5xl
              lg:leading-tight mb-6"
          >
            Track the CS2 Market - Price Trends, Market Cap & More
          </h1>
          <!-- Description -->
          <p class="mb-8 max-w-2xl text-lg text-theme-300">
            Explore the CS2 market trends! Track item prices, market cap
            comparisons, and changes over 24h, 7d, and 30d. Stay informed with
            our sparkling charts and in-depth analysis.
          </p>
          <div class="flex flex-wrap gap-4">
            <!-- Open Trending -->
            <a
              to="https://app.pricempire.com/trending"
              href="https://app.pricempire.com/trending"
            >
              <button
                class="group relative inline-flex items-center justify-center
                  overflow-hidden rounded-lg bg-sky-500 px-8 py-3 font-medium
                  text-theme-100 transition duration-300 hover:bg-sky-600"
              >
                <span class="mr-2">
                  <Icon icon="tabler:brand-google-analytics" class="size-6" />
                </span>
                Open Trending Page
              </button>
            </a>
            <!-- Learn More -->
            <a to="#market-insights" href="#market-insights">
              <button
                class="inline-flex items-center justify-center rounded-lg border
                  border-theme-700 bg-theme-800 px-8 py-3 font-medium
                  text-theme-100 transition duration-300 hover:bg-theme-700"
              >
                <Icon
                  icon="material-symbols:info-outline-rounded"
                  class="size-6 mr-2"
                />
                <span>Learn More</span>
              </button>
            </a>
          </div>
          <!-- Badges -->
          <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <template v-for="badge in heroesBadge" :key="badge.title">
              <BadgesHeroes
                :title="badge.title"
                :description="badge.description"
                :icon="badge.icon"
              />
            </template>
          </div>
        </div>
        <div class="relative w-full max-w-lg lg:w-1/2">
          <img
            class="object-contain object-center rounded-xl shadow-2xl"
            src="@/assets/images/awp-medusa.png"
            alt="awp-medusa"
            loading="lazy"
          />
          <!-- Top Gainer -->
          <div
            class="absolute -right-4 -top-4 rounded-lg bg-green-500/10 p-4
              backdrop-blur-sm"
          >
            <div class="text-sm font-medium text-green-400">Top Gainer</div>
            <div class="text-2xl font-bold text-theme-100">+12.2%</div>
          </div>
          <!-- Market Cap -->
          <div
            class="absolute -bottom-4 -left-4 rounded-lg bg-red-500/10 p-4
              backdrop-blur-sm"
          >
            <div class="text-sm font-medium text-red-400">Market Cap</div>
            <div class="text-2xl font-bold text-theme-100">$60M</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Services -->
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
    <!-- Market Insights -->
  </div>
</template>

<script setup lang="ts">
import BadgesHeroes from "@/components/BadgesHeroes.vue";
import CardService from "@/components/CardService.vue";
import Navbar from "@/components/Navbar.vue";
import { services } from "@/data/services";
import { heroesBadge } from "@/data/badges";
import { Icon } from "@iconify/vue";
</script>

<style scoped></style>
