const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

const createUserTable = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);`;

const createPlaylistTable = `
CREATE TABLE IF NOT EXISTS playlists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER,
  name TEXT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users (id)
);`;

const createSongsTable = `
CREATE TABLE IF NOT EXISTS songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  artist TEXT,
  duration TEXT,
  source_url TEXT NOT NULL,
  download_url TEXT
);`;

const createPlaylistSongsTable = `
CREATE TABLE IF NOT EXISTS playlist_songs (
  playlist_id INTEGER,
  song_id INTEGER,
  FOREIGN KEY (playlist_id) REFERENCES playlists (id),
  FOREIGN KEY (song_id) REFERENCES songs (id),
  PRIMARY KEY (playlist_id, song_id)
);`;

// Execute the queries to create tables
db.run(createUserTable);
db.run(createPlaylistTable);
db.run(createSongsTable);
db.run(createPlaylistSongsTable);