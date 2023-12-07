<template>
  <div class="playlist-panel">
    <h3>Your Playlists</h3>
    <ul class="list-group">
      <li class="list-group-item" v-for="playlist in playlists" :key="playlist.id">
        {{ playlist.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PlaylistPanel',
  data() {
    return {
      playlists: [
        { id: 1, name: 'Chill Vibes' },
        { id: 2, name: 'Workout Mix' },
        // Add more playlists
      ]
    };
  }
};
</script>

<style scoped>
.playlist-display {
  /* Styles for the playlist display */
}
</style>
