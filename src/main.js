import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
import VueWriter from "vue-writer"

app.use(VueWriter)
app.mount('#app');

