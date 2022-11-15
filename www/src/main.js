import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFaceAngry } from "@fortawesome/free-regular-svg-icons";

library.add(faFaceAngry);

//import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle'

import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
