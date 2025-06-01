/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

//Axios né pae
import axios from './plugins/axios';


const app = createApp(App)

app.config.globalProperties.$axios = axios;

registerPlugins(app)

app.mount('#app')
