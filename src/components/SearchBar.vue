<template>
  <div class="search-bar">
    <input type="text" class="form-control" placeholder="Search for music...">
    <button class="btn btn-primary">Search</button>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    async search() {
      const response = await axios.get(`/api/spotify/search?q=${this.searchQuery}`);
      console.log(response.data); // Handle the results
    }
  }
};
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
