import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueCryptojs from "vue-cryptojs";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
//import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faAddressBook,
  faTrashAlt,
  faEdit,
} from "@fortawesome/free-regular-svg-icons";

library.add(faAddressBook, faTrashAlt, faEdit);

import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle'

import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

createApp(App)
  .use(router)
  .use(VueCryptojs)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
