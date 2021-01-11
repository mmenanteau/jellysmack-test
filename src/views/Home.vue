<template>
  <div class="home">
    <div class="home-container container">
      <img class="home-logo" src="@/assets/logo.png" alt="Rick and Morty" />
      <div class="home-text">X Jellysmack</div>
      <router-link :to="{ name: 'Characters' }" class="home-button button">Go to characters</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-logo {
  display: block;
  max-width: 100%;
  margin: 0 auto;
}
.home-button {
  margin-top: 2.5rem;
}
</style>
