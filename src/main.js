import Vue from 'vue'
import App from './App.vue'
import store from './store'
import modal from './components/modal.vue'
import searchSelect from './components/searchSelect'
import './registerServiceWorker'
Vue.component('modal',modal)
Vue.component('searchSelect',searchSelect)

Vue.config.productionTip = false
Vue.filter('timeConvert', function (t) {
  let h=parseInt(t)
  let hr=(h)%12==0?12:(h)%12
  let min=(t-h)*60  
  return hr+':'+Math.round(min)
})
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
