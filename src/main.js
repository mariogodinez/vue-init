// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import App from './App.vue'
import Hello from './components/Hello.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)


let routes = [
	{path: '/app', component: Hello}
]

let router = new VueRouter({
	routes
})

let VueApp = new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: (h) => h(App)
})
