<template>
  <div class="search-input">
    <input type="search" class="input" :placeholder="placeholder" v-model="value" data-test="input">
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
$height: 40px;

.input {
  height: $height;
  border: 1px solid grey;
  padding: 0 1rem;
  font-size: 1rem;
}
.button {
  cursor: pointer;
  height: $height;
  margin-top: 0.5rem;
  padding: 0 1rem;
  border: none;
  background-color: black;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;

  @media screen and (min-width: 992px) {
    margin-top: 0;
    margin-left: 1rem;
  }
}
</style>
