<template>
  <div class="flex flex-col gap-6">
    <img
      src="@/assets/images/logo_white.avif"
      alt="logo pricempire"
      class="h-8 w-[260px]"
    />
    <p class="text-sm text-theme-400">
      Pricempire.com is your premier destination for CS2 price comparison and
      market analytics. Find the best deals across 40+ marketplaces and track
      real-time market trends.
    </p>
    <div class="flex flex-col gap-4 font-bold">
      <div class="flex items-center gap-2">
        <Icon icon="heroicons:shield-check" class="size-5 text-green-500" />
        <span class="text-sm text-theme-400">
          Trusted by more than 1,000,000 users
        </span>
      </div>
      <a
        href="https://www.trustpilot.com/review/pricempire.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
        class="flex items-center gap-2 text-sm text-theme-400 transition-colors
          hover:text-theme-100"
      >
        <Icon icon="ic:baseline-star" class="size-5 text-green-500" />
        <span data-v-ef58e0eb="">Review us on Trustpilot</span>
      </a>
    </div>
    <!-- Help and Support -->
    <div class="rounded-lg bg-theme-700 p-6">
      <p class="mb-2 text-lg font-bold text-theme-100">Need Help?</p>
      <p class="mb-4 text-sm text-theme-400">
        Our support team is available 24/7 to assist you with any questions
      </p>
      <div class="flex flex-col gap-3">
        <a
          href="/contact"
          class="flex items-center gap-2 text-sm text-theme-400
            hover:text-theme-100"
        >
          <Icon icon="bx:envelope" class="size-5" />
          <span>support@pricempire.com</span>
        </a>
        <a
          href="https://discord.gg/pricempire"
          class="flex items-center gap-2 text-sm text-theme-400
            hover:text-theme-100"
        >
          <Icon icon="akar-icons:discord-fill" class="size-5" />
          <span>Join Discord Community</span>
        </a>
      </div>
      <!-- Currency -->
      <div class="flex flex-col mt-8 w-full">
        <Combobox v-model="currency" by="name">
          <ComboboxAnchor as-child>
            <ComboboxTrigger as-child>
              <Button
                variant="outline"
                class="w-full bg-theme-700 hover:bg-theme-700 border
                  border-theme-400 hover:border-theme-100 justify-between"
              >
                <div v-if="currency" class="flex flex-row items-center gap-2">
                  <span class="text-theme-300">
                    {{ currency.symbolNative }}
                  </span>
                  <span class="text-theme-100">
                    {{ currency.demonym || currency.name }}
                    ({{ currency.symbolNative }})
                  </span>
                </div>
                <div v-else>
                  <span class="text-theme-300">Select currency...</span>
                </div>
                <ChevronsUpDown
                  class="ml-2 h-4 w-4 shrink-0 opacity-50 text-theme-300"
                />
              </Button>
            </ComboboxTrigger>
          </ComboboxAnchor>

          <ComboboxList class="w-full">
            <div class="relative w-full items-center">
              <ComboboxInput
                class="pl-2 focus-visible:ring-0 border-0 border-b rounded-none
                  h-10 placeholder:text-theme-400 text-theme-400"
                placeholder="Select currency..."
              />
              <span
                class="absolute start-0 inset-y-0 flex items-center
                  justify-center px-3"
              >
                <Search class="size-4 text-theme-400" />
              </span>
            </div>

            <ComboboxEmpty>No currency found.</ComboboxEmpty>

            <ComboboxGroup class="max-h-60 overflow-y-scroll scrollbar-thin">
              <ComboboxItem
                class="data-[highlighted]:bg-theme-600"
                v-for="cur in currencies"
                :key="cur.name"
                :value="cur"
              >
                <div class="flex flex-row items-center gap-2">
                  <span class="text-theme-300">
                    {{ cur.symbolNative }}
                  </span>
                  <span class="text-theme-100">
                    {{ cur.demonym || cur.name }} ({{ cur.symbolNative }})
                  </span>
                </div>

                <ComboboxItemIndicator>
                  <Check :class="cn('ml-auto h-4 w-4 text-theme-500')" />
                </ComboboxItemIndicator>
              </ComboboxItem>
            </ComboboxGroup>
          </ComboboxList>
        </Combobox>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "@/lib/utils";
import type CurrencyModel from "@/models/CurrencyModel";
import {
  Combobox,
  ComboboxAnchor,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxList,
  ComboboxTrigger,
} from "@/components/ui/combobox";
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown, Search } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import getCurrencies from "@/api/currencies";

// ========== Currencies ==========

const currencies = ref<CurrencyModel[] | null>(null);
const currency = ref();

const getDataCurrencies = async () => {
  try {
    const res = await getCurrencies();
    currencies.value = res;
  } catch (error) {
    console.log(error);
  }
};

// ========== Hook ==========

onMounted(async () => {
  getDataCurrencies();
  currency.value = currencies.value?.[0] ?? null;
});
</script>

<style scoped></style>
