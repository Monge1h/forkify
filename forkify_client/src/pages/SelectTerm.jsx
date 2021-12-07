/**
 * todo
 * [] cuando se le da click al boton, cambiarlo a un estado activo, lo que se me ocurre es tener mapeado los 3 botones
 * 			y cuando se seleccione uno limpiar el estado de los otros para que solo este uno activo
 * [] ponerle a cada boton un term de spotify = short_term | medium_term | long_term
 * [] luego con esto seleccionar las canciones para usar el endpoint 
 * @returns 
 */

import { Button, ButtonGroup } from "@chakra-ui/button";
import { useNavigate } from "react-router";
import { savePlaylist } from "../playlistBackend";
import { createPlaylist, getTopTracks, addTopTracksToPlaylist } from "../spotify";

function SelectTerm({spotifyTerm, setSpotifyTerm, playlistName, userId, numberOfSongs,setPlaylistIdMongo}) {
	let navigate = useNavigate()
	const handleSubmit = async (e) =>{
		e.preventDefault()
		let playListId = await createPlaylist(userId,playlistName)
		console.log(playListId)
		let topTracks = await getTopTracks(spotifyTerm, numberOfSongs)
		let urisTopTracks = topTracks.data.items.map(x=>x.uri)
        let addTracksToPlaylist = await addTopTracksToPlaylist(playListId.data.id, urisTopTracks)
		let savePlaylistMongo = await savePlaylist(playListId.data.id)
		setPlaylistIdMongo(savePlaylistMongo.data._id)
		navigate("/playlist-link")
	}
	return (
		<div>
			<ButtonGroup>
				<Button onClick={() => setSpotifyTerm("short_term")}>Month</Button>
				<Button onClick={() => setSpotifyTerm("medium_term")}>3 Months</Button>
				<Button onClick={() => setSpotifyTerm("long_term")}>6 Months</Button>
			</ButtonGroup>
			<form onSubmit={handleSubmit}>
				<Button type="submit">Next</Button>
			</form>
		</div>
	)
}

export { SelectTerm }
