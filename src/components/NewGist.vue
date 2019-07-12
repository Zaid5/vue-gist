<template>
  <div class="container">
    <p><input type="text" placeholder='Enter keyword' v-model="username">
    <button @click="searchGist">Search Gist</button></p>
    <table class="table table-bordered">
      <caption>List of Gists ({{gistArray.length}})</caption>
      <thead class="thead-dark">
        <tr>
          <th scope="col">Owner Id</th>
          <th scope="col">Username</th>
          <th scope="col">Title</th>
          <th scope="col">Stars</th>
          <th scope="col">Forks</th>
          <th scope="col">Comments</th>
          <th scope="col">Created At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="g in gistArray">
          <th scope="row">{{g.owner.id}}</th>
          <td>{{g.owner.login}}</td>
          <td><a :href="g.html_url">{{g.description}}</a></td>
          <td>{{g.stars}}TBD</td>
          <td>{{g.forks}}TBD</td>
          <td>{{g.comments}}</td>
          <td>{{g.created_at}}</td>
        </tr>
      </tbody>
    </table>
    <!-- <v-paginator :resource_url=resource_url @update="updateResource"></v-paginator> -->
  </div>
</template>

<script>
import VuePaginator from 'vuejs-paginator'
export default {
  name: 'newGist',
  data(){
    return{
      gist:'',
      gistArray:[],
      username:'',
      resource_url: "https://api.github.com/gists/public"
    }
  },
  components: {
        VPaginator: VuePaginator
    },
  created(){
    this.fetchGist();
  },
  methods: {
    fetchGist() {
      this.$http.get('https://api.github.com/gists/public')
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
    },
    searchGist(){
      this.$http.get("'https://api.github.com/users/"+this.username+"/gists'")
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
    },
    updateResource(data){
      this.gistArray = data
    }
  }    
}
</script>

<style>

</style>
