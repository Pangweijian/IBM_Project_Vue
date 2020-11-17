import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//导入全局样式表
import "./assets/css/global.css"

import './plugins/element.js'

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
