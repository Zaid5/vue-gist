<template>
  <div class="container">
    <div class="row">
      <img src="./assets/logo.png" height="50">
      <h1 align="center">{{ msg }}</h1>
      <hr>
      <div class="col-xs-12">
        <button class="btn btn-primary">Click for Blue Component</button>
        <button class="btn btn-success">Click for Green Component</button>
        <button class="btn btn-danger">Click for Red Component</button>
        <hr>
        <app-blue></app-blue>
        <app-green></app-green>
        <app-red></app-red>
        <!-- <app-user></app-user> -->
        <!-- <app-gist></app-gist> -->
        <app-new-gist></app-new-gist>
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
      appNewGist: NewGist
    }
  }
</script>

<style>

</style>
