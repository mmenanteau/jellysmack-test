<template>
  <article v-if="character" class="character">
    <img class="character-image" :src="character.image" alt="" />
    <h1 class="character-name">{{ character.name }}</h1>
    <div class="character-gender">{{ character.gender }}</div>
    <div class="character-infos">{{ character.species }} ({{ character.status }})</div>
    <div class="character-location">{{ character.location.name }}</div>
  </article>
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
    this.fetchCharacter()
  },
  methods: {
    async fetchCharacter() {
      this.character = await getCharacterById(this.$route.params.id)
    }
  }
}
</script>
