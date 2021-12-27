import { useState, useEffect } from "react";
import { Button, Heading, Link, VStack } from "@chakra-ui/react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import { getAccessToken, getCurrentUserData } from "./spotify";
import { CreatePlaylist, Home, NumberOfSongs, SelectTerm, PlaylistLink, PlaylistInvitation, PlaylistEnd } from "./pages";

function App() {
	const [token, setToken] = useState(null);
	let [playlistName, setPlaylistName] = useState({});
	let [userData, setUserData] = useState({});
	let [spotifyTerm, setSpotifyTerm] = useState(null)
	let [numberOfSongs, setNumberOfSongs] = useState(null)
	let [playlistIdMongo, setPlaylistIdMongo] = useState(null)
	let [playlistId, setPlaylistId] = useState("");
	let [invitation, setInvitation] = useState(false);
	useEffect(() => {
		setToken(getAccessToken);
		const fetchData = async() =>{
		try {
			const { data } = await getCurrentUserData()
			setUserData(data)

			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, []);

	return (
		<VStack>
			<Router>
				<Routes>
					<Route path="/" element={<Home 
						token={token} 
						setToken={setToken}
						invitation={invitation}/>} />
					<Route
						path="/create-playlist"
						element={
							<CreatePlaylist
								setPlaylistName={setPlaylistName}
							/>
						}
					/>
					<Route
						path="/number-of-songs"
						element={
							<NumberOfSongs
								setNumberOfSongs={setNumberOfSongs}
								numberOfSongs={numberOfSongs}
							/>
						}
					/>
					<Route
						path="/select-term"
						element={
							<SelectTerm
								spotifyTerm={spotifyTerm}
								setSpotifyTerm={setSpotifyTerm}
								playlistName={playlistName}
								userId={userData.id}
								numberOfSongs={numberOfSongs}
								setPlaylistIdMongo={setPlaylistIdMongo}
								playlistId={playlistId}
							/>
						}
					/>
					<Route
						path="/playlist-link"
						element={
							<PlaylistLink
								playlistIdMongo={playlistIdMongo}
								playlistName={playlistName}
							/>
						}
					/>
					<Route
						path="/playlist-invitation/:playlistIdMongo"
						element={
							<PlaylistInvitation
								setInvitation={setInvitation}
								invitation={invitation}
								setPlaylistId={setPlaylistId}
								setPlaylistIdMongo={setPlaylistIdMongo}
								token={token}
								setToken={setToken}
								setUserData={setUserData}
								setPlaylistName={setPlaylistName}
								playlistName={playlistName}
							/>
						}
					/>
					<Route
						path="/playlist-end"
						element={
							<PlaylistEnd
								playlistName={playlistName}
							/>
						}
					/>
				</Routes>
			</Router>
		</VStack>
	);
}

export default App;
