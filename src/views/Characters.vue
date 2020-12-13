<template>
  <div class="characters">
    <div class="container">
      <SearchInput placeholder="Enter a name (ex: rick)" @search="onSearch" />
      <ul v-if="filteredCharacters && filteredCharacters.length > 0" class="characters-list">
        <li v-for="(character, index) in filteredCharacters" :key="index" class="character" data-test="character">
          <router-link :to="{ name: 'Character', params: { id: character.id } }" class="character-link">
            <img class="character-image" :src="character.image" alt="" data-test="character-image" />
            <div class="character-name" data-test="character-name">{{ character.name }}</div>
          </router-link>
        </li>
      </ul>
      <div v-else-if="filteredCharacters" class="empty" data-test="empty">No characters found.</div>
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/SearchInput.vue'
import { getCharacters } from '@/services/character-service'

export default {
  name: 'Characters',
  components: {
    SearchInput
  },
  data() {
    return {
      characters: undefined,
      filteredCharacters: undefined
    }
  },
  mounted() {
    this.fetchCharacters()
  },
  methods: {
    async fetchCharacters() {
      this.characters = await getCharacters()
      this.filteredCharacters = this.characters
    },
    onSearch(name) {
      this.filteredCharacters = this.characters.filter(character => {
        const inputName = name.replace(/\s+/g, '').toUpperCase()
        const characterName = character.name.replace(/\s+/g, '').toUpperCase()
        return characterName.includes(inputName)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.characters-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 2rem 1rem;
  padding: 0;
  list-style-type: none;
}
.character-image {
  width: 100%;
  margin-bottom: 0.5rem;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
}
.character-link {
  color: black;
  text-decoration: none;
}
.search-input {
  margin-bottom: 2rem;
}
</style>
