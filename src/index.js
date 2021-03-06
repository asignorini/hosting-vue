import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './services/firebase.js';
import {createApp} from "vue";
import router from "./router/index.js";
import App from './App.vue';

createApp(App)
    .use(router)
    .mount('#app');