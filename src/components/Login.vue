<template>
  <div class="login">
    <div class="card text">
      <div class="card-header">
        <h3>Sign In to View Gists</h3>
      </div>
        <div class="card-body text">
          <div class="form-group">
            <label>Email address</label>
            <input 
              type="text" 
              v-model="email" 
              placeholder="Enter email" 
              class="form-control" 
              required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input 
              type="password" 
              v-model="password"
              placeholder="Password" 
              class="form-control" 
              required>
          </div>
        </div>
        <button v-on:click="login" class="btn btn-primary">Sign In</button>
        <p><router-link to="/sign-up">
          New Here? Create a new account
        </router-link></p>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'login',
    data: function() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login () {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
          this.$router.replace('/allgists')
        }).catch((err) => {
          alert(err.message)
        })
      }
    }
  }
</script>

<style scoped>
.login {
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
  color: black;
  text-decoration: underline;
}

p {
  margin-top: 40px;
  font-size: 13px;
}
h1, h2 {
  font-weight: normal;
}
</style>
