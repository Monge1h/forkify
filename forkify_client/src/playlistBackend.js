import axios from "axios"

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
/**
 * Save playlistId on MongoDb
 * @param {string} playlistId 
 * @returns {string}
 */
const savePlaylist = async (playlistId, playlistName) => {
	let playlistResponse = await axios.post(`${BACKEND_URL}/playlist`, {
			playlistId: playlistId,
			playlistName: playlistName,
		})
	return playlistResponse
};

/**
 * Get playlistId from MongoDb
 * @param {string} id
 * @returns {string}
 */
const getPlaylistId = async (id) => {
	let playlistResponse = await axios.get(`${BACKEND_URL}/playlist/${id}`)
	return playlistResponse.data
};

export { savePlaylist, getPlaylistId }