import { createMemoryHistory, createRouter } from "vue-router";

import LandingPage from "@/views/LandingPage.vue";

const routes = [
	{
		path: "/",
		name: "home",
		component: LandingPage,
	},
];

export const router = createRouter({
	history: createMemoryHistory(),
	routes,
});
