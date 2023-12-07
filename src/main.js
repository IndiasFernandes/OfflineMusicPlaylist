// main.js
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import your component files
import Home from './views/Home.vue';
import SearchBar from './components/SearchBar.vue';
import MusicPlayer from './components/MusicPlayer.vue';
import PlaylistPanel from './components/PlaylistPanel.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/search', component: SearchBar },
  { path: '/music-player', component: MusicPlayer },
  { path: '/playlist-panel', component: PlaylistPanel },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');