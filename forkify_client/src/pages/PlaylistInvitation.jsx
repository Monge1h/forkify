import { Link, Button, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams, Link as reactRouterLink } from "react-router-dom";
import { getPlaylistId } from "../playlistBackend";
import { getAccessToken, getCurrentUserData } from "../spotify";


function PlaylistInvitation({ setPlaylistId, token, setToken,setUserData }) {
	const { playlistIdMongo } = useParams();
	useEffect(() => {
		setToken(getAccessToken)
		const fetchData = async() =>{
			try {
				const { data } = await getCurrentUserData()
				setUserData(data)	
				const playlistId = await getPlaylistId(playlistIdMongo)
				console.log("playlist id: ")
				console.log(playlistId)
				setPlaylistId(playlistId)

			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	return (
		<div>
			te han invitado a poner canciones en esta playlist
			{!token ? (
				<Link mt={90} href="http://localhost:8888/login">
					<Button>Login</Button>
				</Link>
			) : (
				<Link as={reactRouterLink} mt={90} to="/number-of-songs">
					<Button>Continuar</Button>
				</Link>
			)}
			xd
		</div>
	)
}

export { PlaylistInvitation }
