<template>
  <div class="search-input">
    <input type="search" class="input" :placeholder="placeholder" v-model="value" data-test="input" @keyup.enter="onClick">
    <button type="button" class="button" data-test="button" @click="onClick">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      value: ''
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'Search'
    }
  },
  methods: {
    onClick() {
      this.$emit('search', this.value)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.search-input {
  display: flex;
  flex-direction: column;

  @media screen and (min-width: $breakpoint-sm) {
    flex-direction: row;
  }
}
.input {
  flex-grow: 1;
  height: 45px;
  border: none;
  padding: 0 1rem;
  font-size: 1rem;
}
.button {
  margin-top: 0.75rem;

  @media screen and (min-width: $breakpoint-sm) {
    margin-top: 0;
    margin-left: 1rem;
  }
}
</style>
