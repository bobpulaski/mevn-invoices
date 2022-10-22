import { createApp } from 'vue'
import App from './App.vue'
import companies from 'components/Companies.vue';

createApp(App).mount('#app');
App.mounted('companies', companies);