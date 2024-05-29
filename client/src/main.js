import './assets/index.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from 'primevue/themes/aura';

const app = createApp(App);

app.use(PrimeVue);
app.mount('#app')