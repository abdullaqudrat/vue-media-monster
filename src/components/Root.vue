<template>
  <div class="Search">
    <h1>{{ title }}</h1>
    <h2>{{ slogan }}</h2>
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
      <input type="text" class="search-bar" placeholder="enter titles, artists, authors here" v-model="inputVal">
    </div>
    <div><button class="search" v-on:click="getRecommendations()">Find Recommendations</button></div>
    <section v-if="errored">
    <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
  </section>

  <section v-else>
    <div v-if="loading">Loading...</div>
    <div class="cards"
      v-else
      v-for="result in info"
    >
      <div class="card">
        <div class="info">
          <div v-if="result.Type == music">
            <span style="font-size: 48px; color: Dodgerblue;">
            <i class="fas fa-music"></i>
            </span>
          </div>
          <div v-if="result.Type == movie">
           <span style="font-size: 48px; color: Red;">
            <i class="fas fa-film"></i>
            </span>
          </div>
          <div v-if="result.Type == show">
            <span style="font-size: 48px; color: Purple;">
            <i class="fas fa-tv"></i>
            </span>
          </div>
          <div v-if="result.Type == book">
            <span style="font-size: 48px; color: Green;">
            <i class="fas fa-book"></i>
            </span>
          </div>
          <div v-if="result.Type == game">
            <span style="font-size: 48px; color: Grey;">
            <i class="fas fa-gamepad"></i>
            </span>
          </div>
          <h2>{{ result.Name }}</h2><a :href="result.wUrl"> Wikipedia </a><h4>{{ result.wTeaser }}</h4>
        </div>
      </div>
      <div class="card">

        <div class="vid">
          <div v-if="result.yUrl">
              <iframe v-bind:src="result.yUrl" width="560" height="315" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
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
      title: "Media Monster",
      slogan: "Get All Your Media Recommendations Here",
      inputVal: "",
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
        .get(`${'https://cors-anywhere.herokuapp.com/'}https://tastedive.com/api/similar?info=1&k=327710-MediaMot-GQ5SN6GL&q=${input}&type=${type}`)
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

h1 {
  font-weight: normal;
  font-size: 66px;
  font-family: 'Monoton', cursive;
  margin-bottom: -10px
}

h2 {
  font-weight: normal;
  font-family: 'Roboto', sans-serif;
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
  padding: 10px;
  border-radius: 15px; 
  background: #42b983;
  text-decoration-style: solid 
}

button.search:focus {
  outline: none;
}

.cards {
  display: grid;
  grid-template-columns: auto auto;

}
.card {
  height: auto;
  width: auto;
  cursor: pointer;
  align-self: center;
}

.info {
  margin: 10px;
  padding: 50px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 30px;
}

.vid {
  margin: 10px;
  padding: 50px;

}
</style>
