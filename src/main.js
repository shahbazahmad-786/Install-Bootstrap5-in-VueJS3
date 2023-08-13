import { createApp } from "vue";
import App from "./App.vue";

/* Import Bootstrap */
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";

const app = createApp(App);

/* Use Bootstrap */
app.use(bootstrap);
/* Default App Mount */
app.mount("#app");
