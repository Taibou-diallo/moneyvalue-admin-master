import { createApp } from 'vue'

// import Vue from 'vue'

import App from './App.vue'


import routers from './routers'

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(IconsPlugin)


// import './assets/app.scss'

// Vue.use(BootstrapVue)

createApp(App)
    .use(routers)
    .mount('#app')
