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
        <div class="form-group">
          <label> Username</label>
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label> Email</label>
          <input type="text" class="form-control" v-model="user.email">
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr>
        <hr>
        <button class="btn btn-primary" @click="fetchData">Get Data</button>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">
            {{u.username}} - {{u.email}}
          </li>
        </ul>
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
        msg: 'Welcome to Your Vue.js App',
        user:{
          username:'',
          email:'',
        },
        users:[],
      }
    },
    components:{
      appBlue: Blue,
      appGreen: Green,
      appRed: Red,
    },
    methods: {
      submit() {
        this.$http.post('', this.user)
            .then(response => {
              console.log(response);
            }, error => {
              console.log(error);
            });
      },
      fetchData() {
        this.$http.get('')
            .then(response => {
              return response.json();

            })
            .then(data => {
              const resultArray = [];
              for (let key in data) {
                resultArray.push(data[key]);
              }
              this.users = resultArray;
            });
      }
    }
  }
</script>

<style>

</style>
