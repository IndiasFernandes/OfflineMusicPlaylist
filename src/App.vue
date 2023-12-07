<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchBar />
    <MusicPlayer />
    <PlaylistPanel />
    <LoginRegister />
  </div>
</template>


<script>
import MusicPlayer from './components/MusicPlayer.vue';
import SearchBar from './components/SearchBar.vue';
import PlaylistPanel from './components/PlaylistPanel.vue';
import LoginRegister from './components/LoginRegister.vue';

export default {
  name: 'App',
  components: {
    MusicPlayer,
    SearchBar,
    PlaylistPanel,
    LoginRegister
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


