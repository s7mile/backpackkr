import "@babel/polyfill";

import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import "./assets/scss/reset.scss";
import "./assets/scss/layout.scss";

const app = createApp(App);
app.use(router);
app.mount("#app");
