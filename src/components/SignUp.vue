<template>
  <div class="sign-up">
    <div class="card">
      <div class="card-header">
        <h3>Create a new account</h3>
      </div>
        <div class="card-body" align='center'>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" 
                  v-model="email"
                  class="form-control" 
                  id="exampleInputEmail1" 
                  aria-describedby="emailHelp" 
                  placeholder="Enter email"
                  required>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" 
                  v-model="password"
                  class="form-control" 
                  id="exampleInputPassword1" 
                  placeholder="Password"
                  required>
          </div>
        </div>
      <button v-on:click="signUp" class="btn btn-primary">Sign Up!</button>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'signup',
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      signUp () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/login')
        }).catch((err) => {
          alert(err.message)
        });
      },
    }
  }
</script>

<style scoped>
.sign-up {
  margin-top: 40px;
}
input {
  align-self: center;
  margin: 10px 0;
  width: auto;
  padding: 15px;
}
button {
  margin: 10px 0;
}
a {
  color: #2c3e50;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
h3 {
  font-weight: normal;
}
</style>