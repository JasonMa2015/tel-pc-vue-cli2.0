import 'babel-polyfill';
import Vue from 'vue';
import iView from 'iview';
import App from './App';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';
import './theme/index.less';

Vue.use(iView);

Vue.config.productionTip = false;

/* eslint-disable no-new */
window.hz = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
