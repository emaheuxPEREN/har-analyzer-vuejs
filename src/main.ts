import 'bootstrap/dist/css/bootstrap.css';
import "primeicons/primeicons.css";
import "./assets/app.scss";
import {createApp} from 'vue';
import AppState from './plugins/appState.js';
import Utils from './plugins/utils.js';
import PrimeVue from 'primevue/config';
import aura from '@primevue/themes/aura';
import App from "./App.vue";
//import Noir from "./presets/Noir.js";

const app = createApp(App);
app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
 });

app.use(AppState);
app.use(Utils);

app.mount('#app');