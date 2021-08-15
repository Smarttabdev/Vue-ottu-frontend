import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import './style.scss';
import App from './components/App.vue';
import router from './router';
import store from './store';

import Chartist from 'chartist';

Vue.use(VueMaterial);

Vue.config.productionTip = false;
Vue.prototype.$Chartist = Chartist;

new Vue({
  router,
  store,
  data: {
    Chartist: Chartist
  },
  render: h => h(App)
}).$mount('#app');
