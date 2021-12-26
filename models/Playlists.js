const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
	playlistId: String,
	playlistName: String
});

module.exports = mongoose.model('Playlist', PlaylistSchema);