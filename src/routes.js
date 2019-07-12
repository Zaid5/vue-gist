import Router from 'vue-router';
import Vue from 'vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import NewGist from './components/NewGist.vue';

Vue.use(Router)

export const routes = [
      {
        path:'',
        component: Login
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/sign-up',
        name: 'signup',
        component: SignUp
      },
      {
        path: '/allgists',
        name: 'newGist',
        component: NewGist,
        meta: {
          requiresAuth: true
        }
      },
    ];

// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser
//   let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (requiresAuth && !currentUser) next('/login')
//   else if (!requiresAuth && currentUser) next('/allgists')
//   else next()
// })
