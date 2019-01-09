<template>
  <div id="app">
    <Root/>
  </div>
</template>

<script>
import Root from './components/Root'

export default {
  name: 'App',
  components: {
    Root
  }
}
</script>

<style>
#app {
  font-family: 'Karla', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
    background-image: url('./assets/bimage.jpg');
    background-size: cover; 
    background-position: top;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
</style>
