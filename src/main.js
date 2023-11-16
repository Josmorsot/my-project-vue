import Vue from 'vue';
import App from './App.vue';


Vue.config.productionTip = false;


// new Vue({
//   render: h => h(App),
// }).$mount('#app')

/* eslint-disable no-new */
function execDataObservatoryCatalog (el) {
  if (document.querySelector(el)) {
    const app = new Vue({
      render: h => h(App),
    })
    app.$mount(el);

    return { app };
  }
}

const el = process.env.NODE_ENV === 'development' ? '#app' : '#do-catalog';
execDataObservatoryCatalog(el);

window.createDataObservatoryCatalog = execDataObservatoryCatalog;

