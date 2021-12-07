import axios from "axios"

/**
 * Save playlistId on MongoDb
 * @param {string} playlistId 
 * @returns {string}
 */
const savePlaylist = async (playlistId) => {
	let playlistResponse = await axios.post(`http://localhost:8888/playlist`, {
			playlistId: playlistId,
		})
	return playlistResponse
};

/**
 * Get playlistId from MongoDb
 * @param {string} id
 * @returns {string}
 */
const getPlaylistId = async (id) => {
	let playlistResponse = await axios.get(`http://localhost:8888/playlist/${id}`)
	return playlistResponse
};

export { savePlaylist, getPlaylistId }