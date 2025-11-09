<template>
  <div class="mt-24 flex flex-col gap-12 mx-auto max-w-4xl">
    <!-- Why use our market -->
    <div class="rounded-2xl bg-theme-800 p-8">
      <h2 class="mt-15 mb-6 text-3xl font-bold text-theme-100">
        Why Use Our CS2 Market Trending Page?
      </h2>
      <div class="space-y-6 text-theme-300">
        <p>
          Our trending page is the ultimate tool for CS2 traders and investors.
          We provide comprehensive market data and analytics to help you make
          informed decisions in the dynamic CS2 economy.
        </p>
        <p>
          With real-time data feeds from major platforms including Buff, Steam
          Market, and others, you get:
        </p>
        <ul class="list-inside list-disc space-y-2 *:pl-8">
          <li>Instant price updates and market movements</li>
          <li>Historical price trends over multiple timeframes</li>
          <li>Market cap comparisons with traditional assets</li>
          <li>Volume and liquidity indicators</li>
          <li>Advanced filtering and sorting capabilities</li>
        </ul>
      </div>
    </div>
    <!-- Advanced Market Analysis Tools -->
    <div class="rounded-2xl bg-theme-800 p-8">
      <h3 class="mt-10 mb-6 text-2xl font-bold text-theme-100">
        Advanced Market Analysis Tools
      </h3>
      <div class="space-y-6 text-theme-300">
        <p>Our platform offers sophisticated tools for market analysis:</p>
        <div class="grid md:grid-cols-2 gap-4">
          <template v-for="item in tools" :key="item.name">
            <div class="rounded-lg bg-theme-700 px-4 pt-10 pb-8.5">
              <h4 class="mb-2 font-semibold text-theme-100">
                {{ item.name }}
              </h4>
              <p class="text-sm">
                {{ item.description }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
    <!-- Trading Insights & Strategies -->
    <div class="rounded-2xl bg-theme-800 p-8">
      <h3 class="mt-10 mb-6 text-2xl font-bold text-theme-100">
        Trading Insights & Strategies
      </h3>
      <div class="space-y-6 text-theme-300">
        <p>Maximize your trading success with data-driven insights:</p>
        <div class="grid md:grid-cols-2 gap-4 pl-8">
          <template v-for="item in insights" :key="item.name">
            <div class="flex items-start gap-3 mt-1 py-2">
              <Icon :icon="item.icon" class="text-amber-400 size-5" />
              <span>{{ item.name }}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
    <!-- Frequently Asked Questions -->
    <div class="rounded-2xl bg-theme-800 p-8">
      <h3 class="mt-10 mb-6 text-2xl font-bold text-theme-100">
        Frequently Asked Questions
      </h3>
      <div class="space-y-6">
        <div class="flex flex-col gap-6">
          <template v-for="item in faq" :key="item.question">
            <div class="rounded-lg bg-theme-700 px-6 py-12">
              <h4 class="mb-2 text-theme-100 font-semibold">
                {{ item.question }}
              </h4>
              <p class="text-theme-300">
                {{ item.answer }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const tools = [
  {
    name: "Price Movement Tracking",
    description:
      "Monitor price changes across different time periods with percentage calculations and trend indicators.",
  },
  {
    name: "Market Cap Analysis",
    description:
      "Compare CS2 market cap with Bitcoin and S&P 500 to understand relative market performance.",
  },
  {
    name: "Volume Indicators",
    description:
      "Track trading volume to identify market momentum and potential price movements.",
  },
  {
    name: "Interactive Charts",
    description:
      "Visualize data with interactive spark charts and detailed price history graphs.",
  },
];

const insights = [
  {
    icon: "heroicons:light-bulb",
    name: "Identify trending items early",
  },
  {
    icon: "heroicons:chart-pie",
    name: "Analyze market cycles and patterns",
  },
  {
    icon: "heroicons:arrow-trending-up",
    name: "Track momentum indicators",
  },
  {
    icon: "heroicons:calculator",
    name: "Calculate potential returns",
  },
];

const faq = [
  {
    question: "What does the CS2 Trending Page track?",
    answer:
      "Our CS2 Trending Page tracks the prices of CS2 skins and items, showing real-time data, including 24h, 7d, and 30d price changes. You can also compare the overall CS2 market cap with the Bitcoin market cap and the S&P 500 on a clear, interactive chart.",
  },
  {
    question: "How often are prices updated?",
    answer:
      "Prices are updated frequently with real-time data feeds from Buff and other platforms. You'll always have the most up-to-date pricing information to make informed decisions.",
  },
  {
    question: "Can I filter and order the data?",
    answer:
      "Yes, you can filter and order the data by different metrics like price change, volume, and market cap. You can also track trends in specific time periods (24h, 7d, 30d) and get a visual representation of these changes through sparkling charts.",
  },
  {
    question: "What makes this different from other tracking tools?",
    answer:
      "Our unique market cap comparison feature allows you to see how the CS2 economy performs relative to traditional assets like Bitcoin and the S&P 500, providing valuable context for investment decisions.",
  },
];
</script>

<style scoped></style>
