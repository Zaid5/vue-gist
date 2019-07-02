<template>
  <div>
    <div class="form-group">
    <button class="btn btn-primary" @click="fetchGist">Get Gist</button>
    <br><br>
    <p>{{gist}}</p>
    </div>
  </div> 
</template>

<script>
export default {
  data(){
    return{
      gist:'',
    }
  },
  created(){
    this.fetchGist();
  },
  methods: {
    fetchGist() {
      this.$http.get('https://api.github.com/gists')
          .then(response => {
            this.gist = response.data[0]
            return response.json();
          })
    }
  }    
}
</script>

<style>

</style>
