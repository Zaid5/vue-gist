import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from "./routes"

Vue.use(VueRouter);

const router = new VueRouter({
    routes, //router: router
    mode: 'history'
});
Vue.use(VueResource);
// Vue.http.options.root = 'https://vue-gist.firebaseio.com/data.json';
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})