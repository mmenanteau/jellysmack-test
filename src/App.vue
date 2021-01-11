<template>
  <div id="app">
    <keep-alive include="Characters">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import '@/styles/variables.scss';

* {
  box-sizing: border-box;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 1rem;
  background-color: $color-theme-primary;
  color: $color-theme-secondary;

  @media screen and (min-width: $breakpoint-sm) {
    margin: 1.5rem;
  }
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}
.button {
  cursor: pointer;
  display: inline-block;
  line-height: 39px;
  padding: 0 1rem;
  border: 3px solid $color-theme-secondary;
  background-color: $color-theme-primary;
  color: $color-theme-secondary;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.5s;

  &:hover {
    background-color: $color-theme-secondary;
    color: $color-theme-primary;
  }
}
</style>
