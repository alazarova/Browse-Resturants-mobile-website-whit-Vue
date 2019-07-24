import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import { store } from "./store/store.js";
import './assets/style.css';

Vue.use(VeeValidate);
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
