import './assets/main.css'
import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart, faInstagram, faFacebookSquare,fab,far,fas);

const app = createApp(App)

app.use(router)

app.mount('#app')
app.component('font-awesome-icon', FontAwesomeIcon);
app.config.productionTip = false;
