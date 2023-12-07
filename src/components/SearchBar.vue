<template>
  <div class="search-bar">
    <input type="text" class="form-control" placeholder="Search for music...">
    <button class="btn btn-primary">Search</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  // Add script logic if necessary
};
</script>

<style scoped>
.search-bar {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>