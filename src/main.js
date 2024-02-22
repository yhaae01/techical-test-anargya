import { createApp } from "vue";
import "./style.css";
import "../src/assets/css/index.css";
import App from "./App.vue";
import { Icon } from "@iconify/vue";

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "./pages/Dashboard.vue";
import Overview from "./pages/Overview.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/overview", component: Overview },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Gunakan router yang telah dibuat saat membuat aplikasi
const app = createApp(App);
app.use(router);
app.component("Icon", Icon);
app.mount("#app");
