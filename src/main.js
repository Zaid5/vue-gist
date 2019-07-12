import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from "./routes"
import * as firebase from 'firebase'


Vue.use(VueRouter);
Vue.use(firebase);


Vue.config.productionTip = false


const router = new VueRouter({
    routes, //router: router
    mode: 'history'
});

Vue.use(VueResource);
// Vue.http.options.root = 'https://vue-gist.firebaseio.com/data.json';
new Vue({
    el: '#app',
    router,
    render: h => h(App),
    created() {
      firebase.initializeApp({
        apiKey: 'AIzaSyAZ49TkEWbxwo7K7bI99kBsPpWklyp-cdI',
        authDomain: 'vue-gist.firebaseapp.com',
        databaseURL: 'https://vue-gist.firebaseio.com',
        projectId: 'vue-gist',
        storageBucket: 'vue-gist.appspot.com',
        messagingSenderId: '943547530323',
        appId: '1:943547530323:web:93fc78af4170fa83'
      })
    },
})