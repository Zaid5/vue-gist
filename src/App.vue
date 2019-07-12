<template>
  <div class="container">
    <div class="row">
      <img src="./assets/logo.png" height="50">
      <h1 align="center">{{ msg }}</h1>
      <hr>
      <div class='pull-right'>
        <button class='btn btn-info' @click="logout">Logout</button>
        <button class='btn btn-info' @click="logout">Login</button>
      </div>
      <div class="col-xs-12" align='center'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue';
  import Green from './components/Green';
  import Red from './components/Red';
  import User from './components/User';
  import Gist from './components/Gist';
  import NewGist from './components/NewGist';
  import Login from './components/Login';
  import SignUp from './components/SignUp';
  import firebase from 'firebase';

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    },
    components:{
      appBlue: Blue,
      appGreen: Green,
      appRed: Red,
      appUser: User,
      appGist: Gist,
      appNewGist: NewGist,
      appLogin: Login,
      appSignUp: SignUp,
    },
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('/login')
        })
      },
    }
  }
</script>

<style>

</style>
