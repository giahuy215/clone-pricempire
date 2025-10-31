<template>
  <header
    class="fixed left-0 right-0 top-0 h-16 border-b border-theme-500
      backdrop-blur-md text-white shadow-lg z-50 flex items-center
      justify-between px-10"
  >
    <div
      class="absolute bg-linear-to-b from-white/5 to-transparent
        pointer-events-none"
    ></div>

    <NavigationMenu class="max-w-7xl w-full flex justify-start">
      <!-- Left Navigation -->
      <NavigationMenuList>
        <!-- Logo -->
        <NavigationMenuItem class="mr-3 xl:block hidden">
          <NavigationMenuLink href="/home">
            <img src="@/assets/images/logo_white.avif" alt="logo-white" />
          </NavigationMenuLink>
        </NavigationMenuItem>
        <!-- Apps and Trending -->
        <template v-for="nav in navigations">
          <NavigationMenuItem>
            <NavigationMenuTrigger>{{ nav.name }}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul class="grid w-max text-nowrap grid-cols-1">
                <template v-for="app in nav.apps" :key="app.title">
                  <li>
                    <NavigationMenuLink as-child>
                      <a
                        :href="app.href"
                        class="select-none space-y-1 rounded-md p-3 leading-none
                          no-underline outline-none transition-colors
                          hover:bg-theme-600 focus:bg-theme-600 flex flex-row
                          items-center gap-2"
                      >
                        <div class="shrink-0">
                          <Icon :icon="app.icon" class="size-6"></Icon>
                        </div>
                        <div class="flex flex-col gap-1">
                          <div class="text-sm leading-none">
                            {{ app.title }}
                          </div>
                          <p
                            class="line-clamp-2 text-xs leading-snug
                              text-theme-400"
                          >
                            {{ app.description }}
                          </p>
                        </div>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </template>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </template>
        <!-- Weapons -->
        <NavigationMenuItem>
          <NavigationMenuTrigger>Weapons</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink as-child>
              <span>Weapons</span>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <!-- Other Navigations -->
      </NavigationMenuList>
    </NavigationMenu>

    <!-- Right Navigation -->
    <NavigationMenu>
      <NavigationMenuList class="flex flex-row gap-4">
        <!-- Search Button -->
        <NavigationMenuItem>
          <NavigationMenuLink href="/search" class="flex">
            <Button
              variant="ghost"
              class="hover:bg-theme-800/90 hover:text-white overflow-hidden
                px-4"
            >
              <Icon
                icon="tabler:search"
                class="size-4 group-hover:scale-110 transition-all duration-300"
              ></Icon>
              <span class="lg:block hidden font-bold">Search</span>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <!-- Login Button -->
        <NavigationMenuItem class="flex">
          <NavigationMenuLink href="/search">
            <Button class="px-4 bg-sky-600 hover:bg-sky-500">
              <span class="lg:block hidden font-bold">Login</span>
              <Icon icon="mdi:account" class="size-5"></Icon>
            </Button>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
</template>

<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Icon } from "@iconify/vue";
import Button from "./ui/button/Button.vue";

const navigations = [
  {
    name: "Apps",
    apps: [
      {
        title: "Browse Skins",
        description: "Search for CS2 skins",
        icon: "tabler:search",
        href: "#",
      },
      {
        title: "Price Comparison",
        description: "Compare prices of CS2 skins",
        icon: "tabler:brand-google-analytics",
        href: "#",
      },
      {
        title: "Portfolio Tracker",
        description: "Track your CS2 skin portfolio",
        icon: "mdi:database",
        href: "#",
      },
    ],
  },
  {
    name: "Trending",
    apps: [
      {
        title: "Old Trending",
        description: "View old trending page",
        icon: "mdi:trending-up",
        href: "#",
      },
      {
        title: "Trending",
        description: "View trending CS2 skins",
        icon: "tabler:box",
        href: "#",
      },
      {
        title: "All Containers",
        description: "Weapon cases, souvenir pakages and market trends",
        icon: "mdi-light:magnify",
        href: "#",
      },
    ],
  },
];
</script>

<style scoped></style>
