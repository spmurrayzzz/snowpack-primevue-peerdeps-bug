import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';

import Card from 'primevue/card';

const app = createApp( App) ;

app.use( PrimeVue );

app.component( 'Card', Card );

app.mount('#root');
