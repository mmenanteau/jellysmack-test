<template>
  <div class="characters">
    <div class="container">
      <SearchInput placeholder="Enter a name (ex: rick)" @search="onSearch" />
      <div v-if="filteredCharacters && filteredCharacters.length > 0" class="characters-results">
        <ul class="characters-list">
          <li v-for="(character, index) in filteredCharacters" :key="index" class="character">
            <router-link :to="{ name: 'Character', params: { id: character.id } }" class="character-link">
              <div class="character-image-container">
                <img class="character-image" :src="character.image" alt="" />
              </div>
              <div class="character-name">{{ character.name }}</div>
            </router-link>
          </li>
        </ul>
        <div v-if="nextPage && filteredCharacters.length === characters.length" class="characters-more">
          <button type="button" class="characters-more-button button" @click="fetchCharacters">See more...</button>
        </div>
      </div>
      <div v-else-if="filteredCharacters" class="characters-empty">No characters found.</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchInput from '@/components/SearchInput.vue'
import { getCharacters } from '@/services/character-service'

export default {
  name: 'Characters',
  components: {
    SearchInput
  },
  data() {
    return {
      filteredCharacters: undefined,
      nextPage: 1
    }
  },
  computed: {
    ...mapState(['characters'])
  },
  mounted() {
    this.fetchCharacters()
  },
  methods: {
    async fetchCharacters() {
      const result = await getCharacters(this.nextPage)
      this.$store.commit('updateCharacters', result.characters)
      this.filteredCharacters = this.characters
      this.nextPage = result.nextPage
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
@import '@/styles/variables.scss';

.characters-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0 1rem;
  padding: 0;
  list-style-type: none;

  @media screen and (min-width: $breakpoint-sm) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem 1.25rem;
  }
  @media screen and (min-width: $breakpoint-md) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: $breakpoint-lg) {
    grid-template-columns: repeat(5, 1fr);
  }
}
.character {
  margin-bottom: 1rem;
  padding: 0.75rem;
  background-color: $color-theme-secondary;
}
.character-link {
  color: $color-theme-primary;
  text-decoration: none;
}
.character-image-container {
  overflow: hidden;
  height: 240px;
  border: 1px solid $color-theme-primary;

  @media screen and (min-width: $breakpoint-sm) {
    height: 220px;
  }
}
.character-image {
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }
}
.character-name {
    padding-top: 0.75rem;
    font-weight: bold;
    text-align: center;
}
.characters-more {
  text-align: center;
}
.characters-more-button {
  width: 100%;

  @media screen and (min-width: $breakpoint-sm) {
    width: auto;
    padding: 0 4rem;
  }
}
.characters-empty {
  text-align: center;
}
.search-input {
  margin-bottom: 1.5rem;

  @media screen and (min-width: $breakpoint-sm) {
    margin-bottom: 2.5rem;
  }
}
</style>
