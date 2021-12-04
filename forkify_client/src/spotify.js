import axios from "axios";

// Map for localStorage keys
const LOCALSTORAGE_KEYS = {
	accessToken: "spotify_access_token",
	refreshToken: "spotify_refresh_token",
	expireTime: "spotify_token_expire_time",
	timestamp: "spotify_token_timestamp",
};

// Map to retrieve localStorage values
const LOCALSTORAGE_VALUES = {
	accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
	refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
	expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
	timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
};

/**
 * Checks if the amount of time that has elapsed between the timestamp in localStorage
 * and now is greater than the expiration time of 3600 seconds (1 hour).
 * @returns {boolean} Whether or not the access token in localStorage has expired
 */
const hasTokenExpired = () => {
	const { accessToken, timestamp, expireTime } = LOCALSTORAGE_VALUES;
	if (!accessToken || !timestamp) {
		return false;
	}
	const millisecondsElapsed = Date.now() - Number(timestamp);
	return millisecondsElapsed / 1000 > Number(expireTime);
};

/**
 * Use the refresh token in localStorage to hit the /refresh_token endpoint
 * in our Node app, then update values in localStorage with data from response.
 * @returns {void}
 */
const refreshToken = async () => {
	try {
		// Logout if there's no refresh token stored or we've managed to get into a reload infinite loop
		if (
			!LOCALSTORAGE_VALUES.refreshToken ||
			LOCALSTORAGE_VALUES.refreshToken === "undefined" ||
			Date.now() - Number(LOCALSTORAGE_VALUES.timestamp) / 1000 < 1000
		) {
			console.error("No refresh token available");
			logout();
		}

		// Use `/refresh_token` endpoint from our Node app
		const { data } = await axios.get(
			`/refresh_token?refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`
		);

		// Update localStorage values
		window.localStorage.setItem(
			LOCALSTORAGE_KEYS.accessToken,
			data.access_token
		);
		window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());

		// Reload the page for localStorage updates to be reflected
		window.location.reload();
	} catch (e) {
		console.error(e);
	}
};

/**
 * Clear out all localStorage items we've set and reload the page
 * @returns {void}
 */
const logout = () => {
	// Clear all localStorage items
	for (const property in LOCALSTORAGE_KEYS) {
		window.localStorage.removeItem(LOCALSTORAGE_KEYS[property]);
	}
	// Navigate to homepage
	window.location = window.location.origin;
};

/**
 * Handles logic for retrieving the Spotify access token from localStorage
 * or URL query params
 * @returns {string} A Spotify access token
 */
const getAccessToken = () => {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const queryParams = {
		[LOCALSTORAGE_KEYS.accessToken]: urlParams.get("access_token"),
		[LOCALSTORAGE_KEYS.refreshToken]: urlParams.get("refresh_token"),
		[LOCALSTORAGE_KEYS.expireTime]: urlParams.get("expires_in"),
	};
	const hasError = urlParams.get("error");

	// If there's an error OR the token in localStorage has expired, refresh the token
	if (
		hasError ||
		hasTokenExpired() ||
		LOCALSTORAGE_VALUES.accessToken === "undefined"
	) {
		refreshToken();
	}

	// If there is a valid access token in localStorage, use that
	if (
		LOCALSTORAGE_VALUES.accessToken &&
		LOCALSTORAGE_VALUES.accessToken !== "undefined"
	) {
		return LOCALSTORAGE_VALUES.accessToken;
	}

	// If there is a token in the URL query params, user is logging in for the first time
	if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
		// Store the query params in localStorage
		for (const property in queryParams) {
			window.localStorage.setItem(property, queryParams[property]);
		}
		// Set timestamp
		window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now());
		// Return access token from query params
		return queryParams[LOCALSTORAGE_KEYS.accessToken];
	}

	// We should never get here!
	return false;
};

/**
 * Axios global request headers
 * https://github.com/axios/axios#global-axios-defaults
 */
axios.defaults.baseURL = "https://api.spotify.com/v1";
axios.defaults.headers["Authorization"] = `Bearer ${getAccessToken()}`;
axios.defaults.headers["Content-Type"] = "application/json";

/**
 * Use user data to create a collaborative playlist
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/create-playlist
 * @param {string} userId
 * @param {string} playlistName
 * @returns {Promise}
 */
const createPlaylist = (userId, playlistName) => {
	/**
	 * To create a collaborative playlist we need to set "public" to "false"
	 * and collaborative to "true"
	 */
	// retornar el id de la playlist creada
	return axios
		.post(`/user/${userId}/playlists`, {
			name: playlistName,
			public: false,
			collaborative: true,
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};

/**
 * Get a User's Top Tracks
 * https://developer.spotify.com/documentation/web-api/reference/#endpoint-get-users-top-artists-and-tracks
 * @param {string} time_range - 'short_term' (last 4 weeks) 'medium_term' (last 6 months) or 'long_term' (calculated from several years of data and including all new data as it becomes available). Defaults to 'short_term'
 * @param {number} limit - The maximum number of items to return, Minimun = 1, Maximum = 50
 * @returns {Promise}
 */
const getTopTracks = (time_range = "short_term", limit) => {
	return axios.get(`/me/top/tracks?time_range=${time_range}?limit=${limit}`);
};

/**
 * Add Top Tracks to playlist
 * https://developer.spotify.com/documentation/web-api/reference/#/operations/add-tracks-to-playlist
 * @param {string} playlistId - The Spotify ID of the playlist.
 * @param {Object[]} uris - A JSON array of the Spotify URIs to add. For example:
 * @returns {Promise}
 */
const addTopTracksToPlaylist = (playlistId, uris) => {
	return axios
		.post(`/playlists/${playlistId}/tracks`, {
			uris: uris,
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};

const getCurrentUserData = () => axios.get('/me')

export {
	logout,
	getAccessToken,
	createPlaylist,
	getTopTracks,
	addTopTracksToPlaylist,
	getCurrentUserData
};
