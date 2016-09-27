import MusixMatch from './lib/musixmatch';

const express = require('express');
const app = express();

app.get('/api/exactSong', function (req, res) {
  const search = {
    track: req.query.track,
    artist: req.query.artist,
    album: req.query.album 
  };

  MusixMatch.searchExactSong(search).then(response => {
    res.send(response);
  });
});

app.get('/api/relatedSongs', function (req, res) {
  const search = {
    track: req.query.track,
    artist: req.query.artist,
    album: req.query.album 
  };

  MusixMatch.searchRelatedSongs(search).then(response => {
    res.send(response);
  });
});

app.get('/api/lyrics', function (req, res) {
  MusixMatch.getLyrics(req.query.track_id).then(response => {
    res.send(response);
  });
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
