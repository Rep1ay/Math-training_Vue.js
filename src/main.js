// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import AppMessage from './components/Message.vue'
import AppQuestion from './components/Question.vue'
import AppStartScreen from './components/StartScreen.vue'
import AppResultScreen from './components/ResultScreen.vue'

Vue.component("AppMessage", AppMessage)
Vue.component("AppQuestion", AppQuestion)
Vue.component("AppStartScreen", AppStartScreen)
Vue.component("AppResultScreen", AppResultScreen )



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
