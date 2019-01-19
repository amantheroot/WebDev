// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
// import App from "./App";

import Users from "./components/Users";
import test from "./components/test";

import vueResource from "vue-resource";
import VueRouter from "vue-router";

Vue.use(vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    {
      path: "/",
      component: Users
    },
    {
      path: "/test",
      component: test
    }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li><router-link to="/">Users</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount("#app");
