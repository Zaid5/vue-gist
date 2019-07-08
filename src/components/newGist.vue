<template>
  <div>
    <div class="form-group">
      <!-- <button class="btn btn-primary" @click="fetchGist">Get Gist</button> -->
      <!-- <p>{{gist}}</p> -->
      <div class='col-md-4'>
        <!-- {{gistArray}} -->
        <ul class="list-group">
          <p>Username / Title </p>
        <li class="list-group-item" v-for="g in gistArray">
          <!-- <p>{{g.url}}</p> -->
          <p>{{g.owner.login}} / {{g.description}}</p>
        </li>
      </ul>
      </div>
    </div>

    <div class="form-group">
      <!-- <p>{{gist}}</p> -->
      <div class='col-md-4'>
        <!-- {{gistArray}} -->
        <ul class="list-group">
          <p>Stars / Forks / Comments </p>
        <li class="list-group-item" v-for="g in gistArray">
          <!-- <p>{{g.url}}</p> -->
          <p>{{g.stars}} / {{g.forks}} / {{g.comments}}</p>
        </li>
      </ul>
      </div>
    </div>

    <div class="form-group">
      <!-- <p>{{gist}}</p> -->
      <div class='col-md-4'>
        <!-- {{gistArray}} -->
        <ul class="list-group">
          <p>Created At</p>
        <li class="list-group-item" v-for="g in gistArray">
          <!-- <p>{{g.url}}</p> -->
          <p>{{g.created_at}}</p>
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
      gistArray:['owner']
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
