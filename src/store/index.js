import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    characters: []
  },
  getters: {
    getCharacterById: (state) => (id) => {
      return state.characters.find(character => character.id === id)
    }
  },
  mutations: {
    updateCharacters(state, characters) {
      state.characters.push(...characters)
    }
  }
})
