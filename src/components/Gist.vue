<template>
  <div>
    <div class="form-group">
    <!-- <button class="btn btn-primary" @click="fetchGist">Get Gist</button> -->
    <br><br>
    <!-- <p>{{gist}}</p> -->
    <div>
      <!-- {{gistArray}} -->
      <ul class="list-group">
      <li class="list-group-item" v-for="g in gistArray">
        <p>{{g.url}}</p> 
        {{g.owner}}
      </li>
    </ul>
    </div>
    </div>
  </div> 
</template>

<script>
export default {
  data(){
    return{
      gist:'',
      gistArray:[]
    }
  },
  created(){
    this.fetchGist();
  },
  methods: {
    fetchGist() {
      this.$http.get('https://api.github.com/gists')
          .then(response => {
            // this.gist = response.data[0]
            return response.json();
          })
          .then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.gistArray = resultArray;
          });
    }
  }    
}
</script>

<style>

</style>
