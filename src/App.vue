<template>
  <div id="app">
    <keep-alive include="Characters">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 1rem;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
