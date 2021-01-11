<template>
  <div v-if="character" class="character">
    <div class="container">
      <article class="character-card">
        <img class="character-image" :src="character.image" alt="" />
        <div class="character-infos">
          <h1 class="character-name">{{ character.name }}</h1>
          <div class="character-status" :class="character.status.toLowerCase()">{{ character.status }}</div>
          <div class="character-info">
            <h2 class="character-info-title">Species</h2>
            <div class="character-species">{{ character.species }}</div>
          </div>
          <div class="character-info">
            <h2 class="character-info-title">Gender</h2>
            <div class="character-gender">{{ character.gender }}</div>
          </div>
          <div class="character-info">
            <h2 class="character-info-title">Origin</h2>
            <div class="character-origin">{{ character.origin.name }}</div>
          </div>
          <div class="character-info">
            <h2 class="character-info-title">Location</h2>
            <div class="character-location">{{ character.location.name }}</div>
          </div>
        </div>
      </article>
      <div class="character-link">
        <router-link :to="{ name: 'Characters' }" class="button">Return to characters</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getCharacterById } from '@/services/character-service'

export default {
  name: 'Character',
  data() {
    return {
      character: undefined
    }
  },
  mounted() {
    this.getCharacter()
  },
  methods: {
    async getCharacter() {
      const id = this.$route.params.id
      this.character = this.$store.getters.getCharacterById(id)
      if (!this.character) {
        this.character = await getCharacterById(id)
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.character-card {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: $color-theme-secondary;
  color: $color-theme-primary;

  @media screen and (min-width: $breakpoint-sm) {
    flex-direction: row;
  }
}
.character-image {
  object-fit: cover;
  margin-bottom: 1rem;
  border: 1px solid $color-theme-primary;

  @media screen and (min-width: $breakpoint-sm) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
}
.character-info {
  margin-bottom: 1rem;
}
.character-info-title {
  margin: 0 0 0.25rem;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: bold;
  color: $color-theme-tertiary;
  letter-spacing: 1px;
}
.character-name {
  margin: 0;
  font-size: 2rem;
}
.character-status {
  margin-bottom: 1.5rem;
  text-transform: capitalize;
  &:before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    margin-right: 0.5rem;
    border-radius: 50%;
  }
  &.alive:before {
    background-color: $color-status-alive;
  }
  &.dead:before {
    background-color: $color-status-dead;
  }
  &.unknown:before {
    background-color: $color-status-unknown;
  }
}
.character-link {
  margin-top: 1.5rem;
  text-align: center;
}
</style>
