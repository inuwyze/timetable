import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
Vue.filter('timeConvert', function (t) {
  
  let h=parseInt(t)
  // let ampm=h>11?'pm':'am'
  let hr=(h)%12==0?12:(h)%12
  let min=(t-h)*60
  
  // console.log(t)
  // console.log(hr)
  // console.log(min)
  // return hr+':'+min+' '+ampm
  return hr+':'+min
})
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
