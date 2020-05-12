<template>
  <div id="app">
    <router-view />
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      active:""
    }
  },
};
</script>
<style scoped>
  #app {
    max-width: 450px;
    margin: 0 auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
  .h3{
    padding: 0;
    margin: 0;
  }
</style>
