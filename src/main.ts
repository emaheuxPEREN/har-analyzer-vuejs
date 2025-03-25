import 'bootstrap/dist/css/bootstrap.css';
import "primeicons/primeicons.css";
import {createApp} from 'vue';
import App from '@/App.vue';
import AppState from './plugins/appState.js';
import Utils from './plugins/utils.js';
import PrimeVue from 'primevue/config';
import aura from '@primevue/themes/aura';

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