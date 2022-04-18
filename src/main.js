import "./registerServiceWorker";

import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");

// Занятно, как это работает.? о.о
// Теперь могу хуячить bootstrap классы в проекте
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap"; // Это, очевидно, JS от бутстрапа
import "./style/bootstrap.scss";
//import "bootstrap/scss/bootstrap.scss";
