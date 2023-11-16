import Vue from 'vue';
import App from './App.vue';


Vue.config.productionTip = false;

/* eslint-disable no-new */
function execDataObservatoryCatalog (el) {
  if (document.querySelector(el)) {
    const app = new Vue({
      el,
      components: { App },
      template: '<App />'
    });

    return { app };
  }
}

const el = process.env.NODE_ENV === 'development' ? '#app' : '#do-catalog';
execDataObservatoryCatalog(el);

window.createDataObservatoryCatalog = execDataObservatoryCatalog;

