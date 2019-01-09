<template>
  <div class="Search">
    <h1>Media Motion</h1>
    <h2>{{ msg }}</h2>
    <div class="selection">
      <input type="radio" id="all" value="" v-model="picked">
        <label for="all">all</label>
        <br>
    </div>
    <div class="selection">
      <input type="radio" class="radio" id="music" value="music" v-model="picked">
        <label for="music">music</label>
        <br>
    </div>
    <div class="selection">
      <input type="radio" class="radio" id="movies" value="movies" v-model="picked">
        <label for="movies">movies</label>
        <br>
    </div>
    <div class="selection">
      <input type="radio" class="radio" id="shows" value="shows" v-model="picked">
        <label for="shows">shows</label>
        <br>
    </div>
    <div class="selection">
      <input type="radio" class="radio" id="books" value="books" v-model="picked">
        <label for="books">books</label>
        <br>
    </div>
    <div class="selection">
      <input type="radio" class="radio" id="games" value="games" v-model="picked">
        <label for="games">games</label>
        <br>
    </div>
    <div>
      <input type="text" class="search-bar" v-model="inputVal">
    </div>
    <div><button class="search" v-on:click="getRecommendations()">Find Recommendations</button></div>
    <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <div 
      v-else
      v-for="result in info"
    >
      <div v-if="result.Type == music">
        <i class="fas fa-music"></i>
      </div>
      <div v-if="result.Type == movie">
        <i class="fas fa-film"></i>
      </div>
      <div v-if="result.Type == show">
        <i class="fas fa-tv"></i>
      </div>
      <div v-if="result.Type == book">
        <i class="fas fa-book"></i>
      </div>
      <div v-if="result.Type == game">
        <i class="fas fa-gamepad"></i>
      </div>
      <h2>{{ result.Name }}</h2><a :href="result.wUrl"> Wikipedia </a>
      <div v-if="result.yUrl">
      <iframe v-bind:src="result.yUrl" width="560" height="315" frameborder="0" allowfullscreen></iframe>
      </div>
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
      picked: "",
      music: "music",
      movie: "movie",
      show: "show",
      book: "book",
      game: "game",
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

div.selection {
  display: inline-block;
  padding: 10px;
}

input.search-bar {
  margin: 25px;
  width: 500px;
  height: 25px;
  border-radius: 30px;
  border-color: none;
  text-align: center;
  font-family: 'Thasadith', sans-serif;
  font-size: 18px;
}

input.search-bar:focus {
  outline: none;
}

button.search {
  margin-bottom: 25px;
}
</style>
