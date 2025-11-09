import { createMemoryHistory, createRouter } from "vue-router";

import TrendingPage from "@/views/TrendingPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/trending",
  },
  {
    path: "/trending",
    name: "trending",
    component: TrendingPage,
  },
];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
