import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyload from 'vue-lazyload';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueLazyload, {
  preLoad: 1.3,
  error: 'path/to/error.png',
  loading: 'path/to/loading.gif',
  attempt: 1
});

app.mount('#app')

app.config.errorHandler = (err) => {
  alert('Something Went Wrong')
}
  