<template>
  <div class="Search">
    <h1>{{ msg }}</h1>
    <input type="radio" id="all" value="" v-model="picked">
      <label for="all">all</label>
      <br>
    <input type="radio" id="music" value="music" v-model="picked">
      <label for="music">music</label>
      <br>
    <input type="radio" id="movies" value="movies" v-model="picked">
      <label for="movies">movies</label>
      <br>
    <input type="radio" id="shows" value="shows" v-model="picked">
      <label for="shows">shows</label>
      <br>
    <input type="radio" id="books" value="books" v-model="picked">
      <label for="books">books</label>
      <br>
    <input type="radio" id="games" value="games" v-model="picked">
      <label for="games">games</label>
      <br>
    <div>
      <input type="text" v-model="inputVal">
    </div>
    <div><button v-on:click="getRecommendations()">submit</button></div>
    <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <div 
      v-else
      v-for="result in info"
    >
      {{ result.Name }}:{{ result.Type }}:{{ result.wUrl }}:{{ result.yUrl }}
    </div>
  </section>
  </div>
</template>

<script>
var axios = require("axios");
export default {
  name: 'Search',
  data () {
    return {
      msg: 'Search For Media Recommendations Here',
      inputVal: '',
      info: null,
      loading: false,
      errored: false,
      picked: null,
    }
  },
  methods: {
    getRecommendations(){
      let input = this.inputVal.replace(/ /g,"+")
      let type = this.picked
      axios
        .get(`https://tastedive.com/api/similar?info=1&k=327710-MediaMot-GQ5SN6GL&q=${input}&type=${type}`)
        .then(response => {
          this.info = response.data.Similar.Results
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
