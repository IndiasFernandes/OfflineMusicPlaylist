<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">MusicApp</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/search" class="nav-link">Search</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/music-player" class="nav-link">Music Player</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/playlist-panel" class="nav-link">Playlist Panel</router-link>
          </li>
        </ul>
        <!-- Search form -->
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderComponent',
  // Any specific logic for the header
};
</script>

<style scoped>
/* Styles specific to this component go here */
/* Adjust the button display for smaller screens */
@media (max-width: 768px) {
  .navbar-toggler {
    display: block;
  }
}
</style>