import "./assets/style.scss";
import "primeicons/primeicons.css";
import {createApp} from 'vue';
import App from '@/App.vue';
import AppState from './plugins/appState.js';
import Utils from './plugins/utils.js';
import ThemeSwitcher from '@/components/ThemeSwitcher.vue';
import PrimeVue from 'primevue/config';
import Noir from "./presets/Noir.js";

const app = createApp(App);
app.use(PrimeVue, {
    ripple: true,
    theme: {
        preset: Noir,
        options: {
            prefix: 'p',
            darkModeSelector: '.p-dark',
            cssLayer: false,
        }
    }
 });

app.use(AppState);
app.use(Utils);

app.component('ThemeSwitcher', ThemeSwitcher);

app.mount('#app');