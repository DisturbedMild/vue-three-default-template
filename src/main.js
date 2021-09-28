import { createApp } from "vue";
import App from "./App.vue";
import { createStorages } from "vuex";

const storage = createStorages({
 state() {
  return {};
 },
});

app.use(storage);

const app = createApp(App);

app.mount("#app");
