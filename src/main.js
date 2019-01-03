// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import "@/assets/less/reset.less";
import "@/assets/less/common.less";
import "@/assets/less/prism.less";

// 高亮
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

Vue.directive("highlight", el => {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

import MuseUI from "muse-ui";
import "muse-ui/dist/muse-ui.css"; // 加载样式

Vue.use(MuseUI);

//全局注册
import VueMarkdown from "vue-markdown";
Vue.component("vue-markdown", VueMarkdown);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
