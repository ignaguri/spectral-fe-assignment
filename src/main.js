import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

createApp(App).use(store).mount("#app");
