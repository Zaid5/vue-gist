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
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue';
  import Green from './components/Green';
  import Red from './components/Red';
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      appBlue: Blue,
      appGreen: Green,
      appRed: Red,
    },
    mounted() {
      let gistScript = document.createElement('script')
      gistScript.setAttribute('src', 'https://gist.github.com/username/gist-id.js')
      document.head.appendChild(gistScript)
    },
  }
</script>

<style>

</style>
