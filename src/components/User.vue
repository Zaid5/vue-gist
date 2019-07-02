<template>
  <div>
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
</template>

<script>
export default {
  data () {
    return {
      user:{
        username:'',
        email:'',
      },
      users:[],
    }
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
